import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Layout>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Contact Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* contact-info */}
        <section className="contact-info pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Main office</span>
                  <h2 className="title">
                    123 Shivjal Street, Pune, MH 411001, India
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:info@shivjalgroup.com">
                        info@shivjalgroup.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+919876543210">+91 98765 43210</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Branch office</span>
                  <h2 className="title">
                    456 Shivjal Lane, Mumbai, MH 400001, India
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:contact@shivjalgroup.com">
                        contact@shivjalgroup.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+912345678910">+91 23456 78910</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Regional office</span>
                  <h2 className="title">
                    789 Shivjal Road, Nagpur, MH 440001, India
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:support@shivjalgroup.com">
                        support@shivjalgroup.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+911234567890">+91 12345 67890</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-info-end */}
        {/* contact-map */}
        <div className="map-area">
          <div className="container">
            <div id="contact-map">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1vxU2so3y19U7ISFmK4slcvAVOlPr_5I&ehbc=2E312F&ll=17.987010364528192%2C75.35577602851919&z=10"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* contact-map-end */}
        {/* contact-form-area */}
        <section className="contact-form-area pt-140 pb-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">Leave a message</span>
                  <h2 className="title">Let’s make something new together</h2>
                </div>
                <div className="contact-form-wrap">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            placeholder="Your name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            placeholder="Phone number"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="message"
                        placeholder="Write message"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
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
                    <div className="form-submit">
                      <input type="submit" defaultValue="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-form-area-end */}
      </Layout>
    </>
  );
}
