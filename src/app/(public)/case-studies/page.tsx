"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { caseStudies } from "@/data/case-studies";
import { layout } from "@/data/design-system";

const containerPx = layout.containerPx;
const ITEMS_PER_PAGE = 4;

export default function CaseStudiesListingPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const visibleStudies = caseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < caseStudies.length;

  return (
    <section className="bg-white pt-[112px] pb-[80px] xl:pb-[129px]">
      <div className={`mx-auto max-w-[1920px] ${containerPx}`}>
        {/* Separator line — Figma: stroke #c8cccc below navbar */}
        <div className="h-px bg-[#c8cccc]" />

        {/* Breadcrumb — Home > Our Perspective > Case Studies */}
        {/* Figma: y:143, last item "Case Studies" in blue */}
        <div className="mt-[14px]">
          <Breadcrumb
            items={[
              { label: "Our Perspective", href: "/insights" },
              { label: "Case Studies" },
            ]}
          />
        </div>

        {/* 2-column hero: heading (left) + description (right) */}
        {/* Figma: heading x:241, description x:910 → left column ~667px */}
        <div className="mt-[36px] flex flex-col gap-[32px] xl:flex-row xl:gap-0">
          {/* Left column — heading */}
          {/* Figma: x:241, y:219, w:387, h:114, fs:48, #3754ed */}
          <div className="shrink-0 xl:w-[667px]">
            <h1 className="max-w-[387px] text-[28px] leading-[1.19] text-primary-blue md:text-[36px] xl:text-[48px]">
              Clarity applied to
              <br />
              real brands.
            </h1>
          </div>

          {/* Right column — description */}
          {/* Figma: x:910, y:221, w:781, h:123, fs:32, color:#000000 */}
          <div className="flex-1 xl:mt-[2px]">
            <p className="text-[20px] leading-[1.3] text-black md:text-[24px] xl:max-w-[781px] xl:text-[32px]">
              A selection of transformation projects shaped through alignment,
              meaning, and direction.
            </p>
          </div>
        </div>

        {/* Cards Grid — 2 columns */}
        {/* Figma: cards start y:412, col-gap:29px, row-gap:75px */}
        {/* Gap from description bottom (y:344) to cards (y:412) = 68px */}
        <div className="mt-[48px] grid grid-cols-1 gap-x-[29px] gap-y-[50px] md:grid-cols-2 xl:mt-[68px] xl:gap-y-[75px]">
          {visibleStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              excerpt={study.excerpt}
              image={study.image}
              slug={study.slug}
            />
          ))}
        </div>

        {/* Load More — Figma: centered, y:2240, 130px below last card */}
        {hasMore && (
          <div className="mt-[80px] flex justify-center xl:mt-[130px]">
            <LoadMoreButton
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
