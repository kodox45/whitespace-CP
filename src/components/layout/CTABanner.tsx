import Link from "next/link";
import { typography, patterns } from "@/data/design-system";

interface CTABannerProps {
  heading?: string;
  subtitle?: string;
  href?: string;
}

export default function CTABanner({
  heading = "Start with Clarity",
  subtitle = "Let\u2019s talk about the direction your brand deserves!",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="px-[20px] pb-[80px] md:px-[40px] lg:px-[60px] xl:px-[120px]">
      <Link
        href={href}
        className={`${patterns.ctaBanner} block transition-opacity hover:opacity-95`}
      >
        <h2 className={typography.ctaHeading.responsive}>{heading}</h2>
        <p className={`mt-[16px] ${typography.ctaSubtitle.responsive}`}>
          {subtitle}
        </p>
      </Link>
    </section>
  );
}
