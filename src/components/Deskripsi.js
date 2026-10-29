import React from 'react';
import '../styles/Deskripsi.css';

const Deskripsi = () => {
  return (
    <section className="about section">
      <p className="section-label">Tentang kami</p>
      <h2 className="section-title">Barisan Relawan Desa</h2>
      <div className="about-grid">
        <p className="about-lead">
          BARDES lahir dari kesadaran masyarakat untuk menjaga desa dari ancaman
          kebakaran — dibentuk oleh pemuda dengan semangat gotong royong.
        </p>
        <p className="about-body">
          Relawan dari berbagai kalangan bersatu menjadi tim yang siap siaga
          menghadapi situasi darurat. Keberadaan BARDES memberi rasa aman bagi
          warga: ada orang yang siap bertindak cepat bila api mengancam rumah
          dan lahan.
        </p>
      </div>
      <div className="about-rule" aria-hidden />
    </section>
  );
};

export default Deskripsi;
