import './About.css';
import { profile } from '../data/profile';

const About = () => (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className="container">
      <div className="section-head" data-reveal>
        <span className="eyebrow">소개</span>
        <h2 className="section-title" id="about-title">
          저는 이런 개발자입니다
        </h2>
      </div>

      <div className="about__bio" data-reveal>
        {profile.bio.map((paragraph, index) => (
          <p
            key={index}
            className={index === 0 ? 'about__lead' : undefined}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="about__facts" data-reveal>
        {profile.facts.map((fact) => (
          <li key={fact.label} className="about__fact">
            <span className="about__fact-label">{fact.label}</span>
            <span
              className="about__fact-value ph"
              title="예시 정보입니다 — 실제 정보로 바꿔주세요"
            >
              {fact.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
