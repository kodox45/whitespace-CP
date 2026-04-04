/**
 * Mock searchable content for the Search page prototype.
 * Each entry represents a page/section that can appear in search results.
 * In production, this would be replaced by a CMS full-text search API.
 */

export interface SearchEntry {
  /** Page/section title shown in results (e.g. "Who We Are - About Us") */
  title: string;
  /** The page path for linking */
  href: string;
  /** Searchable body content — displayed as excerpt in results */
  content: string;
}

export const searchEntries: SearchEntry[] = [
  {
    title: "Who We Are - About Us",
    href: "/about",
    content:
      "Whitespace is a brand strategy and consulting firm that helps organizations build clarity, alignment, and momentum. We work with leaders who understand that brand identity is not just a visual exercise but a strategic foundation for growth. Our team combines deep strategic thinking with creative precision to deliver brand identity solutions that drive measurable business impact.",
  },
  {
    title: "Who We Are - Our Approach",
    href: "/about/approach",
    content:
      "Our approach is rooted in strategic clarity. We believe that every brand identity must be built on a foundation of deep understanding — of the market, the audience, and the organization itself. We use a structured methodology that moves from insight to strategy to expression, ensuring that every brand identity decision is intentional, aligned, and sustainable.",
  },
  {
    title: "Who We Are - Ecosystem",
    href: "/about/ecosystem",
    content:
      "We operate within an ecosystem of strategic partners, creative collaborators, and industry experts. This network allows us to deliver comprehensive brand identity and strategy solutions that go beyond what any single firm could achieve. Our ecosystem approach ensures that every project benefits from diverse perspectives and specialized expertise.",
  },
  {
    title: "Our Services - Brand Strategy",
    href: "/services#brand-strategy",
    content:
      "We build holistic brand foundations — purpose, positioning, architecture, and narrative — so every decision moves in one coherent direction with measurable impact. Our brand identity strategy work helps organizations define who they are, what they stand for, and how they show up in the world.",
  },
  {
    title: "Our Services - Brand Experience & Expression",
    href: "/services#brand-experience",
    content:
      "We translate strategy into identity and verbal systems that preserve meaning, reinforce perception, and shape consistent behavior across every touchpoint. From visual brand identity to tone of voice, we create expression systems that bring brands to life with clarity and consistency.",
  },
  {
    title: "Our Services - Digital Brand Activation",
    href: "/services#digital-activation",
    content:
      "We activate brands in digital spaces through strategic content, platform optimization, and digital experience design. Our digital brand identity activation ensures that brands maintain their strategic integrity across all digital touchpoints and channels.",
  },
  {
    title: "Our Services - BD-CVJ",
    href: "/services#bd-cvj",
    content:
      "We design customer journeys that integrate meaning, behavior, and experience, enabling organizations to scale with unified strategic direction. Our brand identity driven customer value journey methodology connects brand strategy to measurable business outcomes.",
  },
  {
    title: "Our Services - Strategic Advisory",
    href: "/services#strategic-advisory",
    content:
      "We support founders, C-level leaders, and ownership groups in aligning brand, business direction, and organizational communication. Our advisory services help leaders make brand identity decisions that drive long-term organizational clarity.",
  },
  {
    title: "Our Services - Brand Led",
    href: "/services#brand-led",
    content:
      "Brand-led transformation is about making brand identity the organizing principle for business decisions. We help organizations embed brand thinking into strategy, culture, and operations so that every action reinforces who they are and where they are going.",
  },
  {
    title: "Our Perspectives - Insight",
    href: "/insights",
    content:
      "Our insights explore the intersection of brand strategy, business growth, and organizational clarity. We share perspectives on brand identity, market positioning, leadership alignment, and the role of strategic clarity in driving sustainable competitive advantage.",
  },
  {
    title: "Our Perspectives - Case Studies",
    href: "/case-studies",
    content:
      "Our case studies showcase real-world brand identity transformations. From startups to enterprises, see how strategic clarity and brand identity alignment have driven measurable results for organizations across industries and markets.",
  },
  {
    title: "Work With Us",
    href: "/contact",
    content:
      "Ready to build clarity and momentum for your brand? Get in touch with our team to discuss how we can help your organization achieve strategic brand identity alignment. We work with leaders who are ready to invest in long-term clarity and growth.",
  },
];

/**
 * Simple client-side search: returns entries whose title or content
 * contain the query string (case-insensitive).
 */
export function searchContent(query: string): SearchEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return searchEntries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(q) ||
      entry.content.toLowerCase().includes(q)
  );
}
