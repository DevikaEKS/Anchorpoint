import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CabServicesPage } from './pages/CabServicesPage';
import { HospitalityPage } from './pages/HospitalityPage';
import { EventsPage } from './pages/EventsPage';
import { CarsPage } from './pages/CarsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Sync state with URL hash for intuitive navigation & back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('cars')) {
        setCurrentPage('cars');
        const params = new URLSearchParams(hash.split('?')[1] || '');
        const id = params.get('id');
        if (id) {
          setSelectedCarId(id);
        }
      } else if (
        ['home', 'cabs', 'hospitality', 'events', 'about', 'contact'].includes(
          hash
        )
      ) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, carId?: string) => {
    setCurrentPage(page);
    if (carId) {
      setSelectedCarId(carId);
      window.location.hash = `cars?id=${carId}`;
    } else {
      if (page === 'cars') {
        window.location.hash = 'cars';
      } else if (page === 'home') {
        window.location.hash = '';
      } else {
        window.location.hash = page;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#106eea] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'cabs' && <CabServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'hospitality' && (
          <HospitalityPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'events' && <EventsPage onNavigate={handleNavigate} />}
        {currentPage === 'cars' && (
          <CarsPage
            selectedCarId={selectedCarId}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Download Modal for GitHub Pages & React Source ZIP */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
