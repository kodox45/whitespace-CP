import Link from "next/link";
import Image from "next/image";
import { footer, exportedAssets } from "@/data/design-system";

const containerPx = "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px] min-[1920px]:px-[243px]";

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
        <div className="flex flex-col gap-[40px] pt-[60px] xl:pt-[111px] xl:flex-row xl:items-start xl:gap-0">
          {/* Logo — left */}
          <div className="shrink-0 xl:w-[280px]">
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
          <div className="flex flex-col gap-[24px] md:flex-row md:gap-0 xl:flex-1">
            {/* Column 1 */}
            <nav className="flex flex-col gap-[16px] md:gap-[33px] md:w-[180px]">
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
            <div className="mx-[24px] hidden w-[1px] self-stretch bg-gray-dark md:block" />

            {/* Column 2 */}
            <nav className="flex flex-col gap-[16px] md:gap-[33px] md:w-[180px]">
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
            <div className="mx-[24px] hidden w-[1px] self-stretch bg-gray-dark md:block" />

            {/* Column 3 */}
            <nav className="flex flex-col gap-[16px] md:gap-[33px] md:w-[180px]">
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

          {/* Right side: Social icons + Copyright */}
          <div className="shrink-0 xl:text-right">
            {/* Social icons row */}
            <div className="flex items-center gap-[16px] md:gap-[24px] xl:gap-[41px]">
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
                  />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="mt-[32px] text-[20px] text-white xl:mt-[77px]">
              {footer.copyright}
            </p>
          </div>
        </div>

        {/* ── BOTTOM ROW: Address + Phone + Tagline ── */}
        <div className="mt-[40px] flex flex-col gap-[24px] pb-[60px] md:mt-[60px] xl:mt-[80px] xl:flex-row xl:items-end xl:gap-0 xl:pb-[104px]">
          {/* Address — left */}
          <div className="shrink-0 xl:w-[400px]">
            <p className="text-[18px] leading-[1.6] text-white">
              {footer.address.company}
              <br />
              {footer.address.street}
              <br />
              {footer.address.city}
            </p>
          </div>

          {/* Phone — center */}
          <div className="xl:w-[350px]">
            <p className="text-[18px] leading-[1.6] text-white">
              Office: {footer.phone.office}
              <br />
              Mobile: {footer.phone.mobile}
            </p>
          </div>

          {/* Tagline — right, large */}
          <div className="flex-1 xl:text-right">
            <p className="text-[24px] leading-[1.2] text-white md:text-[32px] xl:text-[40px]">
              {footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
