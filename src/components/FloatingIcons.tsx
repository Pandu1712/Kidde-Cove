const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden text-3xl opacity-30">
      
      <div className="absolute top-20 left-10 animate-float">
        🗣️
      </div>

      <div className="absolute top-40 right-20 animate-float-delayed">
        🧠
      </div>

      <div className="absolute top-60 left-1/4 animate-float-slow">
        ✋
      </div>

      <div className="absolute top-96 right-1/3 animate-float">
        📘
      </div>

      <div className="absolute bottom-60 left-1/3 animate-float-delayed">
        🎒
      </div>

      <div className="absolute bottom-40 right-1/4 animate-float-slow">
        🌱
      </div>

      <div className="absolute top-1/3 right-10 animate-float">
        🏃
      </div>

      <div className="absolute bottom-20 left-20 animate-float-delayed">
        🤝
      </div>

    </div>
  );
};

export default FloatingIcons;
