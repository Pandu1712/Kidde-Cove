import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919666086096';
  const message =
    'Hello Kiddie-Cove! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-green-600 transform hover:scale-105 transition-all duration-300 animate-bounce-slow group"
    >
      <MessageCircle
        size={24}
        className="group-hover:rotate-12 transition-transform"
      />

      <span className="text-sm font-semibold whitespace-nowrap">
        WhatsApp Us!
      </span>

      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full animate-pulse">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
