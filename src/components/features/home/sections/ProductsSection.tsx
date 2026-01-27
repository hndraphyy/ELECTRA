"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import { ProductItem } from "@/types/product";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";
import ProductGrid from "@/components/ProductGrid";

const ProductsSection = () => {
  const [popularProducts, setPopularProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const data = await getProducts();

        const mappedData: ProductItem[] = data.map((item: any) => ({
          id: item.id,
          slug: item.name.toLowerCase().replace(/ /g, "-"),
          productImg: item.image_url || "/assets/images/products/macbook.webp",
          alt: item.name,
          title: item.name,
          desc: item.description,
          rate: 4.8,
          price: item.price,
          discount: item.discount || 0,
          href: `/products/${item.id}`,
          name: item.name,
          description: item.description,
          image_url: item.image_url,
        }));

        setPopularProducts(mappedData.slice(0, 5));
      } catch (error) {
        console.error("Gagal ambil produk populer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  return (
    <SectionWrapper>
      <Container>
        <div className="flex items-center justify-between mb-5 md:mb-9">
          <h1 className="text-xl md:text-3xl font-medium text-primary">
            Popular Products
          </h1>
        </div>

        {loading ? (
          <p className="text-center py-10">Loading popular items...</p>
        ) : (
          <ProductGrid products={popularProducts} showDiscountBadge={true} />
        )}
      </Container>
    </SectionWrapper>
  );
};

export default ProductsSection;
