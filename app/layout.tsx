import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bigchillwayanad.com";

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
        url: "/images/hero/14_Day Facade_RajaGanesh Villa.jpg",
        width: 1600,
        height: 900,
        alt: "The Big Chill exterior view"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Big Chill | Hillock Sanctuary in Wayanad",
    description:
      "A premium forest-facing villa retreat in Wayanad with curated local experiences.",
    images: ["/images/hero/14_Day Facade_RajaGanesh Villa.jpg"]
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
