import { notFound } from "next/navigation";
import { getProducts } from "@/services/productService";
import ProductDetail from "@/components/features/ProductDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getProducts();

  const product = data.find((item: any) => {
    const itemSlug = item.name.toLowerCase().replace(/ /g, "-");
    return itemSlug === slug;
  });

  if (!product) {
    return notFound();
  }

  const mappedProduct = {
    ...product,
    title: product.name,
    productImg: product.image_url,
    desc: product.description,
    alt: product.name,
    rate: 4.5,
    slug: slug,
  };

  return <ProductDetail product={mappedProduct} />;
}
