import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SvgSprite from "./SvgSprite";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-800">
        {children}
        <SvgSprite />
      </body>
    </html>
  );
}
