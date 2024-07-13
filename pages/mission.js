import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Mission() {
  return (
    <>
      <Layout headerStyle={6}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Our Mission</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Mission
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}

        {/* mission-area */}
        <section className="mission-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mission-img">
                  <img
                    src="/assets/img/images/mission_img.jpg"
                    alt="Mission Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-content">
                  <div className="section-title mb-40">
                    <span className="sub-title">Our Mission</span>
                    <h2 className="title">
                      To be the most trusted name in real estate globally
                    </h2>
                  </div>
                  <p>
                    At Shivjal Group, we are dedicated to building high-quality,
                    sustainable developments that enhance communities and
                    deliver exceptional value. Our mission is to set new
                    standards in real estate by prioritizing customer
                    satisfaction, innovation, and environmental stewardship.
                  </p>
                  <Link href="/mission" className="btn transparent-btn">
                    <div className="btn_m">
                      <div className="btn_c">
                        <div className="btn_t1">Learn more</div>
                        <div className="btn_t2">Learn more</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* mission-area-end */}

        {/* vision-area */}
        <section className="vision-area section-pt-140 section-pb-140">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="vision-img text-center">
                  <img
                    src="/assets/img/images/vision_img.jpg"
                    alt="Vision Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vision-content">
                  <div className="section-title mb-35">
                    <span className="sub-title">Our Vision</span>
                    <h2 className="title">
                      We believe that we are enablers of people's dreams
                    </h2>
                  </div>
                  <p>
                    Shivjal Group envisions a world where everyone has access to
                    high-quality, affordable housing. We strive to create
                    innovative real estate solutions that support vibrant,
                    inclusive communities and contribute to a sustainable
                    future.
                  </p>
                  <img src="/assets/img/images/sine.png" alt="Signature" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* vision-area-end */}

        {/* services-area */}
        <section className="services-area services-style-three section-pt-140 section-pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">What we do</span>
                  <h2 className="title">
                    Creating a great tomorrow for everyone
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img
                        src="/assets/img/images/services_01.png"
                        alt="Residential Development"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Residential Development</Link>
                    </h2>
                    <p>
                      Our residential projects are designed to provide
                      comfortable, modern living spaces that cater to the needs
                      of diverse communities. We focus on quality construction,
                      innovative design, and sustainability.
                    </p>
                    <Link href="#" className="text-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img
                        src="/assets/img/images/services_02.png"
                        alt="Commercial Development"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Commercial Development</Link>
                    </h2>
                    <p>
                      We develop commercial spaces that foster business growth
                      and innovation. Our projects are strategically located and
                      designed to meet the evolving needs of businesses and
                      their customers.
                    </p>
                    <Link href="#" className="text-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img
                        src="/assets/img/images/services_03.png"
                        alt="Industrial Development"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Industrial Development</Link>
                    </h2>
                    <p>
                      Our industrial developments are designed to support a wide
                      range of industries, providing state-of-the-art facilities
                      that enhance productivity and efficiency.
                    </p>
                    <Link href="#" className="text-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services-area-end */}

        {/* testimonial-area */}
        <section className="testimonial-area section-pt-140 section-pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Testimonials</span>
                  <h2 className="title">
                    Trusted by thousands of our happy customers
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="testimonial-item">
                  <div className="testimonial-thumb">
                    <img
                      src="/assets/img/images/testimonial_avatar01.png"
                      alt="Testimonial Avatar"
                    />
                    <div className="icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “Shivjal Group transformed our vision into reality with
                      their exceptional real estate solutions. Their
                      professionalism and dedication are truly commendable.”
                    </p>
                    <span>
                      Jeffrey Kreshek <br /> New York
                    </span>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-thumb">
                    <img
                      src="/assets/img/images/testimonial_avatar02.png"
                      alt="Testimonial Avatar"
                    />
                    <div className="icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “Working with Shivjal Group has been a pleasure. Their
                      commitment to quality and customer satisfaction is
                      unparalleled in the industry.”
                    </p>
                    <span>
                      Mike Stevenson <br /> Florida
                    </span>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-thumb">
                    <img
                      src="/assets/img/images/testimonial_avatar03.png"
                      alt="Testimonial Avatar"
                    />
                    <div className="icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “Shivjal Group’s innovative approach to real estate has
                      exceeded our expectations. They are truly leaders in the
                      industry.”
                    </p>
                    <span>
                      Merrin Dardenne <br /> Charlotte
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-area-end */}

        {/* newsletter-area */}
        <section className="newsletter-area newsletter-area-two section-pb-140">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="newsletter-inner">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="newsletter-content">
                        <div className="section-title mb-50">
                          <span className="sub-title">Newsletter</span>
                          <h2 className="title">Subscribe to our newsletter</h2>
                          <p>
                            Stay updated with the latest news and developments
                            from Shivjal Group by subscribing to our newsletter.
                          </p>
                        </div>
                        <div className="newsletter-form">
                          <form action="#">
                            <input
                              type="email"
                              placeholder="Enter your email"
                            />
                            <button className="btn">Subscribe</button>
                          </form>
                        </div>
                        <div className="newsletter-checked">
                          <input type="checkbox" id="nt-2" />
                          <label htmlFor="nt-2">
                            I agree to the{" "}
                            <Link href="#">Terms & Conditions</Link>
                          </label>
                        </div>
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
