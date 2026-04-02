/**
 * Whitespace Design System
 *
 * Single source of truth extracted from Figma file "Whitespace V3_Web (Copy)".
 * All values come from actual Figma node measurements — do NOT guess or approximate.
 *
 * Usage:
 *   import { colors, typography, layout, nav, footer } from "@/data/design-system";
 *
 * When building a new page:
 *   1. Use these tokens for colors, fonts, spacing — no need to re-query Figma.
 *   2. Only query Figma for PAGE-SPECIFIC data: text content, images, section layout positions.
 *   3. Export page screenshot as baseline for Playwright visual comparison.
 *
 * IMPORTANT — Tailwind JIT class generation:
 *   Tailwind scans source files for COMPLETE, LITERAL class strings only.
 *   Dynamic interpolation like `h-[${value}px]` will NOT generate CSS.
 *   ✅ Use pre-built class strings: layout.containerPx, typography.heroHeading.responsive
 *   ✅ Use numeric values for non-Tailwind purposes: calculations, inline styles, tests
 *   ❌ Never interpolate numeric values into Tailwind class brackets in JSX
 */

/* ════════════════════════════════════════════════════════════
   COLORS
   Source: Figma fills extracted via get_node
   ════════════════════════════════════════════════════════════ */

export const colors = {
  /** #3754ED — Logo, CTAs, links, active nav, headings, accent bars, hero heading */
  primaryBlue: "#3754ED",
  /** #0D1B6E — Secondary dark-blue accents (rarely used) */
  darkBlue: "#0D1B6E",
  /** #141414 — Body text, dark section bgs, footer bg, navbar text, card bgs */
  dark: "#141414",
  /** #E9EBEB — Light gray section backgrounds */
  gray: "#E9EBEB",
  /** #C8CCCC — Darker gray (Why Clarity Matters right panel, separator lines) */
  grayDark: "#C8CCCC",
  /** #FFFFFF — Main page background */
  white: "#FFFFFF",
} as const;

/** Tailwind class mappings for each color token */
export const colorClasses = {
  primaryBlue: "text-primary-blue",
  dark: "text-dark",
  gray: "bg-gray",
  grayDark: "bg-gray-dark",
  white: "text-white",
  bgDark: "bg-dark",
  bgBlue: "bg-primary-blue",
  bgGray: "bg-gray",
  bgWhite: "bg-white",
} as const;

/* ════════════════════════════════════════════════════════════
   TYPOGRAPHY
   Source: Figma text node styles (fontSize, fontFamily, fontWeight)
   Font: Gramatika (commercial) → DM Sans (web fallback)
   ════════════════════════════════════════════════════════════ */

