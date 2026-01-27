"use clinet";

import Image from "next/image";
import { ProductItem } from "@/types/product";
import { formatPrice } from "@/utils";
import SectionWrapper from "../layouts/SectionWrapper";
import Container from "../layouts/Container";
import { Button } from "../ui/Button";

interface ProductDetailPageProps {
  product: ProductItem;
}

const ProductDetail = ({ product }: ProductDetailPageProps) => {
  const { productImg, alt, title, desc, price, discount, rate, slug } = product;

  return (
    <>
      <SectionWrapper>
        <Container>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="relative h-[300px] md:h-[500px] w-full md:w-1/2 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={productImg}
                alt={alt || title}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
              <p className="text-sm font-normal md:text-base text-gray-700">
                {desc}
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-bold">
                  ⭐ {rate}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl lg:text-3xl font-semibold text-primary">
                  {formatPrice(price)}
                </p>
                {discount && (
                  <p className="text-red-500 line-through">Disc {discount}%</p>
                )}
              </div>
              <Button className="py-3">Tambah ke Keranjang</Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default ProductDetail;
