import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
const SwiperSlider = () => {
  const sliderImages = [
    {
      src: "/assets/bg-hero.png",
    },
    {
      src: "/assets/law-firm.jpg",
    },
    {
      src: "/assets/bg-hero.png",
    },
    {
      src: "/assets/bg-hero.png",
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      navigation={true}
      modules={[Autoplay, Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div>
            <img src={image.src} alt="slider image" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
