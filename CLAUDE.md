# Whitespace - Company Profile Website

## Project Overview
Comprehensive frontend prototype for **Whitespace** (brand strategy & consulting firm). Built from Figma design exports. The goal is a professional, production-ready prototype that demonstrates all pages and interactions — pixel-perfect to the designs.

This is a prototype phase. No backend/CMS implementation yet — focus purely on frontend fidelity, interactions, and responsiveness. The prototype will later serve as a living reference for the production Laravel build.

## Tech Stack
- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** for CMS admin panel components
- Mock/dummy data via JSON files in `src/data/`
- Deployment target: **Vercel** (client receives a live URL)

## Design Source

### Figma MCP Bridge (Primary)
The Figma MCP Bridge is configured in `.mcp.json`. It connects directly to the running Figma plugin via WebSocket — no rate limits.

**Available MCP tools:**
- `get_metadata` — file name, pages, current page
- `get_design_context` — summarized tree structure (use `depth` param)
- `get_node` — get specific node by ID (use colon format e.g. `242:339`)
- `get_styles` — all local styles
- `get_variable_defs` — design tokens
- `get_screenshot` — export screenshot of nodes as base64
- `get_selection` — get currently selected nodes

**Figma file**: "Whitespace V3_Web (Copy)"

**IMPORTANT workflow for using Figma MCP:**
1. Before building any page, call `get_node` with the frame's node ID to get exact text content, font sizes, colors, positions
2. Node results can be very large — they may be saved to a file. Read the file and parse JSON to extract what you need
3. Use `get_screenshot` for visual reference of specific components
4. Always match the EXACT font sizes, colors, and spacing from the Figma data

### Exporting Assets Directly from Figma
Use `save_screenshots` to export any Figma node directly to the filesystem as PNG or SVG — **no manual export needed**.

```
save_screenshots({
  items: [
    { nodeId: "195:413", outputPath: "public/images/logo.svg", format: "SVG" },
    { nodeId: "120:345", outputPath: "public/images/hero.png", format: "PNG" }
  ],
  scale: 2
})
```

- Use **SVG** format for icons, logos, decorative vectors, patterns
- Use **PNG** format for photographs, complex raster images
- `outputPath` is relative to the project root (MCP server working directory)
- `scale: 2` for retina-quality raster exports
- Export individual elements by their node ID — find IDs via `get_node` or `get_design_context`
- **Always export needed assets before building a page** — do not use placeholder divs when the real asset is available in Figma

**Known frame IDs:**

| Frame | Node ID | Size |
|-------|---------|------|
| Homepage | `1:2` | 1920x6220 |
| Who We Are - About Us | `242:339` | 1920x7424 |
| Who We Are - Our Approach | `242:987` | 1920x4481 |
| Who We Are - Ecosystem | `255:1359` | 1920x5103 |
| Our Services | `291:405` | 1920x5825 |
| Our Perspective - Insight | `346:1703` | 1920x3192 |
| Our Perspective - Case Studies | `501:1870` | 1920x2957 |
| Our Perspective - Insight - Article | `349:2690` | 1920x7075 |
| Our Works - Brand Strategy | `294:2220` | 1920x1520 |
| Our Works - Brand Experience | `308:996` | 1920x2341 |
| Our Works - Digital Brand Activation | `308:1407` | 1920x1519 |
| Our Works - BD-CVJ | `308:1870` | 1920x1913 |
| Our Works - Strategy Advisory | `308:2272` | 1920x2341 |
| Our Works - Brand Led | `308:2676` | 1920x2341 |
| Work With Us | `355:3002` | 1920x4472 |
| Search | `451:2696` | 1920x441 |
| Search - Result | `451:2960` | 1920x1842 |
| Case Study - B-Log | `513:2012` | 1920x3184 |
| Case Study - KitaBisa | `552:2044` | 1920x3321 |
| Case Study - SalingJaga | `552:2282` | 1920x3321 |
| Case Study - Syailendra | `552:2391` | 1920x3674 |

### Exported PNGs (Secondary Visual Reference)
PNG exports of full pages are available at `C:\Users\fareza\Desktop\client-company-profile\figma\pages\` — use these as visual cross-reference when needed. The `figma/components/` folder has UI component states (hover, active, etc.).

## Design Tokens (from Figma)
- **Primary Blue**: `#3754ED`
- **Dark Blue**: `#0D1B6E`
- **Dark/Black**: `#141414` (text, dark sections, footer)
- **Gray**: `#E9EBEB` (section backgrounds)
- **Gray Dark**: `#C8CCCC`
- **White**: `#FFFFFF` (main background)
- **Navbar bg**: `#FFFFFF` at 90% opacity
- **Font**: Gramatika (commercial) — use DM Sans as web fallback
- **Design width**: 1920px
- **Container max-width**: ~1440px with ~120px side padding

