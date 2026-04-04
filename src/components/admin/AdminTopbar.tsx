"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, User } from "lucide-react";

/**
 * Derive page title and breadcrumb segments from the current pathname.
 */
function usePageInfo() {
  const pathname = usePathname();

  const segmentLabels: Record<string, string> = {
    admin: "Dashboard",
    works: "Works",
    insights: "Insights",
    "case-studies": "Case Studies",
    faq: "FAQ",
    enquiries: "Enquiries",
    create: "Create",
  };

  const segments = pathname.split("/").filter(Boolean); // ["admin", "works", "create"]

  const breadcrumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = segmentLabels[seg] || decodeURIComponent(seg);
    const isLast = i === segments.length - 1;
    return { href, label, isLast };
  });

  // Page title = last known label
  const lastSegment = segments[segments.length - 1];
  const title = segmentLabels[lastSegment] || decodeURIComponent(lastSegment || "Dashboard");

  return { title, breadcrumbs };
}

export function AdminTopbar() {
  const { title, breadcrumbs } = usePageInfo();

  return (
    <header className="flex h-[64px] shrink-0 items-center justify-between border-b border-gray-dark bg-white px-[32px]">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-[6px]">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-[6px]">
            {i > 0 && (
              <ChevronRight size={14} className="text-placeholder" />
            )}
            {crumb.isLast ? (
              <span className="text-[14px] font-semibold text-dark">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-[14px] text-placeholder transition-colors hover:text-dark"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </div>

      {/* Right: Placeholder user avatar */}
      <div className="flex items-center gap-[12px]">
        <span className="text-[14px] text-dark">Admin</span>
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray">
          <User size={18} className="text-placeholder" />
        </div>
      </div>
    </header>
  );
}
