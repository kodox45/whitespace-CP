import type { ContactFormData, EnquiryType } from "@/data/faq";
import type { IEnquiryService, EnquiryItem, EnquiryFilter } from "../types";

/**
 * Pre-generated mock enquiries — simulates form submissions.
 * In production, these come from the Laravel API.
 */
const mockEnquiries: EnquiryItem[] = [
  {
    id: "enq-001",
    submittedAt: "2026-04-01T09:30:00Z",
    read: true,
    data: {
      firstName: "Andi",
      lastName: "Pratama",
      company: "PT Nusantara Digital",
      jobTitle: "Head of Marketing",
      country: "Indonesia",
      city: "Jakarta",
      businessEmail: "andi.pratama@nusantaradigital.co.id",
      enquiryType: "business-inquiry",
      message:
        "We are planning a brand refresh for our fintech product line and would like to explore a strategic partnership with Whitespace. Can we schedule a discovery call?",
      agreeToTerms: true,
      subscribeNewsletter: true,
    },
  },
  {
    id: "enq-002",
    submittedAt: "2026-04-01T14:15:00Z",
    read: true,
    data: {
      firstName: "Sarah",
      lastName: "Chen",
      company: "Bloomberg Asia",
      jobTitle: "Regional Editor",
      country: "Singapore",
      city: "Singapore",
      businessEmail: "sarah.chen@bloomberg.net",
      enquiryType: "media-interview",
      message:
        "We are writing a feature on brand strategy firms in Southeast Asia. Would your team be available for a 30-minute interview this month?",
      agreeToTerms: true,
      subscribeNewsletter: false,
    },
  },
  {
    id: "enq-003",
    submittedAt: "2026-04-02T08:45:00Z",
    read: false,
    data: {
      firstName: "Reza",
      lastName: "Hakim",
      company: "Sampoerna Agro",
      jobTitle: "VP Corporate Communications",
      country: "Indonesia",
      city: "Surabaya",
      businessEmail: "reza.hakim@sampoernaagro.com",
      enquiryType: "business-inquiry",
      message:
        "Our group is undergoing a corporate rebranding exercise. We need a partner who understands brand architecture for conglomerates. Interested in discussing scope.",
      agreeToTerms: true,
      subscribeNewsletter: true,
    },
  },
  {
    id: "enq-004",
    submittedAt: "2026-04-03T11:00:00Z",
    read: false,
    data: {
      firstName: "Maya",
      lastName: "Indriati",
      company: "Gojek",
      jobTitle: "Brand Strategy Lead",
      country: "Indonesia",
      city: "Jakarta",
      businessEmail: "maya.indriati@gojek.com",
      enquiryType: "business-inquiry",
      message:
        "We are evaluating external brand strategy partners for an upcoming sub-brand launch. Looking for someone with clarity-driven methodology. Can you share relevant case studies?",
      agreeToTerms: true,
      subscribeNewsletter: false,
    },
  },
  {
    id: "enq-005",
    submittedAt: "2026-04-03T16:20:00Z",
    read: false,
    data: {
      firstName: "David",
      lastName: "Tan",
      company: "Tech in Asia",
      jobTitle: "Senior Reporter",
      country: "Singapore",
      city: "Singapore",
      businessEmail: "david.tan@techinasia.com",
      enquiryType: "media-interview",
      message:
        "Working on an article about Indonesian creative agencies expanding regionally. Would love to include Whitespace's perspective. Available for a quick call?",
      agreeToTerms: true,
      subscribeNewsletter: true,
    },
  },
  {
    id: "enq-006",
    submittedAt: "2026-04-04T07:10:00Z",
    read: false,
    data: {
      firstName: "Farah",
      lastName: "Kusuma",
      company: "Bank Mandiri",
      jobTitle: "SVP Digital Banking",
      country: "Indonesia",
      city: "Jakarta",
      businessEmail: "farah.kusuma@bankmandiri.co.id",
      enquiryType: "business-inquiry",
      message:
        "We are launching a new digital banking sub-brand and need strategic guidance on positioning, naming, and brand architecture. This is a priority project for Q2 2026.",
      agreeToTerms: true,
      subscribeNewsletter: true,
    },
  },
  {
    id: "enq-007",
    submittedAt: "2026-04-04T10:50:00Z",
    read: false,
    data: {
      firstName: "Budi",
      lastName: "Santoso",
      company: "Tokopedia",
      jobTitle: "Director of Brand",
      country: "Indonesia",
      city: "Jakarta",
      businessEmail: "budi.santoso@tokopedia.com",
      enquiryType: "business-inquiry",
      message:
        "Exploring a brand clarity workshop for our leadership team. Saw your approach framework on the site and it resonated. Can we discuss format and pricing?",
      agreeToTerms: true,
      subscribeNewsletter: false,
    },
  },
];

export class MockEnquiryService implements IEnquiryService {
  private items: EnquiryItem[] = structuredClone(mockEnquiries);

  async getAll(filter?: EnquiryFilter): Promise<EnquiryItem[]> {
    let result = [...this.items];

    if (filter?.read !== undefined) {
      result = result.filter((e) => e.read === filter.read);
    }

    if (filter?.enquiryType) {
      result = result.filter(
        (e) => e.data.enquiryType === filter.enquiryType
      );
    }

    // Sort by submittedAt descending (newest first)
    result.sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    return result;
  }

  async getById(id: string): Promise<EnquiryItem | null> {
    return this.items.find((e) => e.id === id) ?? null;
  }

  async markRead(id: string): Promise<void> {
    const item = this.items.find((e) => e.id === id);
    if (!item) throw new Error(`Enquiry not found: ${id}`);
    item.read = true;
  }

  async markUnread(id: string): Promise<void> {
    const item = this.items.find((e) => e.id === id);
    if (!item) throw new Error(`Enquiry not found: ${id}`);
    item.read = false;
  }

  async delete(id: string): Promise<void> {
    const idx = this.items.findIndex((e) => e.id === id);
    if (idx === -1) throw new Error(`Enquiry not found: ${id}`);
    this.items.splice(idx, 1);
  }
}
