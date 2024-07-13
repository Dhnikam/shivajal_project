export default function Testimonial() {
  return (
    <>
      <section className="testimonial-area section-py-140">
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
                  <img src="/user.png" alt="Testimonial Avatar 1" />
                  <div className="icon">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div
                  className="testimonial-content wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <p>
                    “SBIL's nursery services are exceptional. Their plants are
                    always healthy, and the staff is incredibly knowledgeable.
                    It's no wonder they've been a leader in this sector for so
                    many years.”
                  </p>
                  <span>
                    Rohan Deshmukh <br /> Pune, Maharashtra
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-thumb">
                  <img src="/user.png" alt="Testimonial Avatar 2" />
                  <div className="icon">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div
                  className="testimonial-content wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  <p>
                    “The affordable housing projects by Shivjal Infra have made
                    a huge difference in our community. The quality and design
                    are top-notch, and the affordability is a game-changer for
                    many families.”
                  </p>
                  <span>
                    Nehal Sharma <br /> Nagpur, Maharashtra
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-thumb">
                  <img src="/user.png" alt="Testimonial Avatar 3" />
                  <div className="icon">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div
                  className="testimonial-content wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <p>
                    “I’ve been using SBIL's alkaline water for over a year now.
                    The benefits are remarkable – from better digestion to
                    improved skin health. I can't imagine going back to regular
                    water.”
                  </p>
                  <span>
                    Savita Kulkarni <br /> Mumbai, Maharashtra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
