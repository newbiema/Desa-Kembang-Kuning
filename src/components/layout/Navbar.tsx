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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    // Update URL hash tanpa trigger refresh
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoDesa}
              alt="Logo Desa" 
              className={`h-12 w-12 object-contain transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
            <button
              onClick={() => scrollToSection('beranda')}
              className={`font-bold font-['Poppins'] tracking-tight transition-colors ${isScrolled ? 'text-gray-800 text-xl' : 'text-gray-800 text-2xl'}`}
            >
              <span className="text-green-600">Kembang</span> Kuning
              <span className={`block font-normal transition-all duration-300 ${isScrolled ? 'text-xs text-gray-500' : 'text-sm text-gray-600'}`}>
                Desa Wisata Lombok Timur
              </span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-all focus:outline-none text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <FontAwesomeIcon 
                icon={isOpen ? faTimes : faBars} 
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            <NavLink targetId="beranda" icon={faHome} text="Beranda" isScrolled={isScrolled} onClick={() => scrollToSection('beranda')} />
            <NavLink targetId="profil" icon={faInfoCircle} text="Profil Desa" isScrolled={isScrolled} onClick={() => scrollToSection('profil')} />
            <NavLink targetId="potensi" icon={faChartLine} text="Potensi" isScrolled={isScrolled} onClick={() => scrollToSection('potensi')} />
            <NavLink targetId="galeri" icon={faImages} text="Galeri" isScrolled={isScrolled} onClick={() => scrollToSection('galeri')} />
            <NavLink targetId="kontak" icon={faEnvelope} text="Kontak" isScrolled={isScrolled} onClick={() => scrollToSection('kontak')} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 rounded-lg bg-white shadow-lg">
            <NavLink targetId="beranda" icon={faHome} text="Beranda" mobile onClick={() => scrollToSection('beranda')} />
            <NavLink targetId="profil" icon={faInfoCircle} text="Profil Desa" mobile onClick={() => scrollToSection('profil')} />
            <NavLink targetId="potensi" icon={faChartLine} text="Potensi" mobile onClick={() => scrollToSection('potensi')} />
            <NavLink targetId="galeri" icon={faImages} text="Galeri" mobile onClick={() => scrollToSection('galeri')} />
            <NavLink targetId="kontak" icon={faEnvelope} text="Kontak" mobile onClick={() => scrollToSection('kontak')} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({  icon, text, onClick, mobile = false, isScrolled = false }: NavLinkProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center transition-colors duration-200 ${
        mobile 
          ? 'space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left'
          : `space-x-2 font-medium px-4 py-2 rounded-lg ${
              isScrolled 
                ? 'text-gray-600 hover:text-green-600 hover:bg-gray-50' 
                : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
            }`
      }`}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className={`${mobile ? 'h-5 w-5' : 'h-4 w-4'} ${!mobile && isScrolled ? 'text-green-500' : 'text-gray-500'}`}
      />
      <span>{text}</span>
    </button>
  );
};

export default Navbar;