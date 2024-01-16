import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Simplify",
    template: "%s | Simplify",
  },
  description: "Optimize your daily routine with Simplify, the intuitive task management app designed to boost your productivity. Effortlessly organize, prioritize, and conquer your to-do list with a tool that understands your need for efficiency and simplicity.",
  icons: {
    icon: "/logo.svg",
    href: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="{inter.className}">{children}</body>
    </html>
  );
}
