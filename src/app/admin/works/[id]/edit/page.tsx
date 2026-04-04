"use client";

import { useParams } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { WorkForm } from "../../_components/WorkForm";
import { useWork, useWorks } from "@/hooks/useWorks";
import type { CreateWorkInput, UpdateWorkInput } from "@/services/types";

export default function EditWorkPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: work, loading, error } = useWork(id);
  const { update } = useWorks();

  const handleSubmit = async (data: CreateWorkInput | UpdateWorkInput) => {
    await update(id, data as UpdateWorkInput);
  };

  if (loading) {
    return (
      <AdminShell>
        <p className="text-[14px] text-placeholder">Loading...</p>
      </AdminShell>
    );
  }

  if (!work || error) {
    return (
      <AdminShell>
        <p className="text-[14px] text-red-500">{error || "Work not found"}</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Edit Work</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">{work.title}</p>
      </div>
      <WorkForm initialData={work} onSubmit={handleSubmit} isEdit />
    </AdminShell>
  );
}
