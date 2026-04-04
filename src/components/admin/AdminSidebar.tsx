"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  BookOpen,
  HelpCircle,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/works", label: "Works", icon: Briefcase },
  { href: "/admin/insights", label: "Insights", icon: FileText },
  { href: "/admin/case-studies", label: "Case Studies", icon: BookOpen },
  { href: "/admin/faq", label: "FAQ", icon: HelpCircle },
  { href: "/admin/enquiries", label: "Enquiries", icon: Mail },
];

export function AdminSidebar() {
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-[260px] flex-col bg-dark">
      {/* Logo / Brand */}
      <div className="flex h-[64px] items-center px-[24px]">
        <Link href="/admin" className="text-[20px] font-bold text-white">
          Whitespace<span className="text-primary-blue"> CMS</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-[12px] py-[8px]">
        <ul className="flex flex-col gap-[4px]">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-[12px] rounded-[8px] px-[12px] py-[10px] text-[15px] transition-colors",
                    active
                      ? "bg-primary-blue font-semibold text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon size={20} strokeWidth={active ? 2.2 : 1.8} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 px-[24px] py-[16px]">
        <p className="text-[12px] text-white/40">Whitespace CMS v1.0</p>
      </div>
    </aside>
  );
}
