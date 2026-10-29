import React from "react";
import '../styles/DataDokumentasi.css';

const IsiDokumentasi = ({ imgsrc, title, subtitle, deskripsi }) => {
  return (
    <article className="dok-item">
      <div className="dok-media">
        <img src={imgsrc} alt={title} />
      </div>
      <div className="dok-copy">
        <h2 className="dok-title">{title}</h2>
        <p className="dok-subtitle">{subtitle}</p>
        <p className="dok-desc">{deskripsi}</p>
      </div>
    </article>
  );
};

export default IsiDokumentasi;
