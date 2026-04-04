"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { CaseStudyForm } from "../_components/CaseStudyForm";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import type { CreateCaseStudyInput, UpdateCaseStudyInput } from "@/services/types";

export default function CreateCaseStudyPage() {
  const { create } = useCaseStudies();

  const handleSubmit = async (data: CreateCaseStudyInput | UpdateCaseStudyInput) => {
    await create(data as CreateCaseStudyInput);
  };

  return (
    <AdminShell>
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Create Case Study</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">Add a new case study</p>
      </div>
      <CaseStudyForm onSubmit={handleSubmit} />
    </AdminShell>
  );
}
