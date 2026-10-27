import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, Car, ChevronRight, Download } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, carId?: string) => void;
  onOpenDownload?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDownload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'cabs', label: 'Cab Services' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'events', label: 'Event Management' },
    { id: 'cars', label: 'Cars & Fleet' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top micro-bar for direct contact info */}
      <div className="bg-[#071830] text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="hidden sm:inline text-slate-400">Anchor Point Hospitality Private Limited · Chennai</span>
            <span className="text-sky-300 font-medium">24/7 Dispatch Desk</span>
          </div>
          <div className="flex items-center gap-5 text-xs">
            <a
              href="tel:+919003163335"
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              
            </a>
           
            
          </div>
        </div>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Single element brand wordmark with anchor icon */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group shrink-0"
          aria-label="Anchor Point Home"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#106eea] to-[#0ea5e9] p-2 flex items-center justify-center shadow-xs">
            <img
              src="./assets/logo_icon.png"
              alt="Anchor Point Icon"
              className="w-full h-full object-contain brightness-0 invert"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-[#071830] font-sans">
                Anchor <span className="text-[#106eea]">Point</span>
              </span>
            </div>
            <span className="text-[10px] tracking-wider uppercase text-slate-600 font-medium">
              Mobility · Hospitality · Events
            </span>
          </div>
        </button>

        {/* Zone 2: 4-7 single-line concise navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors rounded-md relative cursor-pointer ${
                  isActive
                    ? 'text-[#106eea] font-semibold bg-sky-50/70'
                    : 'text-slate-600 hover:text-[#071830] hover:bg-slate-50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#106eea] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Download ZIP Button */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
        

         
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#106eea] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-left text-sm font-medium cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-[#106eea] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('cars')}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#106eea] rounded-lg shadow-sm"
            >
              <Car className="w-4 h-4" />
              <span>Explore All Available Cars</span>
            </button>
           
            <a
              href="tel:+919003163335"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-[#106eea]" />
              <span>Call Us: +91 90031 63335</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
