import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faImages } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-gray-900 text-white font-['Poppins']">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"></div>
      <img 
        src="./assets/hero.jpg" 
        alt="Pemandangan Desa Kembang Kuning" 
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di <span className="text-indigo-300">Desa Kembang Kuning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-3xl mx-auto">
            Menemukan keindahan alam dan kekayaan budaya di jantung Lombok Timur
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/profil" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Jelajahi Desa Kami
              <FontAwesomeIcon icon={faArrowRight} className="ml-3 w-4 h-4" />
            </Link>
            <Link 
              to="/galeri" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faImages} className="mr-3 w-5 h-5" />
              Lihat Galeri
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;