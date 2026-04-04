"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, MailOpen, Eye, MailCheck, MailX, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { useEnquiries } from "@/hooks/useEnquiries";
import type { EnquiryItem } from "@/services/types";

type FilterTab = "all" | "unread" | "business" | "media";

const tabs: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "unread", label: "Unread" },
  { key: "business", label: "Business" },
  { key: "media", label: "Media" },
];

export default function AdminEnquiriesPage() {
  const router = useRouter();
  const { data, loading, markRead, markUnread, remove, unreadCount } =
    useEnquiries();

  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [deleteTarget, setDeleteTarget] = useState<EnquiryItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Filter data by active tab
  const filtered = data.filter((item) => {
    if (activeTab === "unread") return !item.read;
    if (activeTab === "business") return item.data.enquiryType === "business-inquiry";
    if (activeTab === "media") return item.data.enquiryType === "media-interview";
    return true;
  });

  // Row click → navigate to detail
  const handleRowClick = (item: EnquiryItem) => {
    router.push(`/admin/enquiries/${item.id}`);
  };

  const handleToggleRead = (item: EnquiryItem) => {
    if (item.read) {
      markUnread(item.id);
    } else {
      markRead(item.id);
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

  const columns: Column<EnquiryItem>[] = [
    {
      key: "read",
      label: "",
      width: "w-[40px]",
      render: (item) =>
        item.read ? (
          <MailOpen size={16} className="text-placeholder" />
        ) : (
          <Mail size={16} className="text-primary-blue" />
        ),
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (item) => (
        <span className={item.read ? "text-dark" : "font-semibold text-dark"}>
          {item.data.firstName} {item.data.lastName}
        </span>
      ),
    },
    {
      key: "company",
      label: "Company",
      sortable: true,
      render: (item) => (
        <span className={item.read ? "text-dark" : "font-medium text-dark"}>
          {item.data.company}
        </span>
      ),
    },
    {
      key: "enquiryType",
      label: "Type",
      render: (item) => (
        <span
          className={`inline-block rounded-full px-[10px] py-[3px] text-[12px] font-semibold ${
            item.data.enquiryType === "business-inquiry"
              ? "bg-primary-blue/10 text-primary-blue"
              : "bg-gray text-dark"
          }`}
        >
          {item.data.enquiryType === "business-inquiry" ? "Business" : "Media"}
        </span>
      ),
    },
    {
      key: "submittedAt",
      label: "Date",
      sortable: true,
      render: (item) =>
        new Date(item.submittedAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
    },
    {
      key: "message",
      label: "Message",
      render: (item) => (
        <span className={item.read ? "text-placeholder" : "text-dark"}>
          {item.data.message.length > 60
            ? item.data.message.slice(0, 60) + "..."
            : item.data.message}
        </span>
      ),
    },
  ];

  return (
    <AdminShell>
      {/* Header */}
      <div className="mb-[24px]">
        <h1 className="text-[32px] font-bold text-dark">Enquiries</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">
          {data.length} total · {unreadCount} unread
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-[16px] flex gap-[4px]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full px-[16px] py-[7px] text-[13px] font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-primary-blue text-white"
                : "bg-white text-dark border border-gray-dark/30 hover:border-primary-blue hover:text-primary-blue"
            }`}
          >
            {tab.label}
            {tab.key === "unread" && unreadCount > 0 && (
              <span className="ml-[6px] inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-white/20 px-[5px] text-[11px]">
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      <DataTable<EnquiryItem>
        data={filtered}
        columns={columns}
        rowKey={(item) => item.id}
        onRowClick={handleRowClick}
        onDelete={setDeleteTarget}
        renderActions={(item) => (
          <>
            <button
              onClick={() => handleToggleRead(item)}
              className="rounded-[6px] p-[6px] text-placeholder transition-colors hover:bg-gray hover:text-dark"
              title={item.read ? "Mark as unread" : "Mark as read"}
            >
              {item.read ? <MailX size={16} /> : <MailCheck size={16} />}
            </button>
            <button
              onClick={() => handleRowClick(item)}
              className="rounded-[6px] p-[6px] text-placeholder transition-colors hover:bg-gray hover:text-primary-blue"
              title="View detail"
            >
              <Eye size={16} />
            </button>
          </>
        )}
        searchable
        searchKeys={["data" as keyof EnquiryItem]}
        searchPlaceholder="Search by name, company, or message..."
        loading={loading}
        emptyMessage={
          activeTab === "unread"
            ? "No unread enquiries."
            : "No enquiries yet."
        }
      />

      {/* Delete Modal */}
      <DeleteConfirmModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={
          deleteTarget
            ? `${deleteTarget.data.firstName} ${deleteTarget.data.lastName}'s enquiry`
            : undefined
        }
        loading={deleting}
      />
    </AdminShell>
  );
}
