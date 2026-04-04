import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ContactForm from "./ContactForm";
import { layout } from "@/data/design-system";
import { getAllFAQs, directContact } from "@/data/faq";

export const metadata = {
  title: "Work With Us | Whitespace",
  description:
    "Start with clarity. Whether you're navigating growth, realignment, or complexity, we're here to help you move with direction and confidence.",
};

export default function ContactPage() {
  const faqs = getAllFAQs();

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — Hero (Breadcrumb + Heading + Description)
          Figma Y: 112–448
          ════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-[112px]">
        <div className={layout.containerPx + " mx-auto max-w-[1920px]"}>
          {/* Breadcrumb — y=143, relative to navbar bottom at 112 → pt=31 */}
          <div className="pt-[31px]">
            <Breadcrumb items={[{ label: "Work With Us" }]} />
          </div>

          {/* Hero content — 2 columns */}
          <div className="mt-[22px] xl:mt-[44px] flex flex-col xl:flex-row xl:items-start gap-[32px] xl:gap-[0px]">
            {/* Left: Heading */}
            <div className="xl:w-[48%] shrink-0">
              <h1 className="text-[32px] md:text-[40px] xl:text-[48px] text-primary-blue leading-[1.19]">
                Start with clarity.
              </h1>
            </div>

            {/* Right: Description + Accent bar */}
            <div className="xl:w-[52%]">
              <p className="text-[16px] xl:text-[20px] text-dark leading-[1.5] max-w-[747px]">
                Whether you&apos;re navigating growth, realignment, or
                complexity, we&apos;re here to help you move with direction and
                confidence.
              </p>
              <div className="mt-[10px] xl:mt-[13px] inline-block bg-primary-blue px-[11px] py-[3px]">
                <span className="text-[18px] xl:text-[24px] text-white leading-[1.4]">
                  Let&apos;s explore how clarity can move your brand forward.
                </span>
              </div>
            </div>
          </div>

          {/* Separator — y=448 */}
          <div className="mt-[40px] xl:mt-[55px] h-px bg-gray-dark" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — Contact Form
          Figma Y: 503–1540  |  Component 24 (1290×1037)
          ════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className={layout.containerPx + " mx-auto max-w-[1920px] py-[55px] xl:py-[55px]"}>
          <ContactForm />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — Direct Contact
          Figma Y: 1888–2628  |  bg #E9EBEB  |  h=740
          ════════════════════════════════════════════════════════ */}
      <section className="bg-gray">
        <div
          className={
            layout.containerPx +
            " mx-auto max-w-[1920px] py-[80px] xl:py-[116px]"
          }
        >
          <h2 className="text-[28px] md:text-[36px] xl:text-[48px] text-dark leading-[1.15]">
            Direct Contact
          </h2>

          {/* Contact rows */}
          <div className="mt-[48px] xl:mt-[77px] flex flex-col gap-[28px] xl:gap-[29px]">
            {/* Email */}
            <div className="flex items-center gap-[20px] xl:gap-[24px]">
              <Image
                src="/images/icon-email.svg"
                alt=""
                width={70}
                height={70}
                className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] shrink-0"
              />
              <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-[0px]">
                <span className="text-[20px] xl:text-[32px] text-dark leading-[1.4] xl:min-w-[212px]">
                  Email:
                </span>
                <span className="text-[20px] xl:text-[32px] text-dark leading-[1.4]">
                  {directContact.email}
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-[20px] xl:gap-[24px]">
              <Image
                src="/images/icon-whatsapp-circle.svg"
                alt=""
                width={70}
                height={70}
                className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] shrink-0"
              />
              <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-[0px]">
                <span className="text-[20px] xl:text-[32px] text-dark leading-[1.4] xl:min-w-[212px]">
                  WhatsApp:
                </span>
                <span className="text-[20px] xl:text-[32px] text-dark leading-[1.4]">
                  {directContact.whatsapp}
                </span>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-center gap-[20px] xl:gap-[24px]">
              <Image
                src="/images/icon-clock.svg"
                alt=""
                width={70}
                height={70}
                className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] shrink-0"
              />
              <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-[0px]">
                <span className="text-[20px] xl:text-[32px] text-dark leading-[1.4] xl:min-w-[212px]">
                  Office Hours:
                </span>
                <span className="text-[20px] xl:text-[32px] text-dark leading-[1.4]">
                  {directContact.officeHours}
                </span>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="mt-[48px] xl:mt-[71px] text-[14px] text-dark leading-[1.4]">
            {directContact.note}
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4 — FAQ
          Figma Y: 2739–3765  |  bg white
          ════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div
          className={
            layout.containerPx +
            " mx-auto max-w-[1920px] py-[80px] xl:py-[111px]"
          }
        >
          <h2 className="text-[28px] md:text-[36px] xl:text-[48px] text-dark leading-[1.15]">
            Frequently Asked Questions
          </h2>

          <FAQAccordion
            items={faqs.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
            className="mt-[48px] xl:mt-[60px]"
          />

          {/* Blue accent bar */}
          <div className="mt-[60px] xl:mt-[80px] inline-block bg-primary-blue px-[11px] py-[3px]">
            <span className="text-[18px] xl:text-[24px] text-white leading-[1.4]">
              Clarity begins with a conversation.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
