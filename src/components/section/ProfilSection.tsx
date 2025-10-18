import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faUsers,
  faCalendarAlt,
  faMountain,
  faLeaf,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import profilImage from '../../assets/img/hero.jpg'; 

const ProfileSection = () => {
  return (
    <section data-aos='fade-up' id="profil" className="py-20 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Profil Desa Kembang Kuning
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Desa Wisata Ecotourism di Lereng Gunung Rinjani yang Memukau
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-yellow-100">
              <img 
                src={profilImage} 
                alt="Pemandangan Desa Kembang Kuning dengan sawah terasering dan pegunungan hijau" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faHeart} className="text-yellow-400 mr-2" />
                  <h4 className="text-xl font-semibold">Desa Wisata Ecotourism</h4>
                </div>
                <p className="text-gray-200 font-light">Kecamatan Sikur, Lombok Timur</p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/20 rounded-bl-full"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-yellow-50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-500">Desa Kembang Kuning</span>, Lombok Timur
              </h3>
              
              <div className="space-y-6">
                {/* Lokasi Geografis */}
                <div className="flex items-start group">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:bg-yellow-100 transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={faMapMarkerAlt} 
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Lokasi Geografis</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Terletak di Kecamatan Sikur, Kabupaten Lombok Timur, NTB. Berada di kawasan pegunungan yang sejuk dengan ketinggian 400-600 mdpl, menjadi jalur strategis menuju Sembalun dan Taman Nasional Gunung Rinjani.
                    </p>
                  </div>
                </div>
                
                {/* Demografi */}
                <div className="flex items-start group">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:bg-yellow-100 transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={faUsers} 
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Demografi</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Mayoritas penduduk bekerja sebagai petani sayuran organik, kopi arabika, dan tanaman hortikultura. Generasi muda mulai mengembangkan sektor pariwisata dengan homestay tradisional dan pemandu wisata lokal.
                    </p>
                  </div>
                </div>
                
                {/* Tradisi Budaya */}
                <div className="flex items-start group">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:bg-yellow-100 transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={faCalendarAlt} 
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Tradisi Budaya</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Kental dengan adat Sasak dalam pernikahan, gotong royong (begibung), dan upacara adat. Melestarikan kesenian seperti <strong>Gendang Beleq</strong>, <strong>Peresean</strong> (atraksi ketangkasan), dan Tarian Tradisional Sasak.
                    </p>
                  </div>
                </div>

                {/* Pariwisata */}
                <div className="flex items-start group">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:bg-yellow-100 transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={faMountain} 
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Pariwisata & Potensi</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Menawarkan pengalaman ecotourism autentik dengan homestay tradisional, trekking ringan, kuliner khas Sasak, dan panorama alam pegunungan. Desa ini menjadi basecamp ideal bagi pendakian ke Gunung Rinjani.
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-start group">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:bg-yellow-100 transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={faLeaf} 
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-lg">Keunikan Desa</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Dikenal dengan suasana pedesaan yang masih asri, udara pegunungan yang sejuk, dan keramahan masyarakat lokal. Nama "Kembang Kuning" sendiri memiliki makna filosofis dalam budaya Sasak.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-8 pt-6 border-t border-yellow-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">400-600</div>
                    <div className="text-sm text-gray-500">mdpl</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">100+</div>
                    <div className="text-sm text-gray-500">Keluarga</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">Eco</div>
                    <div className="text-sm text-gray-500">Tourism</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;