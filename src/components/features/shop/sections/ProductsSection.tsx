"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import { ProductItem } from "@/types/product";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";
import ProductGrid from "@/components/ProductGrid";

const ProductsSection = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndMapData = async () => {
      try {
        const rawData = await getProducts();

        const mappedData: ProductItem[] = rawData.map((item: any) => ({
          id: item.id,
          slug: item.name.toLowerCase().replace(/ /g, "-"),
          productImg: item.image_url || "/assets/images/products/macbook.webp",
          alt: item.name,
          title: item.name,
          desc: item.description,
          rate: 4.5,
          price: item.price,
          discount: item.discount || 0,
          href: `/products/${item.id}`,
          name: item.name,
          description: item.description,
          image_url: item.image_url,
        }));

        setProducts(mappedData);
      } catch (error) {
        console.error("Gagal load produk:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndMapData();
  }, []);

  return (
    <SectionWrapper>
      <Container className="h-dvh">
        <h1 className="text-xl md:text-3xl mb-5 md:mb-9 font-medium text-primary">
          All Products
        </h1>

        {loading ? (
          <p className="text-center py-10 text-gray-500">Loading...</p>
        ) : (
          <ProductGrid products={products} showDiscountBadge={true} />
        )}
      </Container>
    </SectionWrapper>
  );
};

export default ProductsSection;
