# One-Page Portfolio — React + Vite

A clean, modern, fully responsive single-page portfolio template.
All personal content is **placeholder** content collected in one file so you
can make it yours in minutes.

## Sections

| Section   | What's there                                                             |
| --------- | ------------------------------------------------------------------------ |
| Hero      | Name, role/tagline, short intro, "View Projects" + "Contact" buttons, photo placeholder |
| About     | Short bio + quick facts                                                  |
| Skills    | Skills grouped into chips (Frontend / Backend / Tools)                   |
| Projects  | 4 sample cards with one-line descriptions, tech tags and placeholder links |
| Contact   | Email button + GitHub / LinkedIn icon links                              |

A fixed top nav with smooth-scroll anchors and a mobile hamburger menu ties
everything together.

## Make it yours

Everything personal lives in **`src/data/profile.js`** — name, role, tagline,
bio, skills, projects, email and social links. Every value there is marked
with a `← replace` comment. On the page itself, personal placeholders are
underlined with a dashed line (hover them for a hint); that marker is the
`.ph` class in `src/index.css` if you want to remove or restyle it.

Other places you may want to touch:

- `index.html` — page `<title>`, meta description and social preview tags.
- `public/favicon.svg` — replace with your own icon.
- `src/index.css` — design tokens (`:root` variables) for colors, fonts,
  spacing and shadows. Change `--accent` to re-theme the whole site.
- Project cards currently show automatic gradient artwork as the image. To
  use real screenshots, drop images into `src/assets/`, import them in
  `src/components/Projects.jsx`, and replace the `project-card__media` div
  with an `<img>`.

## Commands

```bash
npm install    # install dependencies
npm run dev    # start the dev server
npm run build  # production build into dist/
npm run preview
```
