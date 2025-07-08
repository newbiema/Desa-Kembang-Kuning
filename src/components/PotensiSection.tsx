import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faFish,
  faUmbrellaBeach,
  faHands
} from '@fortawesome/free-solid-svg-icons';

const PotensiSection = () => {
  const potensiItems = [
    {
      title: "Pertanian",
      icon: faLeaf,
      description: "Desa Kembang Kuning memiliki lahan pertanian subur dengan hasil utama padi, jagung, dan kacang-kacangan yang berkualitas tinggi.",
      color: "text-emerald-500"
    },
    {
      title: "Perikanan",
      icon: faFish,
      description: "Lokasi strategis di pesisir pantai memungkinkan kegiatan perikanan tangkap dan budidaya yang produktif dengan hasil melimpah.",
      color: "text-blue-500"
    },
    {
      title: "Wisata Alam",
      icon: faUmbrellaBeach,
      description: "Pantai berpasir putih dan pemandangan alam yang memukau menjadi daya tarik utama wisatawan lokal maupun mancanegara.",
      color: "text-amber-500"
    },
    {
      title: "Kerajinan",
      icon: faHands,
      description: "Masyarakat desa menghasilkan berbagai kerajinan tangan tradisional bernilai seni tinggi dengan motif khas Lombok.",
      color: "text-purple-500"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Potensi Unggulan Desa</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Menggali berbagai kekayaan dan peluang yang dimiliki Desa Kembang Kuning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {potensiItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`text-5xl mb-6 ${item.color}`}>
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="w-12 h-12 p-2 bg-indigo-50 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors">
                  Pelajari lebih lanjut
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
            Lihat Semua Potensi
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PotensiSection;