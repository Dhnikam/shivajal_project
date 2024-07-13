import ViodePopup from "@/components/elements/ViodePopup";
import Layout from "@/components/layout/Layout";
import Features from "@/components/sections/Features";
import Link from "next/link";
export default function Service() {
  return (
    <>
      <Layout headerStyle={6}>
        <Features />
        {/* features-area-end */}
        {/* video-area */}
        <div className="video-area-three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-bg">
                  <ViodePopup />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* video-area-end */}
        {/* services-area */}
        <section className="services-area section-pt-140 section-pb-100">
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
                      <img src="/assets/img/images/services_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Residential Development</Link>
                    </h2>
                    <p>
                      Magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet sed quia
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
                      <img src="/assets/img/images/services_02.png" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Commercial Development</Link>
                    </h2>
                    <p>
                      Magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet sed quia
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
                      <img src="/assets/img/images/services_03.png" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Industrial Development</Link>
                    </h2>
                    <p>
                      Magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet sed quia
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
