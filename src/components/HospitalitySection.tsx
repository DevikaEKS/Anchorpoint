import React, { useState } from 'react';
import { BedDouble, Users, Check, MapPin, Coffee, Wifi, AirVent, ShieldCheck } from 'lucide-react';
import { CurrencyCode, HospitalityProperty } from '../types';
import { HOSPITALITY_PROPERTIES } from '../data/mockData';
import { formatPrice } from '../utils/formatCurrency';

interface HospitalitySectionProps {
  currentCurrency: CurrencyCode;
  onSelectProperty: (propertyId: string) => void;
}

export const HospitalitySection: React.FC<HospitalitySectionProps> = ({
  currentCurrency,
  onSelectProperty,
}) => {
  return (
    <section id="hospitality" className="w-full py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span>Section 02</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Comfortable Stays</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Clean, Cozy & Budget-Friendly Hotels
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            Verified hotels and family resorts with free hot breakfast, superfast Wi-Fi, chilled air conditioning, and seamless cab pickups right at the front porch.
          </p>
        </div>

        {/* Quality guarantee */}
        <div className="flex items-center gap-3 bg-[#151D2D] border border-slate-700 rounded-xl p-3 text-xs text-slate-300 max-w-xs shrink-0">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>100% Verified Cleanliness with crisp white linens and sanitization guarantee.</span>
        </div>
      </div>

      {/* Featured Marquee Hotel */}
      <div className="mb-10 rounded-2xl overflow-hidden border border-slate-700/80 bg-[#121826]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px]">
            <img
              src="/src/assets/images/hospitality_cozy_hotel_1793009743039.jpg"
              alt="Clean comfortable modern hotel room"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
                Top Rated Family Choice
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                City Park Comfort Hotel & Suites
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Conveniently located near the central transit metro and city market. Enjoy a peaceful night's sleep in our soundproof AC rooms with warm hospitality, hot water showers, and a complimentary breakfast buffet every morning.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Complimentary hot breakfast buffet included</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Free high-speed Wi-Fi and work desk</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Direct CityConnect cab pickup from hotel portico</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Nightly Tariff</span>
                <span className="font-display text-2xl font-bold text-emerald-400 tabular-nums">
                  {formatPrice(38, currentCurrency)}
                  <span className="text-xs font-normal text-slate-400"> / night</span>
                </span>
              </div>
              <button
                onClick={() => onSelectProperty('city-park-comfort')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-md"
              >
                Book This Room
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of properties */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {HOSPITALITY_PROPERTIES.map((property) => (
          <div
            key={property.id}
            className="bg-[#121826] border border-slate-700/80 rounded-xl overflow-hidden hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0B0F19]/80 backdrop-blur-sm px-2.5 py-0.5 rounded text-[11px] font-medium text-emerald-400 border border-slate-700">
                  {property.estateType}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{property.location}</span>
                </div>

                <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {property.name}
                </h3>

                <div className="flex items-center gap-3 text-xs text-slate-400 my-2.5 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{property.bedrooms} Room</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Up to {property.maxGuests} Guests</span>
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 my-3">
                  {property.amenities.slice(0, 2).map((amenity, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block">Nightly Price</span>
                <span className="font-display text-base sm:text-lg font-bold text-emerald-400 tabular-nums">
                  {formatPrice(property.nightlyRateUSD, currentCurrency)}
                </span>
              </div>

              <button
                onClick={() => onSelectProperty(property.id)}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                Book Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
