import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bigchillwayanad.com";
const socialPreviewImage =
  "/images/hero/14_Day%20Facade_RajaGanesh%20Villa.jpg?v=3";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Big Chill | Hillock Sanctuary in Wayanad",
    template: "%s | The Big Chill"
  },
  description:
    "The Big Chill is a premium 2.5-bedroom hill retreat in Wayanad with forest-facing balconies, home-style food, and unforgettable misty views.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Big Chill",
    title: "The Big Chill | Hillock Sanctuary in Wayanad",
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
