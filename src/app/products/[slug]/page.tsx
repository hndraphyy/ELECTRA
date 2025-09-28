import { notFound } from "next/navigation";
import { Metadata } from "next";
import { productsData } from "@/utils";
import ProductDetail from "@/components/features/ProductDetail";

export function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.title,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
