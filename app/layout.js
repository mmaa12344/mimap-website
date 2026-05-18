import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-serif",
});

export const metadata = {
  title: "TrueBooksHQ | Bookkeeping & Tax Services in St. Petersburg, Florida",
  description:
    "Professional bookkeeping, QuickBooks support, and tax preparation services for small businesses in St. Petersburg, Florida and across the United States.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}