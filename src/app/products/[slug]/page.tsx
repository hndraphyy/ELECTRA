import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProducts } from "@/services/productService";
import ProductDetail from "@/components/features/ProductDetail";

interface Props {
  params: { slug: string };
}

export default async function ProductPage({ params }: Props) {
  const allProducts = await getProducts();

  const product = allProducts.find(
    (p: any) =>
      p.id.toString() === params.slug ||
      p.name.toLowerCase().replace(/ /g, "-") === params.slug,
  );

  if (!product) {
    notFound();
  }

  const mappedProduct = {
    ...product,
    title: product.name,
    productImg: product.image_url,
    desc: product.description,
    rate: 4.5,
    images: [product.image_url],
  };

  return <ProductDetail product={mappedProduct} />;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    slug: product.id.toString(),
  }));
}
