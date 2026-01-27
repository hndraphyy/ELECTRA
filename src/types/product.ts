export interface ProductItem {
  id: number;
  slug: string;
  productImg: string;
  alt: string;
  title: string;
  desc: string;
  rate: number;
  price: number;
  discount?: number;
  name?: string;
  description?: string;
  image_url?: string;
}
