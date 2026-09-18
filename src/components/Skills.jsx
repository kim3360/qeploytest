import './Skills.css';
import { skillGroups } from '../data/profile';

const Skills = () => (
  <section id="skills" className="section section--soft" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-head" data-reveal>
        <span className="eyebrow">기술 스택</span>
        <h2 className="section-title" id="skills-title">
          제가 다루는 기술들
        </h2>
        <p className="section-desc">
          평소 업무에서 자주 사용하는 도구와 기술을 분야별로 정리했습니다.
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
