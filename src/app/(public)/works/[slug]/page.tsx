import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { layout } from "@/data/design-system";
import { works, getWorkBySlug, workCategories } from "@/data/works";

/**
 * Our Works — Detail Page (/works/[slug])
 *
 * Figma reference frames (Case Study detail pages used as template):
 *   - B-Log: 513:2012 (1920×3184, 2 gallery images)
 *   - KitaBisa: 552:2044 (1920×3321, 2 gallery images)
 *   - Syailendra: 552:2391 (1920×3674, 4 gallery images)
 *
 * Layout measurements (from Figma absolute bounds):
 *   Separator line: y=111.5, 1px #C8CCCC
 *   Breadcrumb: y=143 (31px below navbar)
 *   Title: x=241, y=219, fontSize=48, #3754ED
 *   Description: x=930, y=224, w=747, fontSize=20, #141414
 *   Hero image: x=244, y=376, 1434×672 (100px below title bottom)
 *   Project info: y=1130 (82px below hero bottom)
 *     Left metadata: x=244, w=262, fontSize=16
 *     Right body: x=930, w=747, fontSize=20
 *   Gallery: 2-col grid, ~696×425 images, gap=40px
 *   Gallery gap from body: ~140px
 */

/* ─── Static params for build ─── */
export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Not Found" };
  return {
    title: `${work.title} | Our Works | Whitespace`,
    description: work.description,
  };
}

/* ─── Metadata label renderer ─── */
function MetaField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[16px] font-bold leading-[1.6] text-dark">
        {label}
      </dt>
      <dd className="text-[16px] leading-[1.6] text-dark">{children}</dd>
    </div>
  );
}

