export interface BannerItem {
  id: number;
  bannerImg: string;
  alt: string;
  href: string;
}

export const bannerData: BannerItem[] = [
  {
    id: 1,
    bannerImg: "/assets/images/banner/banner-1.png",
    alt: "Banner 1",
    href: "/products/banner-1",
  },
  {
    id: 2,
    bannerImg: "/assets/images/banner/banner-2.png",
    alt: "Banner 2",
    href: "/products/banner-2",
  },
  {
    id: 3,
    bannerImg: "/assets/images/banner/banner-3.png",
    alt: "Banner 3",
    href: "/products/banner-3",
  },
];
