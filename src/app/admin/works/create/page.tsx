"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { WorkForm } from "../_components/WorkForm";
import { useWorks } from "@/hooks/useWorks";
import type { CreateWorkInput, UpdateWorkInput } from "@/services/types";

export default function CreateWorkPage() {
  const { create } = useWorks();

  const handleSubmit = async (data: CreateWorkInput | UpdateWorkInput) => {
    await create(data as CreateWorkInput);
  };

  return (
    <AdminShell>
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Create Work</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">
          Add a new portfolio item
        </p>
      </div>
      <WorkForm onSubmit={handleSubmit} />
    </AdminShell>
  );
}
