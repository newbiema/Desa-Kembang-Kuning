import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/section/HeroSection";
import ProfileSection from "./components/section/ProfilSection";
import PotensiSection from "./components/section/PotensiSection";
import GallerySection from "./components/section/GallerySection";
import MapSection from "./components/section/MapSection";
import Footer from "./components/layout/FooterSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faMountain } from '@fortawesome/free-solid-svg-icons';
import logoDesa from "./assets/img/logo.png";
import ScrollUpButton from './components/ui/ScrollUpButton';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
    
    // Handle hash-based scrolling on initial load
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    const timer = setTimeout(() => {
      setIsLoading(false);
      handleHashScroll();
      AOS.refresh();
    }, 1800);

    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 flex flex-col items-center justify-center z-50">
        <div className="text-center font-['Poppins'] animate-pulse">
          {/* Logo dengan animasi */}
          <div className="relative mb-8">
            <img 
              src={logoDesa} 
              alt="Logo Desa Kembang Kuning" 
              className="h-32 w-32 mx-auto mb-4 rounded-2xl shadow-lg border-4 border-yellow-200"
            />
            <div className="absolute -inset-4 bg-yellow-200/30 rounded-3xl blur-xl -z-10 animate-pulse"></div>
          </div>
          
          {/* Loading Spinner */}
          <div className="relative mb-6">
            <FontAwesomeIcon 
              icon={faSpinner} 
              className="h-12 w-12 text-yellow-600 animate-spin mb-4" 
            />
            <div className="absolute inset-0 bg-yellow-200/20 rounded-full blur-sm"></div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">
              Desa <span className="text-yellow-600">Kembang Kuning</span>
            </h2>
            <p className="text-gray-600 font-light">Memuat keindahan alam dan budaya...</p>
            
            {/* Progress Bar */}
            <div className="w-48 h-1.5 bg-yellow-200 rounded-full mx-auto mt-4 overflow-hidden">
              <div className="h-full bg-yellow-600 rounded-full animate-[loading_1.8s_ease-in-out]"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-8 text-yellow-300/40">
            <FontAwesomeIcon icon={faMountain} className="h-8 w-8" />
          </div>
          <div className="absolute top-8 right-8 text-yellow-300/40">
            <FontAwesomeIcon icon={faMountain} className="h-8 w-8" />
          </div>
        </div>

        {/* CSS Animation for Progress Bar */}
        <style>
          {`
            @keyframes loading {
              0% { width: 0%; }
              50% { width: 70%; }
              100% { width: 100%; }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section id="beranda">
          <HeroSection />
        </section>
        <section id="profil">
          <ProfileSection />
        </section>
        <section id="potensi">
          <PotensiSection />
        </section>
        <section id="galeri">
          <GallerySection />
        </section>
        <section id="lokasi">
          <MapSection />
        </section>
      </main>
      <section id="kontak">
        <Footer />
      </section>
      <ScrollUpButton />
    </div>
  );
};

export default App;