/**
 * ✏️✏️✏️  이 파일 한 곳만 수정하면 포트폴리오가 본인의 것으로 바뀝니다  ✏️✏️✏️
 *
 * 사이트에 표시되는 모든 개인 정보는 이 파일에 모여 있습니다. 아래 값들은
 * 모두 예시(PLACEHOLDER)이므로 본인의 내용으로 바꿔 주세요. 다른 파일은
 * 건드릴 필요가 없습니다.
 *
 * 참고: 예시로 남겨둔 내용은 점선 밑줄로 표시됩니다. 이 스타일은
 * `src/index.css`의 `.ph`에서 정의되어 있으며, 실제 내용으로 바꾸면
 * 자연스럽게 어울리도록 플래그(`placeholder: true`)를 제거하면 사라집니다.
 */

export const profile = {
  // ── 👤 소개 ───────────────────────────────────────────────────────────
  name: '홍길동', // ← 본인의 이름으로 바꿔주세요
  role: '프론트엔드 개발자', // ← 직무 / 전문 분야
  tagline:
    '사용자가 다시 찾는 인터페이스를 만드는 프론트엔드 개발자입니다. 작은 디테일까지 놓치지 않는 인터페이스와 쾌적한 사용자 경험을 고민하는 일을 좋아합니다.',
  location: '서울, 대한민국', // ← 활동 지역
  availability: '새로운 프로젝트 제안을 기다리고 있습니다', // ← 현재 상태

  // ── 📧 연락처 (모두 예시 — 실제 정보로 바꿔주세요) ─────────────────────
  email: 'honggildong@example.com', // ← 실제 이메일 주소
  socials: {
    github: 'https://github.com/honggildong', // ← 깃허브 프로필 주소
    linkedin: 'https://www.linkedin.com/in/honggildong', // ← 링크드인 프로필 주소
  },

  // ── 📖 자기소개 (2문단 정도가 적당합니다) ─────────────────────────────
  bio: [
    '안녕하세요, 사용자 경험을 고민하는 프론트엔드 개발자 홍길동입니다. 웹 프론트엔드를 중심으로 인터페이스를 설계하고, 데이터가 화면 위에서 자연스럽게 흐르는 서비스를 만드는 일에 즐거움을 느낍니다.',
    '요즘은 접근성과 성능에 더 신경 쓰면서, 누구나 편하게 사용할 수 있는 웹을 고민하고 있습니다. 좋은 코드는 좋은 협업에서 나온다고 믿고, 팀과 함께 성장하는 개발자가 되기 위해 노력하고 있습니다.',
  ],

  // ── 🗂 소개 섹션에 표시되는 간단한 정보 (모두 예시) ─────────────────────
  facts: [
    { label: '지역', value: '서울, 대한민국' },
    { label: '관심 분야', value: 'React 기반 웹 애플리케이션' },
    { label: '학습 중', value: 'TypeScript 심화' },
  ],
};

/**
 * 🛠 기술 스택 — 분야별 태그 묶음입니다. 그룹 이름과 기술 목록을
 * 본인에 맞게 자유롭게 늘리거나 줄여도 레이아웃은 그대로 유지됩니다.
 */
export const skillGroups = [
  {
    title: '프론트엔드',
    skills: ['HTML · CSS', 'JavaScript', 'React', 'TypeScript', '반응형 웹'],
  },
  {
    title: '백엔드',
    skills: ['Node.js', 'REST API', 'PostgreSQL', '인증 · 보안'],
  },
  {
    title: '도구',
    skills: ['Git · GitHub', 'Vite', 'Figma', 'VS Code', 'Docker'],
  },
];

/**
 * 🧩 프로젝트 — 예시 카드 4개입니다. 실제 프로젝트로 바꿔주세요:
 *   • title       → 프로젝트 이름
 *   • description → 한 줄 소개: 무엇을 하는 프로젝트인지
 *   • tags        → 사용한 기술 (3~4개가 보기 좋습니다)
 *   • liveUrl     → 배포된 서비스 주소 (없으면 '#')
 *   • sourceUrl   → 저장소 주소 (없으면 '#')
 * 카드 위쪽 그라데이션은 자동 생성된 대체 이미지입니다. 실제 스크린샷으로
 * 바꾸려면 `src/components/Projects.jsx`를 참고하세요.
 */
export const projects = [
  {
    title: '협업 작업 관리 서비스',
    description:
      '팀원들과 할 일을 함께 정리하고 진행 상황을 한눈에 볼 수 있는 협업용 작업 관리 웹앱입니다.',
    tags: ['React', 'Vite', 'CSS'],
    liveUrl: '#', // ← 실제 데모 주소로 바꿔주세요
    sourceUrl: '#', // ← 실제 저장소 주소로 바꿔주세요
  },
  {
    title: '날씨 대시보드',
    description:
      '실시간 날씨와 미세먼지 정보를 카드로 정리해 보여주는 개인화 대시보드입니다.',
    tags: ['TypeScript', 'Node.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: '레시피 공유 커뮤니티',
    description:
      '집밥 레시피를 직접 올리고 다른 사람들에게 추천받을 수 있는 소셜 레시피 서비스입니다.',
    tags: ['React', 'REST API'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: '개발 기록 블로그',
    description:
      '마크다운으로 글을 작성하고 배운 것을 차곡차곡 정리하는 개인 블로그입니다.',
    tags: ['JavaScript', 'HTML · CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];
