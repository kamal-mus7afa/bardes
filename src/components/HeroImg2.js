import React from 'react';
import '../styles/HeroImg2.css';
import Bardes1 from '../assets/image/bardes1.jpg';

const HeroImg2 = () => {
  return (
    <section className="page-hero">
      <img className="page-hero-media" src={Bardes1} alt="" />
      <div className="page-hero-shade" aria-hidden />
      <div className="page-hero-content anim-rise">
        <p className="section-label">Arsip</p>
        <h1 className="page-hero-title">Dokumentasi</h1>
        <p className="page-hero-lead">
          Jejak kegiatan dan pengamanan yang dijalankan relawan BARDES.
        </p>
      </div>
    </section>
  );
};

export default HeroImg2;
