import { insights } from "@/data/insights";
import type { InsightItem } from "@/data/insights";
import type {
  IInsightService,
  CreateInsightInput,
  UpdateInsightInput,
  InsightFilter,
} from "../types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export class MockInsightService implements IInsightService {
  private items: InsightItem[] = structuredClone(insights);

  async getAll(filter?: InsightFilter): Promise<InsightItem[]> {
    let result = [...this.items];

    if (filter?.category) {
      result = result.filter((i) => i.category === filter.category);
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.excerpt.toLowerCase().includes(q)
      );
    }

    // Sort by publishedAt descending (newest first)
    result.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return result;
  }

  async getById(id: string): Promise<InsightItem | null> {
    return this.items.find((i) => i.id === id) ?? null;
  }

  async create(data: CreateInsightInput): Promise<InsightItem> {
    const item: InsightItem = {
      ...structuredClone(data),
      id: `i-${crypto.randomUUID().slice(0, 8)}`,
      slug: slugify(data.title),
    };
    this.items.unshift(item);
    return structuredClone(item);
  }

  async update(id: string, data: UpdateInsightInput): Promise<InsightItem> {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) throw new Error(`Insight not found: ${id}`);

    const updated = { ...this.items[idx], ...structuredClone(data) };

    if (data.title) {
      updated.slug = slugify(data.title);
    }

    this.items[idx] = updated;
    return structuredClone(updated);
  }

  async delete(id: string): Promise<void> {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) throw new Error(`Insight not found: ${id}`);
    this.items.splice(idx, 1);
  }
}
