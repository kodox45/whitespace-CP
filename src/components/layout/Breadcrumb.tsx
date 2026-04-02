import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-[16px]" aria-label="Breadcrumb">
      <ol className="flex items-center gap-[8px] text-[16px]">
        <li>
          <Link href="/" className="text-dark transition-colors hover:text-primary-blue">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-[8px]">
            <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="text-dark" aria-hidden="true">
              <path d="M0.5 0.5L4.36 4.86L0.5 9.22" stroke="currentColor" strokeWidth="1" />
            </svg>
            {item.href ? (
              <Link
                href={item.href}
                className="text-dark transition-colors hover:text-primary-blue"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary-blue">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
