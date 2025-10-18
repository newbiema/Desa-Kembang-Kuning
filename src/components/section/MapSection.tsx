const MapSection = () => {
  return (
    <section id="lokasi" className="py-20 font-['Poppins'] bg-gradient-to-b from-yellow-50/30 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lokasi Desa Kembang Kuning</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Desa Kembang Kuning terletak di Kecamatan Sikur, Kabupaten Lombok Timur, 
            Provinsi Nusa Tenggara Barat. Nikmati keindahan alam pegunungan dan 
            keramahan masyarakat desa kami yang hangat.
          </p>
        </div>
        
        {/* Map Container */}
        <div data-aos="zoom-in" className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-2xl border border-yellow-100">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 z-10 pointer-events-none"></div>
          
          {/* Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77277.77226829508!2d116.37310603429655!3d-8.51955563863828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc34d414a622a5%3A0x5030bfbcaf7e180!2sKembang%20Kuning%2C%20Kec.%20Sikur%2C%20Kabupaten%20Lombok%20Timur%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1751981960833!5m2!1sid!2sid"
            width="100%" 
            height="500" 
            className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy"
            title="Peta Lokasi Desa Kembang Kuning, Lombok Timur"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Location Badge */}
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg border border-yellow-200">
            <span className="text-gray-800 font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Kembang Kuning, Lombok Timur
            </span>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-500/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-tl-full"></div>
        </div>
        
        {/* Additional Location Info */}
        <div data-aos="fade-up" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Akses Mudah</h4>
            <p className="text-gray-600 text-sm font-light">
              Dapat dijangkau dari Mataram dalam 2-3 jam perjalanan melalui jalur pegunungan
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Lingkungan Asri</h4>
            <p className="text-gray-600 text-sm font-light">
              Terletak di kawasan pegunungan dengan udara sejuk dan pemandangan hijau
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Dekat Rinjani</h4>
            <p className="text-gray-600 text-sm font-light">
              Strategis sebagai basecamp menuju Taman Nasional Gunung Rinjani
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" className="text-center mt-12">
          <a 
            href="https://www.google.com/maps/place/Kembang+Kuning,+Kec.+Sikur,+Kabupaten+Lombok+Timur,+Nusa+Tenggara+Bar./@-8.5195556,116.373106,12.71z/data=!4m6!3m5!1s0x2dcc34d414a622a5:0x5030bfbcaf7e180!8m2!3d-8.5160626!4d116.4223398!16s%2Fg%2F121_zphd?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Dapatkan Petunjuk Arah
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-4 font-light">
            Buka di Google Maps untuk navigasi yang lebih detail
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;