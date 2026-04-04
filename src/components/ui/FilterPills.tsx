"use client";

export interface FilterOption {
  /** Unique identifier / slug */
  value: string;
  /** Display label */
  label: string;
}

export interface FilterPillsProps {
  /** List of filter options */
  options: FilterOption[];
  /** Currently active filter value */
  activeValue: string;
  /** Callback when a filter is clicked */
  onChange: (value: string) => void;
}

/**
 * FilterPills — Category filter buttons for Works listing
 *
 * Figma reference: Our Works pages (294:2220, 308:996, etc.)
 * Pill height: 41px, cornerRadius: 0 (no rounding)
 * Active state: bg #141414 (dark), text #FFFFFF
 * Inactive state: bg #3754ED (primary-blue), text #FFFFFF
 * Text: 24px Gramatika, padding ~17px horizontal, ~3px vertical
 * Gap between pills: ~16px horizontal and vertical
 * Pills wrap to multiple rows via flex-wrap
 */
export default function FilterPills({
  options,
  activeValue,
  onChange,
}: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-[16px]">
      {options.map((option) => {
        const isActive = option.value === activeValue;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`inline-flex h-[41px] items-center px-[17px] text-[24px] text-white transition-colors duration-300 ${
              isActive
                ? "bg-dark"
                : "bg-primary-blue hover:bg-dark"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
