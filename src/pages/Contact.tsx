import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const whatsappNumber = '919666086096';
    const message = `*New Inquiry from Kiddie-Cove Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Child Age:* ${formData.childAge || 'Not specified'}%0A*Message:* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9666 086 096',
      link: 'tel:9666086096',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Kiddiecovecdc2025@gmail.com',
      link: 'mailto:Kiddiecovecdc2025@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Road No.2/9,H No.938,First Floor,Opp GV Residence,Mathrusree Nagar,Miyapur,Hyderbad,Telangana,500049',
      link: '#',
    },
  ];

  return (
    <div className="pt-24 pb-20 -mt-14">
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Get in <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you! Reach out to learn more about our programs or schedule a visit
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 break-all">{info.details}</p>
              </a>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="animate-fadeInLeft">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out the form and we'll get back to you as soon as possible. Your message will be sent directly to us via WhatsApp.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                  <div className="flex items-start space-x-3 mb-6">
                    <Clock className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Opening Hours</h4>
                      <p className="text-gray-600 text-sm mb-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600 text-sm mb-1">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fadeInRight">
                {isSubmitted && (
                  <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 mb-6 animate-fadeIn">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500" size={28} />
                      <div>
                        <h4 className="font-bold text-green-800">Message Sent!</h4>
                        <p className="text-green-700 text-sm">We'll get back to you soon via WhatsApp.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:outline-none transition-colors`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:outline-none transition-colors`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:outline-none transition-colors`}
                      placeholder="10-digit phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">
                      Child's Age (Optional)
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select age range</option>
                      <option value="1 Years - 3 Years">1 Year - 3 Years</option>
                      <option value="3 years-6 Years">3 years-6 Years</option>
                      <option value="6 years-12 Years">6 years-12 Years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.message ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:outline-none transition-colors resize-none`}
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
                  >
                    <Send size={20} />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto text-center animate-fadeInUp">

      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
        Visit Our Center
      </h2>

      {/* Sub text */}
      <p className="text-lg lg:text-xl text-gray-600 mb-10">
        Schedule a personal tour and experience our nurturing environment in person.
      </p>

      {/* Map Card */}
     <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">

  {/* Map Container */}
  <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[450px]">

    {/* Google Map Iframe */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3443.6333093654966!2d78.3684795!3d17.491339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930061477d89%3A0x7d4f2efc95f168a3!2sKiddie%20Cove%20Child%20Development%20Center!5e1!3m2!1sen!2sin!4v1766241677852!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      title="Kiddie Cove Child Development Center Location"
    />

    {/* CLICK OVERLAY */}
    <a
      href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3443.6333093654966!2d78.3684795!3d17.491339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930061477d89%3A0x7d4f2efc95f168a3!2sKiddie%20Cove%20Child%20Development%20Center!5e1!3m2!1sen!2sin!4v1766405925091!5m2!1sen!2sin"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10 cursor-pointer"
      aria-label="Open location in Google Maps"
    />
  </div>

  {/* Optional Footer CTA */}
  <div className="p-4 text-center bg-gray-50">
    <a
      href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3443.6333093654966!2d78.3684795!3d17.491339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930061477d89%3A0x7d4f2efc95f168a3!2sKiddie%20Cove%20Child%20Development%20Center!5e1!3m2!1sen!2sin!4v1766405925091!5m2!1sen!2sin"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-indigo-600 font-semibold hover:underline"
    >
      📍 View on Google Maps
    </a>
  </div>
</div>

      {/* Optional Address */}
      <p className="mt-6 text-gray-700 text-base">
        📍 Kiddie Cove Child Development Center, Hyderabad
      </p>

    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;
