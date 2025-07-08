import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faUsers,
  faCalendarAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const ProfileSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Profil Desa Kembang Kuning
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100 font-light">
            Mengenal lebih dalam tentang keindahan dan kekayaan desa kami
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-slide-in-left">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/peta-desa.jpg" 
                alt="Peta Desa Kembang Kuning" 
                className="w-full transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-xl font-semibold">Peta Wilayah Desa</h4>
                <p className="text-gray-200 font-light">Kecamatan Pringgabaya, Lombok Timur</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-in-right">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="text-indigo-600">Desa Kembang Kuning</span>, Lombok Timur
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faMapMarkerAlt} 
                      className="w-5 h-5 text-indigo-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Lokasi Geografis</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Terletak di Kecamatan Pringgabaya, Kabupaten Lombok Timur, Nusa Tenggara Barat. 
                      Luas wilayah ± 850 hektar dengan topografi perbukitan dan pesisir pantai.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faUsers} 
                      className="w-5 h-5 text-indigo-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Demografi</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Mayoritas penduduk bekerja sebagai petani (padi, jagung, kelapa) dan nelayan 
                      dengan hasil tangkapan ikan tuna dan cumi-cumi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                    <FontAwesomeIcon 
                      icon={faCalendarAlt} 
                      className="w-5 h-5 text-indigo-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Tradisi Budaya</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Memiliki tradisi unik seperti "Bau Nyale" (menangkap cacing laut) dan 
                      "Gendang Beleq" (tarian tradisional dengan gendang besar).
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center text-lg">
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