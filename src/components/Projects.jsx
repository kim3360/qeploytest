import './Projects.css';
import { projects } from '../data/profile';

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const CodeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const Projects = () => (
  <section id="projects" className="section" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-head" data-reveal>
        <span className="eyebrow">프로젝트</span>
        <h2 className="section-title" id="projects-title">
          주요 프로젝트
        </h2>
        <p className="section-desc">
          그동안 작업한 대표 프로젝트를 소개합니다. 카드의 링크에서
          자세한 내용을 확인하실 수 있어요.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card"
            data-reveal
            style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
          >
            {/* 자동 생성된 대체 이미지 — 실제 스크린샷은 <img>로 교체하세요. */}
            <div className="project-card__media" aria-hidden="true">
              <span className="project-card__media-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="project-card__media-note">스크린샷 자리</span>
            </div>

            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-card__links">
                <a
                  href={project.liveUrl}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="예시 링크입니다 — 실제 서비스 주소로 바꿔주세요"
                >
                  <ArrowIcon />
                  라이브 데모
                </a>
                <a
                  href={project.sourceUrl}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="예시 링크입니다 — 실제 저장소 주소로 바꿔주세요"
                >
                  <CodeIcon />
                  소스 코드
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
