"use client";

import Banner from "@/components/Banner";
import ProductsSection from "./sections/ProductsSection";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Container>
          <Banner />
        </Container>
      </SectionWrapper>
      <ProductsSection />
    </>
  );
}
