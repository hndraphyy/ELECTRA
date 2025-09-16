import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/layouts/navbar/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Electra",
    template: "%s | Electra",
  },
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
