import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";
import Modal from "@/components/modal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayomide | CHO",
  description: "I'm Ayo a passionate web developer from Nigeria",
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
        <Modal />
      </body>
    </html>
  );
}
