import React from 'react';
import '../styles/DataDokumentasi.css';
import DataDokument from './DokumenData';
import IsiDokumentasi from './IsiDokumentasi';

const DataDokumentasi = () => {
  return (
    <section className="dokumentasi-main">
      <div className="dokumentasi-container">
        {DataDokument.map((data) => (
          <IsiDokumentasi
            key={data.title}
            imgsrc={data.imgsrc}
            title={data.title}
            subtitle={data.subtitle}
            deskripsi={data.deskripsi}
          />
        ))}
      </div>
    </section>
  );
};

export default DataDokumentasi;
