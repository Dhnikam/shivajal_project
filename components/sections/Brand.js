import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};
export default function Brand() {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <Swiper {...swiperOptions} className="brand-active">
            {/* <SwiperSlide className="brand-item">
              <img src="/assets/img/child/ashtavinayak.png" alt="" />
            </SwiperSlide> */}

<SwiperSlide className="flex-1 flex justify-center items-center">
    <img src="/assets/img/child/maharaja.jpg" alt="Maharaja" className="max-w-full h-auto" />
  </SwiperSlide>

  <SwiperSlide className="flex-1 flex justify-center items-center">
    <img src="/assets/img/child/sbil.png" alt="SBIL" className="max-w-full h-auto" />
  </SwiperSlide>

  <SwiperSlide className="flex-1 flex justify-center items-center">
    <img src="/assets/img/child/ashtavinayak.png" alt="Ashtavinayak" className="max-w-full h-auto" />
  </SwiperSlide>

            {/* <SwiperSlide className="brand-item">
              <img src="/assets/img/child/maharaja.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide className="brand-item">
              <img src="/assets/img/child/sbil.png" alt="" />
            </SwiperSlide> */}

            {/* <SwiperSlide className="brand-item">
              <img src="/assets/img/brand/brand_img04.png" alt="" />
            </SwiperSlide>

            <SwiperSlide className="brand-item">
              <img src="/assets/img/brand/brand_img05.png" alt="" />
            </SwiperSlide>

            <SwiperSlide className="brand-item">
              <img src="/assets/img/brand/brand_img06.png" alt="" />
            </SwiperSlide>

            <SwiperSlide className="brand-item">
              <img src="/assets/img/brand/brand_img03.png" alt="" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}