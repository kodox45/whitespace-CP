import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  insights,
  getInsightBySlug,
  type InsightBodyBlock,
} from "@/data/insights";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return notFound();

  const currentIndex = insights.findIndex((i) => i.slug === insight.slug);
  const prevInsight = currentIndex > 0 ? insights[currentIndex - 1] : null;
  const nextInsight =
    currentIndex < insights.length - 1 ? insights[currentIndex + 1] : null;

  const categoryLabel =
    insight.category === "articles"
      ? "Articles"
      : insight.category === "framework-perspectives"
        ? "Framework Perspectives"
        : insight.category === "brand-business-analysis"
          ? "Brand & Business Analysis"
          : insight.category === "linkedin-crosspost"
            ? "Linkedin Cross-post"
            : insight.category === "video-talks"
              ? "Video/Talks"
              : "Whitepapers";

  return (
    <article className="pt-[112px] bg-white">
      {/* ── Separator line ── */}
      <div className="px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px]">
        <div className="h-px bg-gray-dark" />
      </div>

      {/* ── Breadcrumb ── */}
      <nav className="px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px] pt-[31px]">
        <div className="flex items-center gap-[14px] text-[16px] text-dark">
          <Link
            href="/"
            className="hover:text-primary-blue transition-colors"
          >
            Home
          </Link>
          <ChevronRight />
          <Link
            href="/insights"
            className="hover:text-primary-blue transition-colors"
          >
            Our Perspective
          </Link>
          <ChevronRight />
          <Link
            href="/insights"
            className="hover:text-primary-blue transition-colors"
          >
            Insight
          </Link>
          <ChevronRight />
          <span className="text-primary-blue">{categoryLabel}</span>
        </div>
      </nav>

      {/* ── Title + Date ── */}
      <div className="px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px] pt-[54px]">
        <h1 className="text-[28px] md:text-[36px] xl:text-[48px] font-bold leading-[1.2] text-primary-blue max-w-[761px]">
          {insight.title}
        </h1>
        <p className="mt-[8px] text-[16px] xl:text-[20px] leading-[1.4] text-dark">
          {insight.date}
        </p>
      </div>

      {/* ── Two-column layout: Article + Sidebar ── */}
      <div className="px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px] pt-[34px] pb-[120px]">
        <div className="flex flex-col xl:flex-row xl:gap-[76px]">
          {/* Left column — Article content */}
          <div className="xl:max-w-[1029px] flex-1 min-w-0">
            {/* Featured Image */}
            <div className="w-full aspect-[1029/518] bg-placeholder-bg relative overflow-hidden">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1029px"
                priority
              />
            </div>

            {/* Article Body */}
            <div className="mt-[69px]">
              {insight.body.map((block, i) => (
                <ArticleBlock key={i} block={block} />
              ))}
            </div>
          </div>

          {/* Right column — Sidebar */}
          <aside className="mt-[48px] xl:mt-0 xl:w-[281px] xl:flex-shrink-0">
            <div className="xl:sticky xl:top-[140px]">
              {/* Author */}
              <div>
                <p className="text-[20px] text-dark">Author:</p>
                <div className="mt-[43px] flex items-center gap-[25px]">
                  <div className="w-[103px] h-[100px] rounded-full bg-placeholder-bg overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500" />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold leading-[1.4] text-dark">
                      {insight.author}
                    </p>
                    {insight.authorRole && (
                      <p className="text-[16px] leading-[1.4] text-dark">
                        {insight.authorRole}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="mt-[58px]">
                <p className="text-[20px] text-dark">Share:</p>
                <div className="mt-[44px] flex items-center gap-[26px]">
                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="Share on LinkedIn"
                    className="w-[43px] h-[43px] rounded-full bg-dark flex items-center justify-center hover:bg-primary-blue transition-colors"
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Share on Facebook"
                    className="w-[43px] h-[43px] rounded-full bg-dark flex items-center justify-center hover:bg-primary-blue transition-colors"
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="mt-[58px] flex items-center gap-[36px]">
                {prevInsight ? (
                  <Link
                    href={`/insights/${prevInsight.slug}`}
                    className="flex items-center gap-[8px] text-[20px] text-dark hover:text-primary-blue transition-colors"
                  >
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M5 1L1 5l4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    Prev
                  </Link>
                ) : (
                  <span className="flex items-center gap-[8px] text-[20px] text-dark/30 cursor-default">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M5 1L1 5l4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    Prev
                  </span>
                )}
                {nextInsight ? (
                  <Link
                    href={`/insights/${nextInsight.slug}`}
                    className="flex items-center gap-[8px] text-[20px] text-dark hover:text-primary-blue transition-colors"
                  >
                    Next
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                ) : (
                  <span className="flex items-center gap-[8px] text-[20px] text-dark/30 cursor-default">
                    Next
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

/* ── Article body block renderer ── */

function ArticleBlock({ block }: { block: InsightBodyBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[16px] xl:text-[20px] leading-[1.2] text-dark mb-[24px] whitespace-pre-line">
          {block.content}
        </p>
      );
    case "heading":
      return (
        <h2 className="text-[16px] xl:text-[20px] font-bold leading-[1.2] text-dark mt-[72px] mb-[24px]">
          {block.content}
        </h2>
      );
    case "image":
      return (
        <div className="my-[30px]">
          <div
            className="relative w-full"
            style={{
              maxWidth: block.width ? `${block.width}px` : undefined,
              aspectRatio:
                block.width && block.height
                  ? `${block.width}/${block.height}`
                  : "16/9",
            }}
          >
            <Image
              src={block.src}
              alt={block.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 459px"
            />
          </div>
        </div>
      );
    case "highlight":
      return (
        <div className="mt-[34px] inline-block bg-primary-blue px-[11px] py-[3px]">
          <p className="text-[20px] xl:text-[24px] text-white">
            {block.content}
          </p>
        </div>
      );
    default:
      return null;
  }
}

/* ── Breadcrumb chevron ── */

function ChevronRight() {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      className="flex-shrink-0"
    >
      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
