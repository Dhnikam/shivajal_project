import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1350: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};

export default function Brand() {
  return (
    <div className="brand-area py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <Swiper {...swiperOptions} className="brand-active">
          {/* <SwiperSlide className="brand-item flex justify-center items-center p-4">
            <img
              src="/assets/img/child/ashtavinayak.png"
              alt="Ashtavinayak"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className=" flex justify-center items-center p-4">
            <img
              src="/assets/img/child/maharaja.jpg"
              alt="Maharaja"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className="brand-item flex justify-center items-center p-4">
            <img
              src="/assets/img/child/sbil.png"
              alt="SBIL"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide> */}

          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </div>
  );
}
