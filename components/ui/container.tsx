import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";


export function Container({className, ...props}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("mx-auto max-w-7xl px-6", className)}
            {...props}
        />
    )
}