import PGeneral from "@/components/providers/general.provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belgian Car Services",
  description: "Belgian Car Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} antialiased`}
      >
        <PGeneral>
        {children}
        </PGeneral>
      </body>
    </html>
  );
}
