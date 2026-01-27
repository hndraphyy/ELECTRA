export interface ProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  discount?: number;
  category?: string;
}