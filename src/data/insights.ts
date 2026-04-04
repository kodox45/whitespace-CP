/**
 * Insights / Articles Mock Data
 *
 * Extracted from Figma:
 *   - Insight Listing (346:1703) — page heading, categories sidebar, article cards
 *   - Insight Article Detail (349:2690) — article body layout
 *
 * Card types from Figma:
 *   - Small card (Component 8):  456x282 image + date + single-line title
 *   - Large card (Component 12): 456x282 split image + date + multi-line title
 *
 * Sidebar categories (from Figma text nodes):
 *   Articles, Framework Perspectives, Brand & Business Analysis,
 *   Linkedin Cross-post, Video/Talks, Whitepapers
 */

export type InsightCategory =
  | "articles"
  | "framework-perspectives"
  | "brand-business-analysis"
  | "linkedin-crosspost"
  | "video-talks"
  | "whitepapers";

export interface InsightCategoryInfo {
  slug: InsightCategory;
  label: string;
}

export const insightCategories: InsightCategoryInfo[] = [
  { slug: "articles", label: "Articles" },
  { slug: "framework-perspectives", label: "Framework Perspectives" },
  { slug: "brand-business-analysis", label: "Brand & Business Analysis" },
  { slug: "linkedin-crosspost", label: "Linkedin Cross-post" },
  { slug: "video-talks", label: "Video/Talks" },
  { slug: "whitepapers", label: "Whitepapers" },
];

export type InsightBodyBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "image"; src: string; alt?: string; width?: number; height?: number }
  | { type: "highlight"; content: string };

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  /** Date string displayed on the card (e.g. "January 2026") */
  date: string;
  /** ISO date for sorting */
  publishedAt: string;
  category: InsightCategory;
  /** Thumbnail image path */
  image: string;
  /** Short excerpt for listing page */
  excerpt: string;
  /** Full article body — structured content blocks for detail page */
  body: InsightBodyBlock[];
  /** Author name */
  author: string;
  /** Author role/title */
  authorRole?: string;
  /** Reading time estimate */
  readingTime: string;
}

