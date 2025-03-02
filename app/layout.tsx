import type { Metadata } from "next";
import { Hanken_Grotesk, Geist_Mono, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anushka Gokhale | Portfolio",
  description: "Anushka Gokhale | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifText.variable} ${hankenGrotesk.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
