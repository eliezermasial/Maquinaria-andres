import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

export function Section ({className, ...props}: HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn("py-24 bg-muted", className)}
            {...props}
        />
    )
}