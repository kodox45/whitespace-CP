import { works } from "@/data/works";
import type { WorkItem } from "@/data/works";
import type {
  IWorkService,
  CreateWorkInput,
  UpdateWorkInput,
  WorkFilter,
} from "../types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export class MockWorkService implements IWorkService {
  private items: WorkItem[] = structuredClone(works);

  async getAll(filter?: WorkFilter): Promise<WorkItem[]> {
    let result = [...this.items];

    if (filter?.category) {
      result = result.filter((w) => w.categories.includes(filter.category!));
    }

    if (filter?.featured !== undefined) {
      result = result.filter((w) => !!w.featured === filter.featured);
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q)
      );
    }

    return result;
  }

  async getById(id: string): Promise<WorkItem | null> {
    return this.items.find((w) => w.id === id) ?? null;
  }

  async create(data: CreateWorkInput): Promise<WorkItem> {
    const item: WorkItem = {
      ...structuredClone(data),
      id: `w-${crypto.randomUUID().slice(0, 8)}`,
      slug: slugify(data.title),
    };
    this.items.unshift(item);
    return structuredClone(item);
  }

  async update(id: string, data: UpdateWorkInput): Promise<WorkItem> {
    const idx = this.items.findIndex((w) => w.id === id);
    if (idx === -1) throw new Error(`Work not found: ${id}`);

    const updated = { ...this.items[idx], ...structuredClone(data) };

    // Re-generate slug if title changed
    if (data.title) {
      updated.slug = slugify(data.title);
    }

    this.items[idx] = updated;
    return structuredClone(updated);
  }

  async delete(id: string): Promise<void> {
    const idx = this.items.findIndex((w) => w.id === id);
    if (idx === -1) throw new Error(`Work not found: ${id}`);
    this.items.splice(idx, 1);
  }
}
