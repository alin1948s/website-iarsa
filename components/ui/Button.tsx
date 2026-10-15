import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070e18] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
          // Sizing
          {
            "px-3.5 py-1.5 text-xs font-mono tracking-wider": size === "sm",
            "px-5 py-2.5 text-sm tracking-wide font-sans font-semibold": size === "md",
            "px-7 py-3.5 text-base tracking-wider font-sans font-bold": size === "lg",
          },
          // Variants
          {
            "bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:from-sky-500 hover:to-sky-400 shadow-md shadow-sky-600/25 active:scale-[0.98]":
              variant === "primary",
            "bg-[#101b2b] hover:bg-[#152438] text-white border border-slate-700/80 hover:border-sky-500/50 active:scale-[0.98]":
              variant === "secondary",
            "border border-slate-700/80 bg-white/[0.03] hover:bg-white/[0.08] hover:border-sky-400 text-white active:scale-[0.98]":
              variant === "outline",
            "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white":
              variant === "ghost",
            "text-sky-400 hover:text-sky-300 underline-offset-4 hover:underline p-0 h-auto":
              variant === "link",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