export const typography = {
  /** Hero heading — Homepage only */
  heroHeading: {
    fontSize: 100,
    fontWeight: "normal" as const,
    lineHeight: 1.2,
    color: colors.primaryBlue,
    /** Responsive: 40 → 56 → 72 → 100 */
    responsive: "text-[40px] leading-[1.2] text-primary-blue md:text-[56px] lg:text-[72px] xl:text-[100px]",
  },
  /** Section headings (What We Do, Why Clarity Matters, etc.) */
  sectionHeading: {
    fontSize: 48,
    fontWeight: "normal" as const,
    lineHeight: 1.15,
    color: { light: colors.dark, dark: colors.white },
    /** Responsive: 28 → 36 → 48 */
    responsiveLight: "text-[28px] leading-[1.15] text-dark md:text-[36px] xl:text-[48px]",
    responsiveDark: "text-[28px] leading-[1.15] text-white md:text-[36px] xl:text-[48px]",
  },
  /** Sub-headings (service titles, card titles, client type names) */
  subHeading: {
    fontSize: 32,
    fontWeight: "normal" as const,
    lineHeight: 1.15,
    color: { blue: colors.primaryBlue, dark: colors.dark, white: colors.white },
    responsiveBlue: "text-[24px] leading-[1.15] text-primary-blue xl:text-[32px]",
    responsiveDark: "text-[24px] leading-[1.15] text-dark xl:text-[32px]",
    responsiveWhite: "text-[24px] leading-[1.15] text-white xl:text-[32px]",
  },
  /** Quote / tagline strips */
  quote: {
    fontSize: 32,
    fontWeight: "normal" as const,
    lineHeight: 1,
    color: colors.white,
    responsive: "text-[18px] leading-[1] text-white md:text-[24px] xl:text-[32px]",
  },
  /** Framework subtitle / larger descriptive text */
  subtitle: {
    fontSize: 24,
    lineHeight: 1.5,
    color: colors.white,
    responsive: "text-[18px] leading-[1.5] text-white xl:text-[24px]",
  },
  /** Body text */
  body: {
    fontSize: 20,
    lineHeight: 1.5,
    color: { dark: colors.dark, white: colors.white, muted: `${colors.white}CC` },
    responsiveDark: "text-[16px] leading-[1.5] text-dark xl:text-[20px]",
    responsiveWhite: "text-[16px] leading-[1.5] text-white xl:text-[20px]",
    responsiveMuted: "text-[16px] leading-[1.5] text-white xl:text-[20px]",
  },
  /** Navigation items */
  nav: {
    fontSize: 20,
    lineHeight: 1.4,
    color: colors.dark,
    className: "text-[20px] leading-[1.4] text-dark",
  },
  /** CTA heading */
  ctaHeading: {
    fontSize: 64,
    fontWeight: "normal" as const,
    lineHeight: 1.1,
    color: colors.white,
    responsive: "text-[32px] leading-[1.1] text-white md:text-[48px] xl:text-[64px]",
  },
  /** CTA subtitle */
  ctaSubtitle: {
    fontSize: 36,
    lineHeight: 1.4,
    color: colors.white,
    responsive: "text-[18px] leading-[1.4] text-white md:text-[24px] xl:text-[36px]",
  },
  /** Breadcrumb */
  breadcrumb: {
    fontSize: 16,
    color: colors.dark,
    className: "text-[16px]",
  },
  /** Card title (Selected Transformations) */
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold" as const,
    lineHeight: 1.3,
    className: "text-[24px] font-bold leading-[1.3] text-dark",
  },
  /** Framework name */
  frameworkName: {
    fontSize: 20,
    fontWeight: "bold" as const,
    lineHeight: 1.3,
    className: "text-[20px] font-bold leading-[1.3] text-white",
  },
  /** Hero description (on dark bg) */
  heroDescription: {
    fontSize: 30,
    lineHeight: 1.5,
    color: colors.white,
    responsive: "text-[18px] leading-[1.5] text-white md:text-[22px] xl:text-[30px]",
  },
} as const;

/* ════════════════════════════════════════════════════════════
   LAYOUT
   Source: Figma absoluteBoundingBox measurements
   ════════════════════════════════════════════════════════════ */

export const layout = {
  /** Design canvas width */
  canvasWidth: 1920,
  /** Max content width */
  maxWidth: 1920,
  /** Container horizontal padding (per side) at each breakpoint */
  padding: {
    mobile: 20,   // < 768px
    tablet: 40,   // md (768px+)
    laptop: 60,   // lg (1024px+)
    desktop: 120, // xl (1280px+)
    wide: 243,    // min-[1920px] — exact Figma measurement
  },
  /** Tailwind responsive padding utility */
  containerPx: "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] min-[1920px]:px-[243px]",

  /** Navbar */
  navbar: {
    height: 112,
    bgOpacity: 0.9,
    /** Outer nav element */
    className: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm",
    /** Inner container — use directly, no interpolation needed */
    innerClassName: "mx-auto flex h-[112px] max-w-[1920px] items-center justify-between px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] min-[1920px]:px-[243px]",
  },

  /** Section vertical padding */
  sectionPy: "py-[80px]",

  /** Standard section wrapper — max width + padding */
  sectionContainer: "mx-auto max-w-[1920px] py-[80px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] min-[1920px]:px-[243px]",

  /** Border radius tokens */
  radius: {
    card: 16,
    cta: 16,
    button: 9999, // full rounded
  },
} as const;

