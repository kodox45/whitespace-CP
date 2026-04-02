import Link from "next/link";
import Image from "next/image";
import { footer, exportedAssets } from "@/data/design-system";

const containerPx = "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px]";

/* Footer columns from Figma (node 242:738 — Group 13) */
const col1Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

const col2Links = [
  { label: "Insights", href: "/insights" },
  { label: "Ecosystem", href: "/about/ecosystem" },
  { label: "Contact", href: "/contact" },
];

const col3Links = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className={`mx-auto max-w-[1920px] ${containerPx}`}>
        {/* ── TOP ROW: Logo + Links + Copyright + Social ── */}
        <div className="flex flex-col gap-[40px] pt-[80px] lg:flex-row lg:items-start lg:gap-0">
          {/* Logo — left */}
          <div className="shrink-0 lg:w-[280px]">
            <Link href="/" className="inline-block">
              <Image
                src={exportedAssets.logos.white.path}
                alt="Whitespace"
                width={186}
                height={22}
                className="brightness-0 invert"
              />
            </Link>
          </div>

          {/* 3 Link columns with vertical separators */}
          <div className="flex flex-col gap-[32px] md:flex-row md:gap-0 lg:flex-1">
            {/* Column 1 */}
            <nav className="flex flex-col gap-[16px] md:w-[180px]">
              {col1Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[20px] text-white transition-colors hover:text-primary-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Separator */}
            <div className="mx-[24px] hidden w-[1px] self-stretch bg-gray-dark/40 md:block" />

            {/* Column 2 */}
            <nav className="flex flex-col gap-[16px] md:w-[180px]">
              {col2Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[20px] text-white transition-colors hover:text-primary-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Separator */}
            <div className="mx-[24px] hidden w-[1px] self-stretch bg-gray-dark/40 md:block" />

            {/* Column 3 */}
            <nav className="flex flex-col gap-[16px] md:w-[180px]">
              {col3Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[20px] text-white transition-colors hover:text-primary-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side: Copyright + Social icons */}
          <div className="shrink-0 lg:text-right">
            {/* Social icons row */}
            <div className="flex items-center gap-[12px]">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[42px] w-[42px] items-center justify-center transition-opacity hover:opacity-70"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={42}
                    height={42}
                    className="brightness-0 invert"
                  />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="mt-[24px] text-[20px] text-white/60">
              {footer.copyright}
            </p>
          </div>
        </div>

        {/* ── BOTTOM ROW: Address + Phone + Tagline ── */}
        <div className="mt-[80px] flex flex-col gap-[32px] pb-[60px] lg:flex-row lg:items-end lg:gap-0">
          {/* Address — left */}
          <div className="shrink-0 lg:w-[400px]">
            <p className="text-[18px] leading-[1.6] text-white/80">
              {footer.address.company}
              <br />
              {footer.address.street}
              <br />
              {footer.address.city}
            </p>
          </div>

          {/* Phone — center */}
          <div className="lg:w-[350px]">
            <p className="text-[18px] leading-[1.6] text-white/80">
              Office: {footer.phone.office}
              <br />
              Mobile: {footer.phone.mobile}
            </p>
          </div>

          {/* Tagline — right, large */}
          <div className="flex-1 lg:text-right">
            <p className="text-[24px] font-bold leading-[1.2] text-white md:text-[32px] xl:text-[40px]">
              {footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
