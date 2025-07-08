import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faUsers,
  faCalendarAlt,
  faMountain,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import profilImage from '../../assets/img/hero.jpg'; 

const ProfileSection = () => {
  const handleExploreClick = () => {
    const nextSection = document.getElementById('next-section'); // Ganti dengan ID section tujuan
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile" className="py-20 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Profil Desa Kembang Kuning
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Desa Wisata Ecotourism di Lereng Gunung Rinjani
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img 
                src={profilImage} 
                alt="Pemandangan Desa Kembang Kuning" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-xl font-semibold">Desa Wisata Ecotourism</h4>
                <p className="text-gray-200 font-light">Kecamatan Sikur, Lombok Timur</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="text-green-600">Desa Kembang Kuning</span>, Lombok Timur
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faMapMarkerAlt} 
                      className="w-5 h-5 text-green-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Lokasi Geografis</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Terletak di Kecamatan Sikur, Kabupaten Lombok Timur, NTB. Berada di kawasan pegunungan yang sejuk dengan ketinggian 400-600 mdpl, menjadi jalur wisata menuju Sembalun dan Taman Nasional Gunung Rinjani.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faUsers} 
                      className="w-5 h-5 text-green-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Demografi</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Mayoritas penduduk bekerja sebagai petani sayuran, kopi, dan tanaman hortikultura, serta peternak. Beberapa bergerak di sektor pariwisata sebagai penyedia homestay dan pemandu wisata.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faCalendarAlt} 
                      className="w-5 h-5 text-green-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Tradisi Budaya</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Kental dengan adat Sasak dalam pernikahan, gotong royong (begibung), dan upacara adat. Melestarikan kesenian seperti Gendang Beleq, Peresean (atraksi ketangkasan), dan Tarian Tradisional Sasak.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faMountain} 
                      className="w-5 h-5 text-green-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Pariwisata</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Menawarkan pengalaman ecotourism dengan homestay tradisional, trekking ringan, kuliner khas Sasak, dan panorama alam pegunungan. Desa ini menjadi basecamp bagi pendakian ke Gunung Rinjani.
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleExploreClick}
                className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center text-lg group"
              >
                Jelajahi Selengkapnya
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;