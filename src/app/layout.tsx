import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YardScapes - Professional Landscaping Services",
  description: "Transform your outdoor space with YardScapes professional landscaping services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-gray-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
