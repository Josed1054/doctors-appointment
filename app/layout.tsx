import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import GlobalContext from "@/context/main-context";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor's Appointments",
  description: "Doctor's Appointments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh w-full`}
      >
        <GlobalContext>{children}</GlobalContext>
      </body>
    </html>
  );
}
