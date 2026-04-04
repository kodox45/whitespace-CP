"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Star } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { useWorks } from "@/hooks/useWorks";
import { workCategories } from "@/data/works";
import type { WorkItem } from "@/services/types";

const categoryLabelMap = Object.fromEntries(
  workCategories.map((c) => [c.slug, c.label])
);

export default function AdminWorksPage() {
  const router = useRouter();
  const { data, loading, remove } = useWorks();
  const [deleteTarget, setDeleteTarget] = useState<WorkItem | null>(null);
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

  const columns: Column<WorkItem>[] = [
    {
      key: "image",
      label: "",
      width: "w-[60px]",
      render: (item) => (
        <div className="h-[40px] w-[56px] overflow-hidden rounded-[6px] bg-gray">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ),
    },
    {
      key: "title",
      label: "Title",
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-[8px]">
          <span className="font-medium text-dark">{item.title}</span>
          {item.featured && (
            <Star size={14} className="fill-primary-blue text-primary-blue" />
          )}
        </div>
      ),
    },
    {
      key: "categories",
      label: "Categories",
      render: (item) => (
        <div className="flex flex-wrap gap-[4px]">
          {item.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-gray px-[8px] py-[2px] text-[11px] text-dark"
            >
              {categoryLabelMap[cat] ?? cat}
            </span>
          ))}
          {item.categories.length > 2 && (
            <span className="text-[11px] text-placeholder">
              +{item.categories.length - 2}
            </span>
          )}
        </div>
      ),
    },
    {
      key: "detail",
      label: "Detail",
      render: (item) => (
        <span
          className={`text-[12px] ${item.detail ? "text-primary-blue" : "text-placeholder"}`}
        >
          {item.detail ? "Full" : "Stub"}
        </span>
      ),
    },
  ];

  return (
    <AdminShell>
      {/* Header */}
      <div className="mb-[24px] flex items-center justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-dark">Works</h1>
          <p className="mt-[4px] text-[14px] text-placeholder">
            {data.length} items
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/works/create")}
          className="inline-flex items-center gap-[8px] rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90"
        >
          <Plus size={18} />
          Add Work
        </button>
      </div>

      {/* Table */}
      <DataTable<WorkItem>
        data={data}
        columns={columns}
        rowKey={(item) => item.id}
        onEdit={(item) => router.push(`/admin/works/${item.id}/edit`)}
        onDelete={setDeleteTarget}
        searchable
        searchKeys={["title", "description"]}
        searchPlaceholder="Search works..."
        loading={loading}
        emptyMessage="No works yet. Create your first portfolio item."
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
