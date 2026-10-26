import React from 'react';
import { Car, Hotel, Calendar, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CurrencyCode } from '../types';

interface TrinityBundleProps {
  currentCurrency: CurrencyCode;
  onOpenBookingAllInOne: () => void;
}

export const TrinityBundleSection: React.FC<TrinityBundleProps> = ({
  currentCurrency,
  onOpenBookingAllInOne,
}) => {
  return (
    <section id="bundle" className="w-full py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
      <div className="bg-gradient-to-br from-[#121826] via-[#101522] to-[#0B0F19] border border-slate-700/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 rounded-full text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The All-In-One Combo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Everything Together in One Simple Package
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Planning a family function, marriage, or out-of-town relatives visit? Instead of running around finding separate taxi drivers, hotels, and stage decorators, CityConnect manages all three together with one friendly coordinator.
          </p>
        </div>

        {/* 3 Pillars Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-[#172033] border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Pillar 1 · Travel
              </span>
              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Airport & Station Cabs
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Smooth pickup and drop for all your relatives directly from airport terminals and railway platforms in clean Innovas or Sedans.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct doorstep pickup</span>
            </div>
          </div>

          <div className="bg-[#172033] border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
                <Hotel className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Pillar 2 · Hospitality
              </span>
              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Comfortable Family Rooms
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clean, sanitized AC hotel rooms near your event hall with free breakfast, 24/7 hot water, and group room blocks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free morning breakfast</span>
            </div>
          </div>

          <div className="bg-[#172033] border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Pillar 3 · Celebration
              </span>
              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Stage Decor & Catering
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Floral/balloon stage decoration, DJ sound system, photography, and delicious multi-cuisine buffet meals all coordinated smoothly.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated event manager</span>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#1A2338] border border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Get an All-In-One Combo Quote (Save 15%)
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Combine cabs, hotel room blocks, and event decorations in one simple request for our best discounted package rates.
            </p>
          </div>

          <button
            onClick={onOpenBookingAllInOne}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer shadow-md shadow-emerald-600/20 whitespace-nowrap shrink-0"
          >
            <span>Request Combo Package</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
