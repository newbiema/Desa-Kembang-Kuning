import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faCow,
  faMountainSun,
  faBasketball
} from '@fortawesome/free-solid-svg-icons';

const PotensiSection = () => {
  const potensiItems = [
    {
      title: "Pertanian",
      icon: faLeaf,
      description: "Lahan subur di kaki pegunungan menghasilkan sayuran dataran tinggi, kopi, cabai, tomat, dan bawang dengan sistem pertanian organik dan tumpangsari yang ramah lingkungan.",
      color: "text-green-500",
      highlight: "Pertanian organik & irigasi tradisional"
    },
    {
      title: "Peternakan",
      icon: faCow,
      description: "Peternakan skala rumahan (sapi, kambing, ayam) dengan pakan alami dan sistem kandang terbuka untuk kualitas ternak yang sehat, mendukung ekonomi keluarga.",
      color: "text-amber-600",
      highlight: "Sistem kandang terbuka & pakan alami"
    },
    {
      title: "Wisata Alam",
      icon: faMountainSun,
      description: "Desa wisata dengan udara sejuk, hutan bambu, Air Terjun Mangku Sakti, dan panorama Gunung Rinjani. Menawarkan homestay, trekking, dan pengalaman budaya Sasak.",
      color: "text-blue-500",
      highlight: "Air Terjun Mangku Sakti & panorama Rinjani"
    },
    {
      title: "Kerajinan",
      icon: faBasketball,
      description: "Anyaman bambu, tikar, dan souvenir khas Sasak yang mencerminkan warisan budaya. Bagian dari program pemberdayaan masyarakat lokal.",
      color: "text-purple-500",
      highlight: "Warisan budaya Sasak yang kuat"
    },
  ];

  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Potensi Unggulan Desa</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Kekayaan alam dan budaya Desa Kembang Kuning di Lombok Timur
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {potensiItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
            >
              <div className={`text-4xl mb-4 ${item.color} flex justify-center`}>
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="w-12 h-12 p-2 bg-green-50 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4 flex-grow">{item.description}</p>
              
              <div className="px-3 py-2 bg-green-50 rounded-lg mb-4">
                <p className="text-sm text-green-700 font-medium text-center">
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
            Jelajahi Semua Potensi
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