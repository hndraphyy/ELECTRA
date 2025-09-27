"use client";

import Container from "@/components/layouts/Container";
import Banner from "@/components/Banner";
import ProductsSection from "./sections/ProductsSection";

export default function Home() {
  return (
    <Container>
      <Banner />
      <ProductsSection />
    </Container>
  );
}
