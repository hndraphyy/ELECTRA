"use clients";

import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";
import CardProduct from "@/components/cards/CardProducts";

const ProductsSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <h1 className="text-xl md:text-3xl mb-5 md:mb-9 font-medium text-primary">
          All Products
        </h1>
        <CardProduct />
      </Container>
    </SectionWrapper>
  );
};

export default ProductsSection;
