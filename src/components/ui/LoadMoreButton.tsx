"use client";

interface LoadMoreButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function LoadMoreButton({
  onClick,
  disabled = false,
  className = "",
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group inline-flex items-center gap-[17.5px] border-b border-dashed border-transparent pb-[8px] hover:border-primary-blue transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${className}`}
    >
      {/* "+" crosshair icon — 28.5×28.5px, two perpendicular strokes */}
      <svg
        width="28.5"
        height="28.5"
        viewBox="0 0 28.5 28.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Vertical line */}
        <line
          x1="14.25"
          y1="0"
          x2="14.25"
          y2="28.5"
          className="stroke-gray-dark group-hover:stroke-primary-blue transition-colors duration-200"
          strokeWidth="1.5"
        />
        {/* Horizontal line */}
        <line
          x1="0"
          y1="14.25"
          x2="28.5"
          y2="14.25"
          className="stroke-gray-dark group-hover:stroke-primary-blue transition-colors duration-200"
          strokeWidth="1.5"
        />
      </svg>

      {/* "Load More" text — 24px, Gramatika, leading 34px */}
      <span className="text-[24px] font-normal leading-[34px] text-gray-dark group-hover:text-primary-blue transition-colors duration-200">
        Load More
      </span>
    </button>
  );
}
