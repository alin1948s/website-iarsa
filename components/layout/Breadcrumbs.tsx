import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: string;
}

export function Breadcrumbs({ items, locale = "ro" }: BreadcrumbsProps) {
  const homeHref = `/${locale}`;

  // JSON-LD schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ro" ? "Acasă" : "Home",
        item: `https://www.iar.ro${homeHref}`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://www.iar.ro${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-xs font-mono tracking-wider text-aero-slate/80 py-3"
      >
        <Link
          href={homeHref}
          className="flex items-center gap-1 hover:text-white transition-colors"
          title={locale === "ro" ? "Acasă" : "Home"}
        >
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">{locale === "ro" ? "Acasă" : "Home"}</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <div key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-aero-border" />
              {isLast || !item.href ? (
                <span className="text-aero-blue font-semibold uppercase">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-white uppercase transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
