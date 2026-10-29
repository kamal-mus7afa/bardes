import { FaInstagram, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import useSanityQuery from "../hooks/useSanityQuery";
import { queries } from "../lib/sanity";

const Footer = () => {
  const { data } = useSanityQuery(queries.siteSettings, null);

  const tagline =
    data?.footerTagline ||
    "Barisan Relawan Desa — siaga melindungi desa dari ancaman kebakaran.";
  const alamat1 = data?.alamatBaris1 || "Jl. Negara Kandangan, Banjar Baru";
  const alamat2 = data?.alamatBaris2 || "Kalimantan Selatan";
  const telepon = data?.telepon || "0821 5492 3388";
  const email = data?.email || "bardes.firefighter@gmail.com";
  const wa = data?.whatsappUrl || "https://wa.me/6282154923388";
  const ig = data?.instagramUrl || "https://instagram.com";

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-wordmark">BARDES</p>
          <p className="footer-tag">{tagline}</p>
        </div>

        <div className="footer-meta">
          <p>{alamat1}</p>
          <p>{alamat2}</p>
          <p className="footer-contact">
            <FaPhone aria-hidden /> {telepon}
          </p>
          <p className="footer-contact">
            <FaMailBulk aria-hidden /> {email}
          </p>
        </div>

        <div className="footer-aside">
          <nav className="footer-links">
            <Link to="/">Beranda</Link>
            <Link to="/anggota">Anggota</Link>
            <Link to="/dokumentasi">Dokumentasi</Link>
          </nav>
          <div className="footer-social">
            <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href={ig} target="_blank" rel="noreferrer" aria-label="Instagram">
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
