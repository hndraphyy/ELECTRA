"use clinet";

import Image from "next/image";
import { ProductItem } from "@/types/product";

interface ProductDetailPageProps {
  product: ProductItem;
}

const ProductDetail = ({ product }: ProductDetailPageProps) => {
  const { productImg, alt, title, desc, price, discount, rate, slug } = product;

  return (
    <>
      <Image src={productImg} alt={alt} fill />
    </>
  );
};

export default ProductDetail;
