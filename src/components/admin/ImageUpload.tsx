"use client";

import { ImageIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  label: string;
  /** Current image path/URL */
  value: string;
  /** Called with new image path string */
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  /** Help text shown below the field */
  hint?: string;
  className?: string;
}

/**
 * Image upload field for CMS admin.
 *
 * In mock mode: accepts a URL/path string via text input + shows preview.
 * When integrated with API: replace the text input with a real file upload
 * that calls the backend and returns a URL.
 */
export function ImageUpload({
  label,
  value,
  onChange,
  error,
  required,
  hint,
  className,
}: ImageUploadProps) {
  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <label className="text-[13px] font-semibold uppercase tracking-wide text-placeholder">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div className="flex items-start gap-[16px]">
        {/* Preview */}
        <div className="relative flex h-[100px] w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-gray-dark/40 bg-gray">
          {value ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={value}
                alt="Preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => onChange("")}
                className="absolute right-[4px] top-[4px] rounded-full bg-dark/60 p-[2px] text-white transition-colors hover:bg-dark"
              >
                <X size={14} />
              </button>
            </>
          ) : (
            <ImageIcon size={28} className="text-placeholder" />
          )}
        </div>

        {/* URL text input (mock mode) */}
        <div className="flex flex-1 flex-col gap-[4px]">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/images/example.png"
            className={cn(
              "border-b bg-transparent py-[10px] text-[15px] text-dark placeholder:text-placeholder focus:outline-none transition-colors",
              error
                ? "border-red-500"
                : "border-gray-dark focus:border-primary-blue"
            )}
          />
          {hint && (
            <p className="text-[12px] text-placeholder">{hint}</p>
          )}
        </div>
      </div>

      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}
