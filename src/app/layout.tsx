import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flex Social Recruiter",
  description: "Join Flex Social: A dynamic socail media agency & software solutions provider in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/flex-favicon.ico" />
      </head>
      <NextUIProvider>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
