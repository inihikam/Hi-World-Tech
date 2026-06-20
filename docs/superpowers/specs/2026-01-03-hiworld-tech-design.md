# Hi-World Tech Landing Page - Design Specification

**Date:** 2026-01-03  
**Author:** inihikam (Muhammad Maulana Hikam)  
**Project:** Freelance IT Solutions Landing Page  
**Status:** Approved Design → Ready for Implementation  

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technical Architecture](#technical-architecture)
3. [Page Structure](#page-structure)
4. [Component Specifications](#component-specifications)
5. [Design System](#design-system)
6. [SEO Strategy](#seo-strategy)
7. [Deployment Plan](#deployment-plan)
8. [Performance Targets](#performance-targets)

---

## Executive Summary

This specification defines a **portfolio-first landing page** for Hi-World Tech, a freelance IT solutions provider targeting startups and UMKM in Indonesia. The design emphasizes **minimalist aesthetics with dark mode tech theme**, showcasing technical expertise through project demonstrations rather than verbose copywriting.

### Key Objectives

1. Showcase 4 hero projects prominently above fold
2. Demonstrate multi-stack versatility (Go, Rust, TypeScript, Python)
3. Provide clear contact pathways for potential clients
4. Achieve excellent SEO and performance metrics
5. Deploy on Cloudflare Pages for global CDN delivery

### Target Audience

- **Primary:** Startups needing MVP development (Option A)
- **Secondary:** UMKM requiring digital transformation (Option C)
- **Tertiary:** Tech-savvy professionals evaluating portfolio

---

## Technical Architecture

### Tech Stack Selection Rationale

| Component | Technology | Justification |
|-----------|------------|---------------|
| **Framework** | Astro | Zero JS by default, native SSG, best Core Web Vitals |
| **Styling** | Tailwind CSS | Utility-first, minimal bundle, easy dark mode implementation |
| **Animations** | Motion One | Astro-built-in, zero runtime cost, CSS transitions |
| **Icons** | Lucide Icons | Lightweight, modern SVG icons |
| **Deployment** | Cloudflare Pages | Free tier, global CDN, instant cache purge, automatic HTTPS |
| **Analytics** | Optional: Cloudflare Web Analytics | Privacy-focused, no cookie consent required |

### Repository Structure

```
startup/
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-01-03-hiworld-tech-design.md  ← This file
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── AboutSection.astro
│   │   ├── ProjectGrid.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectModal.astro
│   │   ├── ContactSection.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css
│   └── config/
│       └── site.ts
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.png
├── astro.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Page Structure

### Navigation Flow

```
User Lands → Hero Section → About Blurb → Project Grid (4 shown) → 
↓ "View More" click
Expanded Grid (all 21 repos) → Modal Details → Contact CTA → Footer
```

### Section-by-Section Breakdown

#### 1. Header / Navigation

**Layout:** Left-aligned branding, right-aligned nav with social icons

```
┌─────────────────────────────────────────────┐
│  Hi-World Tech     [About] [Projects]      │ GitHub LinkedIn │
│                           [Contact]         │                 │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Logo text: "Hi-World Tech" (monospace font)
- Nav links: About | Projects | Contact
- Social icons: GitHub + LinkedIn (fixed to far right)
- Behavior: Sticky on scroll, transparent-to-solid background transition
- Mobile: Hamburger menu collapsing to dropdown

**Implementation Notes:**
- Use `position: sticky` with `top: 0` and `z-index: 50`
- Transition from transparent to solid dark background at 50px scroll
- Mobile hamburger icon uses simple 3-line SVG

---

#### 2. Hero Section

**Copy:**
```
Hi-World Tech

Freelance IT Solutions for Startups, 
UMKM, and Open Source Enthusiasts

Full-stack Development • API Design • AI/ML Integration

[View My Projects →]
```

**Visual Layout:**
```
┌─────────────────────────────────────────┐
│         Hi-World Tech                  │
│                                         │
│  Freelance IT Solutions for Startups,  │
│  UMKM, and Open Source Enthusiasts     │
│                                         │
│  Full-stack Development • API Design    │
│  • AI/ML Integration                    │
│                                         │
│  [View My Projects →]                   │
└─────────────────────────────────────────┘
```

**Specifications:**
- Height: `min(100vh, 800px)` for desktop
- Font sizes: H1 = 3rem, subtitle = 1.25rem, tagline = 1.5rem
- CTA button: Primary accent color hover effect
- Animation: Fade-in sequence (hero title first, then subtitle, then CTA)

**Animation Sequence:**
1. Title fades in (0ms delay)
2. Subtitle fades in (200ms delay)
3. Tagline fades in (400ms delay)
4. CTA appears with slide-up (600ms delay)

---

#### 3. About Section (Brief Intro)

**Content:**
```
Freelance developer based in Mranggen, Demak, Indonesia
serving startups worldwide. Building scalable solutions
with modern tech stack including Go, Rust, and TypeScript.
```

**Specifications:**
- Width: Limited max-width (max-w-xl centered)
- Text color: Secondary muted gray (#a1a1aa)
- Border-bottom separator to differentiate sections
- No image/avatar to maintain minimalist aesthetic

---

#### 4. Project Showcase Grid

**Filter Categories:**
- All (default)
- Web Apps
- APIs
- AI/ML
- Systems

**Hero Projects (First 4 Always Visible):**

| Project | Category | Tech Stack | GitHub Stars* |
|---------|----------|------------|---------------|
| Ngobrol | Systems | Rust, Tokio | TBD |
| FinTrack | Web Apps | Go, TypeScript | TBD |
| ERP | Systems | Go, PostgreSQL | TBD |
| Fraud Guard API | APIs | Go, REST API | TBD |

*TBD: Will pull actual stats dynamically or hardcode known values

**Card Design:**

```
┌─────────────────────────────────────┐
│                                     │
│     [GitHub Preview Image]          │
│                                     │
│  Ngobrol                            │
│  Real-time Chat Application         │
│                                     │
│  ┌──Rust──┐ ┌──Tokio──┐            │
│                                     │
│  ⭐ 12  •  🔽 3                     │
│                                     │
└─────────────────────────────────────┘
```

**Hover Reveal Behavior:**
- Initial state: Minimal card (title, short description, badges, stats)
- On hover: Smooth expansion revealing:
  - Full project description (2-3 sentences)
  - Complete tech stack list
  - "View Project" button (opens modal)
  - GitHub repo link (secondary action)

**"View More Projects" Button:**
- Placement: Centered below initial 4-card grid
- Style: Outlined button, secondary accent color
- Action: Expands grid inline to show remaining 17 repositories
- Shows all remaining repos in same grid layout

**Responsive Breakpoints:**
- Desktop (>1024px): 4-column grid
- Tablet (768-1024px): 2-column grid
- Mobile (<768px): Single column stack

---

#### 5. Project Modal

**Trigger:** Click any project card opens modal overlay

**Modal Content Structure:**

```
┌─────────────────────────────────────────┐
│  [X] Close                              │
├─────────────────────────────────────────┤
│                                         │
│  NGOBROL                                │
│  Real-time Chat Application             │
│  (Subtitle/description)                 │
│                                         │
│  Problem                              │
│  Users needed lightweight chat app      │
│  without heavy dependencies             │
│                                         │
│  Solution                             │
│  Built with Rust using Tokio async      │
│  runtime for high-performance messaging │
│                                         │
│  Tech Stack                           │
│  ┌──Rust──┐ ┌──Tokio──┐ ┌──WebSocket──┐│
│                                         │
│  Key Features                         │
│  • Fast message delivery                │
│  • Low memory footprint                 │
│  • Cross-platform support               │
│                                         │
│  Results/Impact                       │
│  Demonstrates mastery of systems        │
│  programming and emerging tech          │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │    Contact for Similar Project  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [View on GitHub]                       │
│                                         │
└─────────────────────────────────────────┘
```

**Modal Specifications:**
- Overlay: Semi-transparent black (#00000080) backdrop blur
- Animation: Scale-in from 95% to 100%, fade-in opacity
- Close mechanism: X button, ESC key, click outside
- Mobile: Full-screen modal (remove width constraints)

**CTA Strategy:**
- Primary CTA: "Contact for Similar Project" — links to contact section anchor or email
- Secondary: "View on GitHub" — external link to repository

**Modal Data Structure (per project):**
```typescript
interface Project {
  name: string;
  category: 'Web Apps' | 'APIs' | 'AI/ML' | 'Systems';
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  impact: string;
  githubUrl: string;
  liveDemoUrl?: string;
  stars: number;
  forks: number;
}
```

---

#### 6. Contact Section

**Copy:**
```
Ready to Build Your Solution?

Let's discuss your project

📧 Email Me
💼 LinkedIn
```

**Specifications:**
- Background: Darker accent gradient (to distinguish from footer)
- Buttons/Links: Underlined text links with hover effects
- Icon + Label format for each contact method
- Spacer before footer section

**Contact Links:**
- Email: `mailto:your-email@example.com` (user to configure)
- LinkedIn: `https://www.linkedin.com/in/muhammad-maulana-hikam-38105b1b8`

---

#### 7. Footer

**Content:**
```
About | GitHub | LinkedIn

© 2026 Hi-World Tech. All rights reserved.
```

**Specifications:**
- Links: Simple underlined text links
- Copyright year: Dynamic (automatically updated via Astro SSR)
- Padding: Consistent with other section padding
- Color: Muted gray text on dark background

---

## Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#0a0a0a` | Page background |
| Surface | `#171717` | Cards, modals, elevated elements |
| Primary Accent | `#06b6d4` (Cyan) | CTA buttons, hover states |
| Secondary Accent | `#8b5cf6` (Purple) | Gradient overlays, emphasis |
| Text Primary | `#fafafa` | Main headings |
| Text Secondary | `#a1a1aa` | Body text, descriptions |
| Text Muted | `#71717a` | Metadata, labels |
| Border | `#27272a` | Dividers, card borders |
| Overlay | `#00000080` | Modal backdrop |

### Typography

**Font Families:**
- Headings: `'Inter', sans-serif` (Google Fonts)
- Body: `'Inter', sans-serif`
- Code/Monospace: `'JetBrains Mono', monospace` (Google Fonts)

**Font Scale:**
- H1: `3rem` (48px), `font-weight: 700`
- H2: `2rem` (32px), `font-weight: 600`
- H3: `1.5rem` (24px), `font-weight: 600`
- Body: `1rem` (16px), `font-weight: 400`, `line-height: 1.6`
- Small: `0.875rem` (14px), `font-weight: 400`

### Spacing Scale

| Token | Pixels | Usage |
|-------|--------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Card internal padding |
| `space-4` | 16px | Element margins |
| `space-8` | 32px | Section padding |
| `space-16` | 64px | Large section gaps |
| `space-24` | 96px | Max separation |

### Border Radius

- Cards: `rounded-lg` (8px)
- Buttons: `rounded-md` (6px)
- Modals: `rounded-xl` (12px)

### Animations

**Duration Scale:**
- Instant: `0ms`
- Fast: `150ms` (easing: ease-out)
- Normal: `300ms` (easing: ease-in-out)
- Slow: `500ms` (easing: ease-in-out)

**Easing Functions:**
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Slide: `cubic-bezier(0.4, 0, 0.2, 1)`

**Animation Types Used:**
1. Fade-in (opacity 0→1)
2. Slide-up (translateY 20px→0)
3. Scale (transform scale 0.95→1)
4. Hover underline (width 0→100%)

---

## SEO Strategy

### Meta Tags Required

```html
<!-- Basic -->
<title>Hi-World Tech | Freelance IT Solutions for Startups & UMKM</title>
<meta name="description" content="Building scalable IT solutions for startups and UMKM. Full-stack development, API design, and AI/ML integration. Based in Indonesia, serving globally.">

<!-- Open Graph -->
<meta property="og:title" content="Hi-World Tech | Freelance IT Solutions">
<meta property="og:description" content="Full-stack Development • API Design • AI/ML Integration">
<meta property="og:type" content="website">
<meta property="og:url" content="https://hiworld.tech">
<meta property="og:image" content="https://hiworld.tech/og-image.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Hi-World Tech | Freelance IT Solutions">
<meta name="twitter:description" content="Full-stack Development • API Design • AI/ML Integration">
<meta name="twitter:image" content="https://hiworld.tech/og-image.png">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Maulana Hikam",
  "jobTitle": "Freelance Developer",
  "url": "https://hiworld.tech",
  "sameAs": [
    "https://github.com/inihikam",
    "https://www.linkedin.com/in/muhammad-maulana-hikam-38105b1b8"
  ]
}
</script>
```

### Sitemap Generation

- **Static routes:** `/` (home only)
- **Dynamic generation:** Use Astro's `sitemap.ts` output hook
- **Priority:** 1.0 for home page
- **Change frequency:** monthly

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://hiworld.tech/sitemap.xml
```

### Performance Optimization

- **Image optimization:** Astro's built-in `<Image />` component with auto-formatting (AVIF/WebP)
- **Lazy loading:** Below-the-fold images use native lazy loading
- **Preloading:** Critical fonts (`Inter`, `JetBrains Mono`) preloaded
- **CSS minification:** Automatic via Astro build
- **JS elimination:** Zero JavaScript by default, only inject when necessary

---

## Deployment Plan

### Prerequisites

1. Node.js 18+ installed locally
2. npm or pnpm package manager
3. GitHub account (for repo hosting)
4. Cloudflare account (free tier sufficient)

### Deployment Steps

**Step 1: Clone and Setup**
```bash
git clone <repository-url>
cd startup
npm install
```

**Step 2: Local Development**
```bash
npm run dev
# Opens at http://localhost:4321
```

**Step 3: Build for Production**
```bash
npm run build
# Output in ./dist/
```

**Step 4: Deploy to Cloudflare Pages**

*Option A: Using Wrangler CLI (recommended)*
```bash
npm install -g wrangler
wrangler pages project create hiworld-tech
wrangler pages deploy dist --project-name=hiworld-tech
```

*Option B: Using GitHub Integration*
1. Push code to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Enable automatic deployments on main branch push

**Step 5: Configure Custom Domain**
- Add DNS record: `hiworld.tech → CNAME → hiworld.pages.dev`
- Enable SSL automatically (Cloudflare manages this)
- Set up custom domain in Pages dashboard

**Step 6: Set Up Analytics (Optional)**
- Enable Cloudflare Web Analytics in dashboard
- Add tracking snippet to `<head>` (if using privacy-focused analytics)

---

## Performance Targets

### Core Web Vitals Goals

| Metric | Target | Actual (Post-Launch) |
|--------|--------|---------------------|
| LCP (Largest Contentful Paint) | < 2.5s | TBD |
| FID (First Input Delay) | < 100ms | TBD |
| CLS (Cumulative Layout Shift) | < 0.1 | TBD |
| TTI (Time to Interactive) | < 1.5s | TBD |

### Bundle Size Budgets

| Asset Type | Maximum Size |
|------------|--------------|
| HTML | 15 KB |
| CSS | 10 KB |
| JavaScript | 0 KB (zero JS by default) |
| Total Page Weight | < 100 KB |

### Loading Strategy

1. **Initial Load (0-100ms):**
   - HTML parsing
   - CSS application
   - Static content rendering

2. **Critical Assets (100-300ms):**
   - Font loading (preloaded)
   - Above-fold content painted

3. **Progressive Enhancement (300-500ms):**
   - Images lazy-loaded as user scrolls
   - Filter functionality initializes on interaction

### Caching Strategy

| Resource | Cache Duration | Method |
|----------|----------------|--------|
| Static assets (CSS, JS, images) | 1 year | Long-term cache with immutable flag |
| HTML pages | 1 day | Standard cache |
| Dynamic content | No cache | Server-side generated |

---

## Appendices

### Appendix A: Project Data Structure

Complete list of 21 repositories to be displayed:

**Hero Projects (First 4):**
1. Ngobrol — Rust chat application
2. FinTrack — Go + TypeScript fintech full-stack
3. ERP — Enterprise Resource Planning (Go)
4. Fraud Guard API — Fraud detection API

**Expandable Grid (Remaining 17):**
5. asr-javanese-api — Javanese speech recognition
6. finance-management — Finance management system
7. web-sti-api — Educational institution API
8. ... (list all 21 with metadata)

### Appendix B: Content Writing Guidelines

**Tone:** Professional yet approachable, technical but accessible  
**Voice:** First-person plural ("We build...", "Our solutions...")  
**Length:** Keep it concise—clients want quick answers, not essays

**For Project Descriptions:**
- Problem statement: 1 sentence (the pain point)
- Solution approach: 2 sentences (how you solved it)
- Impact/result: 1 sentence (outcome achieved)

### Appendix C: Future Enhancements (Out of Scope)

These items are NOT part of v1 but could be added later:

- [ ] Blog section for technical articles
- [ ] Client testimonials/testimonial carousel
- [ ] Case study pages for top 3 projects
- [ ] Contact form backend with email notification
- [ ] Live demo embeds for select projects
- [ ] Multi-language support (Indonesian/English)
- [ ] Advanced filtering (tech stack, year, complexity)

---

## Revision History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2026-01-03 | 1.0 | inihikam | Initial design specification |

---

## Approval Checklist

- [x] User reviewed and approved design concept
- [x] All sections defined and detailed
- [x] Tech stack confirmed
- [x] Content strategy validated
- [x] Deployment plan documented

**Next Step:** Create implementation plan via writing-plans skill

---

*End of Document*
