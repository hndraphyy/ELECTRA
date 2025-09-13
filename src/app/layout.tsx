import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/layouts/navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
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
      <body className={roboto.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
