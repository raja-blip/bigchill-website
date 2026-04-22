import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bigchillwayanad.com",
      lastModified: new Date()
    }
  ];
}
