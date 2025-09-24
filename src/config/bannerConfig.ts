export interface BannerItem {
  id: number;
  bannerImg: string;
  alt: string;
  href: string;
}

export const bannerData: BannerItem[] = [
  {
    id: 1,
    bannerImg: "/assets/images/products/banner/banner-1.webp",
    alt: "Banner 1",
    href: "/products/banner-1",
  },
  {
    id: 2,
    bannerImg: "/assets/images/products/banner/banner-2.webp",
    alt: "Banner 2",
    href: "/products/banner-2",
  },
  {
    id: 3,
    bannerImg: "/assets/images/products/banner/banner-3.webp",
    alt: "Banner 3",
    href: "/products/banner-3",
  },
];
