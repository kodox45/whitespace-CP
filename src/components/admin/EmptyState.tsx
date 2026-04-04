import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  message?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  message = "No items found",
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-[32px] text-center",
        className
      )}
    >
      <Inbox size={40} className="text-placeholder" />
      <p className="mt-[12px] text-[14px] text-placeholder">{message}</p>
      {action && <div className="mt-[16px]">{action}</div>}
    </div>
  );
}
