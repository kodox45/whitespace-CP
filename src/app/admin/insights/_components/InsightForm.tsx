"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  TextArea,
  SelectField,
} from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormSection";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { BlockEditor } from "@/components/admin/BlockEditor";
import { insightCategories } from "@/data/insights";
import type {
  InsightItem,
  InsightCategory,
  InsightBodyBlock,
  CreateInsightInput,
  UpdateInsightInput,
} from "@/services/types";

interface InsightFormProps {
  initialData?: InsightItem;
  onSubmit: (data: CreateInsightInput | UpdateInsightInput) => Promise<void>;
  isEdit?: boolean;
}

const categoryOptions = insightCategories.map((c) => ({
  value: c.slug,
  label: c.label,
}));

export function InsightForm({ initialData, onSubmit, isEdit }: InsightFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Basic fields
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [category, setCategory] = useState<string>(initialData?.category ?? "");
  const [date, setDate] = useState(initialData?.date ?? "");
  const [publishedAt, setPublishedAt] = useState(initialData?.publishedAt ?? "");
  const [image, setImage] = useState(initialData?.image ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "Whitespace Team");
  const [authorRole, setAuthorRole] = useState(initialData?.authorRole ?? "");
  const [readingTime, setReadingTime] = useState(initialData?.readingTime ?? "5 min read");

  // Body blocks
  const [body, setBody] = useState<InsightBodyBlock[]>(initialData?.body ?? []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!title.trim()) errs.title = "Title is required";
    if (!category) errs.category = "Category is required";
    if (!date.trim()) errs.date = "Display date is required";
    if (!publishedAt.trim()) errs.publishedAt = "Published date is required";
    if (!image.trim()) errs.image = "Image is required";
    if (!excerpt.trim()) errs.excerpt = "Excerpt is required";
    if (!author.trim()) errs.author = "Author is required";
    if (body.length === 0) errs.body = "At least one content block is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);
    try {
      const data: CreateInsightInput = {
        title,
        category: category as InsightCategory,
        date,
        publishedAt,
        image,
        excerpt,
        author,
        authorRole: authorRole || undefined,
        readingTime,
        body,
      };
      await onSubmit(data);
      router.push("/admin/insights");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
      {/* Basic Info */}
      <FormSection title="Article Info">
        <TextField
          label="Title"
          value={title}
          onChange={setTitle}
          error={errors.title}
          required
          placeholder="Article title..."
        />
        <div className="grid grid-cols-2 gap-[20px]">
          <SelectField
            label="Category"
            value={category}
            onChange={setCategory}
            options={categoryOptions}
            error={errors.category}
            required
          />
          <TextField
            label="Reading Time"
            value={readingTime}
            onChange={setReadingTime}
            placeholder="e.g. 5 min read"
          />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <TextField
            label="Display Date"
            value={date}
            onChange={setDate}
            error={errors.date}
            required
            placeholder="e.g. January 2026"
          />
          <TextField
            label="Published At (ISO)"
            type="date"
            value={publishedAt}
            onChange={setPublishedAt}
            error={errors.publishedAt}
            required
          />
        </div>
        <TextArea
          label="Excerpt"
          value={excerpt}
          onChange={setExcerpt}
          error={errors.excerpt}
          required
          rows={3}
          placeholder="Short description for listing page..."
        />
        <ImageUpload
          label="Cover Image"
          value={image}
          onChange={setImage}
          error={errors.image}
          required
        />
      </FormSection>

      {/* Author */}
      <FormSection title="Author">
        <div className="grid grid-cols-2 gap-[20px]">
          <TextField
            label="Author Name"
            value={author}
            onChange={setAuthor}
            error={errors.author}
            required
            placeholder="e.g. Dimas Mardjono"
          />
          <TextField
            label="Author Role"
            value={authorRole}
            onChange={setAuthorRole}
            placeholder="e.g. Brand Strategist (optional)"
          />
        </div>
      </FormSection>

      {/* Body Content — BlockEditor */}
      <FormSection
        title="Article Body"
        description="Add and arrange content blocks: paragraphs, headings, images, and highlights"
      >
        <BlockEditor value={body} onChange={setBody} />
        {errors.body && (
          <p className="text-[13px] text-red-500">{errors.body}</p>
        )}
      </FormSection>

      {/* Actions */}
      <div className="flex justify-end gap-[12px]">
        <button
          type="button"
          onClick={() => router.push("/admin/insights")}
          className="rounded-full border border-gray-dark px-[24px] py-[10px] text-[15px] text-dark transition-colors hover:bg-gray"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50"
        >
          {saving ? "Saving..." : isEdit ? "Update Insight" : "Create Insight"}
        </button>
      </div>
    </form>
  );
}
