import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABanner from "@/components/layout/CTABanner";

/* ─── DATA ─── */

const teamMembers = [
  {
    name: "Dimas Mardjono",
    title: "Principal Strategist",
    photo: "/images/team-dimas.png",
    bio: "Dimas leads Whitespace with a clarity-driven strategic perspective, bringing together brand meaning, behavioral insight, business dynamics, and communication logic into one cohesive decision-making framework.\n\nHe works alongside founders and C-level leadership teams as they navigate growth, transformation, and organizational realignment\u2014focusing on clarity, alignment, and the long-term health of the brand.",
    linkedin: "#",
  },
  {
    name: "Djoko Susilo",
    title: "Dalang Legendarist",
    photo: "/images/team-djoko.png",
    bio: "Dimas leads Whitespace with a clarity-driven strategic perspective, bringing together brand meaning, behavioral insight, business dynamics, and communication logic into one cohesive decision-making framework.\n\nHe works alongside founders and C-level leadership teams as they navigate growth, transformation, and organizational realignment\u2014focusing on clarity, alignment, and the long-term health of the brand.",
    linkedin: "#",
  },
  {
    name: "Shendy Adam",
    title: "Pialang Sahamist",
    photo: "/images/team-shendy.png",
    bio: "Dimas leads Whitespace with a clarity-driven strategic perspective, bringing together brand meaning, behavioral insight, business dynamics, and communication logic into one cohesive decision-making framework.\n\nHe works alongside founders and C-level leadership teams as they navigate growth, transformation, and organizational realignment\u2014focusing on clarity, alignment, and the long-term health of the brand.",
    linkedin: "#",
  },
  {
    name: "Zuraida",
    title: "Pemegang Cicist",
    photo: "/images/team-zuraida.png",
    bio: "Dimas leads Whitespace with a clarity-driven strategic perspective, bringing together brand meaning, behavioral insight, business dynamics, and communication logic into one cohesive decision-making framework.\n\nHe works alongside founders and C-level leadership teams as they navigate growth, transformation, and organizational realignment\u2014focusing on clarity, alignment, and the long-term health of the brand.",
    linkedin: "#",
  },
];

const differentiators = [
  {
    title: "Clarity-Driven",
    description:
      "We bring structure to meaning, perception, and behavior\u2014so teams move with confidence, not assumption.",
  },
  {
    title: "Business-Aligned",
    description:
      "Brand decisions must serve business outcomes. We ensure both speak the same language.",
  },
  {
    title: "Measurable",
    description:
      "Strategy is only valid when it translates into action, KPIs, and organizational impact.",
  },
  {
    title: "Affordable-Premium",
    description:
      "Strategic depth that\u2019s accessible\u2014without sacrificing quality, thinking, or intention.",
  },
  {
    title: "Collaborative Ecosystem",
    description:
      "We partner with PR groups, digital teams, and communication firms to deliver integrated brand-to-business execution.",
  },
];

/* ─── Reusable padding utility (matches design-system.ts) ─── */
const containerPx = "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px]";

/* ─── PAGE ─── */

