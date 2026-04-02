import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { layout } from "@/data/design-system";

/* ─── DATA ─── */

const clarityFrameworks = [
  {
    title: "Clarity Ecosystem Model",
    description:
      "A holistic way to understand how cultural, behavioral, organizational, and contextual forces shape brand meaning.",
  },
  {
    title: "Integrated Meaning\u2013Perception\u2013Value Framework",
    description:
      "A unifying lens to see how meaning influences perception, and how perception drives value across audiences and touchpoints.",
  },
  {
    title: "Brand-Driven Customer Value Journey",
    description:
      "A journey approach that connects meaning to behavior, ensuring every stage of the customer experience reinforces clarity and relevance.",
  },
  {
    title: "Strategic Clarity Method",
    description:
      "A way of forming strategic direction by bringing insight, narrative, alignment, and business reality into one coherent decision-making path.",
  },
  {
    title: "Narrative Engineering Approach",
    description:
      "A structured but flexible way to shape brand narratives based on meaning, context, and long-term strategic intent.",
  },
];

const workSteps = [
  {
    number: "1.",
    title: "Understand the Landscape",
    description: "Context, behavior, patterns, gaps, opportunities.",
  },
  {
    number: "2.",
    title: "Shape the Clarity",
    description: "Meaning, direction, narrative, value alignment.",
  },
  {
    number: "3.",
    title: "Align the Organization",
    description: "Stakeholders, teams, communication, expectations.",
  },
  {
    number: "4.",
    title: "Guide the Execution",
    description:
      "Ensuring every expression, experience, and decision stays aligned.",
  },
];

/* ─── PAGE ─── */

