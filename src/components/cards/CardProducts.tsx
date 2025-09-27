"use client";

import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/config/cardProducts";

const CardProduct = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {productsData.map((product) => (
        <Link
          key={product.id}
          href={product.href}
          className="rounded-md md:rounded-xl relative"
        >
          <div className="block mb-2 relative w-full bg-gray-300 rounded-md md:rounded-xl h-[130px] ssm:h-[190px] sm:h-[245px] md:h-[250px] lg:h-[230px] xl:h-[230px]">
            <Image
              src={product.productImg}
              alt={product.alt}
              fill
              className="w-full h-full object-cover rounded-md md:rounded-xl"
              priority
            />
          </div>
          <h1 className="text-[14px] md:text-[16px] font-medium">
            {product.title}
          </h1>
          <p className="text-[12px] md:text-[14px] font-light leading-[18px] md:leading-[20px]">
            {product.desc}
          </p>
          <p className="text-[15px] md:text-[19px] text-primary">
            Rp. {product.price}
          </p>
          <p className="text-[12px] md:text-[14px]">{product.rate}</p>
        </Link>
      ))}
    </div>
  );
};

export default CardProduct;
