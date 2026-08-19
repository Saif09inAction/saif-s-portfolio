import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ClientShell } from "@/components/ClientShell";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saif Salmani | Full-stack Developer",
  description:
    "Mumbai-based full-stack developer. React, Next.js, Node — products from hackathons to production.",
  metadataBase: new URL("https://saifsalmani.me"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full`}>
      <body className="min-h-full antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
