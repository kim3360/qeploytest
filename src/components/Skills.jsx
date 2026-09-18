import './Skills.css';
import { skillGroups } from '../data/profile';

const Skills = () => (
  <section id="skills" className="section section--soft" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Skills</span>
        <h2 className="section-title" id="skills-title">
          What I work with
        </h2>
        <p className="section-desc">
          Tools and technologies I reach for day to day, grouped by where they
          fit. Edit the list in <code>src/data/profile.js</code>.
        </p>
      </div>

      <div className="skills__groups">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="skills__group"
            data-reveal
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3 className="skills__group-title">
              <span className="skills__group-dot" aria-hidden="true" />
              {group.title}
            </h3>
            <ul className="skills__chips">
              {group.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
