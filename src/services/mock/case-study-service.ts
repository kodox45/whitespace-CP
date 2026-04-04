import { caseStudies } from "@/data/case-studies";
import type { CaseStudyItem } from "@/data/case-studies";
import type {
  ICaseStudyService,
  CreateCaseStudyInput,
  UpdateCaseStudyInput,
  CaseStudyFilter,
} from "../types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export class MockCaseStudyService implements ICaseStudyService {
  private items: CaseStudyItem[] = structuredClone(caseStudies);

  async getAll(filter?: CaseStudyFilter): Promise<CaseStudyItem[]> {
    let result = [...this.items];

    if (filter?.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(
        (cs) =>
          cs.title.toLowerCase().includes(q) ||
          cs.client.toLowerCase().includes(q) ||
          cs.excerpt.toLowerCase().includes(q)
      );
    }

    return result;
  }

  async getById(id: string): Promise<CaseStudyItem | null> {
    return this.items.find((cs) => cs.id === id) ?? null;
  }

  async create(data: CreateCaseStudyInput): Promise<CaseStudyItem> {
    const item: CaseStudyItem = {
      ...structuredClone(data),
      id: `cs-${crypto.randomUUID().slice(0, 8)}`,
      slug: slugify(data.client),
    };
    this.items.unshift(item);
    return structuredClone(item);
  }

  async update(
    id: string,
    data: UpdateCaseStudyInput
  ): Promise<CaseStudyItem> {
    const idx = this.items.findIndex((cs) => cs.id === id);
    if (idx === -1) throw new Error(`Case study not found: ${id}`);

    const updated = { ...this.items[idx], ...structuredClone(data) };

    if (data.client) {
      updated.slug = slugify(data.client);
    }

    this.items[idx] = updated;
    return structuredClone(updated);
  }

  async delete(id: string): Promise<void> {
    const idx = this.items.findIndex((cs) => cs.id === id);
    if (idx === -1) throw new Error(`Case study not found: ${id}`);
    this.items.splice(idx, 1);
  }
}
