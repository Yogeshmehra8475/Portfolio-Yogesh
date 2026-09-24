# Yogesh Singh Mehra — Portfolio

A dark, data/AI-themed personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The build was verified with `npm run build` and compiles cleanly.

To deploy, the fastest path is [Vercel](https://vercel.com) (built by the Next.js team, free for personal sites): push this folder to a GitHub repo, import it on Vercel, and it deploys automatically. Netlify also works.

## 2. Everything you need to fill in yourself

Nothing in the content was invented — placeholders are marked `TODO` wherever the source resume/brief didn't have the detail. Search the project for `TODO` to find every spot, or use this list:

### `data/site.ts`
- `siteUrl` — your deployed domain (only affects social-share previews).
- `socialLinks.linkedin` — your full LinkedIn profile URL.

### `data/projects.ts`
- Blood Bank Management System, QuickBlog and Helmet Detection are filled in from your resume — just add a **screenshot** (`image`) and **GitHub/demo links**.
- Phishing Website Detection, Spam Detection, Climate Visibility, Myntra Review Analysis, Lung Disease Diagnosis and Zerodha Clone have **no description, tech stack or links yet** — add those (`needsDetails: true` shows a small reminder badge on the card until you do; remove that line once filled in).

### `data/certificates.ts`
- Dates are missing for most certificates (Physics Wallah ×2, Apna College ×2, Cisco, Robotics) — replace `"TODO: add date"`.
- Add each certificate image to `/public/certificates/` and point `image` at it (e.g. `"/certificates/pw-genai.png"`).
- Add `credentialUrl` if you have a public credential link — leave `""` to hide the button.

### `/public/resume/`
Your resume PDF is already copied in as `Yogesh_Resume.pdf` and linked from the Hero and Resume sections. Replace the file (keep the same name, or update `resume.fileUrl` in `data/site.ts`) whenever you update your resume.

### `/public/projects/` and `/public/certificates/`
Drop screenshots and certificate images here as flat files (PNG/JPG/WebP). Recommended sizes: project screenshots ~1200×750px, certificates ~1000×750px.

## 3. How the code is organized

```
app/
  layout.tsx      → fonts, page <title>/meta
  page.tsx         → assembles every section in order
  globals.css      → global styles, focus states, reduced-motion support
components/        → one component per section (Hero, About, Skills, Projects, ...)
data/               → ALL editable content lives here — no need to touch components/
  site.ts           → name, tagline, email, social links, resume path
  skills.ts         → skills groups + Data & AI Lab domains
  projects.ts        → project cards
  certificates.ts     → certificate cards
  experience.ts       → work/internship timeline
  education.ts         → education + "Currently Exploring" tags
public/
  resume/            → your resume PDF
  projects/            → project screenshots
  certificates/         → certificate images
```

**To add a new project:** open `data/projects.ts` and copy an existing object in the array, give it a unique `slug`, and fill in the fields. The grid and cards update automatically — no component changes needed. Certificates, skills and experience work the same way.

## 4. Notes on the design

- Two accent colors carry the "data → insight" theme: `data` (blue, `#5B8DEF`) for technical/process elements and `insight` (amber, `#F2B84B`) for highlights and "currently exploring" tags.
- Headings use **Sora**, body text uses **IBM Plex Sans** (both loaded via `next/font/google`, self-hosted at build time — no runtime Google Fonts requests).
- The hero's animated graphic and the on-load card/section animations are the only motion in the page; hover states are otherwise restrained. Reduced-motion preferences are respected globally (see `globals.css`).
- No phone number or home address is shown anywhere on the site, only email/LinkedIn/GitHub, since that's public-facing.

## 5. Contact form

The contact form currently opens the visitor's email client via a `mailto:` link — so it works immediately with zero backend. If you'd rather receive submissions directly, swap the `onSubmit` handler in `components/Contact.tsx` for a `fetch()` call to a service like [Formspree](https://formspree.io) or [Resend](https://resend.com).
