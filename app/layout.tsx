import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderBar from "./pages/headerBar";
import FooterContent from "./pages/footerContent";
import { Toaster } from "react-hot-toast";
import AosProviders from "./AosProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generated by Auii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Portfolio Atthawat Aui</title>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="รับงาน Freelance | Part-Time | Landing Page | ออกแบบหน้าเว็บ | ออกแบหน้าแอพพลิเคชั่น "
        />
      </head>
      <body
        className={`${geistMono.variable} ${geistSans.variable} font-mono bg-[#161614] `}
      >
        <Toaster />
        <HeaderBar />
        <section className="container mx-auto p-4 sm:p-6 lg:p-8 h-full space-y-2">
          <AosProviders>{children}</AosProviders>
        </section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full space-y-2">
          <FooterContent />
        </div>
      </body>
    </html>
  );
}
