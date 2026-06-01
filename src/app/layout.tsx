import type { Metadata } from "next";
import { Cinzel, Noto_Serif_Kannada, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { event } from "@/data/event";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800", "900"],
});

const notoKannada = Noto_Serif_Kannada({
  subsets: ["kannada", "latin"],
  variable: "--font-noto-kannada",
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${event.name} ${event.year} | ${event.orgShort}`,
    template: `%s | ${event.orgShort}`,
  },
  description: `${event.tagline} ${event.date} at ${event.venue}. RSVP, volunteer, sponsor, and transparent finance reporting.`,
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${event.name} ${event.year}`,
    description: event.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${notoKannada.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
