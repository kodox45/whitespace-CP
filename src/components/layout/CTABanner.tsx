import Link from "next/link";

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
    <div className="px-[20px] pb-[80px] md:px-[40px] lg:px-[60px] xl:px-[120px] min-[1920px]:px-[243px]">
      <Link
        href={href}
        className="group flex w-full flex-col items-center justify-center rounded-[16px] bg-primary-blue px-[20px] py-[40px] text-center transition-colors duration-300 hover:bg-gray-dark md:px-[40px] xl:py-[60px]"
      >
        <h2 className="text-[32px] leading-[1.1] text-white transition-colors duration-300 group-hover:text-primary-blue md:text-[48px] xl:text-[64px]">
          {heading}
        </h2>
        <p className="mt-[16px] text-[18px] leading-[1.4] text-white transition-colors duration-300 group-hover:text-primary-blue md:text-[24px] xl:text-[36px]">
          {subtitle}
        </p>
      </Link>
    </div>
  );
}
