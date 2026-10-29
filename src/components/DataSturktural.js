import React from "react";
import "../styles/Struktural.css";

const INTI = [
  { role: "Ketua", name: "Muhammad Zumbri" },
  { role: "Wakil Ketua", name: "Akhmad Dzikra Riyadi" },
  { role: "Sekretaris", name: "Mustafa Kamal" },
  { role: "Bendahara", name: "Abu Bakar" },
];

const SEKSI = [
  {
    title: "Humas",
    names: ["Muhammad Fazril", "Muhammad Rizal", "Muhammad Aldi Syahputra"],
  },
  {
    title: "KorLap",
    names: ["Rahman", "Muhammad Alpian Nor"],
  },
  {
    title: "Kesehatan",
    names: ["Amaluddin Siagian", "Muhammad Ansyari", "Muhammad Donny Septian"],
  },
  {
    title: "Pemeliharaan",
    names: ["Ahmad Rifai", "Muhammad Khafi", "Muhammad Riswan"],
  },
  {
    title: "Dokumentasi",
    names: ["Muhammad Wahyuni", "Muhammad Daud", "Muhammad Aldi"],
  },
];

const StrukturalData = () => {
  return (
    <section id="struktural" className="struktural section">
      <p className="section-label">Organisasi</p>
      <h2 className="section-title">Struktur BARDES</h2>
      <p className="section-lead struktural-lead">
        Hierarki pengurus inti dan bidang kerja relawan.
      </p>

      <div className="struk-inti">
        {INTI.map((item) => (
          <div key={item.role} className="struk-person">
            <span className="struk-role">{item.role}</span>
            <strong className="struk-name">{item.name}</strong>
          </div>
        ))}
      </div>

      <div className="struk-seksi">
        {SEKSI.map((group) => (
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
