import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

export function Section ({className, ...props}: HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn("py-15 sm:py-20 lg:py-24 bg-muted", className)}
            {...props}
        />
    )
}