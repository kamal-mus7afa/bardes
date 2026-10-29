import React from 'react';
import { Link } from 'react-router-dom';
import Bardes1 from '../assets/image/bardes1.jpg';
import Bardes2 from '../assets/image/bardes2.jpg';
import '../styles/Kegiatan.css';

const Kegiatan = () => {
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

      <div className="kegiatan-strip">
        <figure className="kegiatan-shot">
          <img src={Bardes1} alt="Kegiatan BARDES" />
        </figure>
        <figure className="kegiatan-shot">
          <img src={Bardes2} alt="Kegiatan BARDES" />
        </figure>
      </div>
    </section>
  );
};

export default Kegiatan;
