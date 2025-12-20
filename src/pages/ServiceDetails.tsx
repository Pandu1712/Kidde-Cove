import { servicesData } from '../data/servicesData';

interface ServiceDetailProps {
  serviceId: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-20 text-center text-gray-600">
        Service not found
      </div>
    );
  }

  return (
    <section className="py-20 bg-white mt-14">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* BACK BUTTON */}
        <button
          onClick={() => (window.location.hash = 'services')}
          className="mb-8 text-orange-500 font-medium"
        >
          ← Back to Services
        </button>

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
            <service.icon className="text-white" size={36} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            {service.title}
          </h1>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {service.content}
        </div>

        {/* IMAGES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {service.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={service.title}
              className="rounded-2xl shadow-lg h-60 w-full object-cover"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceDetail;
