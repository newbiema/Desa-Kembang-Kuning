import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faHome,
  faInfoCircle,
  faChartLine,
  faImages,
  faMountain,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-yellow-600 to-yellow-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faMountain} className="h-6 w-6 text-yellow-200" />
              </div>
              <h3 className="text-2xl font-bold font-['Poppins']">
                Kembang <span className="text-yellow-200">Kuning</span>
              </h3>
            </div>
            <p className="mb-6 text-yellow-100 leading-relaxed max-w-md">
              Desa Wisata Ecotourism di lereng Gunung Rinjani, Lombok Timur. Menawarkan 
              keindahan alam pegunungan, budaya Sasak yang autentik, dan keramahan 
              masyarakat lokal yang hangat.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook Desa Kembang Kuning"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram Desa Kembang Kuning"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube Desa Kembang Kuning"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="TikTok Desa Kembang Kuning"
              >
                <FontAwesomeIcon icon={faTiktok} className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Link Cepat */}
          <div>
            <h3 className="text-lg font-bold font-['Poppins'] mb-6 text-yellow-200">Navigasi Cepat</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('beranda')}
                  className="text-yellow-100 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <FontAwesomeIcon icon={faHome} className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('profil')}
                  className="text-yellow-100 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  Profil Desa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('potensi')}
                  className="text-yellow-100 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  Potensi Desa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeri')}
                  className="text-yellow-100 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <FontAwesomeIcon icon={faImages} className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  Galeri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lokasi')}
                  className="text-yellow-100 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  Lokasi
                </button>
              </li>
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-lg font-bold font-['Poppins'] mb-6 text-yellow-200">Hubungi Kami</h3>
            <address className="not-italic text-yellow-100 space-y-4">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-yellow-200" />
                <span className="leading-relaxed">
                  Desa Kembang Kuning, Kec. Sikur<br />
                  Kab. Lombok Timur, Nusa Tenggara Barat
                </span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="h-4 w-4 mr-3 flex-shrink-0 text-yellow-200" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-3 flex-shrink-0 text-yellow-200" />
                <a href="mailto:info@kembang-kuning.desa.id" className="hover:text-white transition-colors">
                  info@kembang-kuning.desa.id
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUsers} className="h-4 w-4 mr-3 flex-shrink-0 text-yellow-200" />
                <span>Buka Setiap Hari</span>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-yellow-200 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Desa Kembang Kuning. Semua hak dilindungi.</p>
            </div>
            <div className="flex space-x-6 text-sm text-yellow-200">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="text-center mt-8">
          <div className="w-16 h-1 bg-yellow-300 rounded-full mx-auto"></div>
          <p className="text-yellow-200 text-xs mt-4 font-light">
            🏔️ Desa Wisata Ecotourism Lombok Timur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;