export default function OurApproachPage() {
  return (
    <>
      {/* ── INTRO SECTION ── */}
      <section className="bg-white pt-[112px]">
        <div className={`mx-auto max-w-[1920px] ${layout.containerPx}`}>
          {/* Separator line — at section top, directly under navbar */}
          <div className="h-[1px] bg-gray-dark" />

          {/* Breadcrumb — 15px gap (31px target minus breadcrumb internal 16px py) */}
          <div className="pt-[15px]">
            <Breadcrumb
              items={[
                { label: "Who We Are", href: "/about" },
                { label: "Our Approach" },
              ]}
            />
          </div>

          {/* 2-column: heading left, body right — 54px below breadcrumb */}
          <div className="mt-[22px] flex flex-col gap-[40px] pb-[93px] lg:flex-row lg:gap-[40px] xl:gap-[80px] min-[1920px]:gap-[254px]">
            {/* Left column — Blue heading */}
            <div className="lg:w-[463px] lg:shrink-0">
              <h1 className="text-[28px] font-bold leading-[1.15] text-primary-blue md:text-[36px] xl:text-[48px]">
                We don&apos;t start
                <br />
                with design.
                <br />
                We start with clarity.
              </h1>
            </div>

            {/* Right column — Description + quote bar */}
            <div className="flex-1">
              <p className="max-w-[717px] text-[16px] leading-[1.5] text-black xl:text-[20px]">
                Our work is built on understanding the forces that shape how
                brands behave, communicate, and create value.
                <br />
                Clarity isn&apos;t a step in our process&mdash;it&apos;s the
                system beneath everything we do.
                <br />
                We read patterns. We align meaning. We connect brand and
                business.
                <br />
                And we turn complexity into a direction that organizations can
                act on.
              </p>

              {/* Blue quote bar */}
              <div className="mt-[26px] inline-block bg-primary-blue px-[11px] py-[3px]">
                <p className="text-[16px] leading-[1.4] text-white md:text-[20px] xl:text-[24px]">
                  A clear brand becomes a brand that moves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[400px] xl:h-[575px]">
        <Image
          src="/images/approach-hero-image.png"
          alt="Architectural perspective representing strategic clarity"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ── A SYSTEM OF CLARITY ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] pt-[66px] pb-[80px] ${layout.containerPx}`}>
          <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[40px] xl:gap-[80px] min-[1920px]:gap-[97px]">
            {/* Left — Heading + subtitle */}
            <div className="lg:w-[446px] lg:shrink-0">
              <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
                A System of Clarity
              </h2>
              <p className="mt-[16px] text-[20px] leading-[1.4] text-black md:text-[24px] xl:text-[32px]">
                Behind every engagement is a set of proprietary clarity
                principles that help us understand brands beyond visuals or
                messaging.
                <br />
                They guide how we diagnose, interpret, and align meaning,
                perception, and value.
              </p>
            </div>

            {/* Right — 5 frameworks */}
            <div className="flex-1">
              <div className="flex flex-col gap-[24px]">
                {clarityFrameworks.map((fw, index) => (
                  <div key={index}>
                    <h3 className="text-[20px] font-bold leading-[1.3] text-black">
                      {fw.title}
                    </h3>
                    <p className="mt-[4px] text-[16px] leading-[1.5] text-black xl:text-[20px]">
                      {fw.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Blue quote bars */}
              <div className="mt-[40px] flex flex-col gap-[7px]">
                <div className="inline-block self-start bg-primary-blue px-[11px] py-[3px]">
                  <p className="text-[16px] leading-[1.5] text-white md:text-[20px] xl:text-[24px]">
                    These are not templates. They are ways of thinking&mdash;
                  </p>
                </div>
                <div className="inline-block self-start bg-primary-blue px-[11px] py-[3px]">
                  <p className="text-[16px] leading-[1.5] text-white md:text-[20px] xl:text-[24px]">
                    refined through real problems, real brands, and real
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE SHAPE DIRECTION (Blue bg) ── */}
      <section className="bg-primary-blue">
        <div className={`mx-auto max-w-[1920px] pt-[104px] pb-[80px] ${layout.containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
            How We Shape Direction
          </h2>

          <div className="mt-[57px] max-w-[1187px] text-[16px] leading-[1.5] text-white xl:text-[20px]">
            <p>
              We don&apos;t impose models.
              <br />
              We study the landscape&mdash;how people behave, how meaning
              shifts, how businesses operate, and how brands influence
              decisions.
            </p>
            <p className="mt-[20px]">
              Direction emerges by aligning four things:
              <br />
              <strong>&bull; What the brand means</strong>
              <br />
              <strong>&bull; How people experience it</strong>
              <br />
              <strong>&bull; Where the business needs to go</strong>
              <br />
              <strong>&bull; What the organization can deliver consistently</strong>
              <br />
              When these move together, brands stop drifting and start
              accelerating.
            </p>
          </div>

          {/* White quote bar */}
          <div className="mt-[48px] inline-block bg-white px-[11px] py-[3px]">
            <p className="text-[16px] leading-[1.5] text-primary-blue md:text-[20px] xl:text-[24px]">
              We don&apos;t deliver outputs. We deliver clarity that guides
              outputs.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK (Gray bg) ── */}
      <section className="bg-gray">
        <div className={`mx-auto max-w-[1920px] pt-[82px] pb-[80px] ${layout.containerPx}`}>
          <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[40px] xl:gap-[80px] min-[1920px]:gap-[128px]">
            {/* Left — Heading + subtitle */}
            <div className="lg:w-[415px] lg:shrink-0">
              <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
                How We Work
              </h2>
              <p className="mt-[16px] text-[20px] leading-[1.4] text-black md:text-[24px] xl:text-[32px]">
                Every engagement follows a calm, intentional rhythm. Not a rigid
                process&mdash;just a straightforward way of moving from
                understanding to action.
              </p>
            </div>

            {/* Right — 4 steps */}
            <div className="flex-1">
              <div className="flex flex-col gap-[24px]">
                {workSteps.map((step) => (
                  <div key={step.number}>
                    <h3 className="text-[20px] font-bold leading-[1.3] text-black">
                      {step.number} {step.title}
                    </h3>
                    <p className="mt-[4px] text-[16px] leading-[1.5] text-black xl:text-[20px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dark quote bars */}
              <div className="mt-[40px] flex flex-col gap-[7px]">
                <div className="inline-block self-start bg-dark px-[11px] py-[3px]">
                  <p className="text-[16px] leading-[1.5] text-white md:text-[20px] xl:text-[24px]">
                    Clarity isn&apos;t a phase.
                  </p>
                </div>
                <div className="inline-block self-start bg-dark px-[11px] py-[3px]">
                  <p className="text-[16px] leading-[1.5] text-white md:text-[20px] xl:text-[24px]">
                    It&apos;s the foundation beneath every phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE COLLABORATE ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] pt-[100px] pb-[80px] ${layout.containerPx}`}>
          <h2 className="text-[28px] font-bold leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            How We Collaborate
          </h2>

          <div className="mt-[57px] max-w-[1187px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
            <p>
              We work closely with founders, leaders, and teams&mdash;helping
              them navigate complexity with clarity and confidence.
              <br />
              No jargon, no theatrics, no over-engineering.
              <br />
              Just thoughtful partnership grounded in insight, alignment, and
              long-term value.
            </p>
          </div>

          {/* Blue quote bar */}
          <div className="mt-[44px] inline-block bg-primary-blue px-[11px] py-[3px]">
            <p className="text-[16px] leading-[1.5] text-white md:text-[20px] xl:text-[24px]">
              Clarity isn&apos;t our service. It&apos;s our approach to
              everything.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
