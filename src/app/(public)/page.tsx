import Image from "next/image";
import Link from "next/link";

/* ─── DATA ─── */

const services = [
  {
    title: "Strategic Brand\nClarity",
    description:
      "We build holistic brand foundations—purpose, positioning, architecture, and narrative—so every decision moves in one coherent direction with measurable impact.",
  },
  {
    title: "Brand Experience &\nExpression",
    description:
      "We translate strategy into identity and verbal systems that preserve meaning, reinforce perception, and shape consistent behavior across every touchpoint.",
  },
  {
    title: "Brand-Driven\nGrowth Journey",
    description:
      "We design customer journeys that integrate meaning, behavior, and experience, enabling organizations to scale with unified strategic direction.",
  },
  {
    title: "Advisory for Leaders\n& Organizations",
    description:
      "We support founders, C-level leaders, and ownership groups in aligning brand, business direction, and organizational communication.",
  },
];

const clientTypes = [
  {
    title: "Corporate &\nEnterprise",
    description:
      "Organizations requiring brand–business consolidation and strategic clarity across units and stakeholders.",
  },
  {
    title: "Founders &\nOwnership Groups",
    description:
      "Leaders seeking long-term clarity and a brand foundation that supports decisive growth.",
  },
  {
    title: "Strategic\nPartners",
    description:
      "PR, digital, and communication firms are seeking a strategic partner to enhance their value to clients.",
  },
  {
    title: "Mid-sized &\nGrowth-Stage\nCompanies",
    description:
      "Businesses are scaling fast and need a strategic foundation to keep growth aligned.",
  },
];

const frameworksLeft = [
  {
    name: "Clarity Ecosystem Model",
    description:
      "A holistic way to understand how meaning, perception, and value interact across a brand's internal and external environment.",
  },
  {
    name: "Strategic Clarity Method",
    description:
      "A structured thinking process to align brand strategy, business direction, and organizational decisions into one coherent path.",
  },
  {
    name: "Integrated Meaning–Perception–Value Framework",
    description:
      "A unifying lens to analyze how meaning shapes perception, and how perception drives value across audiences and touchpoints.",
  },
];

const frameworksRight = [
  {
    name: "Brand-Driven Customer Value Journey",
    description:
      "A journey design framework that connects brand meaning to customer behavior, ensuring every stage delivers both value and clarity.",
  },
  {
    name: "Narrative Engineering Framework",
    description:
      "A structured approach to crafting brand narratives that align meaning, context, and strategic direction.",
  },
];

const selectedWorks = [
  {
    image: "/images/work-blog.png",
    title: "Brand Architecture & Business Alignment",
    description:
      "We structured a comprehensive brand architecture based on segmentation logic and value proposition alignment, preparing B-Log for a transition to a fully integrated 4PL model.",
    slug: "b-log",
  },
  {
    image: "/images/work-kitabisa.png",
    title: "Strategic Brand Clarification",
    description:
      "We restructured Kitabisa's brand strategy through clarity-driven meaning logic, audience segmentation, and narrative alignment to reinforce relevance within an evolving social and cultural landscape.",
    slug: "kitabisa",
  },
  {
    image: "/images/work-salingjaga.png",
    title: "Brand Narrative & Positioning",
    description:
      "We articulated a straightforward and trust-centered narrative, repositioning SalingJaga with a clarity-based approach that refined its value perception and message-to-market alignment.",
    slug: "salingjaga",
  },
  {
    image: "/images/work-bibet.png",
    title: "Brand Foundation & Expression System",
    description:
      "We developed the brand foundation, positioning, and expression ecosystem—rooted in clarity, logic, and cultural insight—to redefine taste, social meaning, and modern local relevance.",
    slug: "bibet",
  },
];

/* ─── Reusable padding utility ─── */
const containerPx = "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px]";

