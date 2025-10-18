import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faCow,
  faMountainSun,
  faBasketball,
  faSeedling,
  faUmbrellaBeach,
  faHands
} from '@fortawesome/free-solid-svg-icons';

const PotensiSection = () => {
  const potensiItems = [
    {
      title: "Pertanian Organik",
      icon: faLeaf,
      description: "Lahan subur di kaki pegunungan menghasilkan sayuran dataran tinggi, kopi arabika, cabai, tomat, dan bawang dengan sistem pertanian organik yang ramah lingkungan.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      highlight: "Kopi Arabika & Sayuran Organik Khas Pegunungan"
    },
    {
      title: "Peternakan Tradisional",
      icon: faCow,
      description: "Peternakan sapi, kambing, dan ayam kampung dengan sistem kandang terbuka dan pakan alami, menghasilkan produk ternak yang sehat dan berkualitas tinggi.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      highlight: "Sapi & Kambing Pakan Alami"
    },
    {
      title: "Wisata Alam",
      icon: faMountainSun,
      description: "Udara sejuk pegunungan, panorama Gunung Rinjani, trekking alam, dan homestay tradisional menawarkan pengalaman wisata alam yang autentik dan berkesan.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      highlight: "Panorama Rinjani & Udara Pegunungan"
    },
    {
      title: "Kerajinan Bambu",
      icon: faBasketball,
      description: "Anyaman bambu tradisional khas Sasak berupa tikar, keranjang, dan souvenir yang mencerminkan warisan budaya dan kearifan lokal masyarakat.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      highlight: "Anyaman Bambu Tradisional Sasak"
    },
    {
      title: "Perkebunan Kopi",
      icon: faSeedling,
      description: "Kopi arabika khas Kembang Kuning dengan cita rasa unik, ditanam di ketinggian optimal dan diproses secara tradisional untuk menjaga kualitas.",
      color: "text-brown-600",
      bgColor: "bg-brown-50",
      borderColor: "border-brown-200",
      highlight: "Kopi Arabika Khas Kembang Kuning"
    },
    {
      title: "Eco Tourism",
      icon: faUmbrellaBeach,
      description: "Pengembangan wisata berkelanjutan dengan homestay ramah lingkungan, aktivitas budaya, dan konservasi alam untuk pengalaman wisata yang bertanggung jawab.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      highlight: "Wisata Berkelanjutan & Ramah Lingkungan"
    },
    {
      title: "Budaya Sasak",
      icon: faHands,
      description: "Pelestarian budaya Sasak melalui seni tradisional, upacara adat, kuliner khas, dan arsitektur tradisional yang menjadi daya tarik wisata budaya.",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      highlight: "Seni Tradisional & Upacara Adat"
    },
    {
      title: "Adventure Tourism",
      icon: faMountainSun,
      description: "Jalur trekking menuju titik-titik panorama, camping ground, dan basecamp pendakian Rinjani yang menantang bagi pecinta alam dan petualangan.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      highlight: "Trekking & Camping Alam Terbuka"
    }
  ];

  return (
    <section id="potensi" className="py-20 bg-gray-50 font-['Poppins']">
      <div className="container mx-auto px-4 max-w-7xl">
        <div data-aos='fade-up' className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Potensi Unggulan Desa Kembang Kuning</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Menggali kekayaan alam, budaya, dan ekonomi yang menjadi keunikan Desa Kembang Kuning di jantung Lombok Timur
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {potensiItems.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${item.borderColor} group flex flex-col`}
            >
              {/* Icon Section */}
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-2xl ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className={`w-8 h-8 ${item.color}`}
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900 transition-colors">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 font-light leading-relaxed mb-4 flex-grow text-center">
                {item.description}
              </p>
              
              {/* Highlight Badge */}
              <div className={`px-3 py-2 ${item.bgColor} rounded-lg border ${item.borderColor} mt-auto`}>
                <p className={`text-sm font-semibold text-center ${item.color}`}>
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Tertarik Menjelajahi Potensi Kami?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              Mari berkolaborasi dalam mengembangkan potensi Desa Kembang Kuning untuk kesejahteraan bersama.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotensiSection;