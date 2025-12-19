import { Sparkles, Heart, Star, Smile } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-20 left-10 animate-float text-yellow-400 opacity-30">
        <Star size={32} fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed text-pink-400 opacity-30">
        <Heart size={28} fill="currentColor" />
      </div>
      <div className="absolute top-60 left-1/4 animate-float-slow text-blue-400 opacity-30">
        <Sparkles size={30} fill="currentColor" />
      </div>
      <div className="absolute top-96 right-1/3 animate-float text-green-400 opacity-30">
        <Smile size={26} fill="currentColor" />
      </div>
      <div className="absolute bottom-60 left-1/3 animate-float-delayed text-orange-400 opacity-30">
        <Star size={24} fill="currentColor" />
      </div>
      <div className="absolute bottom-40 right-1/4 animate-float-slow text-purple-400 opacity-30">
        <Heart size={30} fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float text-red-400 opacity-30">
        <Sparkles size={28} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float-delayed text-teal-400 opacity-30">
        <Smile size={32} fill="currentColor" />
      </div>
    </div>
  );
};

export default FloatingIcons;
