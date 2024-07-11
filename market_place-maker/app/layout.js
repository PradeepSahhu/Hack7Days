"use client";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ibm = IBM_Plex_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--var-ibm",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibm.variable}`}>{children}</body>
    </html>
  );
}
