import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayomide | CHO",
  description: "Meet the developer called ayo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
