"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { TextField, TextArea } from "@/components/admin/FormField";
import { useFAQ } from "@/hooks/useFAQ";
import type { FAQItem } from "@/services/types";

interface FormState {
  question: string;
  answer: string;
  order: number;
}

const emptyForm: FormState = { question: "", answer: "", order: 1 };

export default function AdminFAQPage() {
  const { data, loading, create, update, remove, reorder } = useFAQ();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  // Delete state
  const [deleteTarget, setDeleteTarget] = useState<FAQItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setForm({ ...emptyForm, order: data.length + 1 });
    setErrors({});
    setModalOpen(true);
  };

  const openEdit = (item: FAQItem) => {
    setEditingId(item.id);
    setForm({ question: item.question, answer: item.answer, order: item.order });
    setErrors({});
    setModalOpen(true);
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.question.trim()) errs.question = "Question is required";
    if (!form.answer.trim()) errs.answer = "Answer is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    setSaving(true);
    try {
      if (editingId) {
        await update(editingId, form);
      } else {
        await create(form);
      }
      setModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

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

  const columns: Column<FAQItem>[] = [
    {
      key: "order",
      label: "#",
      sortable: true,
      width: "w-[60px]",
      render: (item) => (
        <span className="font-semibold text-placeholder">{item.order}</span>
      ),
    },
    {
      key: "question",
      label: "Question",
      sortable: true,
      render: (item) => (
        <span className="font-medium text-dark">{item.question}</span>
      ),
    },
    {
      key: "answer",
      label: "Answer",
      render: (item) => (
        <span className="text-placeholder">
          {item.answer.length > 100
            ? item.answer.slice(0, 100) + "..."
            : item.answer}
        </span>
      ),
    },
  ];

  return (
    <AdminShell>
      {/* Header */}
      <div className="mb-[24px] flex items-center justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-dark">FAQ</h1>
          <p className="mt-[4px] text-[14px] text-placeholder">
            {data.length} items
          </p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-[8px] rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90"
        >
          <Plus size={18} />
          Add FAQ
        </button>
      </div>

      {/* Table */}
      <DataTable<FAQItem>
        data={data}
        columns={columns}
        rowKey={(item) => item.id}
        onEdit={openEdit}
        onDelete={setDeleteTarget}
        loading={loading}
        pageSize={0}
        emptyMessage="No FAQs yet. Add your first question."
      />

      {/* Create/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/40">
          <div className="w-full max-w-[560px] rounded-[16px] bg-white p-[32px] shadow-xl">
            <h3 className="text-[20px] font-bold text-dark">
              {editingId ? "Edit FAQ" : "Add FAQ"}
            </h3>

            <div className="mt-[24px] flex flex-col gap-[20px]">
              <TextField
                label="Question"
                value={form.question}
                onChange={(v) => setForm({ ...form, question: v })}
                error={errors.question}
                required
                placeholder="e.g. What type of clients does Whitespace work with?"
              />
              <TextArea
                label="Answer"
                value={form.answer}
                onChange={(v) => setForm({ ...form, answer: v })}
                error={errors.answer}
                required
                rows={4}
                placeholder="Write the answer..."
              />
              <TextField
                label="Display Order"
                type="number"
                value={String(form.order)}
                onChange={(v) =>
                  setForm({ ...form, order: parseInt(v) || 1 })
                }
              />
            </div>

            <div className="mt-[28px] flex justify-end gap-[12px]">
              <button
                onClick={() => setModalOpen(false)}
                disabled={saving}
                className="rounded-full border border-gray-dark px-[24px] py-[10px] text-[15px] text-dark transition-colors hover:bg-gray"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="rounded-full bg-primary-blue px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50"
              >
                {saving ? "Saving..." : editingId ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      <DeleteConfirmModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={deleteTarget?.question}
        loading={deleting}
      />
    </AdminShell>
  );
}
