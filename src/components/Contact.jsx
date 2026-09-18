import './Contact.css';
import { profile } from '../data/profile';

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6 12 13 2 6" />
  </svg>
);

const socials = [
  {
    name: 'GitHub',
    label: '깃허브',
    href: profile.socials.github,
    icon: <GitHubIcon />,
  },
  {
    name: 'LinkedIn',
    label: '링크드인',
    href: profile.socials.linkedin,
    icon: <LinkedInIcon />,
  },
];

const Contact = () => (
  <section
    id="contact"
    className="section section--soft"
    aria-labelledby="contact-title"
  >
    <div className="container contact">
      <div className="section-head" data-reveal>
        <span className="eyebrow">연락처</span>
        <h2 className="section-title" id="contact-title">
          언제든 편하게 연락 주세요
        </h2>
        <p className="section-desc">
          프로젝트 제안이나 궁금한 점이 있다면 이메일로 가장 빠르게
          답장드립니다. 소셜 채널로의 메시지도 언제든 환영합니다.
        </p>
      </div>

      <div className="contact__card" data-reveal>
        <a
          href={`mailto:${profile.email}`}
          className="contact__email"
          title="예시 이메일입니다 — 실제 이메일로 바꿔주세요"
        >
          <span className="contact__email-icon">
            <MailIcon />
          </span>
          <span className="contact__email-text">
            <span className="contact__email-label">이메일 주소</span>
            <span className="contact__email-value ph">{profile.email}</span>
          </span>
        </a>

        <div className="contact__socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="contact__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} 프로필로 이동`}
              title={`예시 링크입니다 — 실제 ${social.label} 주소로 바꿔주세요`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="contact__note">
          위 연락처 정보는 모두 예시입니다. 실제 정보로 바꿔서 사용해 주세요.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
