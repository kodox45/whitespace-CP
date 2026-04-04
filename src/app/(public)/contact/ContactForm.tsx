"use client";

import { useState, useRef, useEffect } from "react";
import {
  enquiryTypes,
  type ContactFormData,
  type EnquiryType,
} from "@/data/faq";

/* ─── VALIDATION ─── */

interface FormErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  country?: string;
  city?: string;
  businessEmail?: string;
  enquiryType?: string;
  agreeToTerms?: string;
}

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.company.trim()) errors.company = "Company is required";
  if (!data.country.trim()) errors.country = "Country is required";
  if (!data.city.trim()) errors.city = "City is required";

  if (!data.businessEmail.trim()) {
    errors.businessEmail = "Business email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.businessEmail)
  ) {
    errors.businessEmail = "Please enter a valid email address";
  }

  if (!data.enquiryType) errors.enquiryType = "Please select an enquiry type";
  if (!data.agreeToTerms)
    errors.agreeToTerms = "You must agree to the terms to submit";

  return errors;
}

/* ─── FORM FIELD COMPONENT ─── */

function FormField({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[16px] xl:text-[20px] text-primary-blue leading-[1.4]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-[6px] border-b bg-transparent pb-[12px] text-[22px] xl:text-[32px] text-dark placeholder:text-[#b3b3b3] focus:border-primary-blue focus:outline-none transition-colors ${
          error ? "border-red-500" : "border-dark"
        }`}
      />
      {error && (
        <span className="mt-[4px] text-[14px] text-red-500">{error}</span>
      )}
    </div>
  );
}

/* ─── MAIN FORM ─── */

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    country: "",
    city: "",
    businessEmail: "",
    enquiryType: "" as EnquiryType,
    message: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownOpen]);

  const update = <K extends keyof ContactFormData>(
    key: K,
    val: ContactFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
    // Clear error on change
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof FormErrors];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="py-[60px]">
        <h2 className="text-[28px] xl:text-[48px] text-dark leading-[1.15]">
          Thank you for reaching out.
        </h2>
        <p className="mt-[16px] text-[16px] xl:text-[20px] text-dark leading-[1.5]">
          We&apos;ve received your enquiry and will get back to you within 2–3
          working days.
        </p>
      </div>
    );
  }

  const selectedEnquiry = enquiryTypes.find(
    (t) => t.value === formData.enquiryType
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* ── Heading ── */}
      <h2 className="text-[28px] md:text-[36px] xl:text-[48px] text-dark leading-[1.15]">
        Contact Form
      </h2>

      {/* ── Field Grid: 3 columns at xl ── */}
      <div className="mt-[48px] xl:mt-[62px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[40px] xl:gap-x-[129px] gap-y-[32px] xl:gap-y-[42px]">
        {/* Row 1 */}
        <FormField
          label="First Name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(v) => update("firstName", v)}
          error={errors.firstName}
        />
        <FormField
          label="Company"
          placeholder="Company"
          value={formData.company}
          onChange={(v) => update("company", v)}
          error={errors.company}
        />
        <FormField
          label="Country"
          placeholder="Country"
          value={formData.country}
          onChange={(v) => update("country", v)}
          error={errors.country}
        />

        {/* Row 2 */}
        <FormField
          label="Last Name"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(v) => update("lastName", v)}
          error={errors.lastName}
        />
        <FormField
          label="Job Title"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={(v) => update("jobTitle", v)}
        />
        <FormField
          label="City"
          placeholder="City"
          value={formData.city}
          onChange={(v) => update("city", v)}
          error={errors.city}
        />
      </div>

      {/* ── Row 3: Business Email (spans col 2-3 at xl) ── */}
      <div className="mt-[32px] xl:mt-[42px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[40px] xl:gap-x-[129px]">
        <div className="hidden xl:block" /> {/* empty col 1 spacer */}
        <div className="md:col-span-2">
          <FormField
            label="Business Email"
            placeholder="name.surname@company.com"
            value={formData.businessEmail}
            onChange={(v) => update("businessEmail", v)}
            error={errors.businessEmail}
            type="email"
          />
        </div>
      </div>

      {/* ── Row 4: Enquiry Dropdown + Textarea ── */}
      <div className="mt-[60px] xl:mt-[93px] grid grid-cols-1 xl:grid-cols-3 gap-x-[40px] xl:gap-x-[129px] gap-y-[32px]">
        {/* Enquiry Dropdown */}
        <div className="flex flex-col">
          <span className="text-[16px] xl:text-[20px] text-primary-blue leading-[1.4]">
            Enquires
          </span>
          <div className="relative mt-[18px]" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex w-full items-center justify-between border-b bg-transparent pb-[12px] text-left cursor-pointer ${
                errors.enquiryType ? "border-red-500" : "border-dark"
              }`}
            >
              <span
                className={`text-[16px] xl:text-[20px] ${
                  selectedEnquiry ? "text-dark" : "text-[#b3b3b3]"
                }`}
              >
                {selectedEnquiry?.label || "Select enquiry type"}
              </span>
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                className={`shrink-0 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 0.5L6 5.5L11 0.5"
                  stroke="#000000"
                  strokeWidth="1"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full z-10 mt-[4px] w-full border border-dark/20 bg-white shadow-md">
                {enquiryTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => {
                      update("enquiryType", type.value);
                      setDropdownOpen(false);
                    }}
                    className="block w-full px-[16px] py-[12px] text-left text-[16px] xl:text-[20px] text-dark hover:bg-gray transition-colors cursor-pointer"
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {errors.enquiryType && (
            <span className="mt-[4px] text-[14px] text-red-500">
              {errors.enquiryType}
            </span>
          )}
        </div>

        {/* Textarea — spans col 2-3 */}
        <div className="xl:col-span-2 flex flex-col">
          <textarea
            placeholder="Tell Us More..."
            value={formData.message}
            onChange={(e) => update("message", e.target.value)}
            className="h-[200px] xl:h-[291px] resize-none border border-dark bg-transparent p-[24px] xl:p-[34px] text-[22px] xl:text-[32px] text-dark placeholder:text-[#b3b3b3] focus:border-primary-blue focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* ── Checkboxes ── */}
      <div className="mt-[32px] xl:mt-[31px] grid grid-cols-1 xl:grid-cols-3 gap-x-[40px] xl:gap-x-[129px]">
        <div className="hidden xl:block" />
        <div className="xl:col-span-2 flex flex-col gap-[8px]">
          {/* Terms checkbox */}
          <label className="flex items-start gap-[18px] cursor-pointer group">
            <span
              className={`mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center border transition-colors ${
                formData.agreeToTerms
                  ? "border-primary-blue bg-primary-blue"
                  : "border-dark"
              }`}
            >
              {formData.agreeToTerms && (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </span>
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => update("agreeToTerms", e.target.checked)}
              className="sr-only"
            />
            <span className="text-[16px] xl:text-[20px] text-dark leading-[1.4]">
              I understand and agree to the terms of submission &amp; data
            </span>
          </label>
          {errors.agreeToTerms && (
            <span className="ml-[40px] text-[14px] text-red-500">
              {errors.agreeToTerms}
            </span>
          )}

          {/* Newsletter checkbox */}
          <label className="flex items-start gap-[18px] cursor-pointer group">
            <span
              className={`mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center border transition-colors ${
                formData.subscribeNewsletter
                  ? "border-primary-blue bg-primary-blue"
                  : "border-dark"
              }`}
            >
              {formData.subscribeNewsletter && (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </span>
            <input
              type="checkbox"
              checked={formData.subscribeNewsletter}
              onChange={(e) =>
                update("subscribeNewsletter", e.target.checked)
              }
              className="sr-only"
            />
            <span className="text-[16px] xl:text-[20px] text-dark leading-[1.4]">
              Would you like to sign up for our newsletter
            </span>
          </label>
        </div>
      </div>

      {/* ── Submit Row ── */}
      <div className="mt-[40px] xl:mt-[39px] grid grid-cols-1 xl:grid-cols-3 gap-x-[40px] xl:gap-x-[129px]">
        <div className="hidden xl:block" />
        <div className="xl:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-[16px]">
          <button
            type="submit"
            className="w-[138px] h-[48px] bg-primary-blue rounded-[2px] text-[20px] xl:text-[24px] text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            Submit
          </button>
          <span className="text-[14px] text-dark">
            *We typically respond within 2-3 working days.
          </span>
        </div>
      </div>
    </form>
  );
}
