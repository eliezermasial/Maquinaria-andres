import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

export function Section ({className, ...props}: HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn("py-10 sm:py-15 lg:py-20 bg-muted", className)}
            {...props}
        />
    )
}