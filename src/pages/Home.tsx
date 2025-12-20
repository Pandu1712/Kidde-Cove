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
    <div className="relative mt-10">
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <div className="space-y-6 animate-fadeInLeft">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
          <Sparkles size={16} className="text-orange-500" />
          <span className="text-sm font-medium text-gray-700">
            Welcome to Kiddie-Cove
          </span>
        </div>

        {/* Heading */}
      <h1
  style={{ fontFamily: "'Playfair Display', serif" }}
  className="text-xl lg:text-5xl font-semibold text-gray-900 leading-relaxed italic tracking-wide"
>
  “Behind every milestone is guidance, trust, and belief in a child’s potential.”
</h1>


        {/* Subtext */}
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
          We nurture young minds through compassionate care and structured learning,
          building confidence and curiosity for lifelong success.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Enroll Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-7 py-3 rounded-full font-semibold border border-gray-200 hover:shadow-md hover:scale-105 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="relative animate-fadeInRight">
        <img
          src="https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Happy children learning"
          className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
        />

        {/* Floating Card */}
        {/* <div className="absolute -bottom-5 -left-5 bg-white px-5 py-4 rounded-2xl shadow-lg animate-bounce-slow">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Award className="text-white" size={22} />
            </div>
            <div>
              <p className="font-bold text-xl text-gray-800">15+ Years</p>
              <p className="text-sm text-gray-600">of Excellence</p>
            </div>
          </div>
        </div>
 */}
      </div>

    </div>
  </div>
</section>
      <About/>
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
        <div className="mb-20 animate-fadeInUp">
  <div className="bg-white/70 backdrop-blur rounded-3xl shadow-lg p-8 lg:p-12 mt-14">

    {/* ===== Row 1 : Sanskrit + Telugu ===== */}
    <div className="grid md:grid-cols-2 gap-8 text-center mb-10">

      {/* Sanskrit */}
      <div className="px-4">
        <p className="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
          बालः न दुर्बलः, शिक्षकः साक्षात् प्रेरकः।
        </p>
         <p className="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
          अवसरः यत्र, विकासः स्वयम् प्रविशति॥
        </p>
      </div>

      {/* Telugu */}
      <div className="px-4">
        <p className="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
          పిల్లల భవిష్యత్తును కాదు, ఉపాధ్యాయుడు నిజమైన ప్రేరేపకుడు।
        </p>
         <p className="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
          అవకాశం ఉన్న చోట, అభివృద్ధి సహజంగా ఎదుగుతుంది।
        </p>
      </div>

    </div>

    {/* ===== Row 2 : English (Centered) ===== */}
    <div className="text-center max-w-3xl mx-auto border-t border-gray-200 pt-8">
      <p className="text-lg lg:text-xl text-black-600 italic leading-relaxed">
        “No child is weak; the teacher is the true enabler.
        Wherever opportunity exists, growth patiently awaits.”
      </p>
    </div>

  </div>
</div>
      <Services/>
     {/*  <Gallery/>
      <Blog/> */}

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
