import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Portfolio Site",
  metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images:
      "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#C6D5C6] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
