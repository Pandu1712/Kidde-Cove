import { ArrowRight, Users, Award, Heart, Sparkles, BookOpen, Palette, Music, Contact } from 'lucide-react';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Blog from './Blog';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed for holistic child development',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      title: 'Experienced Teachers',
      description: 'Certified educators passionate about nurturing young minds',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Palette,
      title: 'Creative Activities',
      description: 'Art, music, and hands-on learning experiences',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Heart,
      title: 'Safe Environment',
      description: 'Secure, clean, and child-friendly facilities',
      color: 'from-red-400 to-red-600',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Children' },
    { number: '50+', label: 'Expert Teachers' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Parent Satisfaction' },
  ];

  const programs = [
    {
      title: 'Infant Care',
      age: '6 weeks - 18 months',
      image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Toddler Program',
      age: '18 months - 3 years',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Preschool',
      age: '3 - 5 years',
      image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 ">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
                <Sparkles className="text-yellow-500" size={20} />
                <span className="text-sm font-medium text-gray-700">Welcome to Kiddie-Cove</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Where Little
                <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  Dreams Grow
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nurturing young minds with love, care, and quality education. Creating a foundation for lifelong learning and success.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="font-semibold">Enroll Now</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="#about"
                  className="flex items-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gray-200"
                >
                  <span className="font-semibold">Learn More</span>
                </a>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Happy children learning"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gray-800">15+</p>
                      <p className="text-sm text-gray-600">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Kiddie-Cove</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where children thrive and develop essential life skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Gallery/>
      <Blog/>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate programs designed to meet the developmental needs of every child
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{program.age}</p>
                  <a
                    href="#services"
                    className="inline-flex items-center space-x-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <Music className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our loving community and give your child the best start in life
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="font-semibold text-lg">Schedule a Visit</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
