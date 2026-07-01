import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showIcon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  showIcon = true,
  className,
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline-offset-4",
    variant === "primary" &&
      "border border-[#171717] bg-[#f0c15d] text-[#171717] shadow-[0_18px_42px_rgba(240,193,93,0.34)] hover:bg-[#ffd16f]",
    variant === "secondary" &&
      "border border-[var(--forest)] text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white",
    variant === "ghost" && "text-[var(--forest)] hover:bg-black/5",
    className
  );

  const content = (
    <>
      {children}
      {showIcon ? <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {content}
    </Link>
  );
}
