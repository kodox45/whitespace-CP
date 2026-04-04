import { cn } from "@/lib/utils";

interface AdminShellProps {
  children: React.ReactNode;
  className?: string;
}

export function AdminShell({ children, className }: AdminShellProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] p-[32px]", className)}>
      {children}
    </div>
  );
}
