"use client";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Shared props
// ---------------------------------------------------------------------------

interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Text / Number / Date input
// ---------------------------------------------------------------------------

interface TextFieldProps extends BaseFieldProps {
  type?: "text" | "number" | "date" | "email";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function TextField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required,
  disabled,
  className,
}: TextFieldProps) {
  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <Label text={label} required={required} />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "border-b bg-transparent py-[10px] text-[15px] text-dark placeholder:text-placeholder focus:outline-none transition-colors",
          error
            ? "border-red-500"
            : "border-gray-dark focus:border-primary-blue",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Textarea
// ---------------------------------------------------------------------------

interface TextAreaProps extends BaseFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

export function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  required,
  disabled,
  className,
}: TextAreaProps) {
  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <Label text={label} required={required} />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={cn(
          "rounded-[8px] border bg-transparent px-[12px] py-[10px] text-[15px] text-dark placeholder:text-placeholder focus:outline-none transition-colors resize-y",
          error
            ? "border-red-500"
            : "border-gray-dark focus:border-primary-blue",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Select
// ---------------------------------------------------------------------------

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends BaseFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Select...",
  error,
  required,
  disabled,
  className,
}: SelectFieldProps) {
  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <Label text={label} required={required} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={cn(
          "border-b bg-transparent py-[10px] text-[15px] text-dark focus:outline-none transition-colors appearance-none cursor-pointer",
          error
            ? "border-red-500"
            : "border-gray-dark focus:border-primary-blue",
          !value && "text-placeholder",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Checkbox
// ---------------------------------------------------------------------------

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function CheckboxField({
  label,
  checked,
  onChange,
  error,
  disabled,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <label className="inline-flex cursor-pointer items-center gap-[10px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="h-[18px] w-[18px] cursor-pointer rounded-[4px] border-gray-dark accent-primary-blue"
        />
        <span className="text-[15px] text-dark">{label}</span>
      </label>
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Multi-select (tag-style checkboxes)
// ---------------------------------------------------------------------------

interface MultiSelectFieldProps extends BaseFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: SelectOption[];
  disabled?: boolean;
}

export function MultiSelectField({
  label,
  value,
  onChange,
  options,
  error,
  required,
  disabled,
  className,
}: MultiSelectFieldProps) {
  const toggle = (optValue: string) => {
    if (value.includes(optValue)) {
      onChange(value.filter((v) => v !== optValue));
    } else {
      onChange([...value, optValue]);
    }
  };

  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <Label text={label} required={required} />
      <div className="flex flex-wrap gap-[8px]">
        {options.map((opt) => {
          const selected = value.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => !disabled && toggle(opt.value)}
              disabled={disabled}
              className={cn(
                "rounded-full border px-[14px] py-[6px] text-[13px] transition-colors",
                selected
                  ? "border-primary-blue bg-primary-blue/10 font-semibold text-primary-blue"
                  : "border-gray-dark text-dark hover:border-primary-blue hover:text-primary-blue",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tag Input (free-text tags)
// ---------------------------------------------------------------------------

interface TagInputProps extends BaseFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function TagInput({
  label,
  value,
  onChange,
  placeholder = "Type and press Enter...",
  error,
  required,
  disabled,
  className,
}: TagInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.currentTarget;
      const tag = input.value.trim();
      if (tag && !value.includes(tag)) {
        onChange([...value, tag]);
      }
      input.value = "";
    }
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className={cn("flex flex-col gap-[6px]", className)}>
      <Label text={label} required={required} />
      <div className="flex flex-wrap items-center gap-[6px] border-b border-gray-dark pb-[8px]">
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-[4px] rounded-full bg-gray px-[10px] py-[3px] text-[13px] text-dark"
          >
            {tag}
            <button
              type="button"
              onClick={() => !disabled && removeTag(tag)}
              className="text-placeholder hover:text-red-500"
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          disabled={disabled}
          className="flex-1 bg-transparent py-[4px] text-[15px] text-dark placeholder:text-placeholder focus:outline-none"
        />
      </div>
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Internal: Label
// ---------------------------------------------------------------------------

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="text-[13px] font-semibold uppercase tracking-wide text-placeholder">
      {text}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}
