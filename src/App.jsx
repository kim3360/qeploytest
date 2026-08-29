import { useState, useEffect } from 'react'
import './App.css'

// Navigation Component
function Navigation({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          Portfolio
        </div>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item)
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">안녕하세요, 저는</span>
          <h1 className="hero-name">홍길동</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            사용자 경험을 최우선으로 생각하며, 창의적이고 효율적인 웹 솔루션을 만드는 개발자입니다.
            최신 기술 트렌드를 따라가며 끊임없이 성장하고 있습니다.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            }}>
              프로젝트 보기
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}>
              연락하기
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <span className="profile-emoji">👨‍💻</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>스크롤</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

// About Section Component
function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <span className="about-emoji">🚀</span>
            </div>
          </div>
          <div className="about-text">
            <h3>열정적인 웹 개발자</h3>
            <p>
              5년 이상의 웹 개발 경험을 바탕으로, 프론트엔드부터 백엔드까지 
              풀스택 개발 역량을 갖추고 있습니다. 사용자 중심의 인터페이스 설계와 
              효율적인 서버 아키텍처 구축에 관심이 많습니다.
            </p>
            <p>
              새로운 기술을 배우는 것을 즐기며, 팀원들과의 협업을 통해 
              더 나은 결과물을 만들어내는 것에 보람을 느낍니다. 
              클린 코드와 테스트 주도 개발(TDD)을 실천하며 
              유지보수성 높은 코드를 작성하려고 노력합니다.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>서울, 대한민국</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <span>프리랜서 / 구직 중</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <span>컴퓨터공학 학사</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section Component
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Django', level: 75 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'Database & DevOps',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section Component
function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: '완전한 기능을 갖춘 온라인 쇼핑몰 플랫폼. 결제 시스템, 재고 관리, 사용자 인증 기능 포함.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      description: '팀 협업을 위한 태스크 관리 애플리케이션. 실시간 업데이트, 드래그 앤 드롭 기능 지원.',
      image: '📋',
      tags: ['Vue.js', 'Firebase', 'Vuetify'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보와 5일 예보를 제공하는 대시보드. 위치 기반 서비스 및 차트 시각화.',
      image: '🌤️',
      tags: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Social Media Dashboard',
      description: '여러 소셜 미디어 플랫폼의 분석 데이터를 한 곳에서 확인할 수 있는 대시보드.',
      image: '📊',
      tags: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Blog Platform',
      description: '마크다운 지원, 댓글 시스템, SEO 최적화가 적용된 개인 블로그 플랫폼.',
      image: '✍️',
      tags: ['Gatsby', 'GraphQL', 'Contentful'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Fitness Tracker',
      description: '운동 기록, 목표 설정, 진행 상황 추적이 가능한 피트니스 트래킹 앱.',
      image: '💪',
      tags: ['React Native', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('메시지가 전송되었습니다! (데모)')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처</h3>
            <p>프로젝트 협업이나 채용 관련 문의는 언제든 환영합니다!</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>example@email.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+82 10-1234-5678</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>서울특별시 강남구</span>
              </div>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">메시지 보내기</button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 홍길동. All rights reserved.</p>
        <p>Made with ❤️ using React & Vite</p>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
