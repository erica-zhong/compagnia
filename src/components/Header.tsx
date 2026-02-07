import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/69586da7d6ff99271b20b83e/6f036fff-8eae-47ac-b330-68f2e21306b1/Compagnia+Logo+%285%29.png" 
              alt="Compagnia" 
              className="logo"
            />
          </Link>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li className="nav-item dropdown">
              <Link to="/about" className="dropdown-trigger" onClick={closeMenu}>About</Link>
              <div className="dropdown-content">
                <Link to="/director" onClick={closeMenu}>Director</Link>
              </div>
            </li>
            <li className="nav-item"><Link to="/events" onClick={closeMenu}>Events</Link></li>
            <li className="nav-item"><Link to="/musicians" onClick={closeMenu}>Musicians</Link></li>
            <li className="nav-item"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li className="nav-item"><a href="https://fundraising.fracturedatlas.org/compagnia" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Donate</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
