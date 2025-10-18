import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faMountain } from "@fortawesome/free-solid-svg-icons";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Kembali ke atas"
        >
          <div className="relative">
            <FontAwesomeIcon 
              icon={isHovered ? faMountain : faArrowUp} 
              className="w-5 h-5 transition-all duration-300 transform group-hover:scale-110" 
            />
            
            {/* Pulse Animation Effect */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Kembali ke Atas
            <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;