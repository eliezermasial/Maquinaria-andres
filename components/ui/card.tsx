import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import { typography } from "@/lib/theme/typography";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border bg-background shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn( className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-normal", className)}
      {...props}
    />
  );
}

export function CardParagraphy({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(typography.bodySm, className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-0", className)} {...props} />;
}
