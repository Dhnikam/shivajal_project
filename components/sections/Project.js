import Link from "next/link";

export default function Project() {
  const projects = [
    {
      title: "Ankur City",
      location: "Pune",
      imageUrl: "/assets/projects/VNS VNS TAWARE CITY_page-0002.jpg",
      link: "project-details",
    },
    {
      title: "Jaguar Mall",
      location: "Saswad",
      imageUrl: "/assets/projects/VNS TAWARE CITY_page-0002.jpg",
      link: "project-details",
    },
    {
      title: "Shivjal City",
      location: "Naikbomwadi, Phaltan",
      imageUrl: "/assets/projects/VNS TAWARE CITY_page-0003.jpg",
      link: "project-details",
    },
    {
      title: "VNS Taware City",
      location: "Nagewadi, Wai",
      imageUrl: "/assets/projects/VNS TAWARE CITY_page-0004.jpg",
      link: "project-details",
    },
  ];

  return (
    <>
      <section className="project-area py-8 md:py-8 lg:py-8">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 text-center mb-10 py-16">
              <div className="section-title">
                <span className="text-lg   mb-2 block">Featured projects</span>
                <h2 className="text-3xl md:text-4xl  leading-tight text-wrap">
                  Discover our Underconstruction and complete projects
                </h2>
              </div>
            </div>
          </div>
          <div className="project-item-wrap">
            <div className="row">
              {projects.map((project, index) => (
                <div className="col-lg-6 col-md-6" key={index}>
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link href={project.link}>
                        <img src={project.imageUrl} alt={project.title} />
                      </Link>
                    </div>
                    {/* <div className="project-content">
                      <h3 className="title">
                        <Link href={project.link}>{project.title}</Link>
                      </h3>
                      <span>{project.location}</span>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-btn text-center">
              <Link href="project" className="btn transparent-btn">
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">Explore all</div>
                    <div className="btn_t2">Explore all</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
