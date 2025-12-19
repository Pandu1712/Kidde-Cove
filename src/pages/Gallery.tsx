import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { name: 'All', filter: 'all' },
    { name: 'Classrooms', filter: 'classroom' },
    { name: 'Activities', filter: 'activity' },
    { name: 'Events', filter: 'event' },
    { name: 'Outdoor', filter: 'outdoor' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'classroom',
      title: 'Bright Learning Spaces',
    },
    {
      url: 'https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'activity',
      title: 'Creative Time',
    },
    {
      url: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'activity',
      title: 'Arts & Crafts',
    },
    {
      url: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'classroom',
      title: 'Circle Time',
    },
    {
      url: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'activity',
      title: 'Early Learning',
    },
    {
      url: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'outdoor',
      title: 'Outdoor Play',
    },
    {
      url: 'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'event',
      title: 'Special Events',
    },
    {
      url: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'activity',
      title: 'Group Activities',
    },
    {
      url: 'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'outdoor',
      title: 'Garden Time',
    },
    {
      url: 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'classroom',
      title: 'Reading Corner',
    },
    {
      url: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'activity',
      title: 'Music Time',
    },
    {
      url: 'https://images.pexels.com/photos/8613088/pexels-photo-8613088.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'event',
      title: 'Celebrations',
    },
  ];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-24 pb-20 -mt-14">
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take a peek into our vibrant learning environment and happy moments
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
            {categories.map((category) => (
              <button
                key={category.filter}
                onClick={() => setActiveCategory(category.filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.filter
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

     {/*  <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-3xl shadow-2xl animate-fadeInUp text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Want to See More?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a personal tour and experience our amazing facility in person
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Book a Tour
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Gallery;
