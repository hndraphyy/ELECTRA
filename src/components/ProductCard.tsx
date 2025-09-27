"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types/product";
import { formatPrice } from "@/utils";

interface ProductCardProps {
  product: ProductItem;
  showDiscountBadge?: boolean;
}

const ProductCard = ({
  product,
  showDiscountBadge = true,
}: ProductCardProps) => {
  const discount = product.discount ?? 0;
  const finalPrice =
    discount > 0
      ? product.price - product.price * (discount / 100)
      : product.price;

  return (
    <Link
      href={product.href}
      className="rounded-md md:rounded-xl relative group"
    >
      <div className="block mb-2 relative w-full bg-gray-200 rounded-md md:rounded-xl h-[130px] ssm:h-[190px] sm:h-[245px] md:h-[250px] lg:h-[230px] xl:h-[230px] overflow-hidden">
        <Image
          src={product.productImg}
          alt={product.alt}
          fill
          className="w-full h-full object-cover rounded-md md:rounded-xl transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      <h2 className="text-sm md:text-base font-medium line-clamp-1">
        {product.title}
      </h2>
      <p className="text-xs md:text-sm font-light leading-tight line-clamp-2">
        {product.desc}
      </p>

      <div className="mt-1">
        {discount > 0 ? (
          <>
            <p className="text-xs md:text-sm text-gray-500 line-through">
              {formatPrice(product.price)}
            </p>
            {showDiscountBadge && (
              <span className="text-xs md:text-sm font-medium text-red-500 absolute top-1 right-1 px-2 py-1 bg-white rounded-xl">
                -{discount}%
              </span>
            )}
            <p className="text-sm md:text-lg font-semibold text-primary">
              {formatPrice(finalPrice)}
            </p>
          </>
        ) : (
          <p className="text-sm md:text-lg font-semibold text-primary">
            {formatPrice(product.price)}
          </p>
        )}
      </div>

      <p className="text-xs md:text-sm text-gray-600">⭐ {product.rate}</p>
    </Link>
  );
};

export default ProductCard;
