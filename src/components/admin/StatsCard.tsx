import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  className?: string;
}

export function StatsCard({
  label,
  value,
  icon: Icon,
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-gray-dark/30 bg-white p-[24px]",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-placeholder">
            {label}
          </p>
          <p className="mt-[8px] text-[36px] font-bold leading-none text-dark">
            {value}
          </p>
        </div>
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-primary-blue/10">
          <Icon size={20} className="text-primary-blue" />
        </div>
      </div>
    </div>
  );
}
