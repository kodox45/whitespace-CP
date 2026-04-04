/**
 * Service Layer — Interface Contracts
 *
 * These interfaces define the contract between UI hooks and data sources.
 * Mock services implement these now; API services will implement them later.
 *
 * Rules:
 * - All methods return Promise<T> (API-ready)
 * - Input types use Omit to derive from existing data types
 * - UI/hooks layer imports ONLY from this file + src/data/ types
 */

import type { WorkItem, WorkDetail, WorkCategory } from "@/data/works";
import type {
  InsightItem,
  InsightCategory,
  InsightBodyBlock,
} from "@/data/insights";
import type {
  CaseStudyItem,
  CaseStudyMeta,
  CaseStudyDetail,
  CaseStudyGallery,
} from "@/data/case-studies";
import type { FAQItem, ContactFormData, EnquiryType } from "@/data/faq";

// ---------------------------------------------------------------------------
// Enquiry — new type (not in src/data/)
// ---------------------------------------------------------------------------

export interface EnquiryItem {
  id: string;
  submittedAt: string; // ISO date
  read: boolean;
  data: ContactFormData;
}

// ---------------------------------------------------------------------------
// Create / Update input types
// ---------------------------------------------------------------------------

export type CreateWorkInput = Omit<WorkItem, "id" | "slug">;
export type UpdateWorkInput = Partial<CreateWorkInput>;

export type CreateInsightInput = Omit<InsightItem, "id" | "slug">;
export type UpdateInsightInput = Partial<CreateInsightInput>;

export type CreateCaseStudyInput = Omit<CaseStudyItem, "id" | "slug">;
export type UpdateCaseStudyInput = Partial<CreateCaseStudyInput>;

export type CreateFAQInput = Omit<FAQItem, "id">;
export type UpdateFAQInput = Partial<CreateFAQInput>;

// ---------------------------------------------------------------------------
// Filter types
// ---------------------------------------------------------------------------

export interface WorkFilter {
  category?: WorkCategory;
  featured?: boolean;
  search?: string;
}

export interface InsightFilter {
  category?: InsightCategory;
  search?: string;
}

export interface CaseStudyFilter {
  search?: string;
}

export interface EnquiryFilter {
  read?: boolean;
  enquiryType?: EnquiryType;
}

// ---------------------------------------------------------------------------
// Service interfaces
// ---------------------------------------------------------------------------

export interface IWorkService {
  getAll(filter?: WorkFilter): Promise<WorkItem[]>;
  getById(id: string): Promise<WorkItem | null>;
  create(data: CreateWorkInput): Promise<WorkItem>;
  update(id: string, data: UpdateWorkInput): Promise<WorkItem>;
  delete(id: string): Promise<void>;
}

export interface IInsightService {
  getAll(filter?: InsightFilter): Promise<InsightItem[]>;
  getById(id: string): Promise<InsightItem | null>;
  create(data: CreateInsightInput): Promise<InsightItem>;
  update(id: string, data: UpdateInsightInput): Promise<InsightItem>;
  delete(id: string): Promise<void>;
}

export interface ICaseStudyService {
  getAll(filter?: CaseStudyFilter): Promise<CaseStudyItem[]>;
  getById(id: string): Promise<CaseStudyItem | null>;
  create(data: CreateCaseStudyInput): Promise<CaseStudyItem>;
  update(id: string, data: UpdateCaseStudyInput): Promise<CaseStudyItem>;
  delete(id: string): Promise<void>;
}

export interface IFAQService {
  getAll(): Promise<FAQItem[]>;
  getById(id: string): Promise<FAQItem | null>;
  create(data: CreateFAQInput): Promise<FAQItem>;
  update(id: string, data: UpdateFAQInput): Promise<FAQItem>;
  delete(id: string): Promise<void>;
  reorder(ids: string[]): Promise<void>;
}

export interface IEnquiryService {
  getAll(filter?: EnquiryFilter): Promise<EnquiryItem[]>;
  getById(id: string): Promise<EnquiryItem | null>;
  markRead(id: string): Promise<void>;
  markUnread(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}

// ---------------------------------------------------------------------------
// Re-export data types used by hooks/UI (single import point)
// ---------------------------------------------------------------------------

export type {
  WorkItem,
  WorkDetail,
  WorkCategory,
  InsightItem,
  InsightCategory,
  InsightBodyBlock,
  CaseStudyItem,
  CaseStudyMeta,
  CaseStudyDetail,
  CaseStudyGallery,
  FAQItem,
  ContactFormData,
  EnquiryType,
};
