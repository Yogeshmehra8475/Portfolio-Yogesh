import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} — Data Science & AI Portfolio`,
  description: site.tagline,
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    title: `${site.name} — Data Science & AI Portfolio`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plexSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
