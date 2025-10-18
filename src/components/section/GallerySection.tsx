import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faSearchPlus,
  faMountain,
  faHandsPraying,
  faPeopleGroup,
  faLeaf,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faSeedling,
  faUmbrellaBeach
} from '@fortawesome/free-solid-svg-icons';
import alamImage from "../../assets/img/pegunungan.jpg";
import gontongRoyong from "../../assets/img/gontong_royong.jpg";
import kopiImage from "../../assets/img/kopi.jpg";
import gendang from "../../assets/img/gendang.jpeg";
import sawahImage from "../../assets/img/hero.jpg";
import nyaleImage from "../../assets/img/bau nyale.jpeg";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('semua');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated gallery data for Desa Kembang Kuning
  const galleryItems = [
    { 
      id: 1, 
      category: 'alam', 
      title: 'Pegunungan Kembang Kuning', 
      image: alamImage,
      icon: faMountain,
      description: 'Pemandangan indah pegunungan dengan udara sejuk dan hamparan hijau yang menakjubkan di Desa Kembang Kuning'
    },
    { 
      id: 2, 
      category: 'budaya', 
      title: 'Tarian Gendang Beleq', 
      image: gendang,
      icon: faHandsPraying,
      description: 'Tarian tradisional khas Sasak Lombok yang penuh semangat, dilestarikan oleh masyarakat Desa Kembang Kuning'
    },
    { 
      id: 3, 
      category: 'alam', 
      title: 'Persawahan Berundak', 
      image: sawahImage,
      icon: faLeaf,
      description: 'Hamparan sawah berundak yang menghijau dengan sistem irigasi tradisional khas masyarakat Kembang Kuning'
    },
    { 
      id: 4, 
      category: 'kegiatan', 
      title: 'Gotong Royong Desa', 
      image: gontongRoyong,
      icon: faPeopleGroup,
      description: 'Kegiatan gotong royong warga Kembang Kuning dalam membangun dan memelihara fasilitas desa'
    },
    { 
      id: 5, 
      category: 'budaya', 
      title: 'Upacara Adat Bau Nyale', 
      image: nyaleImage,
      icon: faHandsPraying,
      description: 'Upacara adat tahunan menangkap cacing laut yang penuh dengan nilai tradisi masyarakat Sasak Kembang Kuning'
    },
    { 
      id: 6, 
      category: 'kegiatan', 
      title: 'Panen Kopi Desa', 
      image: kopiImage,
      icon: faSeedling,
      description: 'Proses panen kopi arabika khas Desa Kembang Kuning yang menjadi komoditas unggulan masyarakat'
    },
    { 
      id: 7, 
      category: 'alam', 
      title: 'Sunrise di Kembang Kuning', 
      image: alamImage, // You can replace with actual sunrise image
      icon: faMountain,
      description: 'Matahari terbit menyinari pegunungan Kembang Kuning menciptakan pemandangan yang memesona'
    },
    { 
      id: 8, 
      category: 'kegiatan', 
      title: 'Festival Desa Kembang Kuning', 
      image: gontongRoyong, // You can replace with actual festival image
      icon: faUmbrellaBeach,
      description: 'Perayaan festival tahunan yang menampilkan kekayaan budaya dan hasil bumi Desa Kembang Kuning'
    },
    { 
      id: 9, 
      category: 'budaya', 
      title: 'Arsitektur Tradisional Sasak', 
      image: sawahImage, // You can replace with actual architecture image
      icon: faHandsPraying,
      description: 'Rumah adat Sasak dengan arsitektur tradisional yang masih dilestarikan di Desa Kembang Kuning'
    },
  ];

  const filteredItems = activeTab === 'semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  // Function to open modal with selected image
  const openModal = (id: number) => {
    setSelectedImage(id);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Function to navigate to next image
  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  // Function to navigate to previous image
  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const selectedItem = selectedImage 
    ? galleryItems.find(item => item.id === selectedImage)
    : null;

  return (
    <>
      <section id="galeri" className="py-20 bg-gray-50 font-['Poppins']">
        <div className="container mx-auto px-4 max-w-7xl">
          <div data-aos='fade-up' className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeri Desa Kembang Kuning</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Dokumentasi keindahan alam, budaya, dan kehidupan masyarakat Desa Kembang Kuning
            </p>
          </div>
          
          {/* Tab Filter - Updated with yellow theme */}
          <div className="flex justify-center mb-12">
            <div data-aos="fade-right" className="inline-flex bg-white rounded-xl shadow-sm p-1 border border-yellow-100">
              {['semua', 'alam', 'budaya', 'kegiatan'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-yellow-700 hover:bg-yellow-50'
                  }`}
                >
                  {tab === 'semua' ? 'Semua Gallery' : 
                   tab === 'alam' ? 'Alam Pegunungan' :
                   tab === 'budaya' ? 'Budaya Sasak' : 'Kegiatan Desa'}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 cursor-pointer bg-white"
                onClick={() => openModal(item.id)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition duration-300">
                    <div className="flex items-center mb-3">
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className="w-5 h-5 mr-2 text-yellow-400" 
                      />
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/90 text-white backdrop-blur-sm">
                      {item.category === 'alam' ? '🌄 Alam Pegunungan' :
                       item.category === 'budaya' ? '🎭 Budaya Sasak' : '👨‍🌾 Kegiatan Desa'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-2 group-hover:translate-y-0 transition duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={faSearchPlus} className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-yellow-500 text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada foto</h3>
              <p className="text-gray-600">Tidak ada foto yang tersedia untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal - Updated with yellow theme */}
      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Galeri foto Desa Kembang Kuning"
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white hover:text-yellow-400 transition duration-300 z-10 bg-yellow-500/20 backdrop-blur-sm rounded-full p-3 hover:bg-yellow-500/30"
              aria-label="Tutup modal galeri"
            >
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition duration-300 bg-yellow-500/30 backdrop-blur-sm rounded-full p-4 hover:bg-yellow-500/40"
              aria-label="Foto sebelumnya"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition duration-300 bg-yellow-500/30 backdrop-blur-sm rounded-full p-4 hover:bg-yellow-500/40"
              aria-label="Foto berikutnya"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>

            {/* Image Content */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-yellow-100">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-auto max-h-[60vh] object-cover"
              />
              <div className="p-6 bg-gradient-to-b from-white to-yellow-50">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <FontAwesomeIcon 
                      icon={selectedItem.icon} 
                      className="w-5 h-5 text-yellow-600" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{selectedItem.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                    {selectedItem.category === 'alam' ? '🌄 Alam Pegunungan' :
                     selectedItem.category === 'budaya' ? '🎭 Budaya Sasak' : '👨‍🌾 Kegiatan Desa'}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {filteredItems.findIndex(item => item.id === selectedImage) + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;