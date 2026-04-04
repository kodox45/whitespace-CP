"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { useInsights } from "@/hooks/useInsights";
import { insightCategories } from "@/data/insights";
import type { InsightItem } from "@/services/types";

const categoryLabelMap = Object.fromEntries(
  insightCategories.map((c) => [c.slug, c.label])
);

export default function AdminInsightsPage() {
  const router = useRouter();
  const { data, loading, remove } = useInsights();
  const [deleteTarget, setDeleteTarget] = useState<InsightItem | null>(null);
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

  const columns: Column<InsightItem>[] = [
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
      key: "category",
      label: "Category",
      sortable: true,
      render: (item) => (
        <span className="rounded-full bg-gray px-[8px] py-[2px] text-[11px] text-dark">
          {categoryLabelMap[item.category] ?? item.category}
        </span>
      ),
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
    },
    {
      key: "readingTime",
      label: "Reading Time",
      render: (item) => (
        <span className="text-placeholder">{item.readingTime}</span>
      ),
    },
    {
      key: "body",
      label: "Blocks",
      render: (item) => (
        <span className="text-placeholder">{item.body.length}</span>
      ),
    },
  ];

  return (
    <AdminShell>
      <div className="mb-[24px] flex items-center justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-dark">Insights</h1>
          <p className="mt-[4px] text-[14px] text-placeholder">{data.length} articles</p>
        </div>
        <button
          onClick={() => router.push("/admin/insights/create")}
          className="inline-flex items-center gap-[8px] rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90"
        >
          <Plus size={18} />
          Add Insight
        </button>
      </div>

      <DataTable<InsightItem>
        data={data}
        columns={columns}
        rowKey={(item) => item.id}
        onEdit={(item) => router.push(`/admin/insights/${item.id}/edit`)}
        onDelete={setDeleteTarget}
        searchable
        searchKeys={["title", "excerpt"]}
        searchPlaceholder="Search insights..."
        loading={loading}
        emptyMessage="No insights yet. Write your first article."
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
