import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";

/* ─── DATA ─── */

const partnerCategories = [
  {
    title: "Communication Partners",
    description:
      "For PR, corporate communication, and narrative deployment.",
  },
  {
    title: "Creative & Design Partners",
    description:
      "For expression, identity systems, and campaign translation.",
  },
  {
    title: "Digital Execution Partners",
    description:
      "For performance, content, and platform management.",
  },
  {
    title: "Research & Insight Partners",
    description: "For cultural understanding and behavioral depth.",
  },
  {
    title: "Organizational Partners",
    description:
      "For alignment, internal communication, and change support.",
  },
];

const collaborationSteps = [
  {
    number: "1.",
    title: "Strategic Core (Whitespace)",
    lines: [
      "Clarity, direction, narrative, structure, and alignment.",
      "We define the meaning and the path.",
    ],
  },
  {
    number: "2.",
    title: "Specialized Partners",
    lines: [
      "Selected teams that execute with discipline and depth.",
      "PR, design, digital, research, production\u2014depending on what the project needs.",
    ],
  },
  {
    number: "3.",
    title: "Unified Output",
    lines: [
      "Every expression, message, touchpoint, and experience connects back to the same strategic clarity\u2014no drift, no noise, no fragmentation.",
    ],
  },
];

const ecosystemReasonsLeft = [
  "Brands move faster when specialists work with shared clarity.",
  "Strategy stays intact when execution aligns across disciplines.",
  "The right partners scale capabilities without losing cohesion.",
];

const ecosystemReasonsRight = [
  "Complexity becomes manageable when direction is unified.",
  "Organizations get depth without adding unnecessary layers.",
  "Clarity becomes momentum when everyone moves in sync.",
];

const whitespaceRoles = [
  "Defines direction",
  "Shapes meaning",
  "Builds narrative",
  "Aligns teams",
  "Maintains coherence",
  "Ensures clarity is preserved",
];

const partnerRoles = [
  "Translate direction into outputs",
  "Activate across channels",
  "Manage platforms",
  "Build experiences",
  "Execute campaigns",
  "Deliver touchpoints",
];

/* ─── Reusable padding utility ─── */
const containerPx = "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px]";

/* ─── PAGE ─── */

