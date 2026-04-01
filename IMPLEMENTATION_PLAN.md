# Whitespace Prototype — Implementation Plan

> Comprehensive frontend prototype for Whitespace company profile website.
> This document serves as the master reference for all implementation sessions.

---

## 1. Project Context

- **Client**: Whitespace — brand strategy & consulting firm
- **Deliverable**: Clickable, pixel-perfect frontend prototype with CMS admin panel
- **Delivery method**: Deployed to Vercel — client receives a live URL
- **Tech stack**: Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Design source**: Figma MCP Bridge (primary) + exported PNGs (secondary)
- **Phase**: Prototype only — no real backend, all dynamic content uses mock JSON data
- **Production**: Will be rebuilt in Laravel later; this prototype serves as a living visual spec

---

## 2. Design System (from Figma)

### 2.1 Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#3754ED` | Logo, CTAs, links, active nav, headings, accent bars |
| Dark Blue | `#0D1B6E` | Secondary dark blue accents |
| Dark | `#141414` | Body text, dark sections, footer, navbar text |
| Gray | `#E9EBEB` | Section backgrounds |
| Gray Dark | `#C8CCCC` | Secondary gray backgrounds |
| White | `#FFFFFF` | Main page background |
| Navbar White | `#FFFFFF` at 90% opacity | Navbar background |

### 2.2 Typography

| Element | Size | Font | Color |
|---------|------|------|-------|
| Hero heading (Homepage) | 100px | Gramatika Bold | #3754ED |
| Section headings | 48px | Gramatika Bold | #141414 or #FFFFFF |
| Sub-headings / card titles | 32px | Gramatika | #3754ED or #141414 |
| Quote/tagline strips | 24px | Gramatika | #FFFFFF on blue bg |
| Body text | 20px | Gramatika | #141414 or #FFFFFF |
| Navigation items | 20px | Gramatika | #141414 |
| Footer links | 20px | Gramatika | #FFFFFF |
| Breadcrumbs | 16px | Gramatika | varies |
| CTA heading | 64px | Gramatika Bold | #FFFFFF |
| CTA subtitle | 36px | Gramatika | #FFFFFF |

**Web fallback font**: DM Sans (Google Fonts) — closest free match to Gramatika.

### 2.3 Layout

- Design canvas: 1920px wide
- Content container: ~1440px max-width, ~120px horizontal padding
- Navbar height: 112px, white bg at 90% opacity, sticky
- Footer: dark bg #141414

### 2.4 Shared Layout Pattern

```
┌─────────────────────────────────────────┐
│  Navbar (112px, white 90% opacity)      │
│  Logo "WHITESPACE" (blue) | Nav | Search│
├─────────────────────────────────────────┤
│  Hero Section (varies per page)         │
│  Breadcrumb on inner pages              │
├─────────────────────────────────────────┤
│  Page Content (sections with            │
│  alternating white/gray/blue/dark bgs)  │
├─────────────────────────────────────────┤
│  CTA Banner (blue bg, optional)         │
│  "Start with Clarity" 64px              │
├─────────────────────────────────────────┤
│  Footer (dark #141414)                  │
│  3-col links | Social icons | Info      │
│  "Clarity that moves brands forward."   │
└─────────────────────────────────────────┘
```

### 2.5 Navigation Structure

**Nav items**: Who We Are | Our Services | Our Works | Our Perspectives | Work With Us | Search icon

| Nav Item | Dropdown Items |
|----------|---------------|
| Who We Are | About Us, Our Approach, Ecosystem |
| Our Services | Brand Strategy, Brand Experience & Expression, Digital Activation, BD-CVJ, Strategic Advisory |
| Our Works | Brand Strategy, Brand Experience & Expression, BD-CVJ, Digital Brand Activation, Strategic Advisory, Design Led |
| Our Perspectives | Insight, Case Studies |
| Work With Us | Contact Form, Direct Contact, FAQ |

---

## 3. Implementation Phases

### Phase 1: Foundation
> Shared components + layout that all pages depend on.

1. Init Next.js + Tailwind + shadcn/ui
2. Configure global styles (colors, fonts, spacing from Figma)
3. Build Navbar (with all dropdown states, mobile hamburger)
4. Build Footer (dark bg, 3-col links, social icons, tagline)
5. Build Breadcrumb component
6. Build CTABanner component
7. Create `(public)` route group layout with Navbar + Footer
8. Create `admin` layout with sidebar placeholder
9. Copy SVG/image assets to `public/images/`

### Phase 2: Static Pages
> 3 static pages + sub-pages — content from Figma.

**For each page**: Call `get_node` with the frame ID, extract exact text, sizes, colors, then build.

1. **Homepage** (`/`) — Hero, What We Do, Why Clarity Matters, Who We Work With, Our Frameworks, Selected Transformations, CTA
2. **About Us** (`/about`) — Hero, Our Story, What Drives Us, Clarity section, What Makes Us Different, Leadership
3. **Our Approach** (`/about/approach`) — Hero, System of Clarity, How We Shape Direction, How We Work, How We Collaborate
4. **Ecosystem** (`/about/ecosystem`) — Hero, Network, Collaborate, Orchestrating, Ecosystem Matters, Clear Roles
5. **Our Services** (`/services`) — Hero, Brand Strategy, BD-CVJ, Brand Experience, Digital Activation, Strategic Advisory

### Phase 3: Dynamic Components + Mock Data
> Reusable cards, filters, forms + mock JSON data files.

1. Create mock data files (`works.json`, `insights.json`, `case-studies.json`, `faq.json`)
2. Build PortfolioCard (hover: grayscale→color, title reveal)
3. Build ArticleCard (image + date + title)
4. Build CaseStudyCard (large image + title + description)
5. Build FilterPills (active/inactive states)
6. Build LoadMoreButton
7. Build FAQAccordion
8. Build ContactForm with validation
9. Build SearchBar

### Phase 4: Dynamic Pages
> Listing + detail pages using mock data.

1. Our Works Listing (`/works`) + Detail (`/works/[slug]`)
2. Insight Listing (`/insights`) + Detail (`/insights/[slug]`)
3. Case Studies Listing (`/case-studies`) + Detail (`/case-studies/[slug]`)
4. Contact / Enquiry (`/contact`) with FAQ section
5. Search (`/search`) with results

### Phase 5: CMS Admin Panel
> Functional admin prototype with shadcn/ui.

1. Admin layout (sidebar + content area)
2. Dashboard with stats cards
3. Works CRUD (table + forms)
4. Insights CRUD (table + forms + rich text)
5. Case Studies CRUD (table + forms)
6. FAQ CRUD (sortable list + forms)
7. Enquiries management (table + detail view)

### Phase 6: Polish & Deploy
> QA, responsive, deploy.

1. Responsive testing: Desktop (1440px), Tablet (768px), Mobile (375px)
2. Navigation mobile menu
3. Smooth transitions and hover animations
4. Cross-page link verification
5. SEO meta tags
6. Deploy to Vercel

---

## 4. Quality Checklist

Before marking any page as complete:

- [ ] Figma `get_node` data used for exact text, sizes, colors
- [ ] Font sizes match Figma exactly (100px, 48px, 32px, 24px, 20px, 16px)
- [ ] Colors match tokens (#3754ED, #141414, #E9EBEB, #0D1B6E)
- [ ] Section backgrounds match Figma rectangles
- [ ] All interactive states work (hover, active, focus)
- [ ] Responsive at 3 breakpoints
- [ ] Navigation links correct
- [ ] Images load correctly
- [ ] No console errors
- [ ] Build passes with 0 errors