/* ─── Page ─── */
export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const detail = work.detail;
  const primaryCategory = work.categories[0];
  const categoryLabel =
    workCategories.find((c) => c.slug === primaryCategory)?.label ||
    "Brand Strategy";

  /* Fallback detail for works without full detail data */
  const body = detail?.body ?? {
    intro: work.description,
    before: [],
    after: [],
    whatWeDid: [],
    impact: "",
  };

  return (
    <div className="min-h-screen bg-white pt-[112px]">
      <div className={layout.containerPx + " mx-auto max-w-[1920px]"}>
        {/* ═══ Separator line — y=111.5 ═══ */}
        <div className="h-px bg-gray-dark" />

        {/* ═══ Breadcrumb — y=143, 31px below navbar ═══ */}
        <div className="pt-[15px]">
          <Breadcrumb
            items={[
              { label: "Our Works", href: "/works" },
              { label: work.title },
            ]}
          />
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 1 — Title + Short Description
            Figma: title x=241 y=219 (48px #3754ED)
                   desc x=930 y=224 w=747 (20px #141414)
            Same row, 5px y offset — use flex items-start
            Gap from breadcrumb: 219-(143+22) = 54px
            ════════════════════════════════════════════════════════ */}
        <div className="mt-[22px] xl:mt-[54px] flex flex-col gap-[24px] xl:flex-row xl:items-start xl:gap-[0px]">
          {/* Title — left column, same width as works listing heading (487px) */}
          <h1 className="shrink-0 text-[32px] leading-[1.19] text-primary-blue md:text-[40px] xl:w-[689px] xl:text-[48px]">
            {work.title}
          </h1>

          {/* Short description — right column, w=747 */}
          <p className="text-[16px] leading-[1.5] text-dark xl:max-w-[747px] xl:text-[20px]">
            {work.description}
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 2 — Hero Image
            Figma: x=244, y=376, 1434×672
            Gap from title bottom: 376-(219+57) = 100px
            ════════════════════════════════════════════════════════ */}
        <div className="mt-[48px] xl:mt-[100px]">
          <div className="relative aspect-[1434/672] w-full overflow-hidden bg-gray">
            <Image
              src={detail?.heroImage || work.image}
              alt={work.title}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 3 — Project Info (2 columns)
            Figma: y=1130 (82px below hero bottom)
            Left: x=244 w=262 (metadata, 16px)
            Right: x=930 w=747 (body, 20px mixed)
            ════════════════════════════════════════════════════════ */}
        <div className="mt-[48px] xl:mt-[82px] flex flex-col gap-[40px] xl:flex-row xl:items-start xl:gap-[0px]">
          {/* Left — Project metadata */}
          <dl className="flex shrink-0 flex-col gap-[20px] xl:w-[689px] xl:gap-[24px]">
            <MetaField label="Client">
              {detail?.client || work.title}
            </MetaField>
            <MetaField label="Industry">
              {detail?.industry || "Consulting"}
            </MetaField>
            <MetaField label="Type of Work">
              {detail?.typeOfWork || categoryLabel}
            </MetaField>
            {detail?.projectTeam && detail.projectTeam.length > 0 && (
              <MetaField label="Project Team">
                {detail.projectTeam.map((member, i) => (
                  <span key={i} className="block">
                    {member.role}: {member.name}
                  </span>
                ))}
              </MetaField>
            )}
            <MetaField label="Year">{detail?.year || "2025"}</MetaField>
          </dl>

          {/* Right — Body content */}
          <div className="flex-1 xl:max-w-[747px]">
            {/* Intro */}
            {body.intro && (
              <div className="text-[16px] leading-[1.6] text-dark xl:text-[20px]">
                {body.intro.split("\n\n").map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-[20px]" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Before */}
            {body.before.length > 0 && (
              <div className="mt-[28px]">
                <h3 className="text-[16px] font-bold leading-[1.6] text-dark xl:text-[20px]">
                  Before
                </h3>
                <ul className="mt-[4px] text-[16px] leading-[1.6] text-dark xl:text-[20px]">
                  {body.before.map((item, i) => (
                    <li key={i}>
                      <span className="mr-[8px]">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* After */}
            {body.after.length > 0 && (
              <div className="mt-[28px]">
                <h3 className="text-[16px] font-bold leading-[1.6] text-dark xl:text-[20px]">
                  After
                </h3>
                <ul className="mt-[4px] text-[16px] leading-[1.6] text-dark xl:text-[20px]">
                  {body.after.map((item, i) => (
                    <li key={i}>
                      <span className="mr-[8px]">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What We Did */}
            {body.whatWeDid.length > 0 && (
              <div className="mt-[28px]">
                <h3 className="text-[16px] font-bold leading-[1.6] text-dark xl:text-[20px]">
                  What We Did
                </h3>
                <ul className="mt-[4px] text-[16px] leading-[1.6] text-dark xl:text-[20px]">
                  {body.whatWeDid.map((item, i) => (
                    <li key={i}>
                      <span className="mr-[8px]">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact */}
            {body.impact && (
              <div className="mt-[28px]">
                <h3 className="text-[16px] font-bold leading-[1.6] text-dark xl:text-[20px]">
                  Meaning & Alignment Impact
                </h3>
                <p className="mt-[4px] text-[16px] leading-[1.6] text-dark xl:text-[20px]">
                  {body.impact}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 4 — Gallery Images
            Figma: 2-col grid, ~696×425 images
            B-Log: gap-x=43px, Syailendra: gap-x=41px, gap-y=39px
            Standardized: gap=40px
            Gap from body: ~140px
            ════════════════════════════════════════════════════════ */}
        {detail?.galleryImages && detail.galleryImages.length > 0 && (
          <div className="mt-[80px] xl:mt-[140px] grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-[40px]">
            {detail.galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[696/425] w-full overflow-hidden bg-gray"
              >
                <Image
                  src={img}
                  alt={`${work.title} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        {/* Bottom spacing before footer */}
        <div className="h-[80px] xl:h-[140px]" />
      </div>
    </div>
  );
}
