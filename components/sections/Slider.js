import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Slider() {
  return (
    <>
      <section className="slider-area">
        <Swiper {...swiperOptions} className="slider-active">
          <SwiperSlide
            className="single-slider slider-bg"
            style={{
              backgroundImage: `url("/shivjal-banner.jpg")`,
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="banner-content text-center">
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Building a Better Future
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".4s">
                      At Shivjal Group, we are committed to creating sustainable
                      and affordable housing solutions. Join us in our mission
                      to transform communities.
                    </p>
                    <Link
                      href="/overview"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      <div className="btn_m">
                        <div className="btn_c">
                          <div className="btn_t1">Learn More</div>
                          <div className="btn_t2">Learn More</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="single-slider slider-bg"
            style={{
              backgroundImage: `url("/shivjal-banner2.jpeg")`,
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="banner-content text-center">
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Innovative Infrastructure
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".4s">
                      Discover our range of residential and commercial projects
                      designed to enhance the quality of life with modern
                      amenities and thoughtful designs.
                    </p>
                    <Link
                      href="/overview"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      <div className="btn_m">
                        <div className="btn_c">
                          <div className="btn_t1">Learn More</div>
                          <div className="btn_t2">Learn More</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="banner-scroll-down">
        <Link href="#about" className="section-link">
          <span />
          <span />
          <span />
        </Link>
      </div>
    </>
  );
}
