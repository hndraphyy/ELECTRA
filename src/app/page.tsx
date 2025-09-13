import type { Metadata } from "next";
import HomePage from "@/components/features/home";

export const metadata: Metadata = {
  title: "Home | Electra",
  description: "Browse our product catalog",
};

export default function Home() {
  return <HomePage />;
}
