import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";

/* ─── DATA ─── */

const brandStrategyCards = [
  {
    icon: "/images/icon-brand-foundation.svg",
    title: "Brand Foundation",
    description:
      "Defining purpose, positioning, narrative, and structure with clarity that guides decisions.",
  },
  {
    icon: "/images/icon-brand-architecture.svg",
    title: "Brand Architecture",
    description:
      "Organizing brands, sub-brands, and product lines into a clear, scalable, customer-ready system.",
  },
  {
    icon: "/images/icon-positioning.svg",
    title: "Positioning & Value Proposition",
    description:
      "Clarifying what the brand stands for, who it speaks to, and why it matters.",
  },
  {
    icon: "/images/icon-narrative.svg",
    title: "Narrative Engineering",
    description:
      "Crafting strategic narratives that align meaning, context, and long-term business intention.",
  },
  {
    icon: "/images/icon-depth-analysis.svg",
    title: "Brand Depth Analysis",
    description:
      "Understanding the deeper meaning systems that influence perception and behavior.",
  },
  {
    icon: "/images/icon-causality.svg",
    title: "Causality & Meaning Systems",
    description:
      "Interpreting the forces that shape how brands create and sustain value over time.",
  },
];

const bdCvjItems = [
  {
    icon: "/images/icon-clarity-mapping.svg",
    title: "Clarity \u2192 Experience Mapping",
    description:
      "Translating strategic clarity into touchpoint experience design.",
  },
  {
    icon: "/images/icon-journey-design.svg",
    title: "Journey Design",
    description:
      "Crafting customer paths grounded in meaning, behavior, and real-world context.",
  },
  {
    icon: "/images/icon-kpi.svg",
    title: "KPI Alignment",
    description: "Ensuring each stage supports measurable outcomes.",
  },
  {
    icon: "/images/icon-campaign.svg",
    title: "Brand-Driven Campaign Design",
    description:
      "Campaigns built on clarity, not noise\u2014driving relevance and results.",
  },
];

const brandExpressionItems = [
  {
    icon: "/images/icon-identity.svg",
    title: "Identity Systems",
    description:
      "Strategic identities are built to express clarity, consistency, and meaning.",
  },
  {
    icon: "/images/icon-guidelines.svg",
    title: "Brand Guidelines",
    description:
      "Flexible, modern systems that help teams maintain coherence without limiting creativity.",
  },
  {
    icon: "/images/icon-expression.svg",
    title: "Expression Ecosystems",
    description:
      "Modular visual and verbal frameworks that scale across platforms and contexts.",
  },
  {
    icon: "/images/icon-verbal.svg",
    title: "Verbal Identity",
    description:
      "Tone, language systems, and messaging cues that express the brand with clarity and authenticity.",
  },
];

const digitalItems = [
  {
    icon: "/images/icon-digital-branding.svg",
    title: "Digital-First Branding",
    description:
      "Translating brand strategy into digital-native behaviors and expressions.",
  },
  {
    icon: "/images/icon-social-media.svg",
    title: "Social Media Strategy & Management",
    description:
      "Clear, consistent, and aligned communication across channels.",
  },
  {
    icon: "/images/icon-digital-ecosystem.svg",
    title: "Digital Ecosystem Planning",
    description:
      "Mapping how the brand operates across platforms, audiences, and content flows.",
  },
  {
    icon: "/images/icon-content-systems.svg",
    title: "Content Systems",
    description:
      "Strategic content structures that guide storytelling, messaging, and execution.",
  },
  {
    icon: "/images/icon-performance.svg",
    title: "Digital Performance Tracking",
    description:
      "Ensuring digital activities reinforce brand clarity and contribute to business outcomes.",
  },
];

const advisoryCards = [
  {
    icon: "/images/icon-founder-advisory.svg",
    title: "Founder & C-Level\nAdvisory",
    description:
      "Supporting leadership teams in making brand-led, clarity-driven decisions.",
  },
  {
    icon: "/images/icon-consolidation.svg",
    title: "Brand-Business Consolidation",
    description:
      "Aligning brand strategy with business direction, goals, and resource reality.",
  },
  {
    icon: "/images/icon-alignment.svg",
    title: "Internal Alignment & Narrative",
    description:
      "Helping teams understand, articulate, and act on the brand\u2019s strategic direction.",
  },
  {
    icon: "/images/icon-governance.svg",
    title: "Communication Governance",
    description:
      "Structuring brand communication to maintain clarity, consistency, and coherence across the organization.",
  },
];

/* ─── Reusable padding utility ─── */
const containerPx = "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px]";

/* ─── SERVICE ICON ─── */
function ServiceIcon({ src }: { src: string }) {
  return (
    <div className="mb-[16px] flex h-[60px] w-[60px] items-center justify-center">
      <Image src={src} alt="" width={60} height={60} className="h-auto w-[60px]" />
    </div>
  );
}

/* ─── PAGE ─── */

