import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Car, Calendar, Sparkles } from 'lucide-react';
import { CurrencyCode, NavigationPage } from '../types';
import { CURRENCIES } from '../data/mockData';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  onOpenBooking: (prefillService?: 'cab' | 'hospitality' | 'event' | 'all_in_one') => void;
  onOpenConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
  onOpenConcierge,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const handleNavClick = (page: NavigationPage, anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    if (anchor) {
      setTimeout(() => {
        const target = document.querySelector(anchor);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-600/20 group-hover:bg-emerald-500 transition-colors">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white block leading-none">
              CityConnect
            </span>
            <span className="text-[11px] text-emerald-400 font-medium">Cabs · Stays · Events</span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 cursor-pointer ${
              currentPage === 'home'
                ? 'text-white border-emerald-500 font-semibold'
                : 'text-slate-300 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            All-In-One Home
          </button>

          <button
            onClick={() => handleNavClick('cab')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 cursor-pointer ${
              currentPage === 'cab'
                ? 'text-white border-emerald-500 font-semibold'
                : 'text-slate-300 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            Cab Service
          </button>

          <button
            onClick={() => handleNavClick('events')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 cursor-pointer ${
              currentPage === 'events'
                ? 'text-white border-emerald-500 font-semibold'
                : 'text-slate-300 border-transparent hover:text-white hover:border-slate-600'
            }`}
          >
            Event Management
          </button>

          <button
            onClick={() => handleNavClick('home', '#hospitality')}
            className="text-slate-300 border-b-2 border-transparent hover:text-white hover:border-slate-600 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer"
          >
            Hotel Stays
          </button>

          <button
            onClick={() => handleNavClick('home', '#bundle')}
            className="text-slate-300 border-b-2 border-transparent hover:text-white hover:border-slate-600 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer"
          >
            Package Combos
          </button>
        </nav>

        {/* Zone 3: Currency, Hotline & Booking Button */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Currency dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-200 bg-[#151D2D] border border-slate-700 rounded-lg hover:border-emerald-500/60 transition-colors whitespace-nowrap shrink-0"
              title="Change Currency"
            >
              <span>{currentCurrency}</span>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#151D2D] border border-slate-700 rounded-lg shadow-xl py-1 z-50">
                {Object.keys(CURRENCIES).map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      onCurrencyChange(code as CurrencyCode);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between ${
                      currentCurrency === code
                        ? 'bg-emerald-600/30 text-white font-semibold'
                        : 'text-slate-300 hover:bg-[#1E293B] hover:text-white'
                    }`}
                  >
                    <span>{code}</span>
                    <span className="text-slate-400">{CURRENCIES[code].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Help Line */}
          <button
            onClick={onOpenConcierge}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-[#151D2D] border border-slate-700 rounded-lg hover:border-slate-500 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Helpline</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => onOpenBooking('all_in_one')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] rounded-lg transition-all shadow-md shadow-emerald-600/20 whitespace-nowrap shrink-0"
          >
            Book Online
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#0F1422] border-b border-slate-800 space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-1.5 text-left transition-colors ${
                currentPage === 'home' ? 'text-emerald-400 font-semibold' : 'hover:text-white'
              }`}
            >
              All-In-One Home
            </button>
            <button
              onClick={() => handleNavClick('cab')}
              className={`py-1.5 text-left transition-colors ${
                currentPage === 'cab' ? 'text-emerald-400 font-semibold' : 'hover:text-white'
              }`}
            >
              Cab Service (Dedicated Page)
            </button>
            <button
              onClick={() => handleNavClick('events')}
              className={`py-1.5 text-left transition-colors ${
                currentPage === 'events' ? 'text-emerald-400 font-semibold' : 'hover:text-white'
              }`}
            >
              Event Management (Dedicated Page)
            </button>
            <button
              onClick={() => handleNavClick('home', '#hospitality')}
              className="py-1.5 text-left hover:text-white transition-colors"
            >
              Comfortable Hotel Stays
            </button>
            <button
              onClick={() => handleNavClick('home', '#bundle')}
              className="py-1.5 text-left hover:text-white transition-colors"
            >
              Combined Value Packages
            </button>
          </nav>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="flex items-center gap-2 text-xs text-emerald-400 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call 24/7 Helpline: 1800-202-3000</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
