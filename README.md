# The Big Chill Website

Marketing website for The Big Chill, Wayanad.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Content updates

- Update contact details in `app/page.tsx` and `app/contact/page.tsx`.
- Keep uploading media under `public/images`, `public/videos`, and `public/docs`.
- Main requirements and content direction are in `REQUIREMENTS.md`.

## SEO/preview files

- Global metadata and social tags: `app/layout.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- LLM discovery text: `app/llms.txt/route.ts`
- Social preview image: `public/og-preview-1200.jpg`
