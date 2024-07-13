import Link from "next/link";

export default function Mission() {
  return (
    <section className="mission-area section-pb-140">
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
                At Shivjal Group, we are dedicated to transforming the real
                estate landscape with our innovative and customer-centric
                approach. Our mission is to set new benchmarks in the industry
                by delivering exceptional projects that provide unmatched value
                and satisfaction to our clients. We strive to create sustainable
                and thriving communities that enhance the quality of life for
                everyone.
              </p>
              <Link href="/mission">
                <a className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">Learn more</div>
                      <div className="btn_t2">Learn more</div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