export default function ServicesPage() {
  return (
    <>
      {/* ── INTRO SECTION ── */}
      <section className="bg-white pt-[112px]">
        <div className={`mx-auto max-w-[1920px] pt-[32px] ${containerPx}`}>
          <Breadcrumb items={[{ label: "Our Services" }]} />

          <div className="mt-[24px] flex flex-col gap-[40px] pb-[60px] lg:flex-row lg:gap-[80px]">
            <div className="lg:w-[484px] lg:shrink-0">
              <h1 className="text-[28px] font-bold leading-[1.15] text-primary-blue md:text-[36px] xl:text-[48px]">
                Clarity that shapes
                <br />
                strategy, experience,
                <br />
                and growth.
              </h1>
            </div>

            <div className="flex-1">
              <p className="text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                We help organizations move with clarity&mdash;understanding what
                their brand means, how it behaves, and how it drives value
                across business, experience, and communication.
              </p>
              <p className="mt-[16px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                Our services are designed as strategic capabilities, not
                deliverables. They exist to align direction, unify teams, and
                support long-term brand health.
              </p>

              <div className="mt-[40px] inline-block bg-primary-blue px-[16px] py-[8px]">
                <p className="text-[16px] font-bold leading-[1] text-white md:text-[20px] xl:text-[24px]">
                  Strategic. Aligned. Actionable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[400px] xl:h-[575px]">
        <Image
          src="/images/services-hero-image.png"
          alt="Abstract maze representing strategic clarity"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ── BRAND STRATEGY ── */}
      <section id="brand-strategy" className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Brand Strategy
          </h2>
          <p className="mt-[24px] max-w-[1346px] text-[20px] font-bold leading-[1.4] text-dark md:text-[24px] xl:text-[32px]">
            We build strategic foundations that give brands clarity, coherence,
            and direction&mdash;grounded in meaning, shaped by behavior, and
            aligned with business needs.
          </p>

          {/* 3-column card grid — matching Figma: icon top, title, description */}
          <div className="mt-[40px] grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
            {brandStrategyCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[8px] border border-gray-dark/40 px-[28px] py-[32px]"
              >
                <ServiceIcon src={card.icon} />
                <h3 className="text-[20px] font-bold leading-[1.3] text-dark">
                  {card.title}
                </h3>
                <p className="mt-[12px] text-[16px] leading-[1.5] text-dark/80 xl:text-[20px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Blue quote bars */}
          <div className="mt-[40px] flex flex-col gap-[8px]">
            <div className="inline-block self-start bg-primary-blue px-[16px] py-[8px]">
              <p className="text-[16px] font-bold leading-[1.2] text-white md:text-[20px] xl:text-[24px]">
                These are not templates. They are ways of thinking&mdash;
              </p>
            </div>
            <div className="inline-block self-start bg-primary-blue px-[16px] py-[8px]">
              <p className="text-[16px] font-bold leading-[1.2] text-white md:text-[20px] xl:text-[24px]">
                refined through real problems, real brands, and real decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND-DRIVEN CUSTOMER VALUE JOURNEY (Dark bg) ── */}
      <section id="bd-cvj" className="bg-dark">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
            Brand-Driven Customer Value Journey
          </h2>
          <p className="mt-[24px] max-w-[1407px] text-[20px] font-bold leading-[1.4] text-white md:text-[24px] xl:text-[32px]">
            We design journeys that connect brand meaning to customer
            behavior&mdash;creating experiences that build value, trust, and
            momentum.
          </p>

          <div className="mt-[40px] grid grid-cols-1 gap-[32px] md:grid-cols-2">
            {bdCvjItems.map((item, index) => (
              <div key={index} className="flex items-start gap-[20px]">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={60}
                    height={60}
                    className="h-auto w-[60px] brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[1.5] text-white/80 xl:text-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND EXPERIENCE & EXPRESSION ── */}
      <section id="brand-experience" className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Brand Experience & Expression
          </h2>
          <p className="mt-[24px] max-w-[1433px] text-[20px] font-bold leading-[1.4] text-dark md:text-[24px] xl:text-[32px]">
            We translate strategy into identity, voice, and expression systems
            that communicate meaning consistently across every touchpoint.
          </p>

          <div className="mt-[40px] flex flex-col gap-[32px]">
            {brandExpressionItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-[20px] border-b border-gray-dark/30 pb-[32px] last:border-0"
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
                  <Image src={item.icon} alt="" width={60} height={60} className="h-auto w-[60px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[1.5] text-dark/80 xl:text-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIGITAL BRAND ACTIVATION ── */}
      <section id="digital-activation" className="bg-gray">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Digital Brand Activation
          </h2>
          <p className="mt-[24px] max-w-[1433px] text-[20px] font-bold leading-[1.4] text-dark md:text-[24px] xl:text-[32px]">
            We help brands show up intelligently in digital
            environments&mdash;combining clarity, consistency, and measurable
            performance.
          </p>

          <div className="mt-[40px] grid grid-cols-1 gap-[32px] md:grid-cols-2">
            {digitalItems.map((item, index) => (
              <div key={index} className="flex items-start gap-[20px]">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
                  <Image src={item.icon} alt="" width={60} height={60} className="h-auto w-[60px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[1.5] text-dark/80 xl:text-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC ADVISORY ── */}
      <section id="strategic-advisory" className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Strategic Advisory
          </h2>
          <p className="mt-[24px] max-w-[1433px] text-[20px] font-bold leading-[1.4] text-dark md:text-[24px] xl:text-[32px]">
            A clarity-first advisory partnership for founders, C-level leaders,
            and organizations navigating growth, transformation, or complexity.
          </p>

          {/* 4-column card grid */}
          <div className="mt-[40px] grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-4">
            {advisoryCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[8px] border border-gray-dark/40 px-[28px] py-[32px]"
              >
                <ServiceIcon src={card.icon} />
                <h3 className="whitespace-pre-line text-[20px] font-bold leading-[1.3] text-dark">
                  {card.title}
                </h3>
                <p className="mt-[12px] text-[16px] leading-[1.5] text-dark/80 xl:text-[20px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Blue quote bar */}
          <div className="mt-[40px] inline-block bg-primary-blue px-[16px] py-[8px]">
            <p className="text-[16px] font-bold leading-[1] text-white md:text-[20px] xl:text-[24px]">
              Clear strategy. Clear experience. Clear growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
