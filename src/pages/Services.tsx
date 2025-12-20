import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50 mt-14">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
  <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
    Our{" "}
    <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
      Services
    </span>
  </h1>
</div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map(service => (
            <div
              key={service.id}
              onClick={() => {
                // ✅ HASH NAVIGATION (NO REACT ROUTER)
                window.location.hash = `services/${service.id}`;
              }}
              className="bg-white rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              {/* <img
                src={service.images[0]}
                alt={service.title}
                className="h-48 w-full object-cover rounded-t-3xl"
              /> */}

              <div className="p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="
  mt-3
  text-sm sm:text-base lg:text-lg
  text-gray-600
  leading-relaxed
  max-w-full sm:max-w-xl lg:max-w-3xl
  mx-auto
  line-clamp-3 sm:line-clamp-none
">
  {service.description}
</p>

<p className="inline-block mt-2 px-4 py-1 text-sm font-semibold text-white bg-sky-600 rounded-full cursor-pointer hover:bg-sky-700 transition">
  Learn more
</p>


              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
