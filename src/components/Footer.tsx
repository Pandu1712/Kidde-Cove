import { MapPin, Phone, Mail, Facebook, Instagram, Twitter,Linkedin,Youtube, Clock } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">KC</span>
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Kiddie-Cove
                </h3>
                <p className="text-xs text-gray-600">Child Development Center</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Nurturing young minds with love, care, and quality education. Building bright futures, one child at a time.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1DoiVNXbqf/ "
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/kiddiecovecdc?igsh=bzB3dWg5MXVkbTFz"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/kiddiecovecdc"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/kiddiecove-cdc-0270553a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Linkedin size={18} />
              </a>


              <a
                href="https://youtube.com/@kiddiecovecdc?si=GQwpxqe9jymjYBxo"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <Phone size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <a href="tel:9666086096" className="hover:text-orange-500 transition-colors">
                  +91 9666086096
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <Mail size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:Kiddiecovecdc2025@gmail.com" className="hover:text-orange-500 transition-colors break-all">
                  Kiddiecovecdc2025@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span>Your Location Here, City, State</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Clock size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Saturday</p>
                  <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <Clock size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Kiddie-Cove Child Development Center. All rights reserved. Designed with{' '}
            <span className="text-red-500">❤</span> for kids.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
