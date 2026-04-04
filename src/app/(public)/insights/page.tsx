"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ArticleCard from "@/components/ui/ArticleCard";
import {
  insights,
  insightCategories,
  type InsightCategory,
} from "@/data/insights";
import { layout } from "@/data/design-system";

const containerPx = layout.containerPx;

export default function InsightListingPage() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory | null>(
    null
  );

  const filteredInsights = activeCategory
    ? insights.filter((i) => i.category === activeCategory)
    : insights;

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="bg-white pt-[112px]">
        <div className={`mx-auto max-w-[1920px] ${containerPx}`}>
          {/* Separator line — Figma: y:111.5, w:1434, stroke #c8cccc */}
          <div className="h-px bg-[#c8cccc]" />

          {/* Breadcrumb — Figma: y:143 (31px below line) */}
          {/* Line bottom at y:112, breadcrumb text at y:143, Breadcrumb has py-[16px] */}
          {/* 143 - 112 - 16 (breadcrumb top padding) - 1 (line) = 14px gap needed */}
          <div className="mt-[14px]">
            <Breadcrumb
              items={[
                { label: "Our Perspective", href: "/insights" },
                { label: "Insight" },
              ]}
            />
          </div>

          {/* 2-column layout — heading (left) + description & accent (right) */}
          {/* Figma: heading y:219, breadcrumb nav bottom ~183 → gap 36px */}
          <div className="mt-[36px] flex flex-col gap-[40px] pb-[63px] xl:flex-row xl:gap-0">
            {/* Left column — takes 717px (heading 456px + gap to description start) */}
            {/* Figma: heading x:241, w:456; description starts at x:960 → offset 717px from container */}
            <div className="shrink-0 xl:w-[717px]">
              <h1 className="max-w-[456px] text-[28px] leading-[1.19] text-primary-blue md:text-[36px] xl:text-[48px]">
                Thoughts that shape
                <br />
                how brands think,
                <br />
                behave, and grow.
              </h1>
            </div>

            {/* Right — Description + accent bar */}
            {/* Figma: x:960, y offset 6px below heading (225-219) */}
            <div className="flex-1 xl:mt-[6px] xl:max-w-[731px]">
              {/* Description — Figma: y:225, fontSize:20, color:#000000, h:123 */}
              {/* Figma has \n breaks. DM Sans is wider than Gramatika, so fewer */}
              {/* breaks are needed to approximate the same visual height. */}
              <p className="text-[16px] leading-[1.5] text-black xl:text-[20px]">
                Our insights explore the intersections of brand, behavior, and
                business&mdash;helping leaders navigate complexity with clarity.
                <br />
                No trends. No noise. Just frameworks, perspectives, and
                analysis grounded in real-world decision-making.
              </p>

              {/* Blue accent bar — Figma: y:404, w:517, h:40, fill:#3754ed */}
              {/* Text: x:971 (pl:11), w:498, rect w:517, pr: 517-11-498=8 */}
              <div className="mt-[56px] inline-block bg-primary-blue py-[3px] pl-[11px] pr-[8px]">
                <p className="text-[18px] leading-[1.4] text-white md:text-[20px] xl:text-[24px]">
                  Clarity made practical. Thinking made useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER IMAGE ── */}
      {/* Figma: y:507, w:1920, h:575, full-bleed image */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[400px] xl:h-[575px]">
        <Image
          src="/images/insight-banner.png"
          alt="Insight perspectives banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ── CONTENT: Sidebar Categories + Article Cards ── */}
      {/* Figma: sidebar starts y:1209, cards start y:1216 */}
      {/* Top padding: 1209 - (507+575) = 127px */}
      {/* Bottom padding: 2640 - (2104+378) = 158px */}
      <section className="bg-white">
        <div
          className={`mx-auto max-w-[1920px] pt-[80px] pb-[80px] xl:pt-[127px] xl:pb-[158px] ${containerPx}`}
        >
          <div className="flex flex-col gap-[60px] xl:flex-row xl:gap-0">
            {/* Sidebar — Category filters */}
            {/* Figma: x:243, w:484 (to card edge), categories fontSize:28, gap:32px */}
            <nav className="shrink-0 xl:w-[484px]">
              <ul className="flex flex-row flex-wrap gap-[16px] xl:flex-col xl:gap-[32px]">
                {insightCategories.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      onClick={() =>
                        setActiveCategory(
                          activeCategory === cat.slug ? null : cat.slug
                        )
                      }
                      className={`text-left text-[20px] leading-[1.4] transition-colors xl:text-[28px] ${
                        activeCategory === cat.slug
                          ? "text-primary-blue"
                          : "text-dark hover:text-primary-blue"
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Cards Grid — 2 columns */}
            {/* Figma: col1 x:727, col2 x:1222, each w:456 */}
            {/* Column gap: 1222-(727+456) = 39px */}
            {/* Row gap: 1660-(1216+378) = 66px */}
            <div className="grid flex-1 grid-cols-1 gap-x-[20px] gap-y-[40px] md:grid-cols-2 xl:gap-x-[39px] xl:gap-y-[66px]">
              {filteredInsights.map((insight) => (
                <ArticleCard
                  key={insight.id}
                  title={insight.title}
                  date={insight.date}
                  image={insight.image}
                  slug={insight.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
