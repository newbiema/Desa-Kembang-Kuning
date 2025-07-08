import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('semua');
  
  // Gallery data
  const galleryItems = [
    { id: 1, category: 'alam', title: 'Pantai Kembang Kuning', image: '/gallery/pantai.jpg' },
    { id: 2, category: 'budaya', title: 'Tarian Tradisional', image: '/gallery/tarian.jpg' },
    { id: 3, category: 'alam', title: 'Persawahan', image: '/gallery/sawah.jpg' },
    { id: 4, category: 'kegiatan', title: 'Gotong Royong', image: '/gallery/gotong-royong.jpg' },
    { id: 5, category: 'budaya', title: 'Upacara Adat', image: '/gallery/upacara.jpg' },
    { id: 6, category: 'kegiatan', title: 'Panen Raya', image: '/gallery/panen.jpg' },
  ];

  const filteredItems = activeTab === 'semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-gray-50 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeri Desa</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Dokumentasi visual keindahan dan kehidupan Desa Kembang Kuning
          </p>
        </div>
        
        {/* Tab Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full shadow-sm p-1 border border-gray-200">
            {['semua', 'alam', 'budaya', 'kegiatan'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-600 text-white">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <FontAwesomeIcon icon={faSearchPlus} className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
            Lihat Lebih Banyak
            <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;