import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoreFit | Train with Alex",
  description: "Achieve your fitness goals with personalized training programs and expert guidance from certified personal trainer Alex.",
  keywords: ["personal trainer", "fitness", "workout", "strength training", "coaching", "nutrition"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="relative antialiased">
        <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-0"></div>
        {children}
      </body>
    </html>
  );
}
