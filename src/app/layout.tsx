import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "ishbor/provider";
import Topbar from "ishbor/components/ui/Topbar";
import Footer from "ishbor/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishbor",
  description: "Ishbor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <Topbar />
          <div className="flex flex-col min-h-[77vh] bg-[#F7F9FC]">
            {children}
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
