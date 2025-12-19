import { Target, Eye, Heart, Award, Users, BookOpen, Star, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Care',
      description: 'Every child receives individual attention and care in a nurturing environment',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in early childhood education',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong relationships with families and the community',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Using creative and modern teaching methods for better learning',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Director & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Davis',
      role: 'Lead Teacher',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Brown',
      role: 'Child Psychologist',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jessica Wilson',
      role: 'Music & Arts Teacher',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="pt-24 pb-20 -mt-14">
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Kiddie-Cove</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, we've been dedicated to providing exceptional early childhood education and care, helping young minds grow and flourish in a safe, loving environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Children learning together"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-pink-500 p-6 rounded-2xl shadow-xl text-white">
                  <div className="text-4xl font-bold mb-1">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Kiddie-Cove was founded with a simple yet powerful vision: to create a place where children feel loved, safe, and excited to learn every single day.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a small preschool has grown into a comprehensive child development center, serving hundreds of families and building a reputation for excellence in early childhood education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines proven educational methods with innovative teaching techniques, ensuring that each child receives personalized attention and develops at their own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-lg animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a nurturing, stimulating environment where children develop intellectually, socially, emotionally, and physically. We are committed to fostering a love of learning that lasts a lifetime.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected child development center, recognized for our dedication to excellence, innovation in early education, and our commitment to each child's unique journey.
              </p>
            </div>
          </div>

          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Core <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Meet Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals passionate about early childhood education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fadeInUp">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Accredited</h3>
              <p className="text-gray-600">
                Fully licensed and accredited by national early education standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Certified Teachers</h3>
              <p className="text-gray-600">
                All our educators hold advanced degrees in early childhood education
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <Heart className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                State-of-the-art security systems and comprehensive safety protocols
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
