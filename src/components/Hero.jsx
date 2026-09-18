import './Hero.css';
import { profile } from '../data/profile';

const Hero = () => (
  <section id="home" className="hero" aria-label="자기소개">
    <div className="hero__bg" aria-hidden="true">
      <span className="hero__blob hero__blob--1" />
      <span className="hero__blob hero__blob--2" />
    </div>

    <div className="container hero__inner">
      {/* ── 텍스트 영역 ───────────────────────────────────────────────── */}
      <div className="hero__text" data-reveal>
        <span className="hero__status">
          <span className="hero__status-dot" />
          {profile.availability}
        </span>

        <p className="hero__greeting">안녕하세요,</p>
        <h1 className="hero__name">
          <span className="ph" title="예시 이름입니다 — 실제 이름으로 바꿔주세요">
            {profile.name}
          </span>
        </h1>
        <h2 className="hero__role">
          <span className="ph" title="예시 직무입니다 — 실제 직무로 바꿔주세요">
            {profile.role}
          </span>
        </h2>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            프로젝트 보기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            연락하기
          </a>
        </div>

        <div className="hero__meta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="ph" title="예시 지역입니다 — 실제 지역으로 바꿔주세요">
            {profile.location}
          </span>
        </div>
      </div>

      {/* ── 프로필 사진 대체 영역 ─────────────────────────────────────── */}
      <div className="hero__visual" data-reveal style={{ transitionDelay: '0.15s' }}>
        <div className="hero__portrait">
          <span
            className="hero__portrait-slot"
            title="예시 이미지입니다 — 본인 사진으로 바꿔보세요"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.34 0-10 1.67-10 5v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2c0-3.33-6.66-5-10-5z" />
            </svg>
          </span>
          <span className="hero__portrait-note">사진을 넣어주세요</span>
        </div>

        <span className="hero__float hero__float--1" aria-hidden="true">
          ⚛️ React
        </span>
        <span className="hero__float hero__float--2" aria-hidden="true">
          🚀 만드는 것을 좋아합니다
        </span>
      </div>
    </div>

    <a href="#about" className="hero__scroll" aria-label="소개 섹션으로 이동">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </a>
  </section>
);

export default Hero;
