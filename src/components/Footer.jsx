import './Footer.css';
import { profile } from '../data/profile';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {year}{' '}
          <span
            className="ph"
            title="Placeholder — set your name in src/data/profile.js"
          >
            {profile.name}
          </span>
          . All rights reserved.
        </p>
        <a href="#home" className="footer__top">
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
