import { Baby, Users, BookOpen, Palette, Music, Globe, Utensils, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const programs = [
    {
      icon: Baby,
      title: 'Infant Care',
      age: '6 weeks - 18 months',
      color: 'from-pink-400 to-pink-600',
      features: [
        'Individualized care plans',
        'Sensory exploration activities',
        'Language development',
        'Parent communication app',
      ],
      image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: 'Toddler Program',
      age: '18 months - 3 years',
      color: 'from-blue-400 to-blue-600',
      features: [
        'Early literacy skills',
        'Social interaction',
        'Motor skill development',
        'Potty training support',
      ],
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: BookOpen,
      title: 'Preschool',
      age: '3 - 5 years',
      color: 'from-green-400 to-green-600',
      features: [
        'Kindergarten preparation',
        'STEM activities',
        'Creative arts',
        'Social-emotional learning',
      ],
      image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const activities = [
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Creative expression through painting, drawing, and hands-on projects',
    },
    {
      icon: Music,
      title: 'Music & Movement',
      description: 'Rhythm, singing, and dance activities for physical and cognitive development',
    },
    {
      icon: Globe,
      title: 'Language Learning',
      description: 'Introduction to multiple languages and cultural awareness',
    },
    {
      icon: Utensils,
      title: 'Nutrition Program',
      description: 'Healthy, balanced meals and snacks prepared fresh daily',
    },
  ];

  const benefits = [
    'State-of-the-art facilities',
    'Low student-to-teacher ratio',
    'Flexible scheduling options',
    'Daily activity reports',
    'Secure video monitoring',
    'Outdoor playground',
    'Indoor climate-controlled spaces',
    'Regular parent-teacher meetings',
  ];

  return (
    <div className="pt-24 pb-20 -mt-14">
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive programs designed to nurture every aspect of your child's development
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fadeInUp ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                    />
                    <div className={`absolute -bottom-6 -right-6 bg-gradient-to-br ${program.color} p-6 rounded-2xl shadow-xl text-white`}>
                      <program.icon size={40} />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${program.color} rounded-2xl mb-4`}>
                    <program.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">{program.title}</h2>
                  <p className="text-orange-500 font-medium text-lg mb-6">{program.age}</p>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`inline-block bg-gradient-to-r ${program.color} text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium`}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Special <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enriching activities that make learning fun and engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <activity.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                What's <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Included</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything your child needs for a perfect day of learning and fun
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl animate-fadeInUp group hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/*  <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 lg:p-16 rounded-3xl shadow-2xl animate-fadeInUp text-center">
              <Clock className="w-16 h-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Schedule a Tour</h2>
              <p className="text-xl text-gray-600 mb-8">
                Visit our facility and see firsthand how we create a nurturing environment for your child
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Book Your Visit Today
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
