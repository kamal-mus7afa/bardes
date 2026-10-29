import React from "react";
import "../styles/Struktural.css";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries } from "../lib/sanity";
import { ContentError, ContentLoading } from "./ContentStatus";

const INTI_ORDER = ["Ketua", "Wakil Ketua", "Sekretaris", "Bendahara"];

const SEKSI_ORDER = [
  { key: "Humas", title: "Humas" },
  { key: "Kordinator Lapangan", title: "KorLap" },
  { key: "Kesehatan", title: "Kesehatan" },
  { key: "Pemeliharaan", title: "Pemeliharaan" },
  { key: "Dokumentasi", title: "Dokumentasi" },
];

const StrukturalData = () => {
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
    return <ContentLoading label="Memuat struktur…" />;
  }

  if (errorPengurus || errorAnggota) {
    return <ContentError error={errorPengurus || errorAnggota} />;
  }

  const inti = INTI_ORDER.map((role) => {
    const person = (pengurus || []).find((p) => p.jabatan === role);
    return person ? { role, name: person.nama } : null;
  }).filter(Boolean);

  const seksi = SEKSI_ORDER.map((group) => ({
    title: group.title,
    names: (anggota || [])
      .filter((a) => a.bidang === group.key)
      .map((a) => a.nama),
  })).filter((group) => group.names.length > 0);

  return (
    <section id="struktural" className="struktural section">
      <p className="section-label">Organisasi</p>
      <h2 className="section-title">Struktur BARDES</h2>
      <p className="section-lead struktural-lead">
        Hierarki pengurus inti dan bidang kerja relawan.
      </p>

      <div className="struk-inti">
        {inti.map((item) => (
          <div key={item.role} className="struk-person">
            <span className="struk-role">{item.role}</span>
            <strong className="struk-name">{item.name}</strong>
          </div>
        ))}
      </div>

      <div className="struk-seksi">
        {seksi.map((group) => (
          <div key={group.title} className="struk-group">
            <h3 className="struk-group-title">{group.title}</h3>
            <ul>
              {group.names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrukturalData;
