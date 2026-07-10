import { cloneElement, type ButtonHTMLAttributes, type ReactElement } from "react";
import { cn } from "../../lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: false;
  variant?: ButtonVariant;
};

type ButtonLinkProps = {
  asChild: true;
  children: ReactElement<{ className?: string }>;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  secondary: "bg-muted text-foreground hover:bg-muted/80",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};

const baseClassName =
  "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps | ButtonLinkProps) {
  const variant = props.variant ?? "primary";
  const className = cn(baseClassName, variants[variant]);

  if (props.asChild) {
    const child = props.children;

    return cloneElement(child, {
      className: cn(className, child.props.className),
    });
  }

  const { variant: _variant, asChild: _asChild, ...buttonProps } = props;

  return <button {...buttonProps} className={cn(className, buttonProps.className)} />;
}
