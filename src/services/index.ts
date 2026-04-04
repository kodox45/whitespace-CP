/**
 * Service Registry — Swap Point
 *
 * This is the ONLY file that decides which service implementation is active.
 * To switch from mock to API:
 *   1. Create API service classes implementing the same interfaces
 *   2. Change the imports below
 *   3. No other file needs to change
 */

import { MockWorkService } from "./mock/work-service";
import { MockInsightService } from "./mock/insight-service";
import { MockCaseStudyService } from "./mock/case-study-service";
import { MockFAQService } from "./mock/faq-service";
import { MockEnquiryService } from "./mock/enquiry-service";

import type {
  IWorkService,
  IInsightService,
  ICaseStudyService,
  IFAQService,
  IEnquiryService,
} from "./types";

export const workService: IWorkService = new MockWorkService();
export const insightService: IInsightService = new MockInsightService();
export const caseStudyService: ICaseStudyService = new MockCaseStudyService();
export const faqService: IFAQService = new MockFAQService();
export const enquiryService: IEnquiryService = new MockEnquiryService();