export const insights: InsightItem[] = [
  {
    id: "i-1",
    slug: "when-market-moves-brand-stays-still-loses",
    title: "When the Market Moves, the Brand That Stays Still Loses",
    date: "January 2026",
    publishedAt: "2026-01-15",
    category: "articles",
    image: "/images/placeholder-insight.png",
    excerpt:
      "In volatile markets, the brands that hesitate are the ones that fall behind. This article explores why strategic agility — not just speed — defines brand resilience.",
    body: [
      { type: "paragraph", content: "In volatile markets, the brands that hesitate are the ones that fall behind. Strategic agility — the ability to move with clarity and purpose while competitors freeze — has become the defining characteristic of resilient brands." },
      { type: "paragraph", content: "The difference between a brand that thrives through disruption and one that fades is rarely about resources. It's about direction. Brands with a clear strategic foundation can adapt without losing their identity. Those without one scramble, react, and eventually lose relevance." },
      { type: "paragraph", content: "This is why clarity isn't a luxury — it's infrastructure. When the market shifts, a clear brand doesn't need to reinvent itself. It needs to re-express itself through the lens of its existing truth, adapted for new conditions." },
      { type: "paragraph", content: "The brands that will lead the next decade aren't the loudest or the fastest. They're the ones that know exactly who they are, and can articulate that identity under any circumstances." },
    ],
    author: "Whitespace Team",
    readingTime: "5 min read",
  },
  {
    id: "i-2",
    slug: "how-louis-vuitton-plays-the-game",
    title: "How Louis Vuitton Plays the Game",
    date: "January 2026",
    publishedAt: "2026-01-10",
    category: "articles",
    image: "/images/placeholder-insight.png",
    excerpt:
      "A deep dive into Louis Vuitton's brand strategy — how they maintain relevance while staying true to their heritage and commanding premium positioning.",
    body: [
      { type: "paragraph", content: "Most brands today are busy improving how they look, how they sound, and how often they appear." },
      { type: "paragraph", content: "Louis Vuitton (LV) does something quieter — and far more decisive." },
      { type: "paragraph", content: "It does not compete for attention.\nIt does not chase relevance.\nIt does not try to convince the market of its value." },
      { type: "paragraph", content: "Instead, LV operates at a layer where its presence is already assumed.\nWhere legitimacy is rarely questioned.\nAnd where price never needs defending." },
      { type: "paragraph", content: "This is not the result of better campaigns or stronger storytelling.\nThose are outcomes — not causes." },
      { type: "paragraph", content: "LV wins because it understands something many brands overlook:\nBrands do not win by doing more at the surface.\nThey win by choosing the right layer of the game — and staying there." },
      { type: "heading", content: "Playing Where Noise Doesn't Matter" },
      { type: "paragraph", content: "Most brands fight for attention.\nThey optimize reach, engagement, frequency, and visibility — hoping that more exposure will eventually turn into relevance." },
      { type: "paragraph", content: "LV does not fight there." },
      { type: "paragraph", content: "It appears calmly, without urgency.\nIt does not remind people who it is.\nIts presence feels expected, not announced." },
      { type: "paragraph", content: "This calm does not happen naturally.\nIt is designed." },
      { type: "paragraph", content: "By choosing when to appear — and more importantly, when not to — LV teaches the market how to approach it.\nThe brand does not react to behavior.\nIt quietly shapes the behavior it wants to receive." },
      { type: "paragraph", content: "In doing so, it avoids a familiar trap: the exhaustion of constantly explaining itself just to stay visible." },
      { type: "paragraph", content: "This is why many brands feel busy, but rarely feel settled." },
      { type: "heading", content: "Legitimacy Comes Before Desire" },
      { type: "paragraph", content: "LV does not try to be liked first.\nIt makes sure it is legitimate first." },
      { type: "paragraph", content: "Legitimacy changes how a brand moves.\nOnce legitimacy is established, a brand does not need urgency to justify itself.\nIt does not need an explanation to feel relevant.\nIts value is not debated — it is assumed." },
      { type: "paragraph", content: "This is why LV can remain calm when trends shift or markets fluctuate.\nIt is not responding to demand.\nIt is operating from a position." },
      { type: "paragraph", content: "Many brands struggle not because they lack creativity or effort, but because this sense of grounding was never designed into the system." },
      { type: "image", src: "/images/placeholder-insight.png", alt: "Inspirations from Louis Vuitton", width: 459, height: 305 },
      { type: "heading", content: "Price as a Gate, Not a Barrier" },
      { type: "paragraph", content: "LV's prices are often misunderstood as a sign of exclusivity.\nIn reality, price functions more like a gate." },
      { type: "paragraph", content: "It does not force exclusion.\nIt invites self-selection." },
      { type: "paragraph", content: "Price sets expectations before any message is delivered.\nIt defines the context in which the brand is interpreted.\nPeople decide for themselves whether they belong in that context — and that decision feels voluntary, even though the conditions were carefully set." },
      { type: "paragraph", content: "At this level, price no longer needs to argue for value.\nIt quietly organizes perception." },
      { type: "paragraph", content: "This is where many brands experience tension.\nThey treat price as a number to be defended, rather than a signal that shapes behavior." },
      { type: "paragraph", content: "LV understands that price speaks first — and speaks quietly." },
      { type: "heading", content: "Emerging Luxury and the Need to Be Seen" },
      { type: "paragraph", content: "This is also where LV plays a role that is often misunderstood." },
      { type: "paragraph", content: "For many people entering new levels of personal or professional success, luxury is not about refinement yet.\nIt is about recognition." },
      { type: "paragraph", content: "This tier — often referred to as emerging accessible luxury — serves a very human need:\nTo make progress visible." },
      { type: "paragraph", content: "At this stage, visual symbols matter.\nNot because they are shallow, but because they are efficient." },
      { type: "paragraph", content: "A recognizable logo becomes a shortcut.\nA clear symbol becomes the fastest way to signal achievement — to oneself and to others." },
      { type: "paragraph", content: "LV understands this without exploiting it." },
      { type: "paragraph", content: "It offers visibility without chaos.\nRecognition without shouting.\nA symbol that is immediately understood, yet still anchored in legitimacy." },
      { type: "paragraph", content: "This is not manipulation through pressure.\nIt is guidance through structure." },
      { type: "paragraph", content: "The brand creates a context where recognition feels earned — not forced." },
      { type: "heading", content: "Consistency That Shapes Freedom" },
      { type: "paragraph", content: "LV evolves constantly." },
      { type: "paragraph", content: "Campaigns change.\nCreative directions shift.\nVisual expressions move with time." },
      { type: "paragraph", content: "Yet the brand never feels confused." },
      { type: "paragraph", content: "That is because its consistency does not live at the surface.\nIt lives at the level of intent." },
      { type: "paragraph", content: "LV does not control every interpretation.\nIt controls the boundaries." },
      { type: "paragraph", content: "Within those boundaries, creativity feels free.\nOutside them, meaning simply does not attach." },
      { type: "paragraph", content: "Many brands try to control perception by repeating the same visuals.\nLV does the opposite: it stabilizes meaning, then allows expression to move." },
      { type: "paragraph", content: "That stability is what creates trust — without explanation." },
      { type: "heading", content: "Why Many Brands Feel Tired" },
      { type: "paragraph", content: "Most brands are not failing.\nThey are simply working at a layer that does not match their ambition." },
      { type: "paragraph", content: "They invest in content, execution, and activity.\nThey refresh visuals.\nThey relaunch narratives." },
      { type: "paragraph", content: "Yet the feeling of stability never arrives." },
      { type: "paragraph", content: "This is not a problem of talent or effort.\nIt is a problem of where effort is concentrated." },
      { type: "paragraph", content: "LV does not work harder at the surface.\nIt works earlier — and deeper." },
      { type: "heading", content: "The Discipline of Designing Conditions" },
      { type: "paragraph", content: "LV's advantage is not that it does more.\nIt refuses more." },
      { type: "paragraph", content: "It refuses to chase attention.\nIt refuses to over-explain.\nIt refuses to flatten meaning into noise." },
      { type: "paragraph", content: "Instead, it designs conditions where belief becomes the most natural conclusion." },
      { type: "paragraph", content: "Once that happens, influence no longer feels like influence.\nIt feels like common sense." },
      { type: "image", src: "/images/placeholder-insight.png", alt: "Louis Vuitton Lock", width: 457, height: 305 },
      { type: "heading", content: "A Different Way to Read Brands" },
      { type: "paragraph", content: "LV is not a formula to copy.\nIts success cannot be replicated through tactics or aesthetics." },
      { type: "paragraph", content: "But it offers something more valuable:\nA different way of seeing how brands actually win." },
      { type: "paragraph", content: "Not by being louder.\nNot by being everywhere.\nBut by shaping the conditions under which meaning, trust, and desire emerge." },
      { type: "paragraph", content: "The real question is no longer whether a brand looks good or communicates well." },
      { type: "paragraph", content: "The question is more straightforward — and slightly uncomfortable:" },
      { type: "highlight", content: "At what layer is your brand actually playing?" },
    ],
    author: "Dimas Mardjono",
    authorRole: "Brand Strategist",
    readingTime: "7 min read",
  },
  {
    id: "i-3",
    slug: "clarity-as-competitive-advantage",
    title: "Clarity as Competitive Advantage: A Framework for Brand Leaders",
    date: "February 2026",
    publishedAt: "2026-02-05",
    category: "framework-perspectives",
    image: "/images/placeholder-insight.png",
    excerpt:
      "Why the clearest brands win — and a practical framework for achieving brand clarity that drives business outcomes.",
    body: [
      { type: "paragraph", content: "In an era of noise, clarity is the ultimate competitive advantage. Brands that can articulate their value, their difference, and their direction with precision outperform those that rely on volume and frequency." },
      { type: "paragraph", content: "The Clarity Framework operates on three levels: meaning clarity (why you exist), structural clarity (how you're organized), and expression clarity (how you communicate). Most brands invest heavily in expression while neglecting the foundational layers." },
      { type: "paragraph", content: "This creates a common failure mode: beautiful brands that don't mean anything. Visually polished but strategically hollow. The market eventually sees through this, and the brand loses trust." },
      { type: "paragraph", content: "Achieving genuine clarity requires uncomfortable work. It means making choices, saying no, and accepting that you can't be everything to everyone. But the reward is a brand that people understand, trust, and choose — consistently." },
    ],
    author: "Whitespace Team",
    readingTime: "8 min read",
  },
  {
    id: "i-4",
    slug: "brand-architecture-decisions-that-matter",
    title: "Brand Architecture Decisions That Actually Matter",
    date: "February 2026",
    publishedAt: "2026-02-12",
    category: "brand-business-analysis",
    image: "/images/placeholder-insight.png",
    excerpt:
      "Most brand architecture discussions focus on naming and logos. The real decisions — the ones that drive business value — happen much earlier.",
    body: [
      { type: "paragraph", content: "Brand architecture is one of the most misunderstood disciplines in brand strategy. Too often, it's reduced to a conversation about naming conventions and visual hierarchy. The real strategic value lies elsewhere." },
      { type: "paragraph", content: "The critical decisions in brand architecture are about value flow: how does brand equity move between entities? How do you structure a portfolio to maximize clarity for customers while enabling growth for the business?" },
      { type: "paragraph", content: "These aren't design questions — they're business strategy questions with brand implications. Getting them right can unlock billions in value. Getting them wrong can create confusion that takes years to untangle." },
    ],
    author: "Whitespace Team",
    readingTime: "6 min read",
  },
  {
    id: "i-5",
    slug: "positioning-in-age-of-convergence",
    title: "Positioning in the Age of Convergence",
    date: "March 2026",
    publishedAt: "2026-03-01",
    category: "linkedin-crosspost",
    image: "/images/placeholder-insight.png",
    excerpt:
      "When industries converge and categories blur, traditional positioning frameworks break down. Here's what replaces them.",
    body: [
      { type: "paragraph", content: "The traditional positioning matrix — mapping competitors along two dimensions — was built for a world of clear category boundaries. That world is disappearing." },
      { type: "paragraph", content: "When a bank competes with a tech company, a retailer becomes a media platform, and a car manufacturer sells software subscriptions, the old frameworks don't hold. Positioning in this environment requires a different starting point." },
      { type: "paragraph", content: "Instead of positioning against competitors in a fixed category, leading brands are positioning around customer problems that span categories. The question shifts from 'how are we different from other banks?' to 'how do we create unique value for people managing their financial lives?'" },
    ],
    author: "Whitespace Team",
    readingTime: "4 min read",
  },
  {
    id: "i-6",
    slug: "brand-clarity-talk-jakarta-2026",
    title: "Brand Clarity in Practice — Jakarta 2026 Talk",
    date: "March 2026",
    publishedAt: "2026-03-15",
    category: "video-talks",
    image: "/images/placeholder-insight.png",
    excerpt:
      "Recording from our Jakarta session on applying clarity-driven brand strategy to real business challenges in Southeast Asia.",
    body: [
      { type: "paragraph", content: "This talk, delivered at the Jakarta Brand Summit 2026, explores how Southeast Asian businesses can apply clarity-driven brand strategy to navigate rapid growth and market complexity." },
      { type: "paragraph", content: "Drawing on case studies from our work with Indonesian and regional brands, we demonstrate how strategic clarity translates into measurable business outcomes: faster decision-making, stronger market positioning, and more resilient brand equity." },
    ],
    author: "Whitespace Team",
    readingTime: "Watch: 45 min",
  },
];

/** Get insights filtered by category */
export function getInsightsByCategory(category: InsightCategory): InsightItem[] {
  return insights.filter((i) => i.category === category);
}

/** Get a single insight by slug */
export function getInsightBySlug(slug: string): InsightItem | undefined {
  return insights.find((i) => i.slug === slug);
}

/** Get latest insights (sorted by date, limited) */
export function getLatestInsights(limit: number = 6): InsightItem[] {
  return [...insights]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
