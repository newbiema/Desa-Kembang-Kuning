import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoDesa from '../../assets/img/logo.png';
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
  targetId: string;
  icon: IconDefinition;
  text: string;
  onClick?: () => void;
  mobile?: boolean;
  isScrolled?: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['beranda', 'profil', 'potensi', 'galeri', 'kontak'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    setActiveSection(id);
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-yellow-100' 
        : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo - Updated with Kembang Kuning theme */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoDesa}
              alt="Logo Desa Kembang Kuning" 
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-10 w-10' : 'h-12 w-12'
              }`}
            />
            <button
              onClick={() => scrollToSection('beranda')}
              className={`font-bold font-['Poppins'] tracking-tight transition-colors ${
                isScrolled 
                  ? 'text-gray-800 text-xl' 
                  : 'text-gray-800 text-2xl'
              }`}
            >
              Kembang <span className="text-yellow-500">Kuning</span> 
              <span className={`block font-normal transition-all duration-300 ${
                isScrolled 
                  ? 'text-xs text-gray-500' 
                  : 'text-sm text-gray-600'
              }`}>
                Desa Wisata Lombok Timur
              </span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-all focus:outline-none text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <FontAwesomeIcon 
                icon={isOpen ? faTimes : faBars} 
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Desktop Menu - Updated colors */}
          <div className="hidden md:flex space-x-1 items-center">
            <NavLink 
              targetId="beranda" 
              icon={faHome} 
              text="Beranda" 
              isScrolled={isScrolled} 
              isActive={activeSection === 'beranda'}
              onClick={() => scrollToSection('beranda')} 
            />
            <NavLink 
              targetId="profil" 
              icon={faInfoCircle} 
              text="Profil Desa" 
              isScrolled={isScrolled} 
              isActive={activeSection === 'profil'}
              onClick={() => scrollToSection('profil')} 
            />
            <NavLink 
              targetId="potensi" 
              icon={faChartLine} 
              text="Potensi" 
              isScrolled={isScrolled} 
              isActive={activeSection === 'potensi'}
              onClick={() => scrollToSection('potensi')} 
            />
            <NavLink 
              targetId="galeri" 
              icon={faImages} 
              text="Galeri" 
              isScrolled={isScrolled} 
              isActive={activeSection === 'galeri'}
              onClick={() => scrollToSection('galeri')} 
            />
            <NavLink 
              targetId="kontak" 
              icon={faEnvelope} 
              text="Kontak" 
              isScrolled={isScrolled} 
              isActive={activeSection === 'kontak'}
              onClick={() => scrollToSection('kontak')} 
            />
          </div>
        </div>

        {/* Mobile Menu - Updated colors */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 rounded-lg bg-white/95 backdrop-blur-md shadow-lg border border-yellow-100">
            <NavLink 
              targetId="beranda" 
              icon={faHome} 
              text="Beranda" 
              mobile 
              isActive={activeSection === 'beranda'}
              onClick={() => scrollToSection('beranda')} 
            />
            <NavLink 
              targetId="profil" 
              icon={faInfoCircle} 
              text="Profil Desa" 
              mobile 
              isActive={activeSection === 'profil'}
              onClick={() => scrollToSection('profil')} 
            />
            <NavLink 
              targetId="potensi" 
              icon={faChartLine} 
              text="Potensi" 
              mobile 
              isActive={activeSection === 'potensi'}
              onClick={() => scrollToSection('potensi')} 
            />
            <NavLink 
              targetId="galeri" 
              icon={faImages} 
              text="Galeri" 
              mobile 
              isActive={activeSection === 'galeri'}
              onClick={() => scrollToSection('galeri')} 
            />
            <NavLink 
              targetId="kontak" 
              icon={faEnvelope} 
              text="Kontak" 
              mobile 
              isActive={activeSection === 'kontak'}
              onClick={() => scrollToSection('kontak')} 
            />
          </div>
        )}
      </div>
    </nav>
  );
};

// Updated NavLink component with active state
interface NavLinkProps {
  targetId: string;
  icon: IconDefinition;
  text: string;
  onClick?: () => void;
  mobile?: boolean;
  isScrolled?: boolean;
  isActive?: boolean;
}

const NavLink = ({ icon, text, onClick, mobile = false, isScrolled = false, isActive = false }: NavLinkProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center transition-all duration-200 ${
        mobile 
          ? `space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              isActive
                ? 'bg-yellow-50 text-yellow-600 border-r-4 border-yellow-500'
                : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
            }`
          : `space-x-2 font-medium px-4 py-2 rounded-lg ${
              isActive
                ? 'text-yellow-600 bg-yellow-50 border-b-2 border-yellow-500'
                : `${
                    isScrolled 
                      ? 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50' 
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                  }`
            }`
      }`}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className={`${mobile ? 'h-5 w-5' : 'h-4 w-4'} ${
          isActive 
            ? 'text-yellow-500' 
            : !mobile && isScrolled 
              ? 'text-gray-500' 
              : 'text-gray-500'
        }`}
      />
      <span className={`font-medium ${isActive ? 'text-yellow-600' : ''}`}>
        {text}
      </span>
    </button>
  );
};

export default Navbar;