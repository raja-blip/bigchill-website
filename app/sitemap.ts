import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const pages = ["/", "/gallery", "/things-to-do", "/location", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified
  }));
}
