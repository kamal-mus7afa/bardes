import '../styles/Navbar.css';
import Bardes from '../assets/image/bardes.png';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled || open ? ' navbar--solid' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <img src={Bardes} alt="" className="nav-logo" />
          <span className="nav-wordmark">BARDES</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu${open ? ' is-open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/anggota" onClick={closeMenu}>
              Anggota
            </NavLink>
          </li>
          <li>
            <NavLink to="/dokumentasi" onClick={closeMenu}>
              Dokumentasi
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
