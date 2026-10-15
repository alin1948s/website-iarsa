"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Plane, Award, Sparkles, ChevronRight } from "lucide-react";
import { TimelineEvent } from "@/lib/data/timeline";
import { Badge } from "@/components/ui/Badge";
import { Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

interface HistoricalTimelineProps {
  events: TimelineEvent[];
  locale: Locale;
}

export function HistoricalTimeline({ events, locale }: HistoricalTimelineProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filterCategories = [
    { id: "ALL", label: locale === "ro" ? "TOATĂ ISTORIA (1925–PREZENT)" : "COMPLETE TIMELINE" },
    { id: "founding", label: locale === "ro" ? "1925 ÎNFIINȚARE" : "1925 FOUNDING" },
    { id: "interwar", label: locale === "ro" ? "PERIOADA INTERBELICĂ" : "INTERWAR ERA" },
    { id: "war", label: locale === "ro" ? "IAR 80/81 (1940–1944)" : "IAR 80/81 FIGHTERS" },
    { id: "renaissance", label: locale === "ro" ? "1968 RENAȘTERE ICA" : "1968 ICA RENAISSANCE" },
    { id: "helicopter", label: locale === "ro" ? "ERA ELICOPTERELOR (PUMA & ALOUETTE)" : "HELICOPTERS ERA" },
    { id: "modern", label: locale === "ro" ? "2000–PREZENT" : "MODERN ERA" },
  ];

  const filteredEvents = events.filter((ev) => {
    if (activeFilter === "ALL") return true;
    return ev.category === activeFilter;
  });

  return (
    <div className="space-y-8">
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 pb-5 border-b border-slate-800/80">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={cn(
              "px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-all cursor-pointer",
              activeFilter === cat.id
                ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold shadow-md shadow-sky-600/25"
                : "bg-[#0e1828] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Timeline entries */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pb-8">
        {filteredEvents.map((ev, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-[#070e18] border-2 border-sky-400 rounded-full group-hover:bg-sky-400 group-hover:scale-110 transition-all duration-200 shadow-sm" />

            <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-6 sm:p-8 relative hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 shadow-lg">
              {/* Header row: Year + Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200 tracking-tight">
                  {ev.year}
                </span>

                {ev.metrics && (
                  <Badge variant="amber">
                    {ev.metrics}
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mb-2">
                {ev.title[locale]}
              </h3>

              {/* Mentioned Aircraft */}
              {ev.aircraft && (
                <div className="mb-3 text-xs font-mono text-sky-400 flex items-center gap-1.5 font-medium">
                  <Plane className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Platforme: {ev.aircraft}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4 font-sans">
                {ev.description[locale]}
              </p>

              {/* Authentic Historical Photo if present */}
              {ev.image && (
                <div className="relative mt-5 w-full h-56 sm:h-80 rounded-xl border border-slate-800 overflow-hidden bg-black/40 shadow-md">
                  <Image
                    src={ev.image}
                    alt={ev.title[locale]}
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#070e18] via-[#070e18]/60 to-transparent p-3.5 text-[11px] font-mono text-slate-300">
                    Arhiva Istorică IAR Brașov · Anul {ev.year}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
