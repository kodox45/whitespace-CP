/**
 * Case Studies Mock Data
 *
 * Extracted from Figma:
 *   - Case Studies Listing (501:1870) — heading, description, card layout
 *   - Case Study Detail pages:
 *     - B-Log (513:2012) — 1920x3184
 *     - KitaBisa (552:2044) — 1920x3321
 *     - SalingJaga (552:2282) — 1920x3321
 *     - Syailendra (552:2391) — 1920x3674
 *
 * Listing page heading: "Clarity applied to real brands."
 * Description: "A selection of transformation projects shaped through
 *               alignment, meaning, and direction."
 *
 * Card layout (from Figma): large image + title + short description
 */

export interface CaseStudyMeta {
  client: string;
  industry: string;
  typeOfWork: string;
  projectTeam: string[];
  year: string;
}

export interface CaseStudyDetail {
  /** Overview text shown next to the title (right column) */
  overview: string;
  /** Intro paragraphs in the body content section */
  introText: string;
  before: string[];
  after: string[];
  whatWeDid: string[];
  meaningImpact: string;
}

export interface CaseStudyGallery {
  /** two-up: 2 side-by-side images, single: 1 full-width, two-by-two: 2x2 grid */
  layout: "two-up" | "single" | "two-by-two";
  images: string[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  /** Client / brand name */
  client: string;
  /** Short tagline shown on listing card */
  tagline: string;
  /** Brief description shown on listing page */
  excerpt: string;
  /** Service categories involved */
  services: string[];
  /** Thumbnail image for listing */
  image: string;
  /** Hero image for detail page */
  heroImage: string;
  /** Structured metadata sidebar */
  meta: CaseStudyMeta;
  /** Structured body content */
  detail: CaseStudyDetail;
  /** Gallery section */
  gallery: CaseStudyGallery;
  /** Related work slug (links to /works/[slug]) */
  relatedWorkSlug?: string;
}

export const caseStudies: CaseStudyItem[] = [
  {
    id: "cs-blog",
    slug: "b-log",
    client: "B-Log",
    title: "Brand Architecture & Business Alignment",
    tagline: "From logistics operator to integrated 4PL brand",
    excerpt:
      "We structured a comprehensive brand architecture based on segmentation logic and value proposition alignment, preparing B-Log for a transition to a fully integrated 4PL model.",
    services: ["Brand Strategy", "Brand Architecture", "Strategic Advisory"],
    image: "/images/work-blog-color.png",
    heroImage: "/images/casestudy-hero-blog.png",
    meta: {
      client: "B-Log",
      industry: "Logistic & Transportation",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        "Brand Strategist: Dimas Mardjono",
        "Client Services: Djoko Susilo",
      ],
      year: "2025",
    },
    detail: {
      overview:
        "B-Log is evolving from a transport-oriented business into a more integrated logistics ecosystem. As the company expanded into land transport, sea logistics, warehousing, and value-added services, the brand struggled to convey the breadth of its capabilities without confusing.",
      introText:
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
      meaningImpact:
        "The brand gained a unified structural logic that clarified how each business unit contributes to one direction. Teams now operate with a shared understanding, reduced ambiguity, and clearer strategic intention\u2014enabling B-Log to communicate its value consistently and move confidently toward an integrated 4PL future.",
    },
    gallery: {
      layout: "two-up",
      images: [
        "/images/casestudy-gallery-blog-1.png",
        "/images/casestudy-gallery-blog-2.png",
      ],
    },
    relatedWorkSlug: "b-log",
  },
  {
    id: "cs-kitabisa",
    slug: "kitabisa",
    client: "KitaBisa",
    title: "Strategic Brand Clarification",
    tagline: "Clarity-driven meaning logic for Indonesia's giving platform",
    excerpt:
      "We restructured Kitabisa\u2019s brand strategy through clarity-driven meaning logic, audience segmentation, and narrative alignment to reinforce relevance within an evolving social and cultural landscape.",
    services: ["Brand Strategy", "Positioning", "Narrative Development"],
    image: "/images/work-kitabisa-color.png",
    heroImage: "/images/casestudy-hero-kitabisa.png",
    meta: {
      client: "KitaBisa",
      industry: "Social Platform",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        "Brand Strategist: Dimas Mardjono",
        "Client Services: Djoko Susilo",
      ],
      year: "2025",
    },
    detail: {
      overview:
        "Kitabisa serves millions of Indonesians across causes, emotions, and cultural motivations. As the platform scaled, so did the diversity of its users and the complexity of how people interacted with the brand\u2014ranging from donors and fundraisers to partners, communities, and stakeholders.",
      introText:
        "This rapid expansion created tension between what the brand meant to people and what the organization needed it to represent strategically. Cultural shifts, social expectations, and high emotional stakes added new layers of meaning that were not fully aligned with the brand\u2019s structure and message system.\n\nKitabisa needed a clearer, more grounded strategic foundation\u2014one that could unify meaning, strengthen trust, and maintain relevance as the organization shaped its next chapter.",
      before: [
        "Fragmented brand meaning",
        "Audience complexity is increasing faster than brand clarity",
        "Messaging inconsistencies",
        "Cultural perception shifting",
      ],
      after: [
        "Strong clarity-driven brand foundation",
        "Meaning aligned with cultural and behavioral shifts",
        "Sharper audience segmentation",
        "Unified narrative and message system",
      ],
      whatWeDid: [
        "Strategic Brand Clarification",
        "Brand Strategy",
        "Audience Segmentation",
        "Narrative Engineering",
        "Strategic Advisory",
      ],
      meaningImpact:
        "Kitabisa now carries a stronger, more coherent meaning system that aligns purpose, audience, and cultural relevance. Internal teams and external stakeholders share a clearer view of what the brand stands for\u2014allowing the organization to make decisions with focus, maintain trust, and navigate growth without losing clarity.",
    },
    gallery: {
      layout: "single",
      images: ["/images/casestudy-gallery-kitabisa-1.png"],
    },
    relatedWorkSlug: "kitabisa",
  },
  {
    id: "cs-salingjaga",
    slug: "salingjaga",
    client: "SalingJaga",
    title: "Brand Narrative & Positioning",
    tagline: "Trust-centered narrative for insurance innovation",
    excerpt:
      "We articulated a straightforward and trust-centered narrative, repositioning SalingJaga with a clarity-based approach that refined its value perception and message-to-market alignment.",
    services: ["Brand Strategy", "Positioning", "Brand Narrative"],
    image: "/images/work-salingjaga-color.png",
    heroImage: "/images/casestudy-hero-salingjaga.png",
    meta: {
      client: "SalingJaga",
      industry: "Insurance & Fintech",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        "Brand Strategist: Dimas Mardjono",
        "Client Services: Djoko Susilo",
      ],
      year: "2025",
    },
    detail: {
      overview:
        "SalingJaga sits in a category where trust and emotional clarity determine adoption. As the product gained visibility, its narrative struggled to articulate what it truly offers and why it matters\u2014especially in a market unfamiliar with its model.",
      introText:
        "The brand\u2019s value required simplicity, yet its messaging became fragmented. Different channels emphasized different angles, and audiences had inconsistent interpretations of the product\u2019s purpose and benefits. This created friction: the product was meaningful, but the brand\u2019s narrative couldn\u2019t convey that meaning coherently.\n\nSalingJaga needed a more straightforward narrative that simplifies without diluting, explains without overwhelming, and builds trust through a consistent, easy-to-understand brand story.",
      before: [
        "Complex and inconsistent narrative",
        "Misaligned messaging",
        "Value not immediately clear",
        "Weak narrative cohesion",
      ],
      after: [
        "Clear trust-centered narrative",
        "Straightforward, confident positioning",
        "Aligned message-to-market structure",
        "Stronger perceived value",
      ],
      whatWeDid: [
        "Brand Narrative Development",
        "Positioning",
        "Messaging Framework",
        "Narrative Engineering",
        "Strategic Advisory",
      ],
      meaningImpact:
        "The refined narrative created a simpler, trust-centered value understanding\u2014aligning how the team speaks, how the market perceives, and how messages land across channels. SalingJaga now sounds clearer and more consistent, strengthening trust and improving overall adoption.",
    },
    gallery: {
      layout: "single",
      images: ["/images/casestudy-gallery-salingjaga-1.png"],
    },
    relatedWorkSlug: "salingjaga",
  },
  {
    id: "cs-syailendra",
    slug: "syailendra",
    client: "Syailendra Capital",
    title: "Digital Brand Activation & Value Journey",
    tagline: "Clarity-driven digital transformation for asset management",
    excerpt:
      "We developed a comprehensive digital brand activation strategy and customer value journey for Syailendra Capital, connecting investment expertise with modern digital brand expression.",
    services: ["Digital Brand Activation", "BD-CVJ", "Design Led"],
    image: "/images/work-bibet-color.png",
    heroImage: "/images/casestudy-hero-syailendra.png",
    meta: {
      client: "Syailendra Capital",
      industry: "Asset Management",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        "Brand Strategist: Dimas Mardjono",
        "Client Services: Djoko Susilo",
      ],
      year: "2025",
    },
    detail: {
      overview:
        "Syailendra Capital is one of Indonesia\u2019s leading asset management firms operating in an increasingly competitive and digitally driven investment landscape. As the organization evolved\u2014through a renewed vision, updated values, and a shifting target market\u2014the existing brand no longer reflected its strategic direction or future ambition.",
      introText:
        "This misalignment created friction between Syailendra\u2019s institutional strength and the brand\u2019s perception, particularly among newer, digitally active investor segments.\n\nTo remain credible, relevant, and future-ready, the brand required a strategic realignment\u2014from its foundation through expression and communication.",
      before: [
        "Brand strategy and positioning are no longer aligned with audience relevance",
        "Institutional strength is perceived as traditional and rigid",
        "Weak resonance with emerging, younger, and digital-first investors",
        "Brand communication lacked coherence across digital and retail touchpoints",
        "Visual expression reflected legacy asset-management cues",
      ],
      after: [
        "Recalibrated brand strategy aligned with evolving audience and market context",
        "Clear positioning balancing institutional credibility and modern relevance",
        "Stronger generational resonance across digital and retail environments",
        "Unified brand narrative and communication system",
        "Modernized visual expression signaling strategic realignment and consistency",
      ],
      whatWeDid: [
        "Brand Strategy & Positioning Realignment",
        "Brand Competitiveness & Personality Direction",
        "Brand Essence Refinement",
        "Brand-Led Visual Expression Alignment",
        "Brand Communication Pillars",
        "Social Media Strategy, Execution & Measurement",
        "Strategic Advisory",
      ],
      meaningImpact:
        "Syailendra Capital now operates under a brand that is strategically aligned with its evolving audience, competitive landscape, and long-term ambitions. The brand presents a more transparent, modern, and coherent presence\u2014while maintaining institutional trust\u2014across digital and retail environments. This alignment enables more consistent decision-making, stronger audience relevance, and a brand system that can adapt as the organization continues to grow.",
    },
    gallery: {
      layout: "two-by-two",
      images: [
        "/images/casestudy-gallery-syailendra-1.png",
        "/images/casestudy-gallery-syailendra-2.png",
        "/images/casestudy-gallery-syailendra-3.png",
        "/images/casestudy-gallery-syailendra-4.png",
      ],
    },
    relatedWorkSlug: "syailendra-capital",
  },
  {
    id: "cs-danamas",
    slug: "danamas",
    client: "Danamas",
    title: "Brand Foundation & Expression System",
    tagline: "Clarity-rooted brand system for fintech innovation",
    excerpt:
      "We developed the brand foundation, positioning, and expression ecosystem\u2014rooted in clarity, logic, and cultural insight\u2014to redefine taste, social meaning, and modern local relevance.",
    services: ["Brand Strategy", "Brand Experience & Expression"],
    image: "/images/work-bibet-color.png",
    heroImage: "/images/placeholder-work.png",
    meta: {
      client: "Danamas",
      industry: "Fintech",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        "Brand Strategist: Dimas Mardjono",
        "Client Services: Djoko Susilo",
      ],
      year: "2025",
    },
    detail: {
      overview:
        "Danamas needed a coherent brand foundation that could scale across multiple fintech verticals while maintaining a unified identity and clear market positioning.",
      introText:
        "The existing brand lacked a strategic anchor\u2014each vertical operated with its own interpretation of the brand, creating inconsistencies in how the organization was perceived across markets and audiences.\n\nDanamas required a brand system built from first principles\u2014one that defines the core idea, visual language, and narrative framework with enough flexibility to serve multiple business units.",
      before: [
        "Fragmented brand identity across verticals",
        "No unified brand foundation",
        "Inconsistent market positioning",
        "Visual expression lacked coherence",
      ],
      after: [
        "Clear brand foundation anchored in core idea",
        "Scalable expression system across verticals",
        "Unified market positioning",
        "Coherent visual and verbal identity",
      ],
      whatWeDid: [
        "Brand Strategy",
        "Brand Foundation Development",
        "Expression System Design",
        "Positioning & Value Proposition",
        "Strategic Advisory",
      ],
      meaningImpact:
        "The new brand system gave Danamas a clear, differentiated presence in the fintech market, with a scalable expression framework that supports future product expansion.",
    },
    gallery: {
      layout: "single",
      images: ["/images/placeholder-work.png"],
    },
  },
  {
    id: "cs-alterra",
    slug: "alterra",
    client: "Alterra",
    title: "Strategic Brand Clarification",
    tagline: "Purpose-driven clarity for a hospitality ecosystem",
    excerpt:
      "We restructured the brand strategy through clarity-driven meaning logic, audience segmentation, and narrative alignment to reinforce relevance within an evolving social and cultural landscape.",
    services: ["Brand Strategy", "Positioning", "Strategic Advisory"],
    image: "/images/work-kitabisa-color.png",
    heroImage: "/images/placeholder-work.png",
    meta: {
      client: "Alterra",
      industry: "Hospitality",
      typeOfWork: "Brand Strategy",
      projectTeam: [
        "Brand Strategist: Dimas Mardjono",
        "Client Services: Djoko Susilo",
      ],
      year: "2025",
    },
    detail: {
      overview:
        "As a growing hospitality ecosystem, Alterra needed to articulate a brand strategy that could unify diverse business units under a coherent purpose-driven narrative.",
      introText:
        "The organization\u2019s rapid growth had outpaced its brand\u2019s ability to communicate a unified story. Different properties and services presented varying brand narratives, weakening overall market perception.\n\nAlterra required a strategic framework that connects purpose to market expression across its entire portfolio.",
      before: [
        "Disconnected brand narratives across properties",
        "Unclear portfolio-level positioning",
        "Purpose not articulated strategically",
        "Weak internal brand alignment",
      ],
      after: [
        "Unified purpose-driven brand strategy",
        "Clear portfolio-level narrative",
        "Stronger internal alignment",
        "Coherent external brand perception",
      ],
      whatWeDid: [
        "Strategic Brand Clarification",
        "Brand Strategy",
        "Portfolio Architecture",
        "Narrative Engineering",
        "Strategic Advisory",
      ],
      meaningImpact:
        "The clarified brand strategy gave Alterra a unified voice across its portfolio, strengthening internal alignment and external perception in competitive hospitality markets.",
    },
    gallery: {
      layout: "single",
      images: ["/images/placeholder-work.png"],
    },
  },
];

/** Get all case studies */
export function getAllCaseStudies(): CaseStudyItem[] {
  return caseStudies;
}

/** Get a single case study by slug */
export function getCaseStudyBySlug(slug: string): CaseStudyItem | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
