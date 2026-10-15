import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

interface PageHeaderProps {
  sectionCode?: string;
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  locale: "ro" | "en";
  children?: React.ReactNode;
}

export function PageHeader({
  sectionCode,
  badge,
  title,
  description,
  breadcrumbs,
  locale,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-16 border-b border-slate-800 bg-gradient-to-b from-[#0c1626] via-[#070e18] to-[#070e18] aero-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070e18]/80 to-[#070e18] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} locale={locale} />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {sectionCode && (
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider">
              {sectionCode}
            </span>
          )}
          {badge && (
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full text-xs font-mono font-medium">
              {badge}
            </span>
          )}
        </div>

        <div className="mt-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            {description}
          </p>
        </div>

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
