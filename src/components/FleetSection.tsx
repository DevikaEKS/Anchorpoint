import React, { useState } from 'react';
import { Users, Briefcase, Check, Info, ArrowUpRight, ShieldCheck, Car } from 'lucide-react';
import { CurrencyCode, FleetCategory, FleetVehicle } from '../types';
import { FLEET_VEHICLES } from '../data/mockData';
import { formatPrice } from '../utils/formatCurrency';

interface FleetSectionProps {
  currentCurrency: CurrencyCode;
  onSelectVehicle: (vehicleId: string) => void;
  onNavigateToCabPage?: () => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  currentCurrency,
  onSelectVehicle,
  onNavigateToCabPage,
}) => {
  const [rateMode, setRateMode] = useState<'hourly' | 'daily'>('hourly');
  const [detailVehicle, setDetailVehicle] = useState<FleetVehicle | null>(null);

  return (
    <section id="fleet" className="w-full py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span>Section 01</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Reliable Cabs</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Clean, Affordable Cabs for Everyday Travel
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            Choose from economical hatchbacks, comfortable sedans, and 7-seater family SUVs with chilled AC and verified, friendly local drivers.
          </p>
          {onNavigateToCabPage && (
            <button
              onClick={onNavigateToCabPage}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Go to Dedicated Cab Service Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Rate Mode Toggle */}
        <div className="flex items-center p-1 bg-[#151D2D] border border-slate-700 rounded-lg shrink-0">
          <button
            onClick={() => setRateMode('hourly')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              rateMode === 'hourly'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Hourly Fare
          </button>
          <button
            onClick={() => setRateMode('daily')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              rateMode === 'daily'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            8-Hour / 80km Package
          </button>
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {FLEET_VEHICLES.map((vehicle) => {
          const displayPrice =
            rateMode === 'hourly'
              ? `${formatPrice(vehicle.hourlyRateUSD, currentCurrency)} / hr`
              : `${formatPrice(vehicle.dayRateUSD, currentCurrency)} / 8 hrs`;

          return (
            <div
              key={vehicle.id}
              className="bg-[#121826] border border-slate-700/80 rounded-xl overflow-hidden hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0B0F19]/80 backdrop-blur-sm px-2.5 py-0.5 rounded text-[11px] font-medium text-emerald-400 border border-slate-700">
                    {vehicle.subtitle}
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {vehicle.name}
                  </h3>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 my-2.5 pt-2 border-t border-slate-800">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{vehicle.capacityPassengers} Seats</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{vehicle.capacityLuggage} Bags</span>
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1 my-3 text-xs text-slate-300">
                    {vehicle.highlightFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action & Price */}
              <div className="p-4 sm:p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    {rateMode === 'hourly' ? 'Starting at' : 'Full Day (80 km)'}
                  </span>
                  <span className="text-base font-bold font-display text-emerald-400 tabular-nums">
                    {displayPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setDetailVehicle(vehicle)}
                    className="p-2 text-slate-400 hover:text-white bg-[#1A2234] border border-slate-700 rounded-lg hover:border-slate-500 transition-colors"
                    title="View Car Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onSelectVehicle(vehicle.id)}
                    className="px-3 py-1.5 text-xs font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Book Cab
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for details */}
      {detailVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121826] border border-slate-700 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setDetailVehicle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              ✕
            </button>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              {detailVehicle.name}
            </h3>
            <p className="text-xs text-slate-400 mb-4">{detailVehicle.tagline}</p>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#1A2234] rounded-lg border border-slate-700 space-y-1">
                <div className="font-semibold text-white">Engine & A/C:</div>
                <div className="text-slate-300">{detailVehicle.engine}</div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Features Included in Fare:</h4>
                <div className="space-y-1.5">
                  {detailVehicle.highlightFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Hourly Rate:</span>
                  <span className="font-display text-lg font-bold text-emerald-400">
                    {formatPrice(detailVehicle.hourlyRateUSD, currentCurrency)}/hr
                  </span>
                </div>
                <button
                  onClick={() => {
                    const id = detailVehicle.id;
                    setDetailVehicle(null);
                    onSelectVehicle(id);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
