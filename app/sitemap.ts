import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const routes = ["", "/about", "/pricing", "/faq", "/contact", "/book", "/service-areas"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/book" ? 0.9 : 0.7,
  }));
}
