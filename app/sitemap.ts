import type { MetadataRoute } from "next";
import { comparisonCategories } from "@/lib/comparisonCategories";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    ...["about", "contact", "privacy", "terms"].map((page) => ({
      url: `${siteUrl}/${page}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...comparisonCategories.map((category) => ({
      url: `${siteUrl}/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
