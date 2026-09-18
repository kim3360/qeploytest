import { useEffect, useState } from 'react';
import './Navbar.css';
import { profile } from '../data/profile';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/** Two-letter monogram derived from the name (e.g. "Your Name" → "YN"). */
const initials = profile.name
  .split(/\s+/)
  .map((word) => word[0])
  .filter(Boolean)
  .slice(0, 2)
  .join('')
  .toUpperCase();

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Highlight the link of the section currently in view
      const probe = window.scrollY + 150;
      let current = 'home';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on Escape, or when resizing up to desktop width
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth > 768 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <span className="nav__monogram" aria-hidden="true">
            {initials}
          </span>
          <span className="nav__logo-name">{profile.name}</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? 'nav__link--active' : ''}`}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </a>
        </nav>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
