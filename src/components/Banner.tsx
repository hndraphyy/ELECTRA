"use client";

import Image from "next/image";
import Link from "next/link";
import { bannerData } from "@/config/bannerConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section className="pt-30 md:pt-20 lg:pt-20 mx-auto w-full max-w-screen-xl px-3 md:px-7 big">
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} banner-pagination"></span>`;
            },
          }}
          loop
          spaceBetween={20}
          className="w-full h-[150px] ssm:h-[215px] sm:h-[270px] md:h-[330px] lg:h-[370px]"
        >
          {bannerData.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Link
                href={banner.href}
                className="block relative w-full h-[128px] ssm:h-[190px] sm:h-[245px] md:h-[300px] lg:h-[340px]"
              >
                <Image
                  src={banner.bannerImg}
                  alt={banner.alt}
                  fill
                  className="object-cover object-left rounded-md md:rounded-xl"
                  priority
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
