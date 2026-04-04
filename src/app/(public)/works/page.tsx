"use client";

import { useState, useMemo, Suspense, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FilterPills from "@/components/ui/FilterPills";
import PortfolioCard from "@/components/ui/PortfolioCard";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { layout } from "@/data/design-system";
import {
  workCategories,
  getWorksByCategory,
  type WorkCategory,
} from "@/data/works";

/**
 * Our Works — Listing Page
 *
 * Figma reference frames:
 *   - Brand Strategy: 294:2220 (1920x1520, 1 row / 3 cards)
 *   - Brand Experience: 308:996 (1920x2341, 3 rows / 9 cards)
 *   - Digital Brand Activation: 308:1407
 *   - BD-CVJ: 308:1870
 *   - Strategy Advisory: 308:2272
 *   - Brand Led: 308:2676
 *
 * Layout measurements (from Figma absolute bounds):
 *   Breadcrumb: y=143 → pt-[31px] below navbar
 *   Separator line: y=111.5 (1px #C8CCCC, full content width)
 *   "Type of Work" heading: x=241, y=219, fontSize=48, #3754ED
 *   Filter pills: start x=728, y=230 (same row as heading)
 *     → heading column width = 728-241 = 487px
 *     → pills wrap in 2 rows, gap=16px
 *   Cards grid: y=421, 3 cols, 456×328 cards
 *     → col gap = (1434 - 3×456) / 2 = 34px
 *     → row gap = 814 - (421+328) = 65px
 *   Cards top margin from pills: 421 - (287+41) = 93px
 *   Load More: centered, y=842 from brand-strategy → 93px below cards
 */

const ITEMS_PER_LOAD = 6;

function WorksContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory =
    (searchParams.get("category") as WorkCategory) || "brand-strategy";
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const activeCategoryInfo = workCategories.find(
    (c) => c.slug === activeCategory
  );

  const filteredWorks = useMemo(
    () => getWorksByCategory(activeCategory),
    [activeCategory]
  );
  const visibleWorks = filteredWorks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredWorks.length;

  const handleCategoryChange = useCallback(
    (value: string) => {
      setVisibleCount(ITEMS_PER_LOAD);
      router.push(`/works?category=${value}`, { scroll: false });
    },
    [router]
  );

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  }, []);

  const filterOptions = workCategories.map((c) => ({
    value: c.slug,
    label: c.label,
  }));

  return (
    <div className="min-h-screen bg-white pt-[112px]">
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — Breadcrumb + Separator
          Figma: breadcrumb y=143 (31px below navbar), separator y=111.5
          ════════════════════════════════════════════════════════ */}
      <div className={layout.containerPx + " mx-auto max-w-[1920px]"}>
        {/* Separator line — y=111.5, immediately below navbar */}
        <div className="h-px bg-gray-dark" />

        {/* Breadcrumb — 31px below navbar, 16px py from component */}
        <div className="pt-[15px]">
          <Breadcrumb
            items={[
              { label: "Our Works", href: "/works" },
              { label: activeCategoryInfo?.label || "Brand Strategy" },
            ]}
          />
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 2 — "Type of Work" heading + Filter Pills
            Figma: heading x=241 y=219, pills x=728 y=230 (same row)
            Gap from breadcrumb bottom to heading: 219-(143+22) = 54px
            Heading column width: 487px (xl)
            ════════════════════════════════════════════════════════ */}
        <div className="mt-[22px] xl:mt-[54px] flex flex-col gap-[24px] xl:flex-row xl:items-start xl:gap-[0px]">
          {/* Heading — fontSize 48, color #3754ED */}
          <h1 className="shrink-0 text-[32px] leading-[1.19] text-primary-blue md:text-[40px] xl:w-[487px] xl:text-[48px]">
            Type of Work
          </h1>

          {/* Filter pills — fills remaining width, wraps in 2 rows */}
          <div className="flex-1">
            <FilterPills
              options={filterOptions}
              activeValue={activeCategory}
              onChange={handleCategoryChange}
            />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 3 — Portfolio Cards Grid
            Figma: y=421, 3 cols, 456×328 per card
            Gap-x: 34px, Gap-y: 65px
            Top margin from pills: 93px
            ════════════════════════════════════════════════════════ */}
        <div className="mt-[48px] xl:mt-[93px] grid grid-cols-1 gap-x-[20px] gap-y-[40px] md:grid-cols-2 md:gap-x-[28px] md:gap-y-[50px] xl:grid-cols-3 xl:gap-x-[34px] xl:gap-y-[65px]">
          {visibleWorks.map((work) => (
            <PortfolioCard
              key={work.id}
              title={work.title}
              image={work.image}
              slug={work.slug}
              variant="listing"
            />
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION 4 — Load More Button
            Figma: centered, x=877 y=842 → 93px below cards
            Component: 166×34, "+" icon + "Load More" text
            ════════════════════════════════════════════════════════ */}
        {hasMore && (
          <div className="mt-[48px] flex justify-center xl:mt-[93px]">
            <LoadMoreButton onClick={handleLoadMore} />
          </div>
        )}

        {/* Bottom spacing before footer */}
        <div className="h-[48px] xl:h-[93px]" />
      </div>
    </div>
  );
}

export default function WorksPage() {
  return (
    <Suspense>
      <WorksContent />
    </Suspense>
  );
}
