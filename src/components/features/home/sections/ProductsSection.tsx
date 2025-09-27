"use client";

import { productsPopular } from "@/utils";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import ProductGrid from "@/components/ProductGrid";

const ProductsSection = () => {
  return (
    <SectionWrapper>
      <h1 className="text-xl md:text-3xl mb-5 md:mb-9 font-medium text-primary">
        Products Popular
      </h1>
      <ProductGrid products={productsPopular} showDiscountBadge={false} />
    </SectionWrapper>
  );
};

export default ProductsSection;
