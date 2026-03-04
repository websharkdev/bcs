import PGeneral from "@/components/providers/general.provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMBFMVWSBC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CMBFMVWSBC');
          `}
        </Script>
        <PGeneral>
        {children}
        </PGeneral>
      </body>
    </html>
  );
}
