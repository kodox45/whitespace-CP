/**
 * FAQ Mock Data
 *
 * Extracted from Figma "Work With Us" page (355:3002), node 529:2072
 *
 * Section heading: "Frequently Asked Questions"
 * Layout: accordion-style Q&A with separator lines between items
 * Separator lines at Y: 2982, 3156, 3326, 3470 (between each Q&A pair)
 *
 * Contact form fields (from Figma Component 24 / node 529:2049):
 *   First Name, Last Name, Company, Job Title, Country, City,
 *   Business Email, Enquiry type dropdown (Business Inquiry, Media Interview),
 *   Tell Us More textarea, Terms checkbox, Newsletter checkbox, Submit
 *
 * Direct Contact info:
 *   Email: hello@whitespace.co.id
 *   WhatsApp: +62- 1234 567 890
 *   Office Hours: Mon-Fri, 10.00 - 18.00 WIB
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  /** Sort order */
  order: number;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What type of clients does Whitespace work with?",
    answer:
      "Organizations navigating growth, realignment, complexity, or change — ranging from corporate and mid-size businesses to founders building long-term brands.",
    order: 1,
  },
  {
    id: "faq-2",
    question: "How do we know if we're a good fit?",
    answer:
      "If you value clarity, alignment, and long-term direction over quick outputs, we're likely aligned. Our work is partnership-based, not transactional.",
    order: 2,
  },
  {
    id: "faq-3",
    question: "What is the typical project duration?",
    answer:
      "It varies by scope, but strategic engagements generally run 6–12 weeks to achieve complete brand clarity. Execution partnerships may extend beyond.",
    order: 3,
  },
  {
    id: "faq-4",
    question: "Can Whitespace work with existing design or PR partners?",
    answer:
      "Absolutely. We often collaborate with in-house teams and external partners to build a clarity-driven ecosystem.",
    order: 4,
  },
  {
    id: "faq-5",
    question: "What should we prepare before working together?",
    answer:
      "A clear understanding of your business goals, current challenges, and internal expectations. We'll guide the rest.",
    order: 5,
  },
];

/** Enquiry type options for the contact form dropdown */
export type EnquiryType = "business-inquiry" | "media-interview";

export interface EnquiryTypeOption {
  value: EnquiryType;
  label: string;
}

export const enquiryTypes: EnquiryTypeOption[] = [
  { value: "business-inquiry", label: "Business Inquiry" },
  { value: "media-interview", label: "Media Interview" },
];

/** Contact form field definitions (from Figma) */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  country: string;
  city: string;
  businessEmail: string;
  enquiryType: EnquiryType;
  message: string;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

/** Direct contact info (from Figma node 529:2051-2070) */
export const directContact = {
  email: "hello@whitespace.co.id",
  whatsapp: "+62- 1234 567 890",
  officeHours: "Mon-Fri, 10.00 - 18.00 WIB",
  note: "For corporate RFPs or formal proposals, please email all documents.",
  responseTime: "We typically respond within 2-3 working days.",
} as const;

/** Get all FAQs sorted by order */
export function getAllFAQs(): FAQItem[] {
  return [...faqs].sort((a, b) => a.order - b.order);
}
