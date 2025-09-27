"use client";

import Image from "next/image";
import Link from "next/link";
import { bannerData } from "@/config/bannerConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SectionWrapper from "./layouts/SectionWrapper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <SectionWrapper>
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
          className="w-full h-[160px] ssm:h-[215px] sm:h-[270px] md:h-[330px] lg:h-[370px] xl:h-[410px]"
        >
          {bannerData.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Link
                href={banner.href}
                className="block relative w-full h-[140px] ssm:h-[190px] sm:h-[245px] md:h-[300px] lg:h-[340px] xl:h-[380px]"
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
    </SectionWrapper>
  );
};

export default Banner;
