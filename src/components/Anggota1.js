import React from "react";
import "../styles/Anggota.css";
import CardAnggota from "./CardAnggota";
import DataAnggota from "./DataAnggota";
import CardKetua from "./CardKetua";
import DataPilar from "./DataPilar";

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
  const ketua = DataPilar.find((p) => p.jabatan === "Ketua");
  const pengurusLain = INTI_ORDER.map((jabatan) =>
    DataPilar.find((p) => p.jabatan === jabatan)
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
              img={ketua.img}
              name={ketua.name}
              jabatan={ketua.jabatan}
              featured
            />
          </div>
        )}

        <div className="pilar-row">
          {pengurusLain.map((val) => (
            <CardKetua
              key={val.jabatan}
              img={val.img}
              name={val.name}
              jabatan={val.jabatan}
            />
          ))}
        </div>
      </section>

      {BIDANG_ORDER.map((jabatan) => {
        const members = DataAnggota.filter((p) => p.jabatan === jabatan);
        if (members.length === 0) return null;

        return (
          <section key={jabatan} className="ang-section">
            <h2 className="ang-section-title">{BIDANG_LABEL[jabatan]}</h2>
            <div className="anggota-container">
              {members.map((val) => (
                <CardAnggota
                  key={val.title}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  ketua={val.jabatan}
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
