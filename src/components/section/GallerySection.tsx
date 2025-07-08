import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faSearchPlus,
  faMountain,
  faHandsPraying,
  faPeopleGroup,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import alamImage from "../../assets/img/pegunungan.jpg";
import gontongRoyong from "../../assets/img/gontong_royong.jpg";
import kopiImage from "../../assets/img/kopi.jpg";
import gendang from "../../assets/img/gendang.jpeg";
import sawahImage from "../../assets/img/hero.jpg";
import nyaleImage from "../../assets/img/bau nyale.jpeg";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('semua');
  
  // Updated gallery data for mountain village
  const galleryItems = [
    { 
      id: 1, 
      category: 'alam', 
      title: 'Pegunungan Kembang Kuning', 
      image: alamImage,
      icon: faMountain
    },
    { 
      id: 2, 
      category: 'budaya', 
      title: 'Tarian Gendang Beleq', 
      image: gendang,
      icon: faHandsPraying
    },
    { 
      id: 3, 
      category: 'alam', 
      title: 'Persawahan Berundak', 
      image: sawahImage,
      icon: faLeaf
    },
    { 
      id: 4, 
      category: 'kegiatan', 
      title: 'Gotong Royong Desa', 
      image: gontongRoyong,
      icon: faPeopleGroup
    },
    { 
      id: 5, 
      category: 'budaya', 
      title: 'Upacara Adat Bau Nyale', 
      image: nyaleImage,
      icon: faHandsPraying
    },
    { 
      id: 6, 
      category: 'kegiatan', 
      title: 'Panen Kopi Desa', 
      image: kopiImage,
      icon: faLeaf
    },
  ];

  const filteredItems = activeTab === 'semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 max-w-6xl">
        <div data-aos = 'fade-up' className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeri Desa</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Keindahan alam pegunungan dan kehidupan masyarakat Desa Kembang Kuning
          </p>
        </div>
        
        {/* Tab Filter */}
        <div className="flex justify-center mb-12">
          <div data-aos="fade-right" className="inline-flex bg-white rounded-lg shadow-sm p-1 border border-gray-200">
            {['semua', 'alam', 'budaya', 'kegiatan'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab === 'semua' ? 'Semua' : 
                 tab === 'alam' ? 'Alam' :
                 tab === 'budaya' ? 'Budaya' : 'Kegiatan'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div data-aos = "fade-left" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div  key={item.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="w-5 h-5 mr-2 text-emerald-400" 
                    />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-600/90 text-white">
                    {item.category === 'alam' ? 'Alam Pegunungan' :
                     item.category === 'budaya' ? 'Budaya Sasak' : 'Kegiatan Desa'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <FontAwesomeIcon icon={faSearchPlus} className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default GallerySection;