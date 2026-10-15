import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string, locale: "ro" | "en" = "ro"): string {
  try {
    const parts = dateStr.split(".");
    if (parts.length === 3) {
      const [d, m, y] = parts;
      const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
      return date.toLocaleDateString(locale === "ro" ? "ro-RO" : "en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
    return dateStr;
  } catch {
    return dateStr;
  }
}
