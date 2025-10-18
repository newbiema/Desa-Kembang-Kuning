const MapSection = () => {
  return (
    <section className="py-20 font-bold bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4 relative inline-block">
            Lokasi Desa
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform translate-y-2 scale-x-75"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desa Kembang Kuning terletak di Kabupaten Lombok Timur, 
            Provinsi Nusa Tenggara Barat. Nikmati keindahan alam dan 
            keramahan masyarakat desa kami.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-20 z-10 pointer-events-none"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77277.77226829508!2d116.37310603429655!3d-8.51955563863828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc34d414a622a5%3A0x5030bfbcaf7e180!2sKembang%20Kuning%2C%20Kec.%20Sikur%2C%20Kabupaten%20Lombok%20Timur%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1751981960833!5m2!1sid!2sid"
            width="100%" 
            height="500" 
            className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy"
            title="Peta Lokasi Desa Kembang Kuning"
          ></iframe>
          
          <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-md">
            <span className="text-green-800 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Kembang Kuning, Lombok Timur
            </span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://www.google.com/maps/place/Kembang+Kuning,+Kec.+Sikur,+Kabupaten+Lombok+Timur,+Nusa+Tenggara+Bar./@-8.5195556,116.373106,12.71z/data=!4m6!3m5!1s0x2dcc34d414a622a5:0x5030bfbcaf7e180!8m2!3d-8.5160626!4d116.4223398!16s%2Fg%2F121_zphd?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">
          <button className="inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-md">
            Dapatkan Petunjuk Arah
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;