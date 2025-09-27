"use clients";

import SectionWrapper from "@/components/layouts/SectionWrapper";
import CardPopular from "@/components/cards/CardPopular";

const ProductsSection = () => {
  return (
    <SectionWrapper>
      <h1 className="text-xl md:text-3xl mb-5 md:mb-9 font-medium text-primary">
        Products Popular
      </h1>
      <CardPopular />
    </SectionWrapper>
  );
};

export default ProductsSection;
