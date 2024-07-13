import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="services-area py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Building a Better Future for All
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className=" overflow-hidden">
                <div className="relative">
                  <Link href="#">
                    <img
                      src="/assets/img/images/services_01.png"
                      alt="Residential Development"
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    <Link href="#">Residential Projects</Link>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Shivjal Group excels in creating modern, sustainable, and
                    luxurious residential spaces that offer comfort and
                    convenience to families.
                  </p>
                  <Link href="#" className="text-blue-500 mt-4 inline-block">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className=" overflow-hidden">
                <div className="relative">
                  <Link href="#">
                    <img
                      src="/assets/img/images/services_02.png"
                      alt="Commercial Development"
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    <Link href="#">Commercial Projects</Link>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our commercial projects are designed to meet the needs of
                    modern businesses, providing state-of-the-art facilities and
                    strategic locations.
                  </p>
                  <Link href="#" className="text-blue-500 mt-4 inline-block">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className=" overflow-hidden">
                <div className="relative">
                  <Link href="#">
                    <img
                      src="/assets/img/images/services_03.png"
                      alt="Industrial Development"
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    <Link href="#">Industrial Projects</Link>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We specialize in developing efficient and sustainable
                    industrial spaces that cater to various sectors, ensuring
                    optimal productivity and growth.
                  </p>
                  <Link href="#" className="text-blue-500 mt-4 inline-block">
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
