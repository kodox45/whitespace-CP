"use client";

import { useParams } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { CaseStudyForm } from "../../_components/CaseStudyForm";
import { useCaseStudy, useCaseStudies } from "@/hooks/useCaseStudies";
import type { CreateCaseStudyInput, UpdateCaseStudyInput } from "@/services/types";

export default function EditCaseStudyPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: caseStudy, loading, error } = useCaseStudy(id);
  const { update } = useCaseStudies();

  const handleSubmit = async (data: CreateCaseStudyInput | UpdateCaseStudyInput) => {
    await update(id, data as UpdateCaseStudyInput);
  };

  if (loading) {
    return (
      <AdminShell>
        <p className="text-[14px] text-placeholder">Loading...</p>
      </AdminShell>
    );
  }

  if (!caseStudy || error) {
    return (
      <AdminShell>
        <p className="text-[14px] text-red-500">{error || "Case study not found"}</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Edit Case Study</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">{caseStudy.title}</p>
      </div>
      <CaseStudyForm initialData={caseStudy} onSubmit={handleSubmit} isEdit />
    </AdminShell>
  );
}
