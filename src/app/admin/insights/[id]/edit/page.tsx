"use client";

import { useParams } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { InsightForm } from "../../_components/InsightForm";
import { useInsight, useInsights } from "@/hooks/useInsights";
import type { CreateInsightInput, UpdateInsightInput } from "@/services/types";

export default function EditInsightPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: insight, loading, error } = useInsight(id);
  const { update } = useInsights();

  const handleSubmit = async (data: CreateInsightInput | UpdateInsightInput) => {
    await update(id, data as UpdateInsightInput);
  };

  if (loading) {
    return (
      <AdminShell>
        <p className="text-[14px] text-placeholder">Loading...</p>
      </AdminShell>
    );
  }

  if (!insight || error) {
    return (
      <AdminShell>
        <p className="text-[14px] text-red-500">{error || "Insight not found"}</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Edit Insight</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">{insight.title}</p>
      </div>
      <InsightForm initialData={insight} onSubmit={handleSubmit} isEdit />
    </AdminShell>
  );
}
