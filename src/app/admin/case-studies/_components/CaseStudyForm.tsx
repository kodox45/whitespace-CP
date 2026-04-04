"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  TextArea,
  SelectField,
  TagInput,
} from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormSection";
import { ImageUpload } from "@/components/admin/ImageUpload";
import type {
  CaseStudyItem,
  CreateCaseStudyInput,
  UpdateCaseStudyInput,
  CaseStudyGallery,
} from "@/services/types";

interface CaseStudyFormProps {
  initialData?: CaseStudyItem;
  onSubmit: (data: CreateCaseStudyInput | UpdateCaseStudyInput) => Promise<void>;
  isEdit?: boolean;
}

const galleryLayoutOptions = [
  { value: "two-up", label: "Two-Up (2 side-by-side)" },
  { value: "single", label: "Single (1 full-width)" },
  { value: "two-by-two", label: "Two-by-Two (2×2 grid)" },
];

export function CaseStudyForm({ initialData, onSubmit, isEdit }: CaseStudyFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Basic
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [client, setClient] = useState(initialData?.client ?? "");
  const [tagline, setTagline] = useState(initialData?.tagline ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [services, setServices] = useState<string[]>(initialData?.services ?? []);
  const [image, setImage] = useState(initialData?.image ?? "");
  const [heroImage, setHeroImage] = useState(initialData?.heroImage ?? "");
  const [relatedWorkSlug, setRelatedWorkSlug] = useState(initialData?.relatedWorkSlug ?? "");

  // Meta
  const [metaIndustry, setMetaIndustry] = useState(initialData?.meta.industry ?? "");
  const [metaTypeOfWork, setMetaTypeOfWork] = useState(initialData?.meta.typeOfWork ?? "");
  const [metaTeam, setMetaTeam] = useState<string[]>(initialData?.meta.projectTeam ?? []);
  const [metaYear, setMetaYear] = useState(initialData?.meta.year ?? "");

  // Detail
  const [overview, setOverview] = useState(initialData?.detail.overview ?? "");
  const [introText, setIntroText] = useState(initialData?.detail.introText ?? "");
  const [before, setBefore] = useState<string[]>(initialData?.detail.before ?? []);
  const [after, setAfter] = useState<string[]>(initialData?.detail.after ?? []);
  const [whatWeDid, setWhatWeDid] = useState<string[]>(initialData?.detail.whatWeDid ?? []);
  const [meaningImpact, setMeaningImpact] = useState(initialData?.detail.meaningImpact ?? "");

  // Gallery
  const [galleryLayout, setGalleryLayout] = useState<CaseStudyGallery["layout"]>(
    initialData?.gallery.layout ?? "two-up"
  );
  const [galleryImages, setGalleryImages] = useState<string[]>(initialData?.gallery.images ?? []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!title.trim()) errs.title = "Title is required";
    if (!client.trim()) errs.client = "Client is required";
    if (!tagline.trim()) errs.tagline = "Tagline is required";
    if (!excerpt.trim()) errs.excerpt = "Excerpt is required";
    if (!image.trim()) errs.image = "Image is required";
    if (!heroImage.trim()) errs.heroImage = "Hero image is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);
    try {
      const data: CreateCaseStudyInput = {
        title,
        client,
        tagline,
        excerpt,
        services,
        image,
        heroImage,
        relatedWorkSlug: relatedWorkSlug || undefined,
        meta: {
          client,
          industry: metaIndustry,
          typeOfWork: metaTypeOfWork,
          projectTeam: metaTeam,
          year: metaYear,
        },
        detail: {
          overview,
          introText,
          before,
          after,
          whatWeDid,
          meaningImpact,
        },
        gallery: {
          layout: galleryLayout,
          images: galleryImages,
        },
      };
      await onSubmit(data);
      router.push("/admin/case-studies");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
      {/* Basic Info */}
      <FormSection title="Basic Info">
        <div className="grid grid-cols-2 gap-[20px]">
          <TextField label="Title" value={title} onChange={setTitle} error={errors.title} required placeholder="e.g. Brand Architecture & Business Alignment" />
          <TextField label="Client" value={client} onChange={setClient} error={errors.client} required placeholder="e.g. B-Log" />
        </div>
        <TextField label="Tagline" value={tagline} onChange={setTagline} error={errors.tagline} required placeholder="Short tagline for listing card" />
        <TextArea label="Excerpt" value={excerpt} onChange={setExcerpt} error={errors.excerpt} required rows={3} placeholder="Brief description..." />
        <TagInput label="Services" value={services} onChange={setServices} placeholder="Type a service and press Enter" />
        <div className="grid grid-cols-2 gap-[20px]">
          <ImageUpload label="Listing Image" value={image} onChange={setImage} error={errors.image} required />
          <ImageUpload label="Hero Image" value={heroImage} onChange={setHeroImage} error={errors.heroImage} required />
        </div>
        <TextField label="Related Work Slug" value={relatedWorkSlug} onChange={setRelatedWorkSlug} placeholder="e.g. b-log (optional)" />
      </FormSection>

      {/* Meta */}
      <FormSection title="Project Meta" description="Sidebar metadata on the detail page">
        <div className="grid grid-cols-2 gap-[20px]">
          <TextField label="Industry" value={metaIndustry} onChange={setMetaIndustry} placeholder="e.g. Fintech" />
          <TextField label="Type of Work" value={metaTypeOfWork} onChange={setMetaTypeOfWork} placeholder="e.g. Brand Strategy" />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <TextField label="Year" value={metaYear} onChange={setMetaYear} placeholder="e.g. 2025" />
          <div />
        </div>
        <TagInput label="Project Team" value={metaTeam} onChange={setMetaTeam} placeholder="e.g. 'Brand Strategist: Dimas Mardjono'" />
      </FormSection>

      {/* Detail Content */}
      <FormSection title="Detail Content" description="Body content for the detail page">
        <TextArea label="Overview" value={overview} onChange={setOverview} rows={3} placeholder="Overview shown next to title..." />
        <TextArea label="Intro Text" value={introText} onChange={setIntroText} rows={4} placeholder="Intro paragraphs..." />
        <TagInput label="Before (pain points)" value={before} onChange={setBefore} placeholder="Type a point and press Enter" />
        <TagInput label="After (outcomes)" value={after} onChange={setAfter} placeholder="Type an outcome and press Enter" />
        <TagInput label="What We Did" value={whatWeDid} onChange={setWhatWeDid} placeholder="Type a service and press Enter" />
        <TextArea label="Meaning & Impact" value={meaningImpact} onChange={setMeaningImpact} rows={3} placeholder="Impact summary..." />
      </FormSection>

      {/* Gallery */}
      <FormSection title="Gallery" description="Image gallery on the detail page">
        <SelectField label="Layout" value={galleryLayout} onChange={(v) => setGalleryLayout(v as CaseStudyGallery["layout"])} options={galleryLayoutOptions} />
        <TagInput label="Gallery Images" value={galleryImages} onChange={setGalleryImages} placeholder="Type image path and press Enter" />
      </FormSection>

      {/* Actions */}
      <div className="flex justify-end gap-[12px]">
        <button type="button" onClick={() => router.push("/admin/case-studies")} className="rounded-full border border-gray-dark px-[24px] py-[10px] text-[15px] text-dark transition-colors hover:bg-gray">
          Cancel
        </button>
        <button type="submit" disabled={saving} className="rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50">
          {saving ? "Saving..." : isEdit ? "Update Case Study" : "Create Case Study"}
        </button>
      </div>
    </form>
  );
}
