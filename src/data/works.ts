/**
 * Works / Portfolio Mock Data
 *
 * Extracted from Figma "Our Works" pages:
 *   - Brand Strategy (294:2220)
 *   - Brand Experience & Expression (308:996)
 *   - Digital Brand Activation (308:1407)
 *   - BD-CVJ (308:1870)
 *   - Strategy Advisory (308:2272)
 *   - Brand Led (308:2676)
 *
 * Card layout: 456x282 image area + title text below (20px Gramatika)
 * Grid: 3 columns, gap from Figma positions
 */

export type WorkCategory =
  | "brand-strategy"
  | "brand-experience"
  | "digital-activation"
  | "bd-cvj"
  | "strategic-advisory"
  | "design-led";

export interface WorkDetail {
  /** Client / company name */
  client: string;
  /** Industry vertical */
  industry: string;
  /** Type of work label */
  typeOfWork: string;
  /** Project team members */
  projectTeam: { role: string; name: string }[];
  /** Project year */
  year: string;
  /** Full-width hero image (1434×672 in Figma) */
  heroImage: string;
  /** Gallery images (2 or 4, displayed in 2-col grid) */
  galleryImages: string[];
  /** Structured body content for detail page */
  body: {
    /** Opening paragraphs */
    intro: string;
    /** Before — pain points (bullet list) */
    before: string[];
    /** After — outcomes (bullet list) */
    after: string[];
    /** What We Did — services provided (bullet list) */
    whatWeDid: string[];
    /** Impact summary paragraph */
    impact: string;
  };
}

export interface WorkItem {
  id: string;
  slug: string;
  title: string;
  /** Short description for Selected Transformations / detail page */
  description: string;
  /** Category slugs this work belongs to (many works appear in multiple categories) */
  categories: WorkCategory[];
  /** Thumbnail image path — placeholder for now */
  image: string;
  /** Color version of image (for homepage Selected Transformations) */
  imageColor?: string;
  /** Whether this item is featured on the homepage */
  featured?: boolean;
  /** Detailed project information for /works/[slug] page */
  detail?: WorkDetail;
}

export interface WorkCategoryInfo {
  slug: WorkCategory;
  label: string;
  /** Figma frame node ID */
  figmaNodeId: string;
}

export const workCategories: WorkCategoryInfo[] = [
  { slug: "brand-strategy", label: "Brand Strategy", figmaNodeId: "294:2220" },
  { slug: "brand-experience", label: "Brand Experience & Expression", figmaNodeId: "308:996" },
  { slug: "digital-activation", label: "Digital Brand Activation", figmaNodeId: "308:1407" },
  { slug: "bd-cvj", label: "Brand-Driven Customer Value Journey", figmaNodeId: "308:1870" },
  { slug: "strategic-advisory", label: "Strategic Advisory", figmaNodeId: "308:2272" },
  { slug: "design-led", label: "Design Led", figmaNodeId: "308:2676" },
];

