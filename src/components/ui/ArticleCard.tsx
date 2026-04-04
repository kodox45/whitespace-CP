import Image from "next/image";
import Link from "next/link";

export interface ArticleCardProps {
  /** Article title */
  title: string;
  /** Display date (e.g. "January 2026") */
  date: string;
  /** Image path */
  image: string;
  /** URL slug for detail page */
  slug: string;
  /** Link prefix — "/insights" for insights, "/case-studies" for case studies */
  basePath?: string;
}

/**
 * ArticleCard — Insight listing card
 *
 * Figma reference: Component 8 / Component 12 from Insight Listing (346:1703)
 * Image: 456×282 (same aspect as PortfolioCard listing)
 * Date: 16px Gramatika, #141414, 19px below image
 * Title: 20px Gramatika, #141414, flows directly after date (single text block in Figma)
 * Hover: title turns blue
 */
export default function ArticleCard({
  title,
  date,
  image,
  slug,
  basePath = "/insights",
}: ArticleCardProps) {
  return (
    <Link href={`${basePath}/${slug}`} className="group block">
      {/* Image area: 456×282 from Figma, bg-gray as placeholder */}
      <div className="relative aspect-[456/282] overflow-hidden bg-gray">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 456px"
        />
      </div>
      {/* Date: 16px, #141414, 19px below image (Figma: text block y=301, image h=282) */}
      <p className="mt-[19px] text-[16px] leading-[1.4] text-dark">
        {date}
      </p>
      {/* Title: 20px, #141414, flows after date (single text block in Figma, mixed fontSize) */}
      <h3 className="text-[20px] leading-[1.4] text-dark transition-colors duration-300 group-hover:text-primary-blue">
        {title}
      </h3>
    </Link>
  );
}
