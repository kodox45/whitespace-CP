import Image from "next/image";
import Link from "next/link";

/* ─── Arrow Icon (matches Homepage arrow) ─── */
function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" className={className}>
      <path d="M0.47 11.16H26.28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.58 0.47L26.28 11.16L15.58 21.86" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export interface PortfolioCardProps {
  /** Work title */
  title: string;
  /** Image path */
  image: string;
  /** URL slug for detail page */
  slug: string;
  /** Description text (featured variant only) */
  description?: string;
  /**
   * "listing" — Works pages: 3-col grid, 456×282 image + title below (20px, 12px gap)
   * "featured" — Homepage Selected Transformations: 2-col, grayscale→color, overlay, title+desc+arrow
   */
  variant?: "listing" | "featured";
}

export default function PortfolioCard({
  title,
  image,
  slug,
  description,
  variant = "listing",
}: PortfolioCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/works/${slug}`} className="group block">
        {/* Image — grayscale by default, color on hover; rounded-[16px] per Figma */}
        <div className="relative aspect-[707/330] overflow-hidden rounded-[16px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Dark overlay — fades on hover */}
          <div className="absolute inset-0 bg-dark/40 transition-opacity duration-500 group-hover:opacity-0" />
        </div>
        {/* Text area — 28px below image */}
        <div className="mt-[28px] flex items-end justify-between">
          <div className="flex-1">
            <h3 className="text-[24px] font-bold leading-[1.3] text-dark transition-colors duration-300 group-hover:text-primary-blue">
              {title}
            </h3>
            {description && (
              <p className="mt-[4px] text-[16px] leading-[1.5] text-dark xl:text-[20px]">
                {description}
              </p>
            )}
          </div>
          <ArrowRight className="mb-[4px] ml-[16px] shrink-0 text-dark transition-colors duration-300 group-hover:text-primary-blue" />
        </div>
      </Link>
    );
  }

  /* ─── Listing variant ─── */
  /* Figma: INSTANCE 456×328, image VECTOR 456×282, title TEXT at y=294 (gap=12px)
     fontSize 20, fontFamily Gramatika, color #141414
     Hover: grayscale→color, title turns blue */
  return (
    <Link href={`/works/${slug}`} className="group block">
      {/* Image area: aspect-[456/282] from Figma bounds, bg-gray as placeholder */}
      <div className="relative aspect-[456/282] overflow-hidden bg-gray">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      {/* Title: 12px gap below image, 20px Gramatika #141414 */}
      <h3 className="mt-[12px] text-[20px] leading-[1.4] text-dark transition-colors duration-300 group-hover:text-primary-blue">
        {title}
      </h3>
    </Link>
  );
}
