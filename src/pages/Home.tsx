import { ArrowRight, Users, Award, Heart, Sparkles, BookOpen, Palette, Music, Contact } from 'lucide-react';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Blog from './Blog';
import Contacts from './Contact';
const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Creative Activities',
      description: ' Creative activities nurturing autistic childrens growth',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      title: 'Quality Therapy',
      description: 'Delivering quality therapy with compassionate care',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Palette,
      title: 'Experienced Therapist',
      description: 'Guided by qualified, experienced therapists',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Heart,
      title: 'Safe Environment',
      description: 'A safe and welcoming environment for children',
      color: 'from-red-400 to-red-600',
    },
  ];


  return (
    <div className="relative mt-28">
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* ================= BACKGROUND IMAGE ================= */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.54.58_2423afc8_orbayg.jpg)",
    }}
  />

  {/* ================= OVERLAY ================= */}
  <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white animate-fadeInUp">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
      <Sparkles size={16} className="text-yellow-400" />
      <span className="text-sm font-medium tracking-wide">
        Welcome to Kiddie-Cove
      </span>
    </div>

    {/* Heading */}
    <h1
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
      className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-snug tracking-wide mb-6"
    >
      Behind every milestone is guidance, trust,
      <br className="hidden sm:block" />
      and belief in a child’s potential.
    </h1>

    {/* Subtext */}
    <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
      We nurture young minds through compassionate care and structured learning,
      building confidence, communication, and curiosity for lifelong success.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all"
      >
        Get Assessed Today
        <ArrowRight size={20} />
      </a>

      <a
        href="#about"
        className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all"
      >
        Learn More
      </a>
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
        <p className="text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed">
          పిల్లల బలహీనులు కారు, ఉపాద్యాయుడు నిజమైన ప్రేరేపకుడు 

        </p>
         <p className="text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed">
          అవకాశం ఉన్న చోట అభివృద్ధి సావధానంగా ఎదురుచూస్తుంది
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

      {/* <section className="py-20 bg-white">
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
      </section> */}

      <section
  className="relative py-24 bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center animate-fadeInUp text-white">

      {/* Icon */}
     

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
        Concerned about your child’s development?
      </h2>

      {/* Sub text */}
      <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
        Enhance speech, behaviour, motor, and social skills with professional care
        and compassionate support.
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        Schedule a Visit Today
        <ArrowRight size={20} />
      </a>
    </div>
  </div>
</section>
<Contacts/>

    </div>
  );
};

export default Home;
