import { faqs } from "@/data/faq";
import type { FAQItem } from "@/data/faq";
import type { IFAQService, CreateFAQInput, UpdateFAQInput } from "../types";

export class MockFAQService implements IFAQService {
  private items: FAQItem[] = structuredClone(faqs);

  async getAll(): Promise<FAQItem[]> {
    return [...this.items].sort((a, b) => a.order - b.order);
  }

  async getById(id: string): Promise<FAQItem | null> {
    return this.items.find((f) => f.id === id) ?? null;
  }

  async create(data: CreateFAQInput): Promise<FAQItem> {
    const item: FAQItem = {
      ...structuredClone(data),
      id: `faq-${crypto.randomUUID().slice(0, 8)}`,
    };
    this.items.push(item);
    return structuredClone(item);
  }

  async update(id: string, data: UpdateFAQInput): Promise<FAQItem> {
    const idx = this.items.findIndex((f) => f.id === id);
    if (idx === -1) throw new Error(`FAQ not found: ${id}`);

    const updated = { ...this.items[idx], ...structuredClone(data) };
    this.items[idx] = updated;
    return structuredClone(updated);
  }

  async delete(id: string): Promise<void> {
    const idx = this.items.findIndex((f) => f.id === id);
    if (idx === -1) throw new Error(`FAQ not found: ${id}`);
    this.items.splice(idx, 1);
  }

  async reorder(ids: string[]): Promise<void> {
    // Assign new order values based on position in the ids array
    for (let i = 0; i < ids.length; i++) {
      const item = this.items.find((f) => f.id === ids[i]);
      if (item) {
        item.order = i + 1;
      }
    }
  }
}
