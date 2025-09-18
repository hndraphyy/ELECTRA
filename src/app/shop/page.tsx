import type { Metadata } from "next";
import Shop from "@/components/features/home";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return <Shop />;
}
