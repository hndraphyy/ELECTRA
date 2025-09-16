import type { Metadata } from "next";
import ShopPage from "@/components/features/home";

export const metadata: Metadata = {
  title: "Shop",
};

export default function Home() {
  return <ShopPage />;
}
