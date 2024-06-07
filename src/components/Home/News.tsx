"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const News = () => {
  // Create an array with 3 elements to map over
  const slides = [1, 2, 3];

  return (
    <div className="w-full h-44 mt-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-md rounded-xl shadow-md mx-2 mb-2 h-34">
              <div className="pb-2 w-90 shadow-inner rounded-xl p-4">
                <div className="flex rounded-xl text-black justify-between">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/profile.jpg"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <p className="text-md font-semibold text-primary">
                      Ana riswati
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-light text-end">Senin</p>
                    <p className="text-xs font-light">30 mei 2022</p>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-sm font-light mt-2">
                    Kalimat 1 - lorem ipsum dolor sit amet
                  </p>
                  <p className="text-sm font-light">
                    Kalimat 2 - lorem ipsum dolor sit amet
                  </p>
                  <p className="text-sm font-light">
                    Kalimat 3 - lorem ipsum dolor sit amet
                  </p>
                  <p className="text-sm font-light">
                    Kalimat 4 - lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
