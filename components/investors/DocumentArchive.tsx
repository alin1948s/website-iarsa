"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Download,
  Filter,
  FileText,
  Archive,
  Calendar,
  Sparkles,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { InvestorDocument } from "@/lib/data/investor-documents";
import { Badge } from "@/components/ui/Badge";
import { Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

interface DocumentArchiveProps {
  documents: InvestorDocument[];
  locale: Locale;
}

export function DocumentArchive({ documents, locale }: DocumentArchiveProps) {
  const [selectedYear, setSelectedYear] = useState<number | "ALL">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Get distinct years sorted descending
  const years = useMemo(() => {
    const set = new Set<number>();
    documents.forEach((d) => set.add(d.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [documents]);

  // Categories list
  const categories = [
    { id: "ALL", label: locale === "ro" ? "TOATE CATEGORIILE" : "ALL CATEGORIES" },
    { id: "annual_reports", label: locale === "ro" ? "RAPOARTE ANUALE" : "ANNUAL REPORTS" },
    { id: "financial_reports", label: locale === "ro" ? "RAPOARTE PERIODICE (Q/S)" : "PERIODIC REPORTS" },
    { id: "preliminary", label: locale === "ro" ? "REZULTATE PRELIMINARE" : "PRELIMINARY" },
    { id: "dividends", label: locale === "ro" ? "DIVIDENDE" : "DIVIDENDS" },
    { id: "current_reports", label: locale === "ro" ? "RAPOARTE CURENTE BVB" : "CURRENT REPORTS" },
  ];

  // Filter logic
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      // Year filter
      if (selectedYear !== "ALL" && doc.year !== selectedYear) {
        return false;
      }
      // Category filter
      if (selectedCategory !== "ALL") {
        if (selectedCategory === "annual_reports" && doc.category !== "annual_reports") return false;
        if (selectedCategory === "financial_reports" && doc.category !== "financial_reports") return false;
        if (selectedCategory === "preliminary" && doc.category !== "preliminary") return false;
        if (selectedCategory === "dividends" && doc.category !== "dividends") return false;
        if (selectedCategory === "current_reports" && doc.category !== "current_reports") return false;
      }
      // Query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = doc.title.toLowerCase().includes(q);
        const matchDate = doc.publicationDate.toLowerCase().includes(q);
        const matchCategory = doc.categoryLabel[locale].toLowerCase().includes(q);
        const matchQuarter = doc.quarter ? doc.quarter.toLowerCase().includes(q) : false;
        if (!matchTitle && !matchDate && !matchCategory && !matchQuarter) {
          return false;
        }
      }
      return true;
    });
  }, [documents, selectedYear, selectedCategory, searchQuery, locale]);

  const resetFilters = () => {
    setSelectedYear("ALL");
    setSelectedCategory("ALL");
    setSearchQuery("");
  };

  return (
    <div className="space-y-6">
      {/* Control Panel: Search + Filters */}
      <div className="bg-[#0e1828]/90 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
        {/* Search Bar & Reset */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                locale === "ro"
                  ? "Căutare după titlu, an, trimestru, nr. raport..."
                  : "Search by title, year, quarter, report number..."
              }
              className="w-full bg-[#070e18] border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 font-sans"
            />
          </div>

          {(selectedYear !== "ALL" || selectedCategory !== "ALL" || searchQuery) && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-slate-700 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{locale === "ro" ? "RESETEAZĂ" : "RESET"}</span>
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 text-xs font-sans font-semibold rounded-lg transition-colors",
                selectedCategory === cat.id
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Year Filter Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-800/60">
          <span className="text-xs font-mono text-slate-400 tracking-wider uppercase mr-2 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            {locale === "ro" ? "AN:" : "YEAR:"}
          </span>
          <button
            onClick={() => setSelectedYear("ALL")}
            className={cn(
              "px-3 py-1 text-xs font-mono rounded-md transition-colors",
              selectedYear === "ALL"
                ? "bg-white/20 text-white font-bold border border-white/40"
                : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
            )}
          >
            {locale === "ro" ? "TOȚI ANII" : "ALL"}
          </button>
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={cn(
                "px-2.5 py-1 text-xs font-mono rounded-md transition-colors",
                selectedYear === yr
                  ? "bg-sky-600 text-white font-bold"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
              )}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span>
          {locale === "ro"
            ? `DOCUMENTE IDENTIFICATE: ${filteredDocuments.length}`
            : `MATCHING DOCUMENTS: ${filteredDocuments.length}`}
        </span>
        <span>
          {selectedYear !== "ALL" ? `AN: ${selectedYear}` : "TOATE PERIOADELE (2011–2026)"}
        </span>
      </div>

      {/* Document List */}
      {filteredDocuments.length === 0 ? (
        <div className="bg-[#0e1828]/90 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-slate-600 mx-auto" />
          <p className="text-sm text-white font-sans font-semibold">
            {locale === "ro"
              ? "Niciun document nu corespunde filtrelor selectate."
              : "No documents match the selected filters."}
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-sky-600 text-white text-xs font-sans font-bold uppercase rounded-lg"
          >
            {locale === "ro" ? "Resetează Filtrele" : "Reset Filters"}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className={cn(
                "p-4 sm:p-5 bg-[#0e1828]/90 border border-slate-800 hover:border-sky-500/50 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200",
                doc.isImportant && "border-l-4 border-l-sky-500 bg-sky-500/[0.02]"
              )}
            >
              {/* Document Info */}
              <div className="space-y-1.5 max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 rounded border border-sky-500/30 font-medium text-[11px]">
                    {doc.categoryLabel[locale]}
                  </span>

                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    {doc.publicationDate}
                  </span>

                  {doc.quarter && (
                    <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded text-[11px]">
                      {doc.quarter}
                    </span>
                  )}

                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400">AN {doc.year}</span>
                </div>

                <h4 className="text-sm sm:text-base font-semibold text-white leading-snug font-sans">
                  {doc.title}
                </h4>
              </div>

              {/* Download Action */}
              <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-center">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded-lg transition-colors",
                    doc.fileType === "ZIP"
                      ? "bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-white border border-amber-500/30"
                      : "bg-sky-500/15 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30"
                  )}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{doc.fileType}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
