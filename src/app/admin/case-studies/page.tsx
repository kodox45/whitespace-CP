"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import type { CaseStudyItem } from "@/services/types";

export default function AdminCaseStudiesPage() {
  const router = useRouter();
  const { data, loading, remove } = useCaseStudies();
  const [deleteTarget, setDeleteTarget] = useState<CaseStudyItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await remove(deleteTarget.id);
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  };

  const columns: Column<CaseStudyItem>[] = [
    {
      key: "image",
      label: "",
      width: "w-[60px]",
      render: (item) => (
        <div className="h-[40px] w-[56px] overflow-hidden rounded-[6px] bg-gray">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt="" className="h-full w-full object-cover" />
        </div>
      ),
    },
    {
      key: "title",
      label: "Title",
      sortable: true,
      render: (item) => <span className="font-medium text-dark">{item.title}</span>,
    },
    {
      key: "client",
      label: "Client",
      sortable: true,
    },
    {
      key: "meta",
      label: "Year",
      sortable: true,
      render: (item) => item.meta.year,
    },
    {
      key: "services",
      label: "Services",
      render: (item) => (
        <div className="flex flex-wrap gap-[4px]">
          {item.services.slice(0, 2).map((s) => (
            <span key={s} className="rounded-full bg-gray px-[8px] py-[2px] text-[11px] text-dark">
              {s}
            </span>
          ))}
          {item.services.length > 2 && (
            <span className="text-[11px] text-placeholder">+{item.services.length - 2}</span>
          )}
        </div>
      ),
    },
  ];

  return (
    <AdminShell>
      <div className="mb-[24px] flex items-center justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-dark">Case Studies</h1>
          <p className="mt-[4px] text-[14px] text-placeholder">{data.length} items</p>
        </div>
        <button
          onClick={() => router.push("/admin/case-studies/create")}
          className="inline-flex items-center gap-[8px] rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90"
        >
          <Plus size={18} />
          Add Case Study
        </button>
      </div>

      <DataTable<CaseStudyItem>
        data={data}
        columns={columns}
        rowKey={(item) => item.id}
        onEdit={(item) => router.push(`/admin/case-studies/${item.id}/edit`)}
        onDelete={setDeleteTarget}
        searchable
        searchKeys={["title", "client"]}
        searchPlaceholder="Search case studies..."
        loading={loading}
        emptyMessage="No case studies yet."
      />

      <DeleteConfirmModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={deleteTarget?.title}
        loading={deleting}
      />
    </AdminShell>
  );
}
