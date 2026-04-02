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
          <Link href="/" className="text-dark/60 transition-colors hover:text-primary-blue">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-[8px]">
            <span className="text-dark/40">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-dark/60 transition-colors hover:text-primary-blue"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
