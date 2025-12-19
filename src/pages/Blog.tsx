import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: '10 Tips for Preparing Your Child for Preschool',
      excerpt: 'Starting preschool is a big milestone. Here are our top tips to help make the transition smooth and exciting for both you and your child.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Parenting Tips',
    },
    {
      title: 'The Importance of Play-Based Learning',
      excerpt: 'Discover how play-based learning helps children develop essential skills while having fun and staying engaged.',
      image: 'https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Davis',
      date: 'March 10, 2024',
      readTime: '4 min read',
      category: 'Education',
    },
    {
      title: 'Building Social Skills in Early Childhood',
      excerpt: 'Learn about the crucial social skills children develop during their early years and how we foster positive interactions.',
      image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Brown',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Child Development',
    },
    {
      title: 'Healthy Eating Habits for Young Children',
      excerpt: 'Nutrition plays a vital role in child development. Explore our approach to teaching healthy eating habits.',
      image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Jessica Wilson',
      date: 'February 28, 2024',
      readTime: '5 min read',
      category: 'Health & Nutrition',
    },
    {
      title: 'Creative Arts and Child Development',
      excerpt: 'Art activities do more than create beautiful projects. Learn how creative expression supports overall development.',
      image: 'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      readTime: '4 min read',
      category: 'Activities',
    },
    {
      title: 'Managing Separation Anxiety',
      excerpt: 'Practical strategies for helping children overcome separation anxiety and feel comfortable in new environments.',
      image: 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Brown',
      date: 'February 15, 2024',
      readTime: '7 min read',
      category: 'Parenting Tips',
    },
  ];

  return (
    <div className="pt-24 pb-20 -mt-14">
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, tips, and resources for parents and educators
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fadeInUp">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-10 text-white flex flex-col justify-center">
                    <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                      Featured Post
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-yellow-200 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <User size={16} />
                          <span>{blogPosts[0].author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{blogPosts[0].date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-white font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                      <span>Read More</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-3xl shadow-2xl animate-fadeInUp text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest tips, resources, and updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Blog;