export default function AboutPage() {
  return (
    <>
      {/* ── INTRO SECTION ── */}
      <section className="bg-white pt-[112px]">
        <div className={`mx-auto max-w-[1920px] pt-[16px] ${containerPx}`}>
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Who We Are", href: "/about" },
              { label: "About Us" },
            ]}
          />

          {/* 2-column: heading left, body right */}
          <div className="mt-[38px] flex flex-col gap-[40px] pb-[65px] lg:flex-row lg:gap-[80px] wide:gap-[188px]">
            {/* Left column — Blue heading */}
            <div className="lg:w-[531px] lg:shrink-0">
              <h1 className="text-[28px] font-normal leading-[1.15] text-primary-blue md:text-[36px] xl:text-[48px]">
                We are a strategic
                <br />
                brand consultancy
                <br />
                built on clarity,
                <br />
                meaning, and direction.
              </h1>
            </div>

            {/* Right column — Description + quote bar */}
            <div className="flex-1">
              <p className="text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                Whitespace helps companies navigate complexity by aligning
                brand, business, and communication into one coherent system.
                <br />
                We don&apos;t chase trends.
                <br />
                We don&apos;t sell outputs.
                <br />
                We build clarity&mdash;because clarity shapes decisions,
                decisions drive behavior, and behavior creates value.
              </p>

              {/* Blue quote bar */}
              <div className="mt-[28px] inline-block bg-primary-blue px-[11px] py-[3px]">
                <p className="text-[16px] font-normal leading-[1.4] text-white md:text-[20px] xl:text-[24px]">
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
          src="/images/about-hero-image.png"
          alt="Binoculars representing strategic brand clarity"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ── OUR STORY ── */}
      <section className="relative overflow-hidden bg-primary-blue">
        <div className={`mx-auto max-w-[1920px] py-[80px] wide:py-[124px] ${containerPx}`}>
          <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[89px]">
            {/* Left column — Heading + icon */}
            <div className="lg:w-[215px] lg:shrink-0">
              <h2 className="text-[28px] font-normal leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
                Our Story
              </h2>
              <div className="mt-[62px] hidden lg:block">
                <Image
                  src="/images/about-story-icon.svg"
                  alt=""
                  width={215}
                  height={215}
                />
              </div>
            </div>

            {/* Right column — Story text + quote bars */}
            <div className="flex-1">
              <div className="text-[16px] leading-[1.5] text-white xl:text-[20px]">
                <p>
                  Whitespace began in 1999 as a creative boutique with a deep
                  focus on brand-led design. From the beginning, visual systems
                  were treated as craft&mdash;built with discipline, taste, and
                  intent. Design was never decoration; it was expected to
                  function in the real world.
                </p>
                <p className="mt-[20px]">
                  As brands and markets evolved, the focus on form started to
                  reveal its limits. Culture shifted faster, human behavior
                  became more contextual, and competition intensified. Many
                  brands looked coherent and refined, yet struggled to stay
                  relevant once they met everyday reality.
                </p>
                <p className="mt-[20px]">
                  Through years of practice, Whitespace recognized a recurring
                  pattern: strong execution without meaningful movement. The
                  issue was rarely creativity or visual quality, but a growing
                  disconnect between what brands expressed and how people
                  actually lived, chose, and decided.
                </p>
                <p className="mt-[20px]">
                  That realization changed the nature of our work. Whitespace
                  expanded beyond execution into deeper strategic
                  inquiry&mdash;understanding behavior, cultural codes, and
                  competitive context before translating them into brand
                  expression. Brand-led design remains a core capability, now
                  grounded in clarity and intent&mdash;so the work we create
                  does not simply launch, but continues to matter over time.
                </p>
                <p className="mt-[20px]">
                  A journey shaped by practice, reflection, and
                  responsibility&mdash;carried into every piece of work we do.
                </p>
              </div>

              {/* White quote bars */}
              <div className="mt-[52px] flex flex-col gap-[7px]">
                <div className="inline-block self-start bg-white px-[16px] py-[8px]">
                  <p className="text-[16px] font-normal leading-[1] text-primary-blue md:text-[20px] xl:text-[24px]">
                    A journey shaped by practice, reflection, and
                    responsibility&mdash;
                  </p>
                </div>
                <div className="inline-block self-start bg-white px-[16px] py-[8px]">
                  <p className="text-[16px] font-normal leading-[1] text-primary-blue md:text-[20px] xl:text-[24px]">
                    carried into every piece of work we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DRIVES US ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] wide:py-[88px] ${containerPx}`}>
          <h2 className="text-[28px] font-normal leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            What Drives Us
          </h2>
          <div className="mt-[22px] max-w-[995px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
            <p>
              Whitespace began with a simple belief:
              <br />
              Brands move further when clarity sits at the center of how they
              think, act, and make decisions.
            </p>
            <p className="mt-[20px]">
              Over the years, we&apos;ve seen how noise, assumptions, and
              fragmented execution slow organizations down. Clarity does the
              opposite&mdash;it sharpens meaning, aligns intention, and creates
              direction that people can follow.
            </p>
            <p className="mt-[20px]">
              We focus on helping companies move with that kind of clarity.
              <br />
              Clarity that aligns brand, business, and experience.
              <br />
              Clarity that reveals what truly matters, not what&apos;s merely
              loud.
              <br />
              Clarity that respects depth over decoration.
              <br />
              Clarity that keeps decisions honest, grounded, and free of
              shortcuts.
              <br />
              Clarity that&apos;s strengthened&mdash;not replaced&mdash;by
              collaboration.
            </p>
            <p className="mt-[20px]">
              It&apos;s not a statement on a wall.
              <br />
              It&apos;s simply how we work, how we think, and how we show up
              for every brand we partner with.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLARITY THAT MOVES BRANDS FORWARD ── */}
      <section className="relative overflow-hidden">
        {/* Full-width background: gray left + blue diagonal + arrows right */}
        <Image
          src="/images/about-clarity-artwork-full.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Text overlaid on the gray left portion */}
        <div className={`relative z-10 mx-auto max-w-[1920px] py-[80px] wide:py-[100px] ${containerPx}`}>
          <div className="max-w-[580px]">
            <h2 className="text-[28px] font-normal leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
              Clarity that Moves
              <br />
              Brands Forward.
            </h2>
            <p className="mt-[54px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
              It&apos;s not just what we deliver&mdash;it&apos;s how we
              think, how we work, and how we turn complexity into direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="bg-dark">
        <div className={`mx-auto max-w-[1920px] py-[80px] wide:py-[125px] ${containerPx}`}>
          <h2 className="text-[28px] font-normal leading-[1.15] text-white md:text-[36px] xl:text-[48px]">
            What Makes Us Different
          </h2>

          <div className="mt-[40px] flex flex-col gap-[40px] lg:mt-[59px] lg:flex-row lg:gap-[75px]">
            {/* Left — subtitle */}
            <div className="lg:w-[469px] lg:shrink-0">
              <p className="text-[20px] font-normal leading-[1.4] text-white md:text-[24px] xl:text-[32px]">
                We don&apos;t try to be everything. We focus on what actually
                moves brands: clarity, alignment, and strategic consistency.
              </p>
            </div>

            {/* Right — 5 differentiators */}
            <div className="flex-1">
              <div className="flex flex-col gap-[32px]">
                {differentiators.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-[20px] font-bold leading-[1.3] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-[8px] text-[16px] leading-[1.5] text-white xl:text-[20px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-white">
        <div className={`mx-auto max-w-[1920px] py-[80px] wide:py-[120px] ${containerPx}`}>
          <h2 className="text-[28px] font-normal leading-[1.15] text-dark md:text-[36px] xl:text-[48px]">
            Leadership
          </h2>

          <div className="mt-[80px] wide:mt-[115px] flex flex-col">
            {teamMembers.map((member, index) => (
              <div key={member.name}>
                <div className="flex flex-col gap-[32px] py-[40px] md:flex-row md:gap-[60px] xl:gap-[82px]">
                  {/* Photo — no rounded corners per Figma */}
                  <div className="relative h-[350px] w-full shrink-0 overflow-hidden md:h-[454px] md:w-[466px]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 466px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-[28px] font-bold leading-[1.15] text-dark xl:text-[32px]">
                      {member.name}
                    </h3>
                    <p className="mt-[8px] text-[16px] leading-[1.5] text-dark/60 xl:text-[20px]">
                      {member.title}
                    </p>
                    <div className="mt-[24px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                      {member.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className={i > 0 ? "mt-[16px]" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* LinkedIn links */}
                    <div className="mt-[32px] flex flex-wrap items-center gap-[24px]">
                      <Link
                        href={member.linkedin}
                        className="flex items-center gap-[8px] text-[16px] text-dark transition-colors hover:text-primary-blue xl:text-[20px]"
                      >
                        <Image
                          src="/images/icon-linkedin.svg"
                          alt=""
                          width={35}
                          height={35}
                          className="h-auto w-[35px]"
                        />
                        Follow and connect on LinkedIn
                      </Link>
                      <Link
                        href={member.linkedin}
                        className="rounded-full border border-dark px-[20px] py-[8px] text-[16px] text-dark transition-colors hover:border-primary-blue hover:text-primary-blue xl:text-[20px]"
                      >
                        Connect with {member.name}
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Separator line between team members */}
                {index < teamMembers.length - 1 && (
                  <div className="h-[1px] bg-gray-dark" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1920px]">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
