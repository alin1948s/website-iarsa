import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "aviation" | "amber" | "emerald" | "steel";
  mono?: boolean;
}

export function Badge({
  className,
  variant = "default",
  mono = true,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase rounded-full tracking-wider transition-colors",
        mono ? "font-mono text-[11px]" : "font-sans text-xs",
        {
          "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/10":
            variant === "default",
          "bg-slate-800/80 text-slate-300 border border-slate-700/80":
            variant === "secondary",
          "border border-slate-700 bg-white/[0.02] text-slate-300 hover:border-sky-500/50":
            variant === "outline",
          "bg-sky-500/15 text-sky-400 border border-sky-500/30":
            variant === "aviation",
          "bg-amber-500/15 text-amber-300 border border-amber-500/30":
            variant === "amber",
          "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30":
            variant === "emerald",
          "bg-slate-800/60 text-slate-300 border border-slate-700/60":
            variant === "steel",
        },
        className
      )}
      {...props}
    />
  );
}
