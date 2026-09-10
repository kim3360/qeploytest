import { useState, useEffect } from 'react';
import './Footer.css';
import { profile } from '../data/profile';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'GitHub', href: profile.socials.github },
    { label: 'LinkedIn', href: profile.socials.linkedin },
    { label: 'Twitter', href: profile.socials.twitter },
    { label: 'Dribbble', href: profile.socials.dribbble },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              Portfolio
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p>
              Building digital experiences with passion and precision.
              Let's create something amazing together.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <ul>
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Social</h4>
              <ul>
                {footerLinks.social.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p>Made with ❤️ and lots of ☕</p>
        </div>
      </div>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
