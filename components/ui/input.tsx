import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import { LucideIcon } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
};

export function Input({ className,icon: Icon,...props}: InputProps) {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      )}
      <input
        className={cn(
          "w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition placeholder:text-muted-foreground focus:border-foreground disabled:cursor-not-allowed disabled:opacity-50",
          Icon && "pl-10",
          className,
        )}
        {...props}
      />
    </div>
  );
}
