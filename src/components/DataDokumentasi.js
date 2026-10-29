import React from "react";
import "../styles/DataDokumentasi.css";
import IsiDokumentasi from "./IsiDokumentasi";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries, urlFor } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const DataDokumentasi = () => {
  const { data, loading, error } = useSanityQuery(queries.dokumentasi, []);

  if (loading) {
    return <ContentLoading label="Memuat dokumentasi…" />;
  }

  if (error) {
    return <ContentError error={error} />;
  }

  if (!data?.length) {
    return (
      <ContentLoading label="Belum ada dokumentasi. Tambahkan lewat Sanity Studio." />
    );
  }

  return (
    <section className="dokumentasi-main">
      <div className="dokumentasi-container">
        {data.map((item) => (
          <IsiDokumentasi
            key={item._id}
            imgsrc={urlFor(item.foto)}
            title={item.judul}
            subtitle={item.subtitle}
            deskripsi={item.deskripsi}
          />
        ))}
      </div>
    </section>
  );
};

export default DataDokumentasi;
