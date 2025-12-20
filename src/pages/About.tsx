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
A place where care meets purpose, and every child is supported with patience and understanding.
Nurturing growth, confidence, and hope—one step at a time.
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
                
              </div>
            </div>
            <div className="animate-fadeInRight bg-white/70 backdrop-blur rounded-3xl shadow-xl p-8 lg:p-12">

  {/* ================= HEADING ================= */}
  <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8 leading-snug">
    About Kiddie Cove – 
    <span className="block text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
      Care That Makes a Difference
    </span>
  </h2>

  {/* ================= PARAGRAPH 1 ================= */}
  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
    At Kiddie Cove, every child is welcomed with understanding, patience, and care. We know that behind every concern is a parent hoping for reassurance, progress, and a brighter tomorrow for their child. That is why we are deeply committed to walking this journey together — with compassion, respect, and purpose.
  </p>

  {/* ================= PARAGRAPH 2 ================= */}
  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
    Our centre is a place where children feel safe to explore, express, and grow. We believe true development begins when a child feels seen and supported. Through carefully designed therapies and meaningful interactions, we help children build essential life skills while nurturing confidence, independence, and emotional well-being.
  </p>

  {/* ================= PARAGRAPH 3 ================= */}
  <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-orange-400 pl-6">
    We partner closely with families, listening to their concerns, celebrating their child’s achievements, and offering guidance every step of the way. At Kiddie Cove, progress is measured not just in milestones reached, but in smiles gained, confidence built, and hope restored. We look beyond challenges and focus on strengths, possibilities, and progress, helping each child move toward a brighter, more confident future.
  </p>

</div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
  <div className="container mx-auto px-4">

    {/* ================= HEADING ================= */}
    <div className="text-center mb-16 animate-fadeInUp">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        Why Families <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Trust Kiddie Cove</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Built on compassion, collaboration, and a commitment to meaningful progress.
      </p>
    </div>

    {/* ================= TRUST BOXES ================= */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Box 1 */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all animate-fadeInUp">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Understanding First
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Families place their trust in Kiddie Cove because we believe that meaningful progress begins with understanding and compassion. We take the time to listen, to observe, and to truly know each child beyond assessments and milestones.
        </p>
      </div>

      {/* Box 2 */}
      <div
        className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all animate-fadeInUp"
        style={{ animationDelay: "100ms" }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Transparent Partnership
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our approach is collaborative and transparent. Parents are kept informed, involved, and supported throughout their child’s journey. Every therapy plan is thoughtfully designed, regularly reviewed, and guided by the child’s individual needs and strengths.
        </p>
      </div>

      {/* Box 3 */}
      <div
        className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all animate-fadeInUp"
        style={{ animationDelay: "200ms" }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Care You Can Rely On
        </h3>
        <p className="text-gray-600 leading-relaxed">
          With a skilled multidisciplinary team, evidence-based practices, and a nurturing environment, Kiddie Cove offers care that is consistent, ethical, and focused on long-term growth. Trust grows when families feel heard, children feel safe, and progress feels purposeful — that is the foundation of everything we do.
        </p>
      </div>

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
