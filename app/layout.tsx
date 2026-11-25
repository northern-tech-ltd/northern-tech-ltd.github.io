import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistDisplay = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northerntechltd.com"),
  title: {
    default: "Northern Tech — automation agency, Scotland",
    template: "%s · Northern Tech",
  },
  description:
    "We take the manual work out of your business. Custom software, workflow automation and practical AI for small and mid-sized teams.",
  openGraph: {
    title: "Northern Tech",
    description:
      "Custom software, workflow automation and practical AI for small and mid-sized teams.",
    url: "https://northerntechltd.com",
    siteName: "Northern Tech",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${geist.variable} ${geistDisplay.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
