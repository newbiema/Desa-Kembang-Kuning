import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faImages, faLeaf, faMountain, faStar } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/img/hero.jpg';
import { useEffect } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }  
  };

  useEffect(() => {
    const typing = new Typed('#typing-hero', {  
      strings: [
        "Surga Tersembunyi di Pegunungan Lombok",
        "Wisata Alam dengan Udara Sejuk", 
        "Destinasi Keluarga yang Berkesan",
        "Budaya Sasak yang Autentik",
        "Pesona Alam yang Memukau"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      backDelay: 2000,
      startDelay: 500
    });

    return () => {
      typing.destroy();
    };
  }, []);

  return (
    <section id="beranda" className="relative h-[90vh] min-h-[600px] bg-white text-gray-800 font-['Poppins'] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-50/20 via-white/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/10 to-transparent z-10"></div>
      <img 
        src={heroImage}
        alt="Pemandangan Desa Kembang Kuning dengan pegunungan hijau dan sawah berundak" 
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <div className="max-w-4xl px-4">
          {/* Badge - Updated with yellow theme */}
          <div className="mb-8 mt-20 flex justify-center">
            <div className="bg-yellow-50/90 px-6 py-3 rounded-full border border-yellow-200 shadow-sm flex items-center backdrop-blur-sm">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
              <span className="text-yellow-700 font-medium">Desa Wisata Unggulan Lombok Timur</span>
            </div>
          </div>
          
          {/* Main Title - Updated with yellow theme */}
          <h1 data-aos="fade-right" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di <br /> 
            <span className="text-yellow-500 drop-shadow-sm">Desa Kembang Kuning</span>
          </h1>
          
          {/* Typing Text */}
          <p data-aos="fade-left" className="text-xl md:text-2xl mb-5 text-gray-700 font-light max-w-3xl mx-auto leading-relaxed" id='typing-hero'>
            {/* Typed.js will insert text here */}
          </p>

          {/* Features Icons */}
          <div data-aos="fade-up" className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faMountain} className="text-yellow-500 mr-2" />
              <span>Pegunungan Hijau</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faLeaf} className="text-yellow-500 mr-2" />
              <span>Udara Sejuk</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faImages} className="text-yellow-500 mr-2" />
              <span>Pemandangan Eksotis</span>
            </div>
          </div>
          
          {/* CTA Buttons - Updated with yellow theme */}
          <div data-aos="fade-down" className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('profil')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
              Jelajahi Desa Kami
              <FontAwesomeIcon icon={faArrowRight} className="ml-3 w-4 h-4" />
            </button>
            
            <button
              onClick={() => scrollToSection('galeri')}
              className="bg-white/90 hover:bg-white text-gray-800 font-semibold py-4 px-10 rounded-xl border border-yellow-200 hover:border-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 backdrop-blur-sm"
            >
              <FontAwesomeIcon icon={faImages} className="mr-3 w-5 h-5 text-yellow-500" />
              Lihat Galeri
            </button>
          </div>

          {/* Scroll Indicator */}
          <div data-aos="fade-up" data-aos-delay="500" className="mt-16">
            <button
              onClick={() => scrollToSection('profil')}
              className="flex flex-col items-center text-gray-600 hover:text-yellow-600 transition-colors duration-300"
            >
              <span className="text-sm mb-2">Scroll untuk menjelajahi</span>
              <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;