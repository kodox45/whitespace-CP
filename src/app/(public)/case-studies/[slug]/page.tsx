import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import type { CaseStudyMeta, CaseStudyDetail, CaseStudyGallery } from "@/data/case-studies";
import { layout } from "@/data/design-system";

const containerPx = layout.containerPx;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

/* ─── Meta Sidebar ─────────────────────────────────────── */

function MetaSidebar({ meta }: { meta: CaseStudyMeta }) {
  return (
    <div className="space-y-[24px] text-[14px] leading-[1.6] text-dark xl:text-[16px]">
      <div>
        <p className="font-bold">Client</p>
        <p>{meta.client}</p>
      </div>
      <div>
        <p className="font-bold">Industry</p>
        <p>{meta.industry}</p>
      </div>
      <div>
        <p className="font-bold">Type of Work</p>
        <p>{meta.typeOfWork}</p>
      </div>
      <div>
        <p className="font-bold">Project Team</p>
        {meta.projectTeam.map((member, i) => (
          <p key={i}>{member}</p>
        ))}
      </div>
      <div>
        <p className="font-bold">Year</p>
        <p>{meta.year}</p>
      </div>
    </div>
  );
}

/* ─── Body Content ─────────────────────────────────────── */

function BodyContent({ detail }: { detail: CaseStudyDetail }) {
  return (
    <div className="text-[16px] leading-[1.5] text-dark xl:text-[20px] xl:leading-[1.35]">
      {/* Intro paragraphs */}
      <div className="whitespace-pre-line">{detail.introText}</div>

      {/* Before */}
      <div className="mt-[28px]">
        <p className="font-bold">Before</p>
        <ul className="mt-[4px] space-y-[2px]">
          {detail.before.map((item, i) => (
            <li key={i}>
              <span className="mr-[8px]">&bull;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* After */}
      <div className="mt-[28px]">
        <p className="font-bold">After</p>
        <ul className="mt-[4px] space-y-[2px]">
          {detail.after.map((item, i) => (
            <li key={i}>
              <span className="mr-[8px]">&bull;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* What We Did */}
      <div className="mt-[28px]">
        <p className="font-bold">What We Did</p>
        <ul className="mt-[4px] space-y-[2px]">
          {detail.whatWeDid.map((item, i) => (
            <li key={i}>
              <span className="mr-[8px]">&bull;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Meaning & Alignment Impact */}
      <div className="mt-[28px]">
        <p className="font-bold">Meaning &amp; Alignment Impact</p>
        <p className="mt-[4px]">{detail.meaningImpact}</p>
      </div>
    </div>
  );
}

/* ─── Gallery ──────────────────────────────────────────── */

function Gallery({
  gallery,
  client,
}: {
  gallery: CaseStudyGallery;
  client: string;
}) {
  if (gallery.layout === "two-up") {
    return (
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:gap-[43px]">
        {gallery.images.map((img, i) => (
          <div key={i} className="relative aspect-[695/424] w-full overflow-hidden">
            <Image
              src={img}
              alt={`${client} gallery ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  if (gallery.layout === "two-by-two") {
    return (
      <div className="grid grid-cols-1 gap-x-[24px] gap-y-[24px] md:grid-cols-2 xl:gap-x-[41px] xl:gap-y-[39px]">
        {gallery.images.map((img, i) => (
          <div key={i} className="relative aspect-[696/425] w-full overflow-hidden">
            <Image
              src={img}
              alt={`${client} gallery ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  /* single layout */
  return (
    <div className="relative aspect-[1434/568] w-full overflow-hidden">
      <Image
        src={gallery.images[0]}
        alt={`${client} gallery`}
        fill
        className="object-cover"
      />
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────── */

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return notFound();

  return (
    <article className="bg-white pt-[112px]">
      {/* ═══ Section 1: Header ═══ */}
      <div className={`mx-auto max-w-[1920px] ${containerPx}`}>
        {/* Separator line — Figma: stroke #c8cccc below navbar */}
        <div className="h-px bg-gray-dark" />

        {/* Breadcrumb — Home > Our Perspective > Case Studies > [Client] */}
        <div className="mt-[14px]">
          <Breadcrumb
            items={[
              { label: "Our Perspective", href: "/insights" },
              { label: "Case Studies", href: "/case-studies" },
              { label: study.client },
            ]}
          />
        </div>

        {/* 2-column: Title (left) + Overview (right) */}
        {/* Figma: title x:241 y:219 fs:48 #3754ed | overview x:930 y:224 w:747 fs:20 #141414 */}
        <div className="mt-[36px] flex flex-col gap-[24px] xl:flex-row xl:gap-0">
          {/* Left column — client name */}
          <div className="shrink-0 xl:w-[689px]">
            <h1 className="text-[28px] leading-[1.19] text-primary-blue md:text-[36px] xl:text-[48px]">
              {study.client}
            </h1>
          </div>

          {/* Right column — overview */}
          <div className="flex-1 xl:mt-[5px]">
            <p className="text-[16px] leading-[1.5] text-dark xl:max-w-[747px] xl:text-[20px]">
              {study.detail.overview}
            </p>
          </div>
        </div>
      </div>

      {/* ═══ Section 2: Hero Image ═══ */}
      {/* Figma: x:244 y:376 w:1434 h:672 — gap from title area = 83px */}
      <div className={`mx-auto max-w-[1920px] ${containerPx} mt-[48px] xl:mt-[83px]`}>
        <div className="relative aspect-[1434/672] w-full overflow-hidden">
          <Image
            src={study.heroImage}
            alt={study.client}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ═══ Section 3: Content — Meta sidebar + Body ═══ */}
      {/* Figma: meta x:244 y:1130 | body x:930 y:1129 — gap from hero = 82px */}
      <div className={`mx-auto max-w-[1920px] ${containerPx} mt-[48px] xl:mt-[82px]`}>
        <div className="flex flex-col gap-[40px] xl:flex-row xl:gap-0">
          {/* Left column — Meta sidebar */}
          {/* Figma: x:244 w:262 fs:16 mixed weights */}
          <div className="shrink-0 xl:w-[689px]">
            <div className="max-w-[262px]">
              <MetaSidebar meta={study.meta} />
            </div>
          </div>

          {/* Right column — Body content */}
          {/* Figma: x:930 w:747 fs:20 mixed weights */}
          <div className="flex-1 xl:max-w-[747px]">
            <BodyContent detail={study.detail} />
          </div>
        </div>
      </div>

      {/* ═══ Section 4: Blue Accent Diagonal ═══ */}
      {/* Figma: blue vector y:1605 h:342 full-width diagonal — sits BETWEEN content and gallery */}
      <div className="mt-[60px] overflow-hidden xl:mt-[100px]">
        <svg
          viewBox="0 0 1920 342"
          preserveAspectRatio="none"
          className="block h-[180px] w-full text-primary-blue xl:h-[342px]"
          aria-hidden="true"
        >
          <polygon points="0,342 1920,0 1920,342" fill="currentColor" />
        </svg>
      </div>

      {/* ═══ Section 5: Gallery ═══ */}
      {/* Figma: gallery ~126px below blue accent */}
      <div className={`mx-auto max-w-[1920px] ${containerPx} mt-[60px] xl:mt-[126px]`}>
        <Gallery gallery={study.gallery} client={study.client} />
      </div>

      {/* Bottom spacing before footer */}
      <div className="h-[80px] xl:h-[137px]" />
    </article>
  );
}
