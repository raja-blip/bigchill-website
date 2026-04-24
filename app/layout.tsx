import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bigchillwayanad.com";
const socialPreviewImage = "/og-preview-1200.jpg?v=5";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Big Chill | Serene Hillock Sanctuary & Family Retreat in Wayanad",
    template: "%s | The Big Chill"
  },
  description:
    "The Big Chill is a premium hillock sanctuary in Wayanad designed for relaxing stays and family retreats, featuring farm-facing balconies, serene surroundings, and home-style dining near Mananthavady.",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Big Chill",
    title: "The Big Chill | Serene Hillock Sanctuary & Family Retreat in Wayanad",
    description:
      "Discover The Big Chill in Wayanad: a 2.5-bedroom retreat for six with sunrise views, warm hospitality, and a nature-first experience.",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "The Big Chill villa preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Big Chill | Hillock Sanctuary in Wayanad",
    description:
      "A premium forest-facing villa retreat in Wayanad with curated local experiences.",
    images: [socialPreviewImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
