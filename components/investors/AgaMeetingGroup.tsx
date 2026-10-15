"use client";

import React, { useState, useMemo } from "react";
import {
  Users,
  Calendar,
  FileText,
  Download,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { AgaMeeting } from "@/lib/data/aga-meetings";
import { Badge } from "@/components/ui/Badge";
import { Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

interface AgaMeetingGroupProps {
  meetings: AgaMeeting[];
  locale: Locale;
}

export function AgaMeetingGroup({ meetings, locale }: AgaMeetingGroupProps) {
  const [selectedYear, setSelectedYear] = useState<number | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const years = useMemo(() => {
    const set = new Set<number>();
    meetings.forEach((m) => set.add(m.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [meetings]);

  const filteredMeetings = useMemo(() => {
    return meetings.filter((m) => {
      if (selectedYear !== "ALL" && m.year !== selectedYear) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = m.title.toLowerCase().includes(q);
        const matchDate = m.date.toLowerCase().includes(q);
        const matchType = m.type.toLowerCase().includes(q);
        if (!matchTitle && !matchDate && !matchType) return false;
      }
      return true;
    });
  }, [meetings, selectedYear, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Filter controls */}
      <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Year Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setSelectedYear("ALL")}
            className={cn(
              "px-3.5 py-1.5 text-xs font-mono uppercase rounded-full transition-all cursor-pointer",
              selectedYear === "ALL"
                ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold shadow-md shadow-sky-600/25"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            )}
          >
            {locale === "ro" ? "TOȚI ANII" : "ALL YEARS"}
          </button>
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer",
                selectedYear === yr
                  ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold shadow-md shadow-sky-600/25"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              )}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Text Filter */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={locale === "ro" ? "Filtrează după dată sau tip..." : "Filter by date or type..."}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2 text-xs font-sans text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
          />
        </div>
      </div>

      {/* List of Meetings */}
      <div className="space-y-5">
        {filteredMeetings.map((meeting) => (
          <div
            key={meeting.id}
            className="border border-slate-800 bg-[#0e1828] rounded-2xl p-6 sm:p-8 relative group hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 shadow-lg"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <Badge variant={meeting.type === "AGEA" ? "amber" : "aviation"}>
                  {meeting.type === "AGEA" ? "AGEA (EXTRAORDINARĂ)" : "AGOA (ORDINARĂ)"}
                </Badge>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  {meeting.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>DATA: {meeting.date}</span>
              </div>
            </div>

            {/* Document Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* 1. Convocator */}
              {meeting.convocator && (
                <a
                  href={meeting.convocator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/40 transition-all group/item shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-sans font-medium text-slate-200 group-hover/item:text-sky-400">
                      Convocator & Ordinea de Zi
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded-md text-slate-400">
                    {meeting.convocator.type}
                  </span>
                </a>
              )}

              {/* 2. Drepturi de vot */}
              {meeting.votingRights && (
                <a
                  href={meeting.votingRights.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/40 transition-all group/item shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-sans font-medium text-slate-200 group-hover/item:text-sky-400">
                      Drepturi de vot & acțiuni
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded-md text-slate-400">
                    {meeting.votingRights.type}
                  </span>
                </a>
              )}

              {/* 3. Buletine de vot */}
              {meeting.ballots && (
                <a
                  href={meeting.ballots.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/40 transition-all group/item shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-sans font-medium text-slate-200 group-hover/item:text-sky-400">
                      Buletine vot corespondență
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded-md text-slate-400">
                    {meeting.ballots.type}
                  </span>
                </a>
              )}

              {/* 4. Împuterniciri */}
              {meeting.proxies && (
                <a
                  href={meeting.proxies.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/40 transition-all group/item shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-sans font-medium text-slate-200 group-hover/item:text-sky-400">
                      Împuterniciri speciale
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded-md text-slate-400">
                    {meeting.proxies.type}
                  </span>
                </a>
              )}

              {/* 5. Proiecte hotărâri */}
              {meeting.draftDecisions && (
                <a
                  href={meeting.draftDecisions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/40 transition-all group/item shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-sans font-medium text-slate-200 group-hover/item:text-sky-400">
                      Materiale & Proiecte Hotărâre
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded-md text-slate-400">
                    {meeting.draftDecisions.type}
                  </span>
                </a>
              )}

              {/* 6. Hotărâri Aprobate (Final Decisions) */}
              {meeting.finalDecisions && (
                <a
                  href={meeting.finalDecisions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-emerald-500/10 rounded-xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all group/item shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-sans font-semibold text-emerald-200 group-hover/item:text-white">
                      Hotărâre AGA Aprobată
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 rounded-md text-emerald-300">
                    {meeting.finalDecisions.type}
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
