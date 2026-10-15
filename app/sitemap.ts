import { MetadataRoute } from "next";
import { capabilitiesData } from "@/lib/data/capabilities";
import { aircraftData } from "@/lib/data/aircraft";
import { pressArticles } from "@/lib/data/press";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.iar.ro";
  const locales = ["ro", "en"];

  const routes: string[] = [
    "",
    "/despre-iar",
    "/istorie",
    "/capabilitati",
    "/aeronave",
    "/mro",
    "/certificari",
    "/investitori",
    "/investitori/raportari",
    "/investitori/aga",
    "/investitori/guvernanta-corporativa",
    "/investitori/calendar-financiar",
    "/achizitii",
    "/cariere",
    "/integritate",
    "/comunicate",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route.includes("investitori") || route.includes("achizitii") ? "daily" : "weekly",
        priority: route === "" ? 1.0 : route.includes("investitori") ? 0.9 : 0.8,
      });
    }

    // Dynamic capabilities
    for (const cap of capabilitiesData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/capabilitati/${cap.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    // Dynamic aircraft
    for (const craft of aircraftData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/aeronave/${craft.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }

    // Dynamic press articles
    for (const art of pressArticles) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/comunicate/${art.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
