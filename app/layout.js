import { Analytics } from "@vercel/analytics/react";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Lucas Czuchraj - UX Portfolio",
  description: "Selected works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed Navbar */}
        <div className="fixed left-0 top-0 z-50 w-full">
          <Navbar />
        </div>

        {/* Content with padding to prevent overlap */}
        <main className="relative top-0 bg-white">{children}</main>
        <div className="bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