### Typography Scale (from Figma)
| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Hero heading | 100px | Bold | #3754ED |
| Section heading | 48px | Bold | #141414 or #FFFFFF |
| Sub-heading | 32px | Regular | #3754ED or #141414 |
| Quote/tagline strip | 24px | Regular | #FFFFFF |
| Body text | 20px | Regular | #141414 or #FFFFFF |
| Nav items | 20px | Regular | #141414 |
| Breadcrumb | 16px | Regular | varies |
| CTA heading | 64px | Bold | #FFFFFF |
| CTA subtitle | 36px | Regular | #FFFFFF |

## Site Structure & Pages

11 pages total — 3 static, 8 dynamic (will connect to CMS in a later phase).

**Static Pages** (fixed content):
- **Home** — Multisection landing page
- **Who We Are** — About Us, Our Approach, Ecosystem
- **Our Services** — Brand Strategy, BD-CVJ, Brand Experience & Expression, Digital Brand Activation, Strategic Advisory

**Dynamic Pages** (will be CMS-managed later — use dummy/placeholder data for the prototype):
- **Our Works — Listing** — Portfolio/gallery list, filterable by service category
- **Our Works — Detail** — Individual project detail page
- **Insight — Listing** — Article listing page
- **Insight — Detail** — Individual article page with rich content
- **Case Studies — Listing** — Case study listing page
- **Case Studies — Detail** — Individual case study detail page
- **FAQ** — Frequently Asked Questions (accordion style)
- **Contact / Enquiry** — Form with enquiry type dropdown, direct contact info

**Interactive Features** (must be functional in the prototype):
- Navigation mega-menu with dropdowns per section
- Search bar with search results page
- Contact/Enquiry form (frontend validation, enquiry type dropdown)
- Portfolio filtering by service category
- Pagination / Load More on listing pages
- Card hover states (portfolio cards, article cards)
- Responsive: Desktop, Tablet, Mobile

**CMS Admin Panel** (`/admin/*` routes — no Figma design, use shadcn/ui):
- **Dashboard** — Overview stats (total works, articles, enquiries, etc.)
- **Our Works Module** — CRUD portfolio items with image management
- **Insight Module** — CRUD articles/blog with rich text editor
- **Case Studies Module** — CRUD case studies
- **FAQ Module** — CRUD FAQ items
- **Enquiry Module** — View & manage submitted contact form entries

Admin panel is prototype-only (no real backend). Use local state or mock data to demonstrate CRUD flows. Keep the admin UI clean and functional using shadcn/ui — it does NOT need to match the Whitespace public site branding.

## Development Guidelines

### Design-to-Code Workflow
1. Call `get_node` with the target frame's node ID to get exact design data
2. Parse the returned JSON to extract: text content, font sizes, colors, positions, section backgrounds
3. Cross-reference with the exported PNGs in the old project's `figma/` directory
4. Copy needed SVG/image assets to `public/images/`
5. Build the page matching exact Figma values — no guessing

### Code Standards
- Component-based architecture with reusable components
- Responsive design - mobile-first approach
- Semantic HTML for accessibility
- Clean, maintainable CSS/styling
- Optimize images and assets for web performance

### Project Structure
```
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx                 # Public layout (Navbar + Footer)
│   │   ├── page.tsx                   # Home
│   │   ├── about/                     # Who We Are (About Us, Our Approach, Ecosystem)
│   │   ├── services/                  # Our Services
│   │   ├── works/                     # Our Works listing + [slug] detail
│   │   ├── insights/                  # Insight listing + [slug] detail
│   │   ├── case-studies/              # Case Studies listing + [slug] detail
│   │   ├── contact/                   # Contact / Enquiry + FAQ
│   │   └── search/                    # Search + results
│   └── admin/                         # CMS Admin Panel (shadcn/ui)
│       ├── layout.tsx                 # Admin layout (sidebar)
│       ├── page.tsx                   # Dashboard
│       ├── works/                     # CRUD portfolio
│       ├── insights/                  # CRUD articles
│       ├── case-studies/              # CRUD case studies
│       ├── faq/                       # CRUD FAQ
│       └── enquiries/                 # View/manage submissions
├── components/
│   ├── layout/                        # Navbar, Footer, Breadcrumb, PageHero, CTABanner
│   └── ui/                           # shadcn/ui components
├── data/                              # Mock/dummy data as JSON files
└── lib/                               # Utilities
```

### File Organization
- Group by feature/page when possible
- Keep components small and focused
- Separate concerns: layout, styling, logic
- Public site components and admin components should be kept separate

## Available Workflows
- `/feature-dev` - Use for building new pages/sections from design PNGs
- `/code-review` - Use for reviewing PRs before merge
- `/simplify` - Use after implementation to clean up code
