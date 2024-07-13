import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="services-area section-pt-140 section-pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title">Our Services</span>
                <h2 className="title">Building a Better Future for All</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <div className="services-thumb flex justify-center">
                  <Link href="#">
                    <img
                      src="/assets/img/images/services_01.png"
                      alt="Residential Development"
                    />
                  </Link>
                </div>
                <div className="services-content">
                  <h2 className="title">
                    <Link href="#">Residential Projects</Link>
                  </h2>
                  <p>
                    Shivjal Group excels in creating modern, sustainable, and
                    luxurious residential spaces that offer comfort and
                    convenience to families.
                  </p>
                  <Link href="#" className="text-btn">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <div className="services-thumb flex justify-center">
                  <Link href="#">
                    <img
                      src="/assets/img/images/services_02.png"
                      alt="Commercial Development"
                    />
                  </Link>
                </div>
                <div className="services-content">
                  <h2 className="title">
                    <Link href="#">Commercial Projects</Link>
                  </h2>
                  <p>
                    Our commercial projects are designed to meet the needs of
                    modern businesses, providing state-of-the-art facilities and
                    strategic locations.
                  </p>
                  <Link href="#" className="text-btn">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <div className="services-thumb text-center flex justify-center">
                  <Link href="#">
                    <img
                      src="/assets/img/images/services_03.png"
                      alt="Industrial Development"
                    />
                  </Link>
                </div>
                <div class="services-content">
                  <h2 class="title">
                    <Link href="#">Industrial Projects</Link>
                  </h2>
                  <p>
                    We specialize in developing efficient and sustainable
                    industrial spaces that cater to various sectors, ensuring
                    optimal productivity and growth.
                  </p>
                  <Link href="#" class="text-btn">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
