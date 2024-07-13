import Layout from "@/components/layout/Layout";
import Parallax from "@/components/sections/Parallax";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

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
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export default function Overview() {
  return (
    <>
      <Layout headerStyle={1}>
        <section className="about-area-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img text-center">
                  <img
                    src="/assets/img/team/steam-01.jpg"
                    alt="About Shivjal Group"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-40">
                    <span className="sub-title">Who we are</span>
                    <h2 className="title">Sachin Bhosale</h2>
                  </div>
                  <p>
                    Explore the inspiring journey of Sachin Bhosale, a self-made
                    entrepreneur who turned a 10th-grade education into a
                    multi-billion empire. Discover his diverse ventures,
                    philanthropic contributions, and unwavering dedication to
                    success. Generously donates to uplift village communities
                    and sponsors education for girls on their birthdays Built a
                    1000+ crore empire with sheer determination and innovation.
                    Creator of Shivjal Alkaline Water, promoting healthier
                    lifestyles.
                  </p>
                  <Link href="overview" className="btn transparent-btn">
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
        </section>
        {/* about-area
        <section className="about-area-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img text-center">
                  <img
                    src="/assets/img/images/about_img.jpg"
                    alt="About Shivjal Group"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-40">
                    <span className="sub-title">Who we are</span>
                    <h2 className="title">
                      Leading the Real Estate Sector for Over 30 Years
                    </h2>
                  </div>
                  <p>
                    At Shivjal Group, we pride ourselves on our commitment to
                    excellence and innovation in real estate. With a legacy
                    spanning over three decades, we have successfully completed
                    numerous projects that stand as a testament to our expertise
                    and dedication.
                  </p>
                  <Link href="overview" className="btn transparent-btn">
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
        </section> */}
        {/* about-area-end */}
        {/* counter-area */}
        {/* <div className="counter-area section-pt-140 section-pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="counter-item-wrap">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={51} time={1} />
                        <p>
                          Completed <span>Projects</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={30} time={1} />
                        <p>
                          Under <span>Construction</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={17} time={1} />
                        <p>
                          Projects <span>Underway</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={45} time={1} />
                        <p>
                          Joint Ventures <span>Completed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* counter-area-end */}
        {/* parallax-img-area */}
        {/* <Parallax /> */}
        {/* parallax-img-area-end */}
        {/* roadMap-area */}
        <section className="roadmap-area section-py-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Awards & Recognition</span>
                  <h2 className="title">Our Achievements Over the Years</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="roadmap-wrap">
                <div className="swiper-container roadmap-active">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2007</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Shivjal Group received the ET Now Real Estate Award
                            for Most Promising Delivery, recognizing our
                            dedication to timely project completions.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2010</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Awarded the Design & Development Award for Ideal
                            Project Design, highlighting our innovative and
                            aesthetic project designs.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2011</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Received the National Real Estate Award for Best
                            Luxury Company, a testament to our luxury projects'
                            quality and craftsmanship.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2014</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Honored with the Golden Globe Tiger Award for
                            Property of the Year, showcasing our excellence in
                            property development.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2019</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Shivjal Group was recognized with the BAM Award for
                            Best Creative Builder, reflecting our innovative
                            approach to building design.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2020</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Received the Leadership Award for Real Estate for
                            our outstanding leadership and contributions to the
                            real estate industry.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-item">
                        <h4 className="title">2021</h4>
                        <div className="roadmap-content">
                          <span className="dot" />
                          <p>
                            Awarded the South Asia Leadership Award for
                            Residential Projects, recognizing our leadership and
                            excellence in residential real estate.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="h1n swiper-button-next" />
                  <div className="h1p swiper-button-prev" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* roadMap-area-end */}
        {/* counter-area */}
        <div className="counter-area section-pt-140 section-pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="counter-item-wrap">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={51} time={1} />
                        <p>
                          Completed <span>Projects</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={30} time={1} />
                        <p>
                          Under <span>Construction</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={17} time={1} />
                        <p>
                          Projects <span>Underway</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={45} time={1} />
                        <p>
                          Joint Ventures <span>Completed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* parallax-img-area */}
        {/* <Parallax /> */}
        {/* parallax-img-area-end */}
        {/* roadMap-area */}
        {/* <section className="roadmap-area section-py-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Awards & Recognition</span>
                  <h2 className="title">The Merits We Have Earned</h2>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="roadmap-wrap">
                  <div className="swiper-container roadmap-active">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                      <SwiperSlide>
                        <div className="roadmap-item">
                          <h4 className="title">2012</h4>
                          <div className="roadmap-content">
                            <span className="dot" />
                            <p>
                              Recognized for our dedication to sustainable
                              building practices and innovative designs.
                            </p>
                            <span>
                              Green Building Award <br /> Sustainability
                              Excellence
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="roadmap-item">
                          <h4 className="title">2015</h4>
                          <div className="roadmap-content">
                            <span className="dot" />
                            <p>
                              Awarded for our outstanding contributions to urban
                              development and infrastructure.
                            </p>
                            <span>
                              Urban Excellence Award <br /> Best Infrastructure
                              Project
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="roadmap-item">
                          <h4 className="title">2018</h4>
                          <div className="roadmap-content">
                            <span className="dot" />
                            <p>
                              Celebrated for our innovative architectural
                              designs and customer satisfaction.
                            </p>
                            <span>
                              Architectural Innovation Award <br /> Customer
                              Choice
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="roadmap-item">
                          <h4 className="title">2020</h4>
                          <div className="roadmap-content">
                            <span className="dot" />
                            <p>
                              Honored for our commitment to delivering
                              high-quality residential projects on time.
                            </p>
                            <span>
                              Timely Delivery Award <br /> Quality Residential
                              Projects
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="roadmap-item">
                          <h4 className="title">2021</h4>
                          <div className="roadmap-content">
                            <span className="dot" />
                            <p>
                              Recognized for our innovative use of technology in
                              construction and design.
                            </p>
                            <span>
                              Tech Innovation Award <br /> Construction & Design
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="roadmap-item">
                          <h4 className="title">2022</h4>
                          <div className="roadmap-content">
                            <span className="dot" />
                            <p>
                              Awarded for our exceptional service in real estate
                              management and customer relations.
                            </p>
                            <span>
                              Real Estate Excellence Award <br /> Customer
                              Service
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="h1n swiper-button-next">
                      <i className="fas fa-long-arrow-alt-right" />
                    </div>
                    <div className="h1p swiper-button-prev">
                      <i className="fas fa-long-arrow-alt-left" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* roadMap-area-end */}
        {/* team-area */}
        {/* <section className="team-area-two">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">Leadership</span>
                  <h2 className="title">Meet with our amazing team members</h2>
                </div>
              </div>
            </div>
            <div className="team-item-wrap">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img01.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Johan Johnson</Link>
                      </h3>
                      <span>Architect</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img02.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Jacob Jones</Link>
                      </h3>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img03.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Eleanor Pena</Link>
                      </h3>
                      <span>Head of Design</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img04.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Bessie Cooper</Link>
                      </h3>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img05.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Kim Smith</Link>
                      </h3>
                      <span>Marketer</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img06.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Courtney Henry</Link>
                      </h3>
                      <span>Account Manager</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img07.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Theresa Webb</Link>
                      </h3>
                      <span>Architect</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="team-details">
                        <img src="/assets/img/team/team_img08.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="team-details">Belva Boyd</Link>
                      </h3>
                      <span>Architect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-more-btn text-center mt-30">
              <Link href="team" className="btn transparent-btn">
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">View all members</div>
                    <div className="btn_t2">View all members</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section> */}
        {/* team-area-end */}
        {/* newsletter-area */}
        <section className="newsletter-area newsletter-area-two section-py-140">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="newsletter-inner">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="newsletter-content">
                        <div className="section-title mb-50">
                          <span className="sub-title">Quick Inquiry</span>
                          <h2 className="title">
                            If you have any question? we are glad to consult you
                            as soon as possible
                          </h2>
                        </div>
                        <form action="#" className="newsletter-form">
                          <ul className="list-wrap">
                            <li>
                              <input
                                type="text"
                                placeholder="Your name"
                                required="required"
                              />
                            </li>
                            <li>
                              <input
                                type="text"
                                placeholder="Phone number"
                                required="required"
                              />
                            </li>
                            <li className="submit-btn">
                              <input type="submit" defaultValue="submit" />
                            </li>
                          </ul>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="checkbox"
                            />
                            <label htmlFor="checkbox">
                              I accept <span>Terms &amp Conditions</span> for
                              processing personal data
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* newsletter-area-end */}
      </Layout>
    </>
  );
}
