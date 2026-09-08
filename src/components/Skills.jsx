import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 88 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'Database',
      icon: '💾',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 75 },
        { name: 'Prisma', level: 78 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 72 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 75 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">Skills & Expertise</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-description">
            I'm constantly learning and expanding my skill set. Here are the technologies
            and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="tech-marquee" data-reveal>
          <div className="marquee-content">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="tech-badge">
                <span className="tech-icon">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid" data-reveal>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ '--progress': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-cta" data-reveal>
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
