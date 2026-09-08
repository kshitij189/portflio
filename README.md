# Kshitij Tripathi — Backend Developer Portfolio

An animated single-page portfolio built with Vue 3, GSAP, Tailwind CSS and Vite.

## 🙏 Credits

This site is built on work by two other people, and that credit is not optional:

- **UI design** — [Huy Nguyen](https://www.huyng.xyz). The visual design is his.
- **Original code and animations** — [Ebraheem Alhetari](https://github.com/Hetari/portfolio),
  who built this Vue implementation of Huy's design and shared it. Please star his
  repository if you find this useful.

The content, copy, projects and assets on this site are mine. The design and the
code scaffolding are theirs — both credits appear in the site footer.

## 🛠 Tech Stack

- [**Vue.js**](https://vuejs.org/) (Composition API & TypeScript)
- [**GSAP**](https://greensock.com/gsap/) (animations & ScrollTrigger)
- [**Tailwind CSS**](https://tailwindcss.com/) v4
- [**Lenis**](https://lenis.darkroom.engineering/) (smooth scrolling)
- [**Vite**](https://vitejs.dev/)

## 🔍 Sections

- **Loading Screen** — animated intro
- **Hero** — name, role and availability
- **Services** — backend, distributed systems and retrieval engineering
- **Projects** — five backend systems built end to end
- **About** — background and interests
- **Experience** — roles and education
- **Contact** — email and direct message

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview
```

## 🚢 Deployment

Configured for GitHub Pages at `https://kshitij189.github.io/portflio/`.

To deploy somewhere else (Vercel, Netlify, a custom domain):

1. Set `base: '/'` in [`vite.config.ts`](vite.config.ts)
2. Update `hostname` / `basePath` in the same file's `sitemap()` plugin
3. Update the URLs in [`index.html`](index.html), [`public/manifest.json`](public/manifest.json),
   [`public/sitemap.xml`](public/sitemap.xml) and both `.robots.*.txt` files
