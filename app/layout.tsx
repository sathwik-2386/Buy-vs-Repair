import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: "Compare repair and replacement costs to make a more confident decision.",
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
