import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroImg.css';
import BardesFr from '../assets/image/bardesfr.jpg';

const HeroImg = () => {
  return (
    <section className="hero">
      <img className="hero-media" src={BardesFr} alt="" />
      <div className="hero-shade" aria-hidden />
      <div className="hero-content">
        <p className="hero-brand anim-rise">BARDES</p>
        <h1 className="hero-title anim-rise-delay">
          Siaga melindungi desa
        </h1>
        <p className="hero-lead anim-rise-late">
          Barisan Relawan Desa siap bertindak cepat menghadapi ancaman kebakaran.
        </p>
        <div className="hero-actions anim-rise-late">
          <Link to="/anggota" className="btn">
            Lihat Anggota
          </Link>
          <Link to="/dokumentasi" className="btn btn-ghost">
            Dokumentasi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
