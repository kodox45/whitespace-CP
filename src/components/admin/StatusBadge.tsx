import { cn } from "@/lib/utils";

type Status = "published" | "draft" | "archived";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusStyles: Record<Status, string> = {
  published: "bg-primary-blue/10 text-primary-blue",
  draft: "bg-gray text-dark",
  archived: "bg-dark/10 text-dark",
};

const statusLabels: Record<Status, string> = {
  published: "Published",
  draft: "Draft",
  archived: "Archived",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-[10px] py-[3px] text-[12px] font-semibold",
        statusStyles[status],
        className
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
