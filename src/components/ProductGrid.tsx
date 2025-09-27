"use client";

import { ProductItem } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: ProductItem[];
  showDiscountBadge?: boolean;
}

const ProductGrid = ({
  products,
  showDiscountBadge = true,
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showDiscountBadge={showDiscountBadge}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
