"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle } from "lucide-react";

interface DeleteConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  /** Item name shown in the message */
  itemName?: string;
  loading?: boolean;
}

export function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
  itemName = "this item",
  loading = false,
}: DeleteConfirmModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed inset-0 m-auto w-full max-w-[420px] rounded-[16px] border border-gray-dark/30 bg-white p-[32px] shadow-xl backdrop:bg-dark/40"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-red-50">
          <AlertTriangle size={24} className="text-red-500" />
        </div>

        <h3 className="text-[18px] font-bold text-dark">Delete Item</h3>
        <p className="mt-[8px] text-[14px] text-placeholder">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-dark">{itemName}</span>? This
          action cannot be undone.
        </p>

        <div className="mt-[24px] flex w-full gap-[12px]">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-full border border-gray-dark px-[24px] py-[10px] text-[15px] text-dark transition-colors hover:bg-gray disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-full bg-red-500 px-[24px] py-[10px] text-[15px] font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
