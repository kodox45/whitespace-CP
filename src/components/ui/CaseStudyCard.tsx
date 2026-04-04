import Image from "next/image";
import Link from "next/link";

/* ─── Arrow Icon (same as PortfolioCard) ─── */
function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" className={className}>
      <path d="M0.47 11.16H26.28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.58 0.47L26.28 11.16L15.58 21.86" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export interface CaseStudyCardProps {
  /** Case study title (e.g. "Brand Architecture & Business Alignment") */
  title: string;
  /** Short description / excerpt */
  excerpt: string;
  /** Image path */
  image: string;
  /** URL slug for detail page */
  slug: string;
}

/**
 * CaseStudyCard — Case Studies listing card
 *
 * Figma reference: Component 33 / 37 / 38 / 39 from Case Studies Listing (501:1870)
 * Image: 707×330, cornerRadius 16
 * Gap image→text: 28px (Figma: text y=358, image h=330)
 * Title: ~24px bold, #000000 (first line of mixed-fontSize text block)
 * Description: ~20px normal, #000000 (remaining lines)
 * Arrow: bottom-right of text area, same arrow SVG
 * Hover: title + arrow turn blue
 */
export default function CaseStudyCard({
  title,
  excerpt,
  image,
  slug,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="group block">
      {/* Image: 707×330, rounded-[16px], full color */}
      <div className="relative aspect-[707/330] overflow-hidden rounded-[16px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Text area: 28px below image (Figma: 358 - 330 = 28) */}
      <div className="mt-[28px] flex items-end justify-between">
        <div className="flex-1">
          {/* Title: 24px bold, #000000 */}
          <h3 className="text-[24px] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-primary-blue">
            {title}
          </h3>
          {/* Description: 20px, #000000 */}
          <p className="mt-[4px] text-[16px] leading-[1.5] text-black xl:text-[20px]">
            {excerpt}
          </p>
        </div>
        <ArrowRight className="mb-[4px] ml-[16px] shrink-0 text-dark transition-colors duration-300 group-hover:text-primary-blue" />
      </div>
    </Link>
  );
}
