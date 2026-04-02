import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: "light" | "dark" | "blue";
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  variant = "light",
}: PageHeroProps) {
  const bgClass =
    variant === "dark"
      ? "bg-dark"
      : variant === "blue"
        ? "bg-primary-blue"
        : "bg-white";

  const textClass = variant === "light" ? "text-dark" : "text-white";
  const titleColor =
    variant === "light" ? "text-primary-blue" : "text-white";

  return (
    <section className={`${bgClass} pt-[112px]`}>
      <div className="mx-auto max-w-[1920px] px-[20px] pb-[60px] pt-[40px] md:px-[40px] lg:px-[60px] xl:px-[120px]">
        {breadcrumbs && (
          <div className={textClass}>
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
        <h1
          className={`mt-[24px] text-[28px] font-bold leading-[1.15] ${titleColor} md:text-[36px] xl:text-[48px]`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-[20px] max-w-[800px] text-[20px] leading-[1.6] ${textClass} opacity-80`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
