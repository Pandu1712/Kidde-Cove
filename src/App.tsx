import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingIcons from './components/FloatingIcons';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetails';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    // ✅ HANDLE SERVICE DETAIL PAGE
    if (currentPage.startsWith('services/')) {
      const serviceId = currentPage.split('/')[1];
      return <ServiceDetail serviceId={serviceId} />;
    }

    // ✅ NORMAL PAGES
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingIcons />
      <Navbar currentPage={currentPage} />

      <main>
        {renderPage()}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
