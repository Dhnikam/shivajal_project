import Link from "next/link";

export default function About() {
  return (
    <>
      <section id="about" className="about-area section-pt-135 section-pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-35">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                The Shivjal Group: Rooted in Growth, Reaching for Impact
                </h2>
              </div>
              <div className="about-content text-center">
                <p>
                The Shivjal Group, formerly known as VNS Group, is a dynamic private limited company with a diverse portfolio spanning multiple industries. Our journey began with a focus on nurseries, and we've grown significantly, currently operating five large nurseries under two subsidiary companies.
                 Expanding their horizons, SBIL ventured into the real estate
                  sector through their subsidiary company, Shivjal Infra Private
                  Limited. Here, they are dedicated to rural upliftment by
                  developing essential infrastructure, including both
                  residential and commercial properties. Their commitment to
                  affordability is evident in their construction of affordable
                  housing and expansive commercial malls, characterized by
                  innovative designs and awe-inspiring architecture.
               Expanding Horizons: Building Rural Dreams
Driven by a vision to empower communities, the Shivjal Group ventured into the real estate sector through its subsidiary, Shivjal Infra Private Limited. Here, rural development is at the heart of our mission. We develop essential infrastructure, including both residential and commercial properties, to create vibrant and thriving rural communities. Shivjal Infra is committed to making quality living accessible. We construct affordable housing solutions that prioritize functionality and comfort. Our expansive commercial malls, characterized by innovative design, become centers of commerce and community life.
                </p>
                <p>
                Beyond Bricks and Mortar: Pioneering 100% Alkaline Water
                The Shivjal Group's influence extends beyond real estate. We're pioneers in the business of 100% alkaline water, recognizing its potential health and skincare benefits . The Shivjal Group is driven by a vision of holistic growth and societal betterment. We continuously seek new avenues to create a positive impact in the communities we serve. Our commitment goes beyond building structures; it's about building a legacy of positive change 
                </p>
                <Link href="overview" className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">more about</div>
                      <div className="btn_t2">more about</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
