import { FaInstagram, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-wordmark">BARDES</p>
          <p className="footer-tag">
            Barisan Relawan Desa — siaga melindungi desa dari ancaman kebakaran.
          </p>
        </div>

        <div className="footer-meta">
          <p>Jl. Negara Kandangan, Banjar Baru</p>
          <p>Kalimantan Selatan</p>
          <p className="footer-contact">
            <FaPhone aria-hidden /> 0821 5492 3388
          </p>
          <p className="footer-contact">
            <FaMailBulk aria-hidden /> bardes.firefighter@gmail.com
          </p>
        </div>

        <div className="footer-aside">
          <nav className="footer-links">
            <Link to="/">Beranda</Link>
            <Link to="/anggota">Anggota</Link>
            <Link to="/dokumentasi">Dokumentasi</Link>
          </nav>
          <div className="footer-social">
            <a href="https://wa.me/6282154923388" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BARDES</p>
      </div>
    </footer>
  );
};

export default Footer;
