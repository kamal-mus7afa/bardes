import React from "react";
import "../styles/Anggota.css";
import CardAnggota from "./CardAnggota";
import CardKetua from "./CardKetua";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries, urlFor } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const BIDANG_ORDER = [
  "Humas",
  "Kordinator Lapangan",
  "Kesehatan",
  "Pemeliharaan",
  "Dokumentasi",
];

const BIDANG_LABEL = {
  Humas: "Humas",
  "Kordinator Lapangan": "Koordinator Lapangan",
  Kesehatan: "Kesehatan",
  Pemeliharaan: "Pemeliharaan",
  Dokumentasi: "Dokumentasi",
};

const INTI_ORDER = ["Wakil Ketua", "Sekretaris", "Bendahara"];

const Anggota1 = () => {
  const {
    data: pengurus,
    loading: loadingPengurus,
    error: errorPengurus,
  } = useSanityQuery(queries.pengurus, []);
  const {
    data: anggota,
    loading: loadingAnggota,
    error: errorAnggota,
  } = useSanityQuery(queries.anggota, []);

  if (loadingPengurus || loadingAnggota) {
    return <ContentLoading label="Memuat anggota…" />;
  }

  if (errorPengurus || errorAnggota) {
    return <ContentError error={errorPengurus || errorAnggota} />;
  }

  const ketua = (pengurus || []).find((p) => p.jabatan === "Ketua");
  const pengurusLain = INTI_ORDER.map((jabatan) =>
    (pengurus || []).find((p) => p.jabatan === jabatan)
  ).filter(Boolean);

  return (
    <div className="a-container">
      <header className="ang-header">
        <p className="section-label">Tim</p>
        <h1 className="ang-heading">Anggota BARDES</h1>
        <p className="ang-subheading">
          Pengurus inti dan relawan di setiap bidang kerja.
        </p>
      </header>

      <section className="ang-section ang-section--inti">
        <h2 className="ang-section-title">Pengurus Inti</h2>

        {ketua && (
          <div className="pilar-featured">
            <CardKetua
              img={urlFor(ketua.foto)}
              name={ketua.nama}
              jabatan={ketua.jabatan}
              featured
            />
          </div>
        )}

        <div className="pilar-row">
          {pengurusLain.map((val) => (
            <CardKetua
              key={val._id}
              img={urlFor(val.foto)}
              name={val.nama}
              jabatan={val.jabatan}
            />
          ))}
        </div>
      </section>

      {BIDANG_ORDER.map((bidang) => {
        const members = (anggota || []).filter((p) => p.bidang === bidang);
        if (members.length === 0) return null;

        return (
          <section key={bidang} className="ang-section">
            <h2 className="ang-section-title">{BIDANG_LABEL[bidang]}</h2>
            <div className="anggota-container">
              {members.map((val) => (
                <CardAnggota
                  key={val._id}
                  imgsrc={urlFor(val.foto)}
                  title={val.nama}
                  ketua={val.bidang}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Anggota1;
