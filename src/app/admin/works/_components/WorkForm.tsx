"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  TextArea,
  MultiSelectField,
  CheckboxField,
  TagInput,
} from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormSection";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { workCategories } from "@/data/works";
import type {
  WorkItem,
  WorkCategory,
  CreateWorkInput,
  UpdateWorkInput,
} from "@/services/types";

interface WorkFormProps {
  initialData?: WorkItem;
  onSubmit: (data: CreateWorkInput | UpdateWorkInput) => Promise<void>;
  isEdit?: boolean;
}

const categoryOptions = workCategories.map((c) => ({
  value: c.slug,
  label: c.label,
}));

export function WorkForm({ initialData, onSubmit, isEdit }: WorkFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Basic fields
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [categories, setCategories] = useState<string[]>(initialData?.categories ?? []);
  const [image, setImage] = useState(initialData?.image ?? "");
  const [imageColor, setImageColor] = useState(initialData?.imageColor ?? "");
  const [featured, setFeatured] = useState(initialData?.featured ?? false);

  // Detail fields (optional)
  const [hasDetail, setHasDetail] = useState(!!initialData?.detail);
  const [client, setClient] = useState(initialData?.detail?.client ?? "");
  const [industry, setIndustry] = useState(initialData?.detail?.industry ?? "");
  const [typeOfWork, setTypeOfWork] = useState(initialData?.detail?.typeOfWork ?? "");
  const [year, setYear] = useState(initialData?.detail?.year ?? "");
  const [heroImage, setHeroImage] = useState(initialData?.detail?.heroImage ?? "");
  const [galleryImages, setGalleryImages] = useState<string[]>(initialData?.detail?.galleryImages ?? []);

  // Team
  const [teamRoles, setTeamRoles] = useState<string[]>(
    initialData?.detail?.projectTeam?.map((t) => `${t.role}: ${t.name}`) ?? []
  );

  // Body
  const [intro, setIntro] = useState(initialData?.detail?.body.intro ?? "");
  const [before, setBefore] = useState<string[]>(initialData?.detail?.body.before ?? []);
  const [after, setAfter] = useState<string[]>(initialData?.detail?.body.after ?? []);
  const [whatWeDid, setWhatWeDid] = useState<string[]>(initialData?.detail?.body.whatWeDid ?? []);
  const [impact, setImpact] = useState(initialData?.detail?.body.impact ?? "");

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!title.trim()) errs.title = "Title is required";
    if (!description.trim()) errs.description = "Description is required";
    if (categories.length === 0) errs.categories = "At least one category required";
    if (!image.trim()) errs.image = "Image is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);
    try {
      const data: CreateWorkInput = {
        title,
        description,
        categories: categories as WorkCategory[],
        image,
        imageColor: imageColor || undefined,
        featured,
        detail: hasDetail
          ? {
              client,
              industry,
              typeOfWork,
              projectTeam: teamRoles.map((t) => {
                const [role, name] = t.split(":").map((s) => s.trim());
                return { role: role || "", name: name || "" };
              }),
              year,
              heroImage,
              galleryImages,
              body: { intro, before, after, whatWeDid, impact },
            }
          : undefined,
      };
      await onSubmit(data);
      router.push("/admin/works");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
      {/* Basic Info */}
      <FormSection title="Basic Info">
        <TextField
          label="Title"
          value={title}
          onChange={setTitle}
          error={errors.title}
          required
          placeholder="e.g. B-Log"
        />
        <TextArea
          label="Description"
          value={description}
          onChange={setDescription}
          error={errors.description}
          required
          rows={3}
          placeholder="Short description for listing pages..."
        />
        <MultiSelectField
          label="Categories"
          value={categories}
          onChange={setCategories}
          options={categoryOptions}
          error={errors.categories}
          required
        />
        <div className="grid grid-cols-2 gap-[20px]">
          <ImageUpload
            label="Thumbnail"
            value={image}
            onChange={setImage}
            error={errors.image}
            required
            hint="Used on listing pages"
          />
          <ImageUpload
            label="Color Image"
            value={imageColor}
            onChange={setImageColor}
            hint="Optional — used on homepage"
          />
        </div>
        <CheckboxField
          label="Featured on homepage"
          checked={featured}
          onChange={setFeatured}
        />
      </FormSection>

      {/* Detail Toggle */}
      <FormSection
        title="Project Detail"
        description="Optional — adds full detail page content"
      >
        <CheckboxField
          label="Include detailed project page"
          checked={hasDetail}
          onChange={setHasDetail}
        />

        {hasDetail && (
          <div className="mt-[8px] flex flex-col gap-[20px] border-t border-gray pt-[20px]">
            <div className="grid grid-cols-2 gap-[20px]">
              <TextField label="Client" value={client} onChange={setClient} placeholder="Company name" />
              <TextField label="Industry" value={industry} onChange={setIndustry} placeholder="e.g. Fintech" />
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <TextField label="Type of Work" value={typeOfWork} onChange={setTypeOfWork} placeholder="e.g. Brand Strategy" />
              <TextField label="Year" value={year} onChange={setYear} placeholder="e.g. 2025" />
            </div>
            <TagInput
              label="Project Team"
              value={teamRoles}
              onChange={setTeamRoles}
              placeholder="Type 'Role: Name' and press Enter"
            />
            <ImageUpload label="Hero Image" value={heroImage} onChange={setHeroImage} hint="Full-width hero (1434×672)" />
            <TagInput
              label="Gallery Images"
              value={galleryImages}
              onChange={setGalleryImages}
              placeholder="Type image path and press Enter"
            />

            <div className="border-t border-gray pt-[16px]">
              <p className="mb-[16px] text-[14px] font-semibold text-dark">Body Content</p>
              <div className="flex flex-col gap-[20px]">
                <TextArea label="Intro" value={intro} onChange={setIntro} rows={4} placeholder="Opening paragraphs..." />
                <TagInput label="Before (pain points)" value={before} onChange={setBefore} placeholder="Type a point and press Enter" />
                <TagInput label="After (outcomes)" value={after} onChange={setAfter} placeholder="Type an outcome and press Enter" />
                <TagInput label="What We Did" value={whatWeDid} onChange={setWhatWeDid} placeholder="Type a service and press Enter" />
                <TextArea label="Impact" value={impact} onChange={setImpact} rows={3} placeholder="Impact summary paragraph..." />
              </div>
            </div>
          </div>
        )}
      </FormSection>

      {/* Actions */}
      <div className="flex justify-end gap-[12px]">
        <button
          type="button"
          onClick={() => router.push("/admin/works")}
          className="rounded-full border border-gray-dark px-[24px] py-[10px] text-[15px] text-dark transition-colors hover:bg-gray"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50"
        >
          {saving ? "Saving..." : isEdit ? "Update Work" : "Create Work"}
        </button>
      </div>
    </form>
  );
}
