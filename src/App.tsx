import { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/section/HeroSection";
import ProfileSection from "./components/section/ProfilSection";
import PotensiSection from "./components/section/PotensiSection";
import GallerySection from "./components/section/GallerySection";
import MapSection from "./components/section/MapSection";
import Footer from "./components/layout/FooterSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import logoDesa from "./assets/img/logo.png";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle hash-based scrolling on initial load
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView();
        }
      }
    };

    const timer = setTimeout(() => {
      setIsLoading(false);
      handleHashScroll();
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="text-center font-['Poppins'] animate-pulse">
          <img 
            src={logoDesa} 
            alt="Logo Desa" 
            className="h-48 w-auto mx-auto mb-6"
          />
          <FontAwesomeIcon 
            icon={faSpinner} 
            className="h-12 w-12 text-green-600 animate-spin mb-4" 
          />
          <h2 className="text-2xl font-bold text-gray-800">Desa Kembang Kuning</h2>
          <p className="text-gray-600 mt-2">Memuat konten...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="beranda"><HeroSection /></section>
        <section id="profil"><ProfileSection /></section>
        <section id="potensi"><PotensiSection /></section>
        <section id="galeri"><GallerySection /></section>
        <section id="kontak"><MapSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;