export default function EcosystemPage() {
  return (
    <>
      {/* ── INTRO SECTION ── */}
      <section className="bg-white pt-[112px]">
        <div className={`mx-auto max-w-[1920px] pt-[32px] ${containerPx}`}>
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Who We Are", href: "/about" },
              { label: "Ecosystem" },
            ]}
          />

          {/* Separator line */}
          <div className="mt-[4px] h-[1px] bg-gray-dark" />

          {/* 2-column: heading left, body right */}
          <div className="mt-[24px] flex flex-col gap-[40px] pb-[60px] lg:flex-row lg:gap-[80px]">
            {/* Left column — Blue heading */}
            <div className="lg:w-[507px] lg:shrink-0">
              <h1 className="text-[28px] font-bold leading-[1.15] text-primary-blue md:text-[36px] xl:text-[48px]">
                Clarity works best
                <br />
                when it moves through
                <br />
                the right partners.
              </h1>
            </div>

            {/* Right column — Description + quote bar */}
            <div className="flex-1">
              <p className="text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                Whitespace collaborates with a network of specialists to bring
                strategic clarity into execution&mdash;across brand,
                communication, digital, and organizational contexts.
              </p>
              <p className="mt-[16px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                We orchestrate, align, and guide&mdash;not by controlling
                everything, but by ensuring everything moves with coherence.
              </p>

              {/* Blue quote bar */}
              <div className="mt-[40px] inline-block bg-primary-blue px-[16px] py-[8px]">
                <p className="text-[16px] font-bold leading-[1] text-white md:text-[20px] xl:text-[24px]">
                  Strategy stays with us. Execution moves with the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[400px] xl:h-[575px]">
        <Image
          src="/images/ecosystem-hero-image.png"
          alt="Network of connected nodes representing the ecosystem"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ── A NETWORK BUILT ON COMPLEMENTARY STRENGTHS ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            A Network Built on
            <br />
            Complementary Strengths
          </h2>

          <div className="mt-[40px] flex flex-col gap-[40px] lg:flex-row lg:gap-[80px]">
            {/* Left — Image */}
            <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[8px] lg:h-[446px] lg:w-[611px]">
              <Image
                src="/images/ecosystem-network.png"
                alt="Network connections illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 611px"
              />
            </div>

            {/* Right — Partner categories */}
            <div className="flex-1">
              <p className="text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                We work with selected partners across disciplines&mdash;PR,
                digital, design, culture, research, communication, and
                technology.
                <br />
                The ecosystem is fluid by design: assembled based on context,
                scaled based on needs, and aligned through clarity.
              </p>

              <div className="mt-[32px] flex flex-col gap-[24px]">
                {partnerCategories.map((cat, index) => (
                  <div key={index}>
                    <h3 className="text-[20px] font-bold leading-[1.3] text-dark">
                      &bull; {cat.title}
                    </h3>
                    <p className="mt-[4px] text-[16px] leading-[1.5] text-dark/80 xl:text-[20px]">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE COLLABORATE (Blue bg) ── */}
      <section className="bg-primary-blue">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[80px]">
            {/* Left — Heading + subtitle */}
            <div className="lg:w-[464px] lg:shrink-0">
              <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
                How We Collaborate
              </h2>
              <p className="mt-[24px] text-[20px] font-bold leading-[1.4] text-white md:text-[24px] xl:text-[32px]">
                Our collaboration model is intentionally simple: Whitespace
                leads the strategy; the ecosystem executes it. Every partner
                works within their strength&mdash;guided by one direction, one
                narrative, and one clarity framework.
              </p>
            </div>

            {/* Right — 3 steps */}
            <div className="flex-1">
              <div className="flex flex-col gap-[24px]">
                {collaborationSteps.map((step) => (
                  <div key={step.number}>
                    <h3 className="text-[20px] font-bold leading-[1.3] text-white">
                      {step.number} {step.title}
                    </h3>
                    {step.lines.map((line, i) => (
                      <p
                        key={i}
                        className="mt-[4px] text-[16px] leading-[1.5] text-white/80 xl:text-[20px]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORCHESTRATING WITH CLARITY (Blue bg + orchestra image as bg) ── */}
      <section className="relative overflow-hidden bg-primary-blue">
        {/* Orchestra image as background */}
        <Image
          src="/images/ecosystem-orchestra.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className={`relative z-10 mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
            Orchestrating with Clarity
          </h2>

          <div className="mt-[40px] max-w-[1187px] text-[16px] leading-[1.5] text-white xl:text-[20px]">
            <p>
              We guide multidisciplinary teams through shared logic&mdash;ensuring
              execution remains aligned with meaning, positioning, and long-term
              intent.
              <br />
              Our role is not to micromanage outputs, but to maintain strategic
              integrity across the ecosystem.
              <br />
              Masked orchestration cues:
            </p>
            <p className="mt-[20px]">
              &bull; One direction &rarr; multiple disciplines
              <br />
              &bull; One narrative &rarr; multiple outputs
              <br />
              &bull; One clarity &rarr; consistent experience
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY AN ECOSYSTEM MATTERS ── */}
      <section className="bg-gray">
        <div className={`mx-auto max-w-[1920px] py-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Why an Ecosystem Matters
          </h2>

          <div className="mt-[40px] grid grid-cols-1 gap-[16px] md:grid-cols-2 xl:gap-[24px]">
            {/* Left column */}
            <div className="flex flex-col gap-[16px]">
              {ecosystemReasonsLeft.map((reason, index) => (
                <div
                  key={index}
                  className="border border-dark px-[16px] py-[12px]"
                >
                  <p className="text-[16px] font-bold leading-[1.3] text-dark xl:text-[24px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-[16px]">
              {ecosystemReasonsRight.map((reason, index) => (
                <div
                  key={index}
                  className="border border-dark px-[16px] py-[12px]"
                >
                  <p className="text-[16px] font-bold leading-[1.3] text-dark xl:text-[24px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLEAR ROLES. CLEAR BOUNDARIES. CLEAR RESULTS. ── */}
      <section className="bg-gray">
        <div className={`mx-auto max-w-[1920px] pb-[80px] ${containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Clear Roles. Clear Boundaries. Clear Results.
          </h2>

          <div className="mt-[40px] flex flex-col gap-[40px] lg:flex-row lg:gap-[80px]">
            {/* Whitespace roles */}
            <div>
              <h3 className="text-[20px] font-bold leading-[1.3] text-dark">
                Whitespace
              </h3>
              <ul className="mt-[8px] text-[16px] leading-[1.8] text-dark xl:text-[20px]">
                {whitespaceRoles.map((role, i) => (
                  <li key={i}>&bull; {role}</li>
                ))}
              </ul>
            </div>

            {/* Ecosystem Partners roles */}
            <div>
              <h3 className="text-[20px] font-bold leading-[1.3] text-dark">
                Ecosystem Partners
              </h3>
              <ul className="mt-[8px] text-[16px] leading-[1.8] text-dark xl:text-[20px]">
                {partnerRoles.map((role, i) => (
                  <li key={i}>&bull; {role}</li>
                ))}
              </ul>
            </div>

            {/* Right — Quote */}
            <div className="flex-1 lg:text-right">
              <p className="text-[20px] font-bold leading-[1.4] text-dark md:text-[24px] xl:text-[32px]">
                Clarity scales when everyone knows where they stand.
              </p>
            </div>
          </div>

          {/* Dark quote bars */}
          <div className="mt-[60px] flex flex-col gap-[8px]">
            <div className="inline-block self-start bg-dark px-[16px] py-[12px]">
              <p className="text-[20px] font-bold leading-[1.2] text-white md:text-[24px] xl:text-[34px]">
                We don&apos;t do everything.
              </p>
            </div>
            <div className="inline-block self-start bg-dark px-[16px] py-[12px]">
              <p className="text-[20px] font-bold leading-[1.2] text-white md:text-[24px] xl:text-[34px]">
                We make everything move in the same direction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
