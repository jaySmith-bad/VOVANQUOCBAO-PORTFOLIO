import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Vo Van Quoc Bao | Blockchain Developer",
  description: "Portfolio of Vo Van Quoc Bao - Blockchain Developer specialized in Sui Network (Move) & EVM (Solidity).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-[#020202] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
