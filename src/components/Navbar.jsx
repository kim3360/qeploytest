import { useEffect, useState } from 'react';
import './Navbar.css';
import { profile } from '../data/profile';

const navLinks = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '소개' },
  { id: 'skills', label: '기술 스택' },
  { id: 'projects', label: '프로젝트' },
  { id: 'contact', label: '연락처' },
];

/** 이름에서 머리글자를 뽑아 로고 모노그램으로 사용합니다 (예: 홍길동 → 홍). */
const initials = profile.name
  .split(/\s+/)
  .map((word) => word[0])
  .filter(Boolean)
  .slice(0, 2)
  .join('');

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // 현재 화면에 보이는 섹션의 메뉴를 강조합니다
      const probe = window.scrollY + 150;
      let current = 'home';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Esc 키를 누르거나, 화면을 넓혀 데스크톱 크기가 되면 메뉴를 닫습니다
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth > 768 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <span className="nav__monogram" aria-hidden="true">
            {initials}
          </span>
          <span className="nav__logo-name">{profile.name}</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}
          aria-label="메인 내비게이션"
        >
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? 'nav__link--active' : ''}`}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            채용 문의
          </a>
        </nav>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
