"use client";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ChakraProvider } from "@chakra-ui/react";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const activeChain = "ethereum";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      {/* <Navbar /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
