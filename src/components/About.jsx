import './About.css';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Passionate Developer & Problem Solver</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="about-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <div className="experience-badge">
                <span className="exp-number">5+</span>
                <span className="exp-text">Years of Experience</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Building Digital Experiences That Matter</h3>
            <p>
              I'm a full-stack developer with a passion for creating elegant solutions 
              to complex problems. With over 5 years of experience in web development, 
              I've worked with startups and established companies to bring their visions to life.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, and it has 
              evolved into a deep love for crafting user-centric applications. I believe in 
              writing clean, maintainable code and staying updated with the latest technologies.
            </p>
            
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>I love tackling complex challenges and finding innovative solutions.</p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Performance Focused</h4>
                  <p>Building fast, optimized applications is always my priority.</p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>Team Player</h4>
                  <p>Collaboration and communication are key to successful projects.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
