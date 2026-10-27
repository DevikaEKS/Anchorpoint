import React from 'react';
import { Car } from '../types';
import { Users, Briefcase, Fuel, Cog, ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  isSelected?: boolean;
  onSelect: (car: Car) => void;
  onBookNow?: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(car)}
      className={`group bg-white rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
        isSelected
          ? 'border-[#106eea] ring-2 ring-[#106eea]/30 shadow-md transform -translate-y-0.5'
          : 'border-slate-200/90 hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <div>
        {/* Car photo frame */}
        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = './assets/images/hero_fleet_mobility_1793079585882.jpg';
            }}
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {car.isTaxi ? (
              <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 bg-amber-400 text-slate-900 rounded-md shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                <span>Taxi / Cab</span>
              </span>
            ) : (
              <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#071830] rounded-md shadow-xs">
                {car.categoryLabel}
              </span>
            )}
            {car.isPopular && (
              <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-1 bg-[#106eea] text-white rounded-md shadow-xs">
                Popular
              </span>
            )}
            {isSelected && (
              <span className="text-[11px] font-bold tracking-wide uppercase px-2 py-1 bg-emerald-600 text-white rounded-md shadow-xs animate-pulse">
                Active Selection
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                {car.brand}
              </span>
              <h3 className="text-lg font-bold text-[#071830] leading-snug group-hover:text-[#106eea] transition-colors mt-0.5">
                {car.name}
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {car.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-4 gap-2 mt-4 pt-3.5 border-t border-slate-100 text-slate-600">
            <div className="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-lg text-center">
              <Users className="w-4 h-4 text-slate-500 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">{car.specs.seatingCapacity} Seats</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-lg text-center">
              <Briefcase className="w-4 h-4 text-slate-500 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">{car.specs.luggageCapacity} Bags</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-lg text-center">
              <Fuel className="w-4 h-4 text-slate-500 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">{car.specs.fuelType}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-lg text-center">
              <Cog className="w-4 h-4 text-slate-500 mb-1" />
              <span className="text-[11px] font-semibold text-slate-800">{car.specs.transmission.slice(0, 4)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer with Price & Action */}
      <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
            {car.isTaxi ? 'Airport Transfer from' : 'Local 8hr/80km from'}
          </span>
          <span className="text-base font-extrabold text-[#071830]">
            ₹{(car.isTaxi ? car.rates.airportFlatRate : car.rates.local8hr80km).toLocaleString('en-IN')}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(car);
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            isSelected
              ? 'bg-[#106eea] text-white shadow-xs'
              : 'text-[#106eea] bg-sky-50 hover:bg-sky-100/80'
          }`}
        >
          <span>{isSelected ? 'Viewing Details' : 'Show Details'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
