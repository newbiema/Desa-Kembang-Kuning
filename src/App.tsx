import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfilSection";
import PotensiSection from "./components/PotensiSection";
import GallerySection from "./components/GallerySection";
import MapSection from "./components/MapSection";
import Footer from "./components/FooterSection";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Route untuk tampilan utama (landing page) */}
            <Route path="/" element={
              <>
                <HeroSection />
                <ProfileSection />
                <PotensiSection />
                <GallerySection />
                <MapSection />
              </>
            } />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;