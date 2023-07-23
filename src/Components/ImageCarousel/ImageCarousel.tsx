import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import bullsEye from "../../../public/bulls-eye.webp";
import meh from "../../../public/meh.webp";
import thumbsUp from "../../../public/thumbs-up.webp";

import "swiper/css/bundle";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  return (
    <Swiper
      allowTouchMove={false}
      effect={"coverflow"}
      spaceBetween={1}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        waitForTransition: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Navigation, EffectCoverflow, Autoplay]}
    >
      <SwiperSlide className="img-slide">
        <Image src={meh} />
      </SwiperSlide>
      <SwiperSlide className="img-slide">
        <Image src={thumbsUp} />
      </SwiperSlide>
      <SwiperSlide className="img-slide">
        <Image src={bullsEye} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
