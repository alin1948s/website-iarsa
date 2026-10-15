import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blueprint" | "workorder" | "photo";
  serial?: string;
  cornerMarkings?: boolean;
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  serial,
  cornerMarkings = false,
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const isBlueprint = variant === "blueprint";
  const isWorkorder = variant === "workorder";
  const isPhoto = variant === "photo";

  return (
    <div
      className={cn(
        "relative rounded-2xl transition-all duration-300 overflow-hidden",
        // Base variants
        variant === "default" && "bg-[#0e1828] border border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-black/40",
        isBlueprint && "bg-[#0a1424] border border-sky-900/40 p-6 sm:p-8 shadow-2xl aero-grid relative",
        isWorkorder && "bg-[#0c1626] border-2 border-slate-800 p-6 sm:p-8 shadow-xl",
        isPhoto && "bg-[#070e18] border border-slate-800/80 overflow-hidden shadow-2xl",
        // Hover dynamics
        hoverEffect && "hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/5",
        className
      )}
      {...props}
    >
      {/* Blueprint Variant Corner Crosshairs & Grid Accents */}
      {isBlueprint && (
        <>
          <div className="absolute top-2 left-2 text-[10px] font-mono text-sky-500/40 select-none">+</div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-sky-500/40 select-none">+</div>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-sky-500/40 select-none">+</div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-sky-500/40 select-none">+</div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-sky-500/5 to-transparent pointer-events-none" />
        </>
      )}

      {/* Workorder Top Header Strip */}
      {isWorkorder && serial && (
        <div className="absolute top-0 left-0 right-0 bg-[#070e18] px-6 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="text-sky-400 font-bold uppercase">{serial}</span>
          <span className="text-slate-500">IAR S.A. MRO DEPOT</span>
        </div>
      )}

      {/* Serial code ribbon for blueprint cards */}
      {isBlueprint && serial && (
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-sky-900/30 text-[10px] font-mono text-sky-400/80">
          <span className="tracking-widest uppercase">{serial}</span>
          <span className="text-slate-500">GHIMBAV-BV</span>
        </div>
      )}

      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-5 space-y-2", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight text-white font-sans",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-slate-300 leading-relaxed font-sans", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-sm text-slate-300 font-sans", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 flex items-center pt-5 border-t border-slate-800/80", className)}
      {...props}
    />
  );
}
