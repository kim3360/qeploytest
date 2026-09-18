/**
 * ✏️✏️✏️  EDIT THIS ONE FILE TO MAKE THE PORTFOLIO YOURS  ✏️✏️✏️
 *
 * Every piece of personal content on the site is collected here, and every
 * value below is a PLACEHOLDER (marked with "Your …" or "sample …").
 * Replace them with your own information — no other file needs to change.
 *
 * Tip: the page visibly marks personal placeholders with a dashed underline.
 * That styling lives in `src/index.css` (look for `.ph`) and disappears
 * automatically once you remove the `placeholder: true` flags — or just edit
 * the text and leave the flags; it's up to you.
 */

export const profile = {
  // ── 👤 Identity ───────────────────────────────────────────────────────
  name: 'Your Name', // ← replace with your full name
  role: 'Your Role — e.g. Frontend Developer', // ← your job title / discipline
  tagline:
    'Replace this with a one- or two-sentence intro: who you are, what you build, and what makes you excited about it.',
  location: 'Your City, Country', // ← where people can find you
  availability: 'Open to new opportunities', // ← your current status

  // ── 📧 Contact (all placeholders — swap in the real ones) ─────────────
  email: 'your.email@example.com', // ← your real email address
  socials: {
    github: 'https://github.com/your-username', // ← your GitHub profile
    linkedin: 'https://www.linkedin.com/in/your-username', // ← your LinkedIn profile
  },

  // ── 📖 About (short bio — 2 short paragraphs works well) ──────────────
  bio: [
    'Write your first bio paragraph here: a short introduction covering who you are, your background, and the kind of work you enjoy doing.',
    'Write a second paragraph here: what you are currently focused on, what you are learning, or what kind of projects or teams you would love to work with.',
  ],

  // ── 🗂 Quick facts shown in the About section (all placeholders) ──────
  facts: [
    { label: 'Location', value: 'Your City, Country' },
    { label: 'Focus', value: 'e.g. Web apps with React' },
    { label: 'Currently learning', value: 'e.g. TypeScript' },
  ],
};

/**
 * 🛠 Skills — grouped chips/tags. Rename groups and swap the skill names
 * for your own. Add or remove whole groups freely; the layout adapts.
 */
export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML & CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Authentication'],
  },
  {
    title: 'Tools',
    skills: ['Git & GitHub', 'Vite', 'Figma', 'VS Code', 'Docker'],
  },
];

/**
 * 🧩 Projects — 4 sample cards. Replace each one with a real project:
 *   • title          → project name
 *   • description    → one line: what it does / why it matters
 *   • tags           → the tech it uses (3–4 items looks best)
 *   • liveUrl        → link to the deployed app ('#' until you have one)
 *   • sourceUrl      → link to the repository ('#' until you have one)
 * The gradient artwork is an automatic placeholder image — see
 * `src/components/Projects.jsx` to swap in real screenshots instead.
 */
export const projects = [
  {
    title: 'Sample Project 01',
    description: 'One line describing what this project does and who it helps.',
    tags: ['React', 'Vite', 'CSS'],
    liveUrl: '#', // ← replace with your live demo link
    sourceUrl: '#', // ← replace with your repo link
  },
  {
    title: 'Sample Project 02',
    description: 'Another one-line description of a different project.',
    tags: ['TypeScript', 'Node.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Sample Project 03',
    description: 'One line describing what this project does and who it helps.',
    tags: ['React', 'API'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Sample Project 04',
    description: 'Another one-line description of a different project.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];
