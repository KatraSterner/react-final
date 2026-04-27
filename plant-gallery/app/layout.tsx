import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context/context";
import BackButton from "./components/backButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plant API",
  description: "Created by Katra Sterner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <header className="bg-green-300 text-green-900 text-3xl font-bold p-5 grid grid-cols-3 shadow-lg">
          <BackButton />
          <h1 className="text-center">🌱Plants and Trees🌳</h1>
        </header>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
