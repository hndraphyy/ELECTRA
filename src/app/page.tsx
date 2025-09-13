import type { Metadata } from "next";
import HomePage from "@/components/features/home";

export const metadata: Metadata = {
  title: "Home | Electra",
};

export default function Home() {
  return <HomePage />;
}
