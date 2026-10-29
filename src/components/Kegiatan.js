import React from "react";
import { Link } from "react-router-dom";
import "../styles/Kegiatan.css";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries, urlFor } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const Kegiatan = () => {
  const { data, loading, error } = useSanityQuery(queries.kegiatanPreview, []);

  if (loading) {
    return <ContentLoading label="Memuat kegiatan…" />;
  }

  if (error) {
    return <ContentError error={error} />;
  }

  return (
    <section className="kegiatan">
      <div className="kegiatan-head section">
        <div>
          <p className="section-label">Kegiatan</p>
          <h2 className="section-title">Di lapangan</h2>
          <p className="section-lead">
            Cuplikan momen latihan, pengamanan, dan aksi relawan BARDES.
          </p>
        </div>
        <Link to="/dokumentasi" className="btn btn-ghost">
          Semua dokumentasi
        </Link>
      </div>

      {data?.length > 0 && (
        <div className="kegiatan-strip">
          {data.map((item) => (
            <figure className="kegiatan-shot" key={item._id}>
              <img
                src={urlFor(item.foto)}
                alt={item.judul || "Kegiatan BARDES"}
              />
            </figure>
          ))}
        </div>
      )}
    </section>
  );
};

export default Kegiatan;
