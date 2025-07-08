import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faHome,
  faInfoCircle,
  faLandmark,
  faChartLine,
  faImages
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tentang Desa */}
          <div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-4">Desa Kembang Kuning</h3>
            <p className="mb-4 text-gray-200">
              Desa yang terletak di Kabupaten Lombok Timur, Nusa Tenggara Barat dengan kekayaan alam dan budaya yang mempesona.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Link Cepat */}
          <div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:text-yellow-300 transition-colors flex items-center">
                  <FontAwesomeIcon icon={faHome} className="h-4 w-4 mr-2" />
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-colors flex items-center">
                  <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 mr-2" />
                  Profil Desa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-colors flex items-center">
                  <FontAwesomeIcon icon={faLandmark} className="h-4 w-4 mr-2" />
                  Pemerintahan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 mr-2" />
                  Potensi Desa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-colors flex items-center">
                  <FontAwesomeIcon icon={faImages} className="h-4 w-4 mr-2" />
                  Galeri
                </a>
              </li>
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-4">Kontak Kami</h3>
            <address className="not-italic text-gray-200">
              <p className="mb-3 flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                Desa Kembang Kuning, Kec. Sikur, Kab. Lombok Timur, Nusa Tenggara Barat
              </p>
              <p className="mb-3 flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="h-4 w-4 mr-2" />
                +62 812-3456-7890
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
                info@kembang-kuning.desa.id
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Desa Kembang Kuning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;