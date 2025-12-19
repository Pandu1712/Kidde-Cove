import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from "../public/Kidde-Cove-Logo.jpg"
interface NavbarProps {
  currentPage: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
  href="/"
  className="flex items-center space-x-3 group"
>
 {/* LOGO */}
<div className="h-16 flex items-center">
  <img
    src={logo}
    alt="Kiddie-Cove Logo"
    className="h-full w-auto object-contain"
  />
</div>


  {/* BRAND TEXT */}
  {/* <div className="flex flex-col leading-tight">
    <span className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
      Kiddie-Cove
    </span>
    <span className="text-xs text-gray-600">
      Child Development Center
    </span>
  </div> */}
</a>


          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  currentPage === link.href.slice(1)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                    currentPage === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
            <a
              href="tel:9666086096"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={18} />
              <span className="font-medium">Call Us</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    currentPage === link.href.slice(1)
                      ? 'bg-orange-100 text-orange-500'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:9666086096"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Phone size={18} />
                <span className="font-medium">Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
