import { Swiper, SwiperSlide } from "swiper/react";
import bgImage1 from "../assets/images/carousel1.jpg";
import bgImage2 from "../assets/images/carousel2.jpg";
import bgImage3 from "../assets/images/carousel3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="py-5 md:py-8 lg:py-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImage1}
            text="Get Your Web Development Project done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImage2}
            text="Get Your Web Graphic Project done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImage3}
            text="Start Your Digital Marketing Campaign up n running"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
