import './Hero.css';
import { profile } from '../data/profile';

const Hero = () => (
  <section id="home" className="hero" aria-label="Introduction">
    <div className="hero__bg" aria-hidden="true">
      <span className="hero__blob hero__blob--1" />
      <span className="hero__blob hero__blob--2" />
    </div>

    <div className="container hero__inner">
      {/* ── Text side ─────────────────────────────────────────────────── */}
      <div className="hero__text" data-reveal>
        <span className="hero__status">
          <span className="hero__status-dot" />
          {profile.availability}
        </span>

        <p className="hero__greeting">Hi, I&rsquo;m</p>
        <h1 className="hero__name">
          <span className="ph" title="Placeholder — set your name in src/data/profile.js">
            {profile.name}
          </span>
        </h1>
        <h2 className="hero__role">
          <span
            className="ph"
            title="Placeholder — set your role in src/data/profile.js"
          >
            {profile.role}
          </span>
        </h2>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="hero__meta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span
            className="ph"
            title="Placeholder — set your location in src/data/profile.js"
          >
            {profile.location}
          </span>
        </div>
      </div>

      {/* ── Profile image placeholder ─────────────────────────────────── */}
      <div className="hero__visual" data-reveal style={{ transitionDelay: '0.15s' }}>
        <div className="hero__portrait">
          <span
            className="hero__portrait-slot"
            title="Placeholder — drop your photo into src/assets and import it here (see README)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.34 0-10 1.67-10 5v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2c0-3.33-6.66-5-10-5z" />
            </svg>
          </span>
          <span className="hero__portrait-note">Your photo here</span>
        </div>

        <span className="hero__float hero__float--1" aria-hidden="true">
          ⚛️ React
        </span>
        <span className="hero__float hero__float--2" aria-hidden="true">
          🚀 Building things
        </span>
      </div>
    </div>

    <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </a>
  </section>
);

export default Hero;
