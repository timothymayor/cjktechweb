# CJ Konsultants — AI Automation Solutions Company Website

A premium, enterprise-grade, high-converting one-page website for **CJ Konsultants AI Automation**, positioning the firm as a strategic B2B technology consultancy capable of designing, implementing, integrating, and deploying AI automation, autonomous agents, agentic commerce, and intelligent business workflows.

---

## 1. Project Overview & Architecture

This application is built with a modular, decoupled architecture where business data and copy are separated from UI logic.

```
├── .env.example              # Configurable environment variables template
├── index.html                # High-performance HTML shell with JSON-LD SEO schemas
├── metadata.json             # AI Studio applet metadata & capabilities
├── package.json              # Production dependencies & build scripts
├── tsconfig.json             # TypeScript configuration with path aliases
├── vite.config.ts            # Vite & Tailwind CSS compilation pipeline
└── src/
    ├── main.tsx              # Application entry mount point
    ├── App.tsx               # Primary Single-Page Application container
    ├── index.css             # Tailwind CSS tokens, typography & accessible focus rings
    ├── types/
    │   └── index.ts          # Strongly-typed TypeScript interfaces
    ├── data/
    │   ├── config.ts         # Company metadata, contact info, trust metrics, navigation
    │   ├── solutions.ts      # 8 core enterprise AI solutions & architectural specs
    │   ├── projects.ts       # 6 illustrative case studies with miniature pipelines
    │   ├── outcomes.ts       # 6 strategic value pillars (Reduce, Accelerate, Improve, etc.)
    │   ├── ecosystem.ts      # 5 integration layers (AI Models, Agents, Workflows, ERP, Channels)
    │   ├── testimonials.ts   # Placeholder client testimonials with company tags
    │   └── blog.ts           # 4 thought-leadership articles with executive summaries
    └── components/
        ├── navbar/           # Sticky backdrop-blur navigation with active section tracking
        ├── hero/             # 4-slide automated carousel + Interactive AI Ecosystem SVG
        ├── proof/            # Social proof credibility strip & trust metric counters
        ├── about/            # 7-stage delivery lifecycle pipeline + 4 capability cards
        ├── solutions/        # 8-card responsive solution grid + Deep-dive dialog modal
        ├── outcomes/         # Enterprise business outcome impact cards
        ├── projects/         # 6 illustrative case studies + Architecture flow dialog
        ├── ecosystem/        # Integration technologies categorization matrix
        ├── testimonials/     # Interactive customer quote carousel
        ├── blog/             # Thought leadership articles & Full-text reader modal
        ├── assessment/       # Interactive 4-step AI Readiness Diagnostic & scoring tool
        ├── cta/              # Distinct consultation banner
        ├── contact/          # Multi-field contact form with honeypot spam protection & Map
        ├── footer/           # Multi-column footer & copyright
        └── legal/            # Privacy Policy, Terms, Cookie & Accessibility dialogs
```

---

## 2. Key Implementation Decisions

1. **Strategic Brand Aesthetics**: Designed with a deep charcoal / navy canvas (`#0B0F19`), high-contrast typography, electric cyan and indigo accents, subtle glassmorphism, and minimal geometric technical diagrams.
2. **Interactive AI Automation Ecosystem**: Custom SVG architecture visualization with animated data packets and interactive node inspection.
3. **Structured Content Separation**: All business data resides in `src/data/*.ts`, allowing non-developers to edit company information, solutions, and case studies without touching UI components.
4. **Interactive AI Readiness Assessment**: Built-in 4-step diagnostic wizard that computes a custom AI Readiness score (0–100) and automatically pre-populates the contact form.
5. **Robust Form Validation & Anti-Spam**: Includes client-side validation, honeypot field protection, loading and success states, and pre-configured integration endpoints.
6. **Accessibility & WCAG 2.2 AA Conformance**: Full keyboard navigation, visible focus rings, ARIA dialog landmarks, Escape-to-close behavior, and `prefers-reduced-motion` support.
7. **Technical SEO & Structured Data**: Pre-configured JSON-LD structured schemas for Organization, WebSite, and OfferCatalog Services.

---

## 3. Local Development

To run the application locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (Port 3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Environment Variables Configuration

Copy `.env.example` to `.env.local` and configure your parameters:

```bash
cp .env.example .env.local
```

Key configurable environment variables:
- `NEXT_PUBLIC_COMPANY_NAME`: Company branding name
- `NEXT_PUBLIC_COMPANY_EMAIL`: Primary contact email
- `NEXT_PUBLIC_COMPANY_PHONE`: Advisory telephone line
- `NEXT_PUBLIC_MAP_EMBED_URL`: Embed URL for location iframe
- `NEXT_PUBLIC_WHATSAPP_URL`: Direct WhatsApp chat link
- `CONTACT_EMAIL_API_KEY`: Secret API key for backend email dispatch (Resend / SendGrid)
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 Measurement ID

---

## 5. Deployment to GitHub & Vercel

### Push to GitHub:

```bash
git init
git add .
git commit -m "Initial AI automation solutions website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

### Deploy to Vercel:

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** → **Project** and import your GitHub repository.
3. In **Build & Output Settings**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. In **Environment Variables**, paste the keys from `.env.example`.
5. Click **Deploy**.

---

## 6. Production Readiness Checklist

- [x] TypeScript compiles without errors (`npm run lint`)
- [x] Production build passes cleanly (`npm run build`)
- [x] All 8 core AI Solutions and 6 Illustrative Case Studies populated
- [x] Interactive AI Automation Ecosystem diagram and node inspector functioning
- [x] Interactive AI Readiness Assessment scoring wizard working
- [x] Contact form validation, honeypot anti-spam, loading/success states active
- [x] Semantic HTML, ARIA labels, and WCAG 2.2 AA keyboard accessibility
- [x] JSON-LD Structured Data Schema for Organization, WebSite, and Services
- [x] Mobile responsive across 320px, 375px, 768px, 1024px, 1440px+
