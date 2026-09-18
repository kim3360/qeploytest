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
        <span className="eyebrow">Projects</span>
        <h2 className="section-title" id="projects-title">
          Selected work
        </h2>
        <p className="section-desc">
          A few sample projects to show the card layout — replace them with
          your own in <code>src/data/profile.js</code>.
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
            {/* Automatic placeholder artwork — swap for a real screenshot
                by adding an <img> here. */}
            <div className="project-card__media" aria-hidden="true">
              <span className="project-card__media-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="project-card__media-note">screenshot placeholder</span>
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
                  title="Placeholder link — set liveUrl in src/data/profile.js"
                >
                  <ArrowIcon />
                  Live demo
                </a>
                <a
                  href={project.sourceUrl}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Placeholder link — set sourceUrl in src/data/profile.js"
                >
                  <CodeIcon />
                  Source code
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