export const works: WorkItem[] = [
  // === Featured works (appear on homepage Selected Transformations) ===
  {
    id: "w-blog",
    slug: "b-log",
    title: "B-Log",
    description:
      "We structured a comprehensive brand architecture based on segmentation logic and value proposition alignment, preparing B-Log for a transition to a fully integrated 4PL model.",
    categories: ["brand-strategy", "strategic-advisory"],
    image: "/images/work-blog.png",
    imageColor: "/images/work-blog-color.png",
    featured: true,
    detail: {
      client: "B-Log",
      industry: "Logistic & Transportation",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        { role: "Brand Strategist", name: "Dimas Mardjono" },
        { role: "Client Services", name: "Djoko Susilo" },
      ],
      year: "2025",
      heroImage: "/images/work-blog.png",
      galleryImages: ["/images/placeholder-work.png", "/images/placeholder-work.png"],
      body: {
        intro:
          "Each business line operated with different narratives, audiences, and assumptions\u2014making it difficult for the organization to articulate a unified ambition. Internally, teams viewed the brand through different lenses; externally, customers could not fully grasp where B-Log sits within the broader logistics landscape.\n\nThe brand needed a clear strategic architecture\u2014one that organizes complexity, aligns meaning across units, and expresses B-Log\u2019s ambition to grow into a credible, scalable 4PL player.",
        before: [
          "Overlapping meanings across services",
          "Unclear differentiation between business units",
          "Brand role not aligned with strategic ambition",
          "Structural ambiguity is limiting growth",
        ],
        after: [
          "Cohesive brand architecture anchored in segmentation logic",
          "Clearer audience relevance",
          "Unified positioning aligned with 4PL vision",
          "Scalable structure for future expansion",
        ],
        whatWeDid: [
          "Brand Strategy",
          "Brand Architecture",
          "Positioning & Value Proposition",
          "Strategic Advisory",
          "Narrative Engineering",
        ],
        impact:
          "The brand gained a unified structural logic that clarified how each business unit contributes to one direction. Teams now operate with a shared understanding, reduced ambiguity, and clearer strategic intention\u2014enabling B-Log to communicate its value consistently and move confidently toward an integrated 4PL future.",
      },
    },
  },
  {
    id: "w-kitabisa",
    slug: "kitabisa",
    title: "KitaBisa",
    description:
      "We restructured Kitabisa's brand strategy through clarity-driven meaning logic, audience segmentation, and narrative alignment to reinforce relevance within an evolving social and cultural landscape.",
    categories: ["brand-strategy"],
    image: "/images/work-kitabisa.png",
    imageColor: "/images/work-kitabisa-color.png",
    featured: true,
    detail: {
      client: "KitaBisa",
      industry: "Social Platform & Crowdfunding",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        { role: "Brand Strategist", name: "Dimas Mardjono" },
        { role: "Client Services", name: "Djoko Susilo" },
      ],
      year: "2025",
      heroImage: "/images/work-kitabisa.png",
      galleryImages: ["/images/placeholder-work.png", "/images/placeholder-work.png"],
      body: {
        intro:
          "The rapid expansion created brand incoherence, what the brand meant to people and why it mattered felt increasingly diffused. As social giving platforms became more crowded, KitaBisa\u2019s legacy of trust and community was no longer a guaranteed differentiator. The brand needed to be restructured\u2014not reinvented\u2014to clarify its position, strengthen trust, and maintain relevance as the organization adapted to new realities.",
        before: [
          "Brand positioning diluted across multiple cause verticals",
          "Misaligned messaging across audience segments",
          "Relevance weakened by shifting social norms",
          "Platform reputation resting on legacy, not active clarity",
        ],
        after: [
          "Clarity-driven restructuring of brand logic and audience relevance",
          "Renewed positioning anchored in trust, empathy, and cultural understanding",
          "Cohesive narrative that adapts across verticals without dilution",
          "Strategic brand alignment that reinforces social credibility",
        ],
        whatWeDid: [
          "Strategic Brand Clarification",
          "Audience Segmentation & Mapping",
          "Meaning Logic Development",
          "Narrative Engineering",
          "Brand Strategy Alignment",
        ],
        impact:
          "KitaBisa now operates a brand-logic system that directly connects its mission to the emotions, motivations, and cultural context of its audience. The brand gained a structural understanding of why people give, what makes KitaBisa the trusted platform, and how its narrative should evolve\u2014making every communication sharper, more relevant, and harder to replicate.",
      },
    },
  },
  {
    id: "w-salingjaga",
    slug: "salingjaga",
    title: "SalingJaga",
    description:
      "We articulated a straightforward and trust-centered narrative, repositioning SalingJaga with a clarity-based approach that refined its value perception and message-to-market alignment.",
    categories: ["brand-strategy"],
    image: "/images/work-salingjaga.png",
    imageColor: "/images/work-salingjaga-color.png",
    featured: true,
    detail: {
      client: "SalingJaga",
      industry: "Insurance & Financial Services",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        { role: "Brand Strategist", name: "Dimas Mardjono" },
        { role: "Client Services", name: "Djoko Susilo" },
      ],
      year: "2025",
      heroImage: "/images/work-salingjaga.png",
      galleryImages: ["/images/placeholder-work.png", "/images/placeholder-work.png"],
      body: {
        intro:
          "SalingJaga entered the market as a peer-to-peer insurance concept, an idea with strong social relevance but limited brand clarity. The brand struggled to communicate what it truly offered and why it was different\u2014resulting in low trust signals and unclear value perception among its target audience.\n\nThe brand needed a strategic repositioning rooted in clarity, trust, and directness\u2014not complexity or disruption.",
        before: [
          "Brand concept was misunderstood by target audiences",
          "Value proposition lacked clarity and directness",
          "Trust deficit due to unfamiliar insurance model",
          "Message-to-market misalignment across channels",
        ],
        after: [
          "Clear, trust-centered brand narrative",
          "Repositioned value perception grounded in simplicity",
          "Improved audience comprehension of core offering",
          "Aligned messaging across all touchpoints",
        ],
        whatWeDid: [
          "Brand Strategy",
          "Brand Narrative & Positioning",
          "Value Proposition Alignment",
          "Strategic Advisory",
        ],
        impact:
          "SalingJaga now communicates with a level of clarity and trust that matches the simplicity of its model. The repositioned brand narrative directly addresses audience hesitation, making the concept accessible and the value immediately clear\u2014enabling stronger conversions and deeper trust with first-time users.",
      },
    },
  },
  {
    id: "w-bibet",
    slug: "bibet",
    title: "Bibet",
    description:
      "We developed the brand foundation, positioning, and expression ecosystem — rooted in clarity, logic, and cultural insight — to redefine taste, social meaning, and modern local relevance.",
    categories: ["brand-experience"],
    image: "/images/work-bibet.png",
    imageColor: "/images/work-bibet-color.png",
    featured: true,
    detail: {
      client: "Bibet",
      industry: "F&B",
      typeOfWork: "Brand Experience & Expression",
      projectTeam: [
        { role: "Brand Strategist", name: "Dimas Mardjono" },
        { role: "Client Services", name: "Shendy Adam" },
      ],
      year: "2024",
      heroImage: "/images/work-bibet.png",
      galleryImages: [
        "/images/placeholder-work.png",
        "/images/placeholder-work.png",
        "/images/placeholder-work.png",
        "/images/placeholder-work.png",
      ],
      body: {
        intro:
          "Bibet emerged in a saturated F&B landscape where brand differentiation was primarily driven by aesthetics rather than meaning. The brand lacked a strategic foundation to articulate what it stood for beyond product\u2014making it difficult to build lasting cultural relevance or justify premium positioning.\n\nThe brand required a complete foundation\u2014from strategy through expression\u2014rooted in clarity, cultural logic, and a redefinition of taste as social meaning.",
        before: [
          "No brand strategy or positioning framework",
          "Visual identity driven by trends, not meaning",
          "Weak cultural connection with target audience",
          "Undifferentiated in a crowded F&B market",
        ],
        after: [
          "Complete brand foundation from strategy to expression",
          "Positioning rooted in cultural insight and modern local relevance",
          "Distinctive expression ecosystem across all touchpoints",
          "Clear narrative connecting taste, identity, and social meaning",
        ],
        whatWeDid: [
          "Brand Strategy & Positioning",
          "Brand Expression System",
          "Visual Identity Development",
          "Cultural Insight Integration",
          "Narrative Engineering",
        ],
        impact:
          "Bibet now operates with a brand foundation that connects product experience to cultural identity. The expression ecosystem\u2014rooted in strategic clarity\u2014enables the brand to communicate with consistency, cultural depth, and a sense of modern local relevance that resonates beyond surface-level aesthetics.",
      },
    },
  },

  // === Brand Experience & Expression works ===
  {
    id: "w-rmu",
    slug: "rimba-makmur-utama",
    title: "Rimba Makmur Utama (RMU)",
    description:
      "Brand experience and expression development for Rimba Makmur Utama, focusing on clarity-driven brand identity.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-yoinves",
    slug: "yo-inves",
    title: "Yo! Inves",
    description:
      "Brand experience, expression, and customer value journey design for Yo! Inves — a digital investment platform.",
    categories: ["brand-experience", "bd-cvj"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-hokben",
    slug: "hokben-plus",
    title: "Hokben+",
    description:
      "Brand experience and expression system for Hokben+ — extending the beloved QSR brand into a new digital ecosystem.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-taco",
    slug: "taco",
    title: "Taco",
    description:
      "Brand experience, expression, and design-led transformation for Taco — redefining the brand's market positioning.",
    categories: ["brand-experience", "design-led"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-arsari",
    slug: "arsari-group",
    title: "Arsari Group",
    description:
      "Brand experience and expression for Arsari Group — a diversified conglomerate seeking brand cohesion.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-banksampoerna",
    slug: "bank-sampoerna",
    title: "Bank Sampoerna",
    description:
      "Brand experience and expression for Bank Sampoerna — aligning financial brand identity with modern customer expectations.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-apexindo",
    slug: "apexindo",
    title: "Apexindo",
    description:
      "Brand experience and expression for Apexindo — a leading drilling services company in Indonesia.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-pelindo",
    slug: "pelindo-iii",
    title: "Pelindo III",
    description:
      "Brand experience and expression for Pelindo III — one of Indonesia's major port operators.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-owlexa",
    slug: "owlexa",
    title: "Owlexa",
    description:
      "Brand experience and expression for Owlexa — building a clear and compelling brand identity from the ground up.",
    categories: ["brand-experience"],
    image: "/images/placeholder-work.png",
  },

  // === Digital Brand Activation works ===
  {
    id: "w-starenergy",
    slug: "star-energy-geothermal",
    title: "Star Energy Geothermal",
    description:
      "Digital brand activation and customer value journey for Star Energy Geothermal — a leading sustainable energy company.",
    categories: ["digital-activation", "bd-cvj", "design-led"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-syailendra",
    slug: "syailendra-capital",
    title: "Syailendra Capital",
    description:
      "Digital brand activation, customer value journey, and design-led approach for Syailendra Capital — a premier asset management firm.",
    categories: ["digital-activation", "bd-cvj", "design-led"],
    image: "/images/placeholder-work.png",
  },

  // === BD-CVJ specific works ===
  {
    id: "w-indonesiare",
    slug: "indonesia-re",
    title: "IndonesiaRe",
    description:
      "Brand-driven customer value journey for IndonesiaRe — aligning reinsurance brand strategy with stakeholder engagement.",
    categories: ["bd-cvj"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-barito",
    slug: "barito-renewable",
    title: "Barito Renewable",
    description:
      "Brand-driven customer value journey for Barito Renewable — connecting sustainability vision with brand clarity.",
    categories: ["bd-cvj"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-stadius",
    slug: "stadius",
    title: "Stadius",
    description:
      "Brand-driven customer value journey for Stadius — shaping a new brand narrative in the sports and entertainment space.",
    categories: ["bd-cvj"],
    image: "/images/placeholder-work.png",
  },

  // === Design Led works ===
  {
    id: "w-harvest",
    slug: "harvest",
    title: "Harvest",
    description:
      "Design-led brand transformation for Harvest — creating a distinctive visual identity rooted in clarity.",
    categories: ["design-led"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-gik",
    slug: "galeri-indonesia-kaya",
    title: "Galeri Indonesia Kaya",
    description:
      "Design-led brand expression for Galeri Indonesia Kaya — bridging cultural heritage with contemporary brand language.",
    categories: ["design-led"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-balihai",
    slug: "balihai",
    title: "BaliHai",
    description:
      "Design-led brand transformation for BaliHai — refreshing a legacy beverage brand for modern audiences.",
    categories: ["design-led"],
    image: "/images/placeholder-work.png",
  },
  {
    id: "w-tjshub",
    slug: "tjs-hub",
    title: "TJS HUB",
    description:
      "Design-led brand creation for TJS HUB — establishing a new brand presence with clarity and purpose.",
    categories: ["design-led"],
    image: "/images/placeholder-work.png",
  },
];

/** Get works filtered by category */
export function getWorksByCategory(category: WorkCategory): WorkItem[] {
  return works.filter((w) => w.categories.includes(category));
}

/** Get featured works (for homepage Selected Transformations) */
export function getFeaturedWorks(): WorkItem[] {
  return works.filter((w) => w.featured);
}

/** Get a single work by slug */
export function getWorkBySlug(slug: string): WorkItem | undefined {
  return works.find((w) => w.slug === slug);
}
