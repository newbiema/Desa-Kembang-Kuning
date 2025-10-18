import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faImages, faLeaf } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/img/hero.jpg';
import { useEffect } from 'react';
import Typed  from 'typed.js';


const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }  
  };

  useEffect (() => {
    const typing = new Typed ('#typing-hero',{
      strings : ['Desa Wisata • Asri • Alami ',],
      typeSpeed : 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typing.destroy();
    };
  }, []);




  return (
    <section id="beranda" className="relative h-[90vh] min-h-[600px] bg-white text-gray-800 font-['Poppins'] overflow-hidden">
      {/* Background image with light overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-10"></div>
      <img 
        src={heroImage}
        alt="Pemandangan Desa Kembang Kuning" 
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <div className="max-w-4xl px-4">
          <div className="mb-8 mt-20 flex justify-center">
            <div className="bg-green-50/80 px-6 py-3 rounded-full border border-green-100 shadow-sm flex items-center">
              <FontAwesomeIcon icon={faLeaf} className="text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Desa Wisata Unggulan</span>
            </div>
          </div>
          
          <h1 data-aos = "fade-right" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di <span className="text-green-600">Desa Kembang Kuning</span>
          </h1>
          
          <p data-aos = "fade-left" className="text-xl md:text-2xl mb-10 text-gray-600 font-light max-w-3xl mx-auto" id='typing-hero'>
            
          </p>
          
          <div data-aos = "fade-down" className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('profil')}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Jelajahi Desa Kami
              <FontAwesomeIcon icon={faArrowRight} className="ml-3 w-4 h-4" />
            </button>
            
            <button
              onClick={() => scrollToSection('galeri')}
              className="bg-white/90 hover:bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faImages} className="mr-3 w-5 h-5 text-green-600" />
              Lihat Galeri
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;