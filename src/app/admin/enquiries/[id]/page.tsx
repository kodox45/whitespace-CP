"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Building2,
  Briefcase,
  MapPin,
  Calendar,
  MailX,
  Trash2,
  Copy,
  Check,
} from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { useEnquiry } from "@/hooks/useEnquiries";
import { useEnquiries } from "@/hooks/useEnquiries";

export default function AdminEnquiryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { data: enquiry, loading, error } = useEnquiry(id);
  const { markRead, markUnread, remove } = useEnquiries();

  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Mark as read on view
  useEffect(() => {
    if (enquiry && !enquiry.read) {
      markRead(enquiry.id);
    }
  }, [enquiry?.id, enquiry?.read]);

  const handleMarkUnread = async () => {
    if (!enquiry) return;
    await markUnread(enquiry.id);
    router.push("/admin/enquiries");
  };

  const handleDelete = async () => {
    if (!enquiry) return;
    setDeleting(true);
    try {
      await remove(enquiry.id);
      router.push("/admin/enquiries");
    } finally {
      setDeleting(false);
    }
  };

  const handleCopyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (loading) {
    return (
      <AdminShell>
        <p className="text-[14px] text-placeholder">Loading...</p>
      </AdminShell>
    );
  }

  if (!enquiry || error) {
    return (
      <AdminShell>
        <p className="text-[14px] text-red-500">
          {error || "Enquiry not found"}
        </p>
      </AdminShell>
    );
  }

  const d = enquiry.data;
  const date = new Date(enquiry.submittedAt).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <AdminShell>
      {/* Back button */}
      <button
        onClick={() => router.push("/admin/enquiries")}
        className="mb-[24px] inline-flex items-center gap-[6px] text-[14px] text-placeholder transition-colors hover:text-dark"
      >
        <ArrowLeft size={16} />
        Back to Enquiries
      </button>

      {/* Header + Actions */}
      <div className="mb-[24px] flex items-start justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-dark">
            {d.firstName} {d.lastName}
          </h1>
          <p className="mt-[4px] text-[14px] text-placeholder">{date}</p>
        </div>
        <div className="flex items-center gap-[8px]">
          <span
            className={`rounded-full px-[14px] py-[5px] text-[13px] font-semibold ${
              d.enquiryType === "business-inquiry"
                ? "bg-primary-blue/10 text-primary-blue"
                : "bg-gray text-dark"
            }`}
          >
            {d.enquiryType === "business-inquiry"
              ? "Business Inquiry"
              : "Media Interview"}
          </span>
          <button
            onClick={handleMarkUnread}
            className="inline-flex items-center gap-[6px] rounded-full border border-gray-dark px-[14px] py-[7px] text-[13px] text-dark transition-colors hover:bg-gray"
            title="Mark as unread and return to list"
          >
            <MailX size={14} />
            Mark Unread
          </button>
          <button
            onClick={() => setShowDelete(true)}
            className="inline-flex items-center gap-[6px] rounded-full border border-red-200 px-[14px] py-[7px] text-[13px] text-red-500 transition-colors hover:bg-red-50"
          >
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[24px]">
        {/* Contact info */}
        <div className="col-span-1 rounded-[16px] border border-gray-dark/30 bg-white p-[24px]">
          <h3 className="mb-[16px] text-[16px] font-bold text-dark">
            Contact Details
          </h3>
          <div className="flex flex-col gap-[14px]">
            {/* Email — with copy button */}
            <div className="flex items-start gap-[10px]">
              <Mail
                size={16}
                className="mt-[2px] shrink-0 text-placeholder"
              />
              <div className="flex-1">
                <p className="text-[12px] text-placeholder">Email</p>
                <div className="flex items-center gap-[6px]">
                  <p className="text-[14px] text-dark">{d.businessEmail}</p>
                  <button
                    onClick={() => handleCopyEmail(d.businessEmail)}
                    className="rounded p-[2px] text-placeholder transition-colors hover:text-primary-blue"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check size={13} className="text-green-600" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <InfoRow icon={Building2} label="Company" value={d.company} />
            <InfoRow icon={Briefcase} label="Job Title" value={d.jobTitle} />
            <InfoRow
              icon={MapPin}
              label="Location"
              value={`${d.city}, ${d.country}`}
            />
            <InfoRow icon={Calendar} label="Submitted" value={date} />
          </div>

          <div className="mt-[16px] border-t border-gray pt-[12px]">
            <div className="flex items-center gap-[8px] text-[13px]">
              <span className="text-placeholder">Newsletter:</span>
              <span className="text-dark">
                {d.subscribeNewsletter ? "Subscribed" : "No"}
              </span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="col-span-2 rounded-[16px] border border-gray-dark/30 bg-white p-[24px]">
          <h3 className="mb-[16px] text-[16px] font-bold text-dark">
            Message
          </h3>
          <p className="whitespace-pre-wrap text-[15px] leading-[1.7] text-dark">
            {d.message}
          </p>
        </div>
      </div>

      {/* Delete confirm */}
      <DeleteConfirmModal
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
        itemName={`${d.firstName} ${d.lastName}'s enquiry`}
        loading={deleting}
      />
    </AdminShell>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-[10px]">
      <Icon size={16} className="mt-[2px] shrink-0 text-placeholder" />
      <div>
        <p className="text-[12px] text-placeholder">{label}</p>
        <p className="text-[14px] text-dark">{value}</p>
      </div>
    </div>
  );
}
