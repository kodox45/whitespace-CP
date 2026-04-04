"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, layout, exportedAssets, colors } from "@/data/design-system";

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (index: number) => {
    if (navigation[index].dropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={layout.navbar.className}>
      <div className={layout.navbar.innerClassName}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={exportedAssets.logos.blue.path}
            alt="Whitespace"
            width={268}
            height={31}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[24px] xl:flex min-[1440px]:gap-[35px]">
          {navigation.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`text-[16px] leading-[1.4] transition-colors hover:text-primary-blue min-[1440px]:text-[20px] ${
                  pathname.startsWith(item.href) && item.href !== "/"
                    ? "text-primary-blue"
                    : "text-dark"
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 pt-[12px]">
                  <div className="min-w-[280px] rounded-[8px] bg-white py-[16px] shadow-lg">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-[24px] py-[12px] text-[16px] text-dark transition-colors hover:bg-gray hover:text-primary-blue"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search Icon */}
          <Link
            href="/search"
            className="ml-[32px] transition-opacity hover:opacity-70 min-[1440px]:ml-[53px]"
            aria-label="Search"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke={colors.primaryBlue} strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke={colors.primaryBlue} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-[6px] xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-[24px] bg-dark transition-transform ${mobileMenuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-[24px] bg-dark transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-[24px] bg-dark transition-transform ${mobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Bottom border — Figma Line 1: x=243→1677, y=111.5, stroke #C8CCCC */}
      <div className="mx-auto hidden max-w-[1920px] px-[20px] md:px-[40px] lg:px-[60px] xl:block xl:px-[120px] wide:px-[243px]">
        <div className="h-px bg-gray-dark" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray bg-white xl:hidden">
          <div className="mx-auto max-w-[1920px] px-[20px] py-[24px] md:px-[40px]">
            {navigation.map((item, index) => (
              <div key={item.label} className="border-b border-gray last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block py-[16px] text-[20px] text-dark"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="p-[8px]"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        width="12" height="12" viewBox="0 0 12 12"
                        className={`transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                      >
                        <path d="M2 4L6 8L10 4" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.dropdown && activeDropdown === index && (
                  <div className="pb-[12px] pl-[16px]">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block py-[8px] text-[16px] text-dark/70 transition-colors hover:text-primary-blue"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/search"
              className="mt-[16px] flex items-center gap-[8px] py-[16px] text-[20px] text-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke={colors.dark} strokeWidth="2" />
                <path d="M16.5 16.5L21 21" stroke={colors.dark} strokeWidth="2" strokeLinecap="round" />
              </svg>
              Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
