import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://bigchillwayanad.com",
      lastModified
    },
    {
      url: "https://bigchillwayanad.com/gallery",
      lastModified
    },
    {
      url: "https://bigchillwayanad.com/things-to-do",
      lastModified
    },
    {
      url: "https://bigchillwayanad.com/location",
      lastModified
    },
    {
      url: "https://bigchillwayanad.com/contact",
      lastModified
    }
  ];
}
