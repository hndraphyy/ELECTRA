import Image from "next/image";
import { notFound } from "next/navigation";
import { productsData } from "@/utils";
import { formatPrice } from "@/utils";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // Cari product berdasarkan slug
  const product = productsData.find((p) => p.slug === slug);

  if (!product) return notFound();

  const finalPrice = product.discount
    ? product.price - product.price * (product.discount / 100)
    : product.price;

  return (
    <div className="p-6">
      <div className="relative w-full max-w-lg h-64 mb-6">
        <Image
          src={product.productImg}
          alt={product.alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.desc}</p>

      {product.discount && (
        <p className="text-gray-400 line-through">
          {formatPrice(product.price)}
        </p>
      )}

      <p className="text-xl font-semibold text-primary">
        {formatPrice(finalPrice)}
      </p>

      <p className="text-sm text-gray-600 mt-2">⭐ {product.rate}</p>
    </div>
  );
}
