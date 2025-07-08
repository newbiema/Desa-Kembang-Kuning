import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faInfoCircle,
  faChartLine,
  faImages,
  faEnvelope,
  faBars,
  faTimes,
  type IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface NavLinkProps {
  to: string;
  icon: IconDefinition;
  text: string;
  onClick?: () => void;
  mobile?: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo-desa.png" 
              alt="Logo Desa Kembang Kuning" 
              className={`h-12 w-12 object-contain transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
            <Link 
              to="/" 
              className={`font-extrabold font-['Poppins'] tracking-tight transition-colors ${isScrolled ? 'text-gray-800 text-xl' : 'text-white text-2xl'}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-indigo-600">Kembang</span> Kuning
              <span className={`block font-light transition-all duration-300 ${isScrolled ? 'text-xs text-gray-500' : 'text-xs text-white/80'}`}>Lombok Timur</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all focus:outline-none ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <FontAwesomeIcon 
                icon={isOpen ? faTimes : faBars} 
                className="h-6 w-6"
              />
            </button>
          </div>

          <div className="hidden md:flex space-x-1 items-center">
            <NavLink to="/" icon={faHome} text="Beranda" isScrolled={isScrolled} />
            <NavLink to="/profil" icon={faInfoCircle} text="Profil Desa" isScrolled={isScrolled} />
            <NavLink to="/potensi" icon={faChartLine} text="Potensi" isScrolled={isScrolled} />
            <NavLink to="/galeri" icon={faImages} text="Galeri" isScrolled={isScrolled} />
            <NavLink to="/kontak" icon={faEnvelope} text="Kontak" isScrolled={isScrolled} />
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-2 rounded-lg transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
            <NavLink to="/" icon={faHome} text="Beranda" onClick={() => setIsOpen(false)} mobile isScrolled={isScrolled} />
            <NavLink to="/profil" icon={faInfoCircle} text="Profil Desa" onClick={() => setIsOpen(false)} mobile isScrolled={isScrolled} />
            <NavLink to="/potensi" icon={faChartLine} text="Potensi" onClick={() => setIsOpen(false)} mobile isScrolled={isScrolled} />
            <NavLink to="/galeri" icon={faImages} text="Galeri" onClick={() => setIsOpen(false)} mobile isScrolled={isScrolled} />
            <NavLink to="/kontak" icon={faEnvelope} text="Kontak" onClick={() => setIsOpen(false)} mobile isScrolled={isScrolled} />
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkPropsExtended extends NavLinkProps {
  isScrolled: boolean;
}

const NavLink = ({ to, icon, text, onClick, mobile = false, isScrolled }: NavLinkPropsExtended) => {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`flex items-center transition-all ${
        mobile 
          ? `space-x-3 px-4 py-3 rounded-lg ${
              isScrolled 
                ? 'hover:bg-gray-100 text-gray-800' 
                : 'hover:bg-white/10 text-gray-800'
            }` 
          : `space-x-2 font-medium font-['Inter'] px-4 py-2 rounded-full ${
              isScrolled 
                ? 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100' 
                : 'text-white hover:text-white hover:bg-white/10'
            }`
      }`}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className={`${mobile ? 'h-5 w-5' : 'h-4 w-4'} ${!mobile && isScrolled ? 'text-indigo-500' : ''}`}
      />
      <span>{text}</span>
      {!mobile && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-3/4"></span>
      )}
    </Link>
  );
};

export default Navbar;