# Kshitij Tripathi — Portfolio

**Live:** https://kshitij189.github.io/portflio/

An animated single-page portfolio for a backend and AI engineer. Built with Vue 3,
GSAP and Tailwind, with scroll-driven animation throughout and a video demo for
every project.

## Stack

| | |
|---|---|
| Framework | [Vue 3](https://vuejs.org/) — Composition API, TypeScript |
| Animation | [GSAP](https://greensock.com/gsap/) + ScrollTrigger |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Scrolling | [Lenis](https://lenis.darkroom.engineering/) smooth scroll |
| Build | [Vite](https://vitejs.dev/) |
| Deploy | GitHub Actions → GitHub Pages |

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173/portflio/
npm run build      # vue-tsc type-check + production build
npm run preview    # serve the built output
```

Node 20 (see `.node-version`).

> The dev server URL includes `/portflio/` — that is the `base` path, and the
> bare `localhost:5173` will 404.

## Where things live

| What you want to change | File |
|---|---|
| Nav links, socials, contact email/phone | `src/data.ts` |
| Hero wordmark (the giant name) | `src/components/MyEnName.vue` |
| Hero copy and availability | `src/components/sections/Hero.vue` |
| Services cards | `src/components/sections/Services.vue` |
| Projects, links, demo videos | `src/components/sections/Works.vue` |
| About copy and heading | `src/components/sections/aboutMe.vue` |
| Roles and education | `src/components/sections/Experience.vue` |
| Colour palette | `src/style.css` (`@theme` block) |
| SEO, Open Graph, structured data | `index.html` |

## Colour

The whole theme is one 11-step ramp plus an accent, defined in the `@theme`
block of `src/style.css`. Changing those values retheme the site — the token
names are used across every component, so nothing else needs touching.

```css
--color-flax-smoke-50 … --color-flax-smoke-950   /* the ramp */
--color-accent                                    /* radiant lime */
```

## Project demos

Each project card has two videos:

- **Teaser** — `work<N>.webm`, 800×800, roughly 10–15s, plays on scroll and
  freezes on its last frame (they do not loop, so end on something meaningful).
- **Full demo** — `work<N>-full.webm`, opened by the *Watch demo* button.
  Loaded with `preload="none"`, so it costs nothing until someone clicks.

Both live in `src/assets/videos/` and are wired up in `src/assets/videos/index.ts`.

Raw screen recordings go in `src/assets/videos/raw/`, which is **gitignored** —
GitHub rejects files over 100 MB and unencoded captures run to hundreds of MB.
Encode to VP9 WebM before committing:

```bash
ffmpeg -ss <start> -t <secs> -i raw/source.mp4 \
  -vf "crop=870:870:<x>:<y>,scale=800:800" -an \
  -c:v libvpx-vp9 -crf 33 -b:v 0 -cpu-used 3 -row-mt 1 workN.webm
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Pages source is set to **GitHub Actions**.

The site is served from a subpath, so `base` in `vite.config.ts` is `/portflio/`.
To move it to a root domain, set `base: '/'` and update the URLs in
`index.html`, `public/manifest.json`, `public/sitemap.xml`, both `.robots.*.txt`
files, and the `sitemap()` options in `vite.config.ts`.

## Known quirks

- **Circular import.** `main.ts` → `App.vue` → components → `@/functions` →
  `lenis` from `@/main`. It survives a cold start but hot updates can trip it
  and blank the page — restart the dev server rather than debugging your edit.
  Production builds are unaffected.
- **`a { font-body }`** in `src/style.css` references a font that is never
  defined, so bare anchor text falls back to serif. Wrap link text in a `<span>`
  to pick up the correct family.
- **Testimonials** are removed from the page but the component is intact.
  Add entries to `people` in `src/components/design/Slider.vue`, then restore
  `<People />` in `App.vue` and the nav entry in `src/data.ts`.
