export interface ProductItem {
  id: number;
  productImg: string;
  alt: string;
  title: string;
  desc: string;
  rate: number;
  price: number;
  discount?: number;
  href: string;
}
