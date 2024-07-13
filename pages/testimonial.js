import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Testimonial() {
  return (
    <>
      <Layout headerStyle={6}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Testimonials</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Testimonials
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}

        {/* testimonial-area */}
        <div className="testimonial-area section-pb-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="testimonial-item">
                  <div className="testimonial-thumb">
                    <img
                      src="/assets/img/images/testimonial_avatar01.png"
                      alt=""
                    />
                    <div className="icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “Shivjal Group's commitment to quality and customer
                      satisfaction is exceptional. They have exceeded our
                      expectations with their innovative real estate solutions.”
                    </p>
                    <span>
                      Aditya Deshmukh <br /> Pune, Maharashtra
                    </span>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-thumb">
                    <img
                      src="/assets/img/images/testimonial_avatar02.png"
                      alt=""
                    />
                    <div className="icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “We are impressed with Shivjal Group's dedication to
                      building sustainable communities. Their projects are
                      transforming the real estate landscape in Maharashtra.”
                    </p>
                    <span>
                      Kalyani Patil <br /> Mumbai, Maharashtra
                    </span>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-thumb">
                    <img
                      src="/assets/img/images/testimonial_avatar03.png"
                      alt=""
                    />
                    <div className="icon">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “Choosing Shivjal Group for our dream home was the best
                      decision. They deliver on their promises with integrity
                      and professionalism.”
                    </p>
                    <span>
                      Rahul Joshi <br /> Nashik, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                          <span className="sub-title">Quick Inquiry</span>
                          <h2 className="title">
                            Have a question? We're here to help!
                          </h2>
                        </div>
                        <form action="#" className="newsletter-form">
                          <ul className="list-wrap">
                            <li>
                              <input
                                type="text"
                                placeholder="Your name"
                                required
                              />
                            </li>
                            <li>
                              <input
                                type="text"
                                placeholder="Phone number"
                                required
                              />
                            </li>
                            <li className="submit-btn">
                              <input type="submit" value="Submit" />
                            </li>
                          </ul>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="checkbox"
                            />
                            <label htmlFor="checkbox">
                              I accept the <span>Terms & Conditions</span> for
                              processing personal data.
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
