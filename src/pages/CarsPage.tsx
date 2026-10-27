import React, { useState, useEffect, useRef } from 'react';
import { PageId, Car, CarCategory } from '../types';
import { fleetCars, fleetCategories } from '../data/fleetData';
import { CarCard } from '../components/CarCard';
import { CarDetailSection } from '../components/CarDetailSection';
import {
  Car as CarIcon,
  Search,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronDown,
} from 'lucide-react';

interface CarsPageProps {
  selectedCarId?: string | null;
  onNavigate: (page: PageId, carId?: string) => void;
}

export const CarsPage: React.FC<CarsPageProps> = ({ selectedCarId, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<CarCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(() => {
    if (selectedCarId) {
      return fleetCars.find((c) => c.id === selectedCarId) || fleetCars[0];
    }
    return fleetCars[0]; // Default to Dzire or first car so details are immediately visible
  });

  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCarId) {
      const found = fleetCars.find((c) => c.id === selectedCarId);
      if (found) {
        setSelectedCar(found);
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedCarId]);

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
    // Smooth scroll to vehicle description section
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredCars = fleetCars.filter((car) => {
    const matchesCategory =
      activeCategory === 'all' || car.category === activeCategory;
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const taxiCount = fleetCars.filter((c) => c.isTaxi).length;
  const executiveCount = fleetCars.length - taxiCount;

  return (
    <div className="bg-white min-h-screen">
      {/* Top Header Section on pure white background */}
      <section className="border-b border-slate-100 bg-white pt-10 pb-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#106eea] cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('cabs')}
              className="hover:text-[#106eea] cursor-pointer"
            >
              Cab Services
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">All Cars & Taxis</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider">
                  Anchor Point Vehicle Fleet & Taxi Hub
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                  {fleetCars.length} Total Vehicles Available
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071830] tracking-tight">
                All Available Cars & Taxis
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-3xl mt-2 leading-relaxed">
                Welcome to our complete vehicle showcase. Here you’ll find all our cars present in one place—including daily city taxis (Maruti Dzire, Toyota Etios, Hyundai Aura), 7-seater family taxi MPVs (Ertiga), executive fleet MPVs (Innova Crysta, Hycross Hybrid), and luxury sedans (BMW 5 Series, Mercedes S-Class, Lexus LM).
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919003163335"
                className="flex items-center gap-2 px-4.5 py-2.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-[#106eea]" />
                <span>Call Chauffeur Desk: +91 90031 63335</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Car Details Spotlight (When a car is clicked, show its details here) */}
      <div ref={detailRef} className="scroll-mt-20">
        {selectedCar && (
          <section className="bg-slate-50/70 border-b border-slate-200/90 py-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#106eea] ring-4 ring-sky-100" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#071830]">
                    Showing Details For: <span className="text-[#106eea]">{selectedCar.name}</span>
                  </span>
                  {selectedCar.isTaxi && (
                    <span className="text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 bg-amber-400 text-slate-900 rounded-md">
                      Taxi Cab
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-500">
                  Select any other car below to inspect its description and rates
                </span>
              </div>

              {/* Render the full car description, specs & booking form */}
              <CarDetailSection
                car={selectedCar}
                onClose={() => setSelectedCar(null)}
              />
            </div>
          </section>
        )}
      </div>

      {/* Filter Tabs & Search Bar */}
      <section className="py-6 px-4 sm:px-8 bg-white border-b border-slate-100 sticky top-18 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {fleetCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? fleetCars.length
                  : fleetCars.filter((c) => c.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CarCategory)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#106eea] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by car, taxi model, brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea] focus:ring-1 focus:ring-[#106eea]"
            />
          </div>
        </div>
      </section>

      {/* Grid of All Cars Present (Showroom / Fleet Garage) */}
      <section className="py-12 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#071830]">
                All Cars in Chennai Fleet ({filteredCars.length} Available)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any vehicle card to load its detailed description and booking calculator above
              </p>
            </div>
          </div>

          {filteredCars.length === 0 ? (
            <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200/80">
              <CarIcon className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-800">No vehicles match your query</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try resetting your search query or selecting "All Fleet & Taxis".
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-2 text-xs font-semibold text-[#106eea] bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
              >
                Reset Vehicle Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  isSelected={selectedCar?.id === car.id}
                  onSelect={handleSelectCar}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Taxi vs Executive Features Comparison */}
      <section className="py-12 px-4 sm:px-8 bg-slate-50/70 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Anchor Point Standards
            </span>
            <h3 className="text-2xl font-bold text-[#071830]">
              Every Car & Taxi Includes Anchor Point Quality
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <CarIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830]">City Taxis & Airport Cabs</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Featuring verified commercial sedans (Dzire, Etios, Aura) and Ertiga MPVs with flat airport pricing from ₹850, clean AC cabins, and meter transparency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830]">Police-Verified Drivers</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                All drivers undergo comprehensive police background checks, commercial license verification, and route training across Chennai, OMR, and major highway routes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830]">24/7 Dispatch & No Surge</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                No surge pricing during rain or rush hours. Fixed hourly and airport packages with instantaneous corporate GST billing receipts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