/* ─── ARROW ICON ─── */
function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" className={className}>
      <path d="M0.47 11.16H26.28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.58 0.47L26.28 11.16L15.58 21.86" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ─── PAGE ─── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO: White area with heading ── */}
      <section className="bg-white pt-[112px]">
        <div className={`mx-auto max-w-[1920px] py-[60px] ${containerPx}`}>
          <div className="flex items-start justify-between">
            <h1 className="text-[40px] font-bold leading-[1.05] text-primary-blue md:text-[56px] lg:text-[72px] xl:text-[100px]">
              Where Clarity
              <br />
              Becomes Momentum.
            </h1>
            {/* Whitespace Mark */}
            <div className="mt-[80px] hidden shrink-0 md:block xl:mt-[88px]">
              <Image src="/images/whitespace-mark.svg" alt="" width={130} height={130} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO: Dark area with W pattern ── */}
      <section className="relative h-[400px] w-full overflow-hidden md:h-[500px] xl:h-[720px]">
        <Image src="/images/hero-bg.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-start justify-end">
          <div className={`mx-auto w-full max-w-[1920px] pt-[60px] md:pt-[100px] ${containerPx}`}>
            <div className="max-w-full md:ml-auto md:max-w-[500px] xl:max-w-[574px]">
              <p className="text-[18px] leading-[1.5] text-white md:text-[22px] xl:text-[30px]">
                We help companies make better brand decisions through strategic
                clarity, aligned narratives, and a direction that connects brand
                and business.
              </p>
              <Link
                href="/services"
                className="mt-[40px] inline-flex items-center gap-[12px] rounded-full bg-white px-[24px] py-[10px] text-[20px] font-bold text-primary-blue transition-opacity hover:opacity-90"
              >
                Read More
                <ArrowRight className="text-primary-blue" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            What We Do
          </h2>

          {/* 4 Service Columns */}
          <div className="mt-[60px] grid grid-cols-1 gap-[40px] md:grid-cols-2 xl:grid-cols-4 xl:gap-[80px]">
            {services.map((service, index) => (
              <div key={index} className="relative">
                {/* Vertical separator line (desktop only) */}
                {index > 0 && (
                  <div className="absolute -left-[40px] top-[8px] hidden h-[calc(100%-16px)] w-[1px] bg-gray-dark/60 xl:block" />
                )}
                <h3 className="whitespace-pre-line text-[24px] font-bold leading-[1.15] text-primary-blue xl:text-[32px]">
                  {service.title}
                </h3>
                <p className="mt-[24px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLARITY MATTERS ── */}
      <section className="relative overflow-hidden bg-gray">
        <div className="flex min-h-[734px] flex-col lg:flex-row">
          {/* Left: Text content */}
          <div className={`flex-1 py-[80px] ${containerPx} lg:pr-[60px]`}>
            <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
              Why Clarity Matters
            </h2>
            <div className="mt-[40px] max-w-[730px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
              <p>
                Brands grow when meaning, perception, and value move in the same direction.
              </p>
              <p className="mt-[8px]">
                Without clarity, organizations drift across strategy, messaging, and execution.
              </p>
              <ul className="mt-[16px] list-disc pl-[20px]">
                <li>Clarity reduces friction.</li>
                <li>Clarity accelerates decisions.</li>
                <li>Clarity aligns people and systems.</li>
                <li>Clarity creates momentum.</li>
              </ul>
              <p className="mt-[16px]">
                Our approach uses proprietary clarity frameworks that integrate
                context, insight, behavior, and business direction into a single
                strategic system.
              </p>
            </div>
            {/* Blue quote bar */}
            <div className="mt-[40px] inline-block bg-primary-blue px-[16px] py-[14px]">
              <p className="text-[18px] font-bold leading-[1] text-white md:text-[24px] xl:text-[32px]">
                A clear brand becomes a brand that moves.
              </p>
            </div>
          </div>

          {/* Right: 3D Artwork — bg-gray-dark matches Figma rect #C8CCCC */}
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-gray-dark md:h-[400px] lg:h-auto lg:w-[844px]">
            <Image
              src="/images/clarity-3d-art.png"
              alt="Abstract 3D brand clarity illustration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 844px"
            />
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Who We Work With
          </h2>
          <div className="mt-[60px] grid grid-cols-1 gap-[16px] md:grid-cols-2 xl:grid-cols-4 xl:gap-[12px]">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="rounded-[16px] bg-dark px-[32px] py-[40px] xl:px-[56px] xl:py-[60px]"
              >
                <h3 className="whitespace-pre-line text-[24px] font-bold leading-[1.15] text-white xl:text-[32px]">
                  {client.title}
                </h3>
                <p className="mt-[24px] text-[16px] leading-[1.5] text-white/80 xl:text-[20px]">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR FRAMEWORKS ── */}
      <section className="bg-dark">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
            Our Frameworks
          </h2>

          <div className="mt-[60px] grid grid-cols-1 gap-[40px] lg:grid-cols-3">
            {/* Left column: subtitle */}
            <div>
              <p className="text-[18px] leading-[1.5] text-white xl:text-[24px]">
                We apply proprietary clarity frameworks designed to understand
                brands holistically and structure strategic direction that teams
                can execute with confidence.
              </p>
            </div>

            {/* Middle column: frameworks 1-3 */}
            <div className="flex flex-col gap-[32px]">
              {frameworksLeft.map((fw, i) => (
                <div key={i}>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-white">{fw.name}</h3>
                  <p className="mt-[8px] text-[16px] leading-[1.5] text-white/70 xl:text-[20px]">
                    {fw.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right column: frameworks 4-5 */}
            <div className="flex flex-col gap-[32px]">
              {frameworksRight.map((fw, i) => (
                <div key={i}>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-white">{fw.name}</h3>
                  <p className="mt-[8px] text-[16px] leading-[1.5] text-white/70 xl:text-[20px]">
                    {fw.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED TRANSFORMATIONS ── */}
      <section className="bg-gray">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Selected Transformations
          </h2>

          {/* 2x2 grid of portfolio cards */}
          <div className="mt-[60px] grid grid-cols-1 gap-x-[40px] gap-y-[50px] md:grid-cols-2">
            {selectedWorks.map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`} className="group block">
                {/* Card image — aspect matches Figma image area (830×330) */}
                <div className="relative aspect-[83/33] overflow-hidden rounded-[16px]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Card text */}
                <div className="mt-[28px]">
                  <h3 className="text-[24px] font-bold leading-[1.3] text-dark">{work.title}</h3>
                  <p className="mt-[4px] text-[16px] leading-[1.5] text-dark/80 xl:text-[20px]">
                    {work.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All button */}
          <div className="mt-[60px] flex justify-end">
            <Link
              href="/works"
              className="inline-flex items-center gap-[12px] rounded-full bg-primary-blue px-[24px] py-[10px] text-[20px] font-bold text-white transition-opacity hover:opacity-90"
            >
              View All
              <ArrowRight className="text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={`bg-gray pb-[80px] ${containerPx}`}>
        <div className="mx-auto max-w-[1440px] rounded-[16px] bg-primary-blue px-[40px] py-[60px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-white md:text-[48px] xl:text-[64px]">
            Start with Clarity
          </h2>
          <p className="mt-[16px] text-[18px] leading-[1.4] text-white md:text-[24px] xl:text-[36px]">
            Let&apos;s talk about the direction your brand deserves!
          </p>
        </div>
      </section>
    </>
  );
}
