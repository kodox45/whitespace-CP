import { cn } from "@/lib/utils";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <section
      className={cn(
        "rounded-[16px] border border-gray-dark/30 bg-white p-[24px]",
        className
      )}
    >
      <div className="mb-[20px]">
        <h3 className="text-[18px] font-bold text-dark">{title}</h3>
        {description && (
          <p className="mt-[4px] text-[14px] text-placeholder">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-[20px]">{children}</div>
    </section>
  );
}
