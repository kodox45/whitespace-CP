"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { InsightForm } from "../_components/InsightForm";
import { useInsights } from "@/hooks/useInsights";
import type { CreateInsightInput, UpdateInsightInput } from "@/services/types";

export default function CreateInsightPage() {
  const { create } = useInsights();

  const handleSubmit = async (data: CreateInsightInput | UpdateInsightInput) => {
    await create(data as CreateInsightInput);
  };

  return (
    <AdminShell>
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Create Insight</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">Write a new article</p>
      </div>
      <InsightForm onSubmit={handleSubmit} />
    </AdminShell>
  );
}