/* ════════════════════════════════════════════════════════════
   SECTION BACKGROUND PATTERNS
   Source: Figma rectangle fills mapped to Y positions
   Re-usable for any page that follows the alternating pattern.
   ════════════════════════════════════════════════════════════ */

export const sectionBg = {
  white: "bg-white",
  gray: "bg-gray",       // #E9EBEB — light gray alternating sections
  grayDark: "bg-gray-dark", // #C8CCCC — darker gray panel (e.g. Why Clarity right)
  dark: "bg-dark",       // #141414 — dark sections, footer, cards
  blue: "bg-primary-blue", // #3754ED — CTA banner, accent bars
} as const;

/* ════════════════════════════════════════════════════════════
   NAVIGATION DATA
   Source: Figma Component 7 (node 120:526) + IMPLEMENTATION_PLAN.md
   Centralised so Navbar, Footer, sitemap all use the same source.
   ════════════════════════════════════════════════════════════ */

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown: NavDropdownItem[] | null;
}

export const navigation: NavItem[] = [
  {
    label: "Who We Are",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Approach", href: "/about/approach" },
      { label: "Ecosystem", href: "/about/ecosystem" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    dropdown: [
      { label: "Brand Strategy", href: "/services#brand-strategy" },
      { label: "Brand Experience & Expression", href: "/services#brand-experience" },
      { label: "Digital Brand Activation", href: "/services#digital-activation" },
      { label: "BD-CVJ", href: "/services#bd-cvj" },
      { label: "Strategic Advisory", href: "/services#strategic-advisory" },
    ],
  },
  {
    label: "Our Works",
    href: "/works",
    dropdown: [
      { label: "Brand Strategy", href: "/works?category=brand-strategy" },
      { label: "Brand Experience & Expression", href: "/works?category=brand-experience" },
      { label: "BD-CVJ", href: "/works?category=bd-cvj" },
      { label: "Digital Brand Activation", href: "/works?category=digital-activation" },
      { label: "Strategic Advisory", href: "/works?category=strategic-advisory" },
      { label: "Design Led", href: "/works?category=design-led" },
    ],
  },
  {
    label: "Our Perspectives",
    href: "/insights",
    dropdown: [
      { label: "Insight", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    label: "Work With Us",
    href: "/contact",
    dropdown: null,
  },
];

/* ════════════════════════════════════════════════════════════
   FOOTER DATA
   Source: Figma text nodes 120:480–120:494
   ════════════════════════════════════════════════════════════ */

export const footer = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Ecosystem", href: "/about/ecosystem" },
    { label: "Contact", href: "/contact" },
  ],
  legalLinks: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  socialLinks: [
    { label: "WhatsApp", icon: "/images/social-whatsapp.svg", href: "#" },
    { label: "LinkedIn", icon: "/images/social-linkedin.svg", href: "#" },
    { label: "Facebook", icon: "/images/social-facebook.svg", href: "#" },
    { label: "Twitter", icon: "/images/social-twitter.svg", href: "#" },
    { label: "Instagram", icon: "/images/social-instagram.svg", href: "#" },
  ],
  address: {
    company: "PT Ruang Putih Kreasi",
    street: "Jl. Tebet Barat Raya No. 21",
    city: "Kec. Tebet, Jakarta Selatan 12810, Indonesia",
  },
  phone: {
    office: "+62 835 4099",
    mobile: "+62 812 3456 789",
  },
  tagline: "Clarity that moves brands forward.",
  copyright: "© Whitespace 2026",
} as const;

/* ════════════════════════════════════════════════════════════
   FIGMA FRAME IDS
   Quick lookup for each page's Figma frame node ID.
   Used by: Figma MCP get_node, get_screenshot, save_screenshots
   ════════════════════════════════════════════════════════════ */

export const figmaFrames = {
  homepage:                  { nodeId: "1:2",       size: "1920x6220" },
  aboutUs:                   { nodeId: "242:339",   size: "1920x7424" },
  ourApproach:               { nodeId: "242:987",   size: "1920x4481" },
  ecosystem:                 { nodeId: "255:1359",  size: "1920x5103" },
  ourServices:               { nodeId: "291:405",   size: "1920x5825" },
  insightListing:            { nodeId: "346:1703",  size: "1920x3192" },
  caseStudiesListing:        { nodeId: "501:1870",  size: "1920x2957" },
  insightArticle:            { nodeId: "349:2690",  size: "1920x7075" },
  worksStrategy:             { nodeId: "294:2220",  size: "1920x1520" },
  worksBrandExperience:      { nodeId: "308:996",   size: "1920x2341" },
  worksDigitalActivation:    { nodeId: "308:1407",  size: "1920x1519" },
  worksBdCvj:                { nodeId: "308:1870",  size: "1920x1913" },
  worksStrategyAdvisory:     { nodeId: "308:2272",  size: "1920x2341" },
  worksBrandLed:             { nodeId: "308:2676",  size: "1920x2341" },
  workWithUs:                { nodeId: "355:3002",  size: "1920x4472" },
  search:                    { nodeId: "451:2696",  size: "1920x441"  },
  searchResult:              { nodeId: "451:2960",  size: "1920x1842" },
  caseStudyBlog:             { nodeId: "513:2012",  size: "1920x3184" },
  caseStudyKitabisa:         { nodeId: "552:2044",  size: "1920x3321" },
  caseStudySalingJaga:       { nodeId: "552:2282",  size: "1920x3321" },
  caseStudySyailendra:       { nodeId: "552:2391",  size: "1920x3674" },
} as const;

/* ════════════════════════════════════════════════════════════
   EXPORTED ASSETS REGISTRY
   Tracks which Figma nodes have already been exported as images.
   Prevents duplicate exports and helps locate existing assets.
   ════════════════════════════════════════════════════════════ */

export const exportedAssets = {
  logos: {
    blue:        { path: "/images/logo-blue.svg",     figmaNode: "120:469", note: "Navbar logo — fill #3754ED" },
    white:       { path: "/images/logo.svg",          figmaNode: "120:469", note: "Footer logo — fill white (use invert filter)" },
    footerCopy:  { path: "/images/logo-footer.svg",   figmaNode: "120:469", note: "Duplicate of white logo" },
    mark:        { path: "/images/whitespace-mark.svg",figmaNode: "195:449", note: "Square W mark icon" },
  },
  social: {
    whatsapp:  { path: "/images/social-whatsapp.svg",  figmaNode: "120:495" },
    linkedin:  { path: "/images/social-linkedin.svg",  figmaNode: "120:500" },
    facebook:  { path: "/images/social-facebook.svg",  figmaNode: "120:503" },
    twitter:   { path: "/images/social-twitter.svg",   figmaNode: "120:506" },
    instagram: { path: "/images/social-instagram.svg", figmaNode: "120:509" },
  },
  homepage: {
    heroBg:           { path: "/images/hero-bg.png",          figmaNode: "120:358", note: "Dark bg with blue W pattern vectors" },
    clarity3dArt:     { path: "/images/clarity-3d-art.png",   figmaNode: "120:411", note: "Abstract 3D artwork for Why Clarity Matters" },
    workBlog:         { path: "/images/work-blog.png",        figmaNode: "355:3605", note: "Full card component — use aspect-[83/33] to crop" },
    workKitabisa:     { path: "/images/work-kitabisa.png",    figmaNode: "120:521", note: "Full card component — use aspect-[83/33] to crop" },
    workSalingjaga:   { path: "/images/work-salingjaga.png",  figmaNode: "120:522", note: "Full card component — use aspect-[83/33] to crop" },
    workBibet:        { path: "/images/work-bibet.png",       figmaNode: "120:523", note: "Full card component — use aspect-[83/33] to crop" },
  },
  about: {
    heroImage:       { path: "/images/about-hero-image.png",       figmaNode: "242:877", note: "Full-width binoculars hero image" },
    ourStoryBg:      { path: "/images/about-our-story-bg.png",     figmaNode: "242:983", note: "Our Story dark section background" },
    clarityArtwork:  { path: "/images/about-clarity-artwork.png",  figmaNode: "242:884", note: "Blue geometric artwork for Clarity section" },
    storyIcon:       { path: "/images/about-story-icon.svg",       figmaNode: "242:979", note: "W mark icon in Our Story section" },
    teamDimas:       { path: "/images/team-dimas.png",             figmaNode: "242:908", note: "Dimas Mardjono portrait" },
    teamDjoko:       { path: "/images/team-djoko.png",             figmaNode: "242:924", note: "Djoko Susilo portrait" },
    teamShendy:      { path: "/images/team-shendy.png",            figmaNode: "242:943", note: "Shendy Adam portrait" },
    teamZuraida:     { path: "/images/team-zuraida.png",           figmaNode: "242:956", note: "Zuraida portrait" },
    linkedinIcon:    { path: "/images/icon-linkedin.svg",          figmaNode: "242:915", note: "LinkedIn icon for team cards" },
  },
  approach: {
    heroImage:       { path: "/images/approach-hero-image.png",    figmaNode: "253:1242", note: "Architecture/building hero image" },
  },
} as const;

/* ════════════════════════════════════════════════════════════
   COMPONENT PATTERNS
   Reusable layout patterns discovered during implementation.
   Copy these class strings when building similar sections.
   ════════════════════════════════════════════════════════════ */

export const patterns = {
  /** Portfolio card image container — crops exported card PNGs to show only image area */
  cardImage: "relative aspect-[83/33] overflow-hidden rounded-[16px]",

  /** Dark rounded card (Who We Work With style) */
  darkCard: "rounded-[16px] bg-dark px-[32px] py-[40px] xl:px-[56px] xl:py-[60px]",

  /** Blue accent bar (quote strip) */
  accentBar: "inline-block bg-primary-blue px-[16px] py-[14px]",

  /** CTA banner — rounded blue box, centered text */
  ctaBanner: "mx-auto max-w-[1440px] rounded-[16px] bg-primary-blue px-[40px] py-[60px] text-center",

  /** Read More / View All pill button */
  pillButtonBlue: "inline-flex items-center gap-[12px] rounded-full bg-primary-blue px-[24px] py-[10px] text-[20px] font-bold text-white transition-opacity hover:opacity-90",
  pillButtonWhite: "inline-flex items-center gap-[12px] rounded-full bg-white px-[24px] py-[10px] text-[20px] font-bold text-primary-blue transition-opacity hover:opacity-90",

  /** Vertical separator line between columns */
  separatorLine: "absolute -left-[40px] top-[8px] hidden h-[calc(100%-16px)] w-[1px] bg-gray-dark/60 xl:block",

  /** 4-column service grid */
  fourColGrid: "grid grid-cols-1 gap-[40px] md:grid-cols-2 xl:grid-cols-4 xl:gap-[80px]",

  /** 2x2 portfolio grid */
  twoByTwoGrid: "grid grid-cols-1 gap-x-[40px] gap-y-[50px] md:grid-cols-2",

  /** Why Clarity Matters — flex layout */
  twoColFlex: "flex min-h-[734px] flex-col lg:flex-row",
} as const;
