"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types/product";
import { formatPrice } from "@/utils";

interface ProductCardProps {
  product: ProductItem;
  showDiscountBadge?: boolean;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { productImg, alt, title, desc, price, discount, rate, slug } = product;

  const discountValue = Number(discount) || 0;
  const hasDiscount = discountValue > 0;
  const finalPrice = hasDiscount
    ? price - price * (discountValue / 100)
    : price;

  return (
    <Link
      href={`/products/${slug}`}
      aria-label={`View product ${title}`}
      className="group block rounded-md md:rounded-xl"
    >
      <div className="relative mb-2 h-[130px] ssm:h-[190px] sm:h-[245px] md:h-[250px] lg:h-[230px] xl:h-[230px] w-full overflow-hidden rounded-md md:rounded-xl bg-gray-200">
        <Image
          src={productImg}
          alt={alt || title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {hasDiscount && (
          <span className="absolute right-1 top-1 z-10 rounded-xl bg-white px-2 py-1 text-xs font-medium text-red-500 shadow-md md:text-sm">
            -{discountValue}%
          </span>
        )}
      </div>

      <h2 className="line-clamp-1 text-sm font-medium md:text-base">{title}</h2>
      <p className="line-clamp-2 text-xs font-light leading-tight md:text-sm">
        {desc}
      </p>

      <div className="mt-1">
        {hasDiscount && (
          <p className="text-xs text-gray-500 line-through md:text-sm">
            {formatPrice(price)}
          </p>
        )}
        <p className="text-sm font-semibold text-primary md:text-lg">
          {formatPrice(finalPrice)}
        </p>
      </div>

      <p className="text-xs text-gray-600 md:text-sm">⭐ {rate}</p>
    </Link>
  );
};

export default ProductCard;
