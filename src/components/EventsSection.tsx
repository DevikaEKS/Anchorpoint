import React, { useState } from 'react';
import { Calendar, Users, Check, ArrowRight, Sparkles, Utensils, Music, Camera } from 'lucide-react';
import { CurrencyCode, EventPackage } from '../types';
import { EVENT_PACKAGES } from '../data/mockData';
import { formatPrice } from '../utils/formatCurrency';

interface EventsSectionProps {
  currentCurrency: CurrencyCode;
  onSelectEvent: (eventId: string) => void;
  onNavigateToEventsPage?: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  currentCurrency,
  onSelectEvent,
  onNavigateToEventsPage,
}) => {
  const [activePackageId, setActivePackageId] = useState(EVENT_PACKAGES[0].id);
  const [guestCountSlider, setGuestCountSlider] = useState(150);
  const [decorTier, setDecorTier] = useState<'budget' | 'standard' | 'premium'>('standard');
  const [includeCabs, setIncludeCabs] = useState(true);

  const selectedEvent = EVENT_PACKAGES.find((e) => e.id === activePackageId) || EVENT_PACKAGES[0];

  // Dynamic Event Budget Calculation
  const guestFactor = guestCountSlider / 150;
  const decorMultiplier = decorTier === 'budget' ? 0.8 : decorTier === 'standard' ? 1.0 : 1.35;
  const cabAddon = includeCabs ? 120 : 0;

  const totalCalculatedBudget = Math.round(
    selectedEvent.startingBudgetUSD * guestFactor * decorMultiplier + cabAddon
  );

  return (
    <section id="events" className="w-full py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span>Section 03</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Family & Business Events</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Affordable Event Planning for Families & Businesses
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            From joyful children's birthday parties to complete family weddings, we handle stage decoration, sound/DJ, delicious buffet catering, and guest pickup cabs.
          </p>
          {onNavigateToEventsPage && (
            <button
              onClick={onNavigateToEventsPage}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Go to Dedicated Event Management Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Event Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#121826] p-1.5 rounded-xl border border-slate-700/80 max-w-fit">
        {EVENT_PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setActivePackageId(pkg.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
              activePackageId === pkg.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {pkg.title.split('&')[0]}
          </button>
        ))}
      </div>

      {/* Grid: Showcase & Interactive Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual & Day-by-Day */}
        <div className="lg:col-span-7 space-y-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 aspect-[16/10] bg-slate-900">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                {selectedEvent.durationDays}-Day Event Coordination
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                {selectedEvent.title}
              </h3>
            </div>
          </div>

          <div className="bg-[#121826] border border-slate-700/80 rounded-xl p-5 sm:p-6">
            <h4 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Event Schedule & Flow</span>
            </h4>

            <div className="space-y-3">
              {selectedEvent.timelineDays.map((item) => (
                <div key={item.day} className="flex items-start gap-3 pb-3 border-b border-slate-800 last:border-none last:pb-0">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-xs font-bold text-emerald-400 shrink-0 tabular-nums">
                    D{item.day}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                    <p className="text-xs text-slate-300 mt-0.5">{item.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#121826] border border-slate-700/80 rounded-xl p-5 sm:p-6">
            <h4 className="font-display text-base font-bold text-white mb-3">Included in This Package:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {selectedEvent.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Budget Estimator */}
        <div className="lg:col-span-5 bg-[#121826] border border-slate-700/80 rounded-2xl p-6 sm:p-7 space-y-5 sticky top-24 shadow-xl">
          <div className="border-b border-slate-800 pb-3">
            <div className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-1">
              Live Price Estimator
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Instant Event Cost Calculator
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Adjust guest count and decor options to view your transparent estimated budget.
            </p>
          </div>

          {/* Guest Count Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
              <span>Expected Guests</span>
              <span className="text-emerald-400 font-bold tabular-nums text-sm">
                {guestCountSlider} Guests
              </span>
            </div>
            <input
              type="range"
              min={40}
              max={500}
              step={10}
              value={guestCountSlider}
              onChange={(e) => setGuestCountSlider(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer bg-slate-800 h-2 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>40 (Close Family)</span>
              <span>150 (Medium Hall)</span>
              <span>500 (Large Gathering)</span>
            </div>
          </div>

          {/* Decor Tier */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
              Stage & Hall Decoration
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setDecorTier('budget')}
                className={`py-2 px-1 text-xs font-semibold rounded-lg border text-center transition-all ${
                  decorTier === 'budget'
                    ? 'border-emerald-500 bg-emerald-600/20 text-white'
                    : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                }`}
              >
                Essential
              </button>
              <button
                onClick={() => setDecorTier('standard')}
                className={`py-2 px-1 text-xs font-semibold rounded-lg border text-center transition-all ${
                  decorTier === 'standard'
                    ? 'border-emerald-500 bg-emerald-600/20 text-white'
                    : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                }`}
              >
                Deluxe Floral
              </button>
              <button
                onClick={() => setDecorTier('premium')}
                className={`py-2 px-1 text-xs font-semibold rounded-lg border text-center transition-all ${
                  decorTier === 'premium'
                    ? 'border-emerald-500 bg-emerald-600/20 text-white'
                    : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                }`}
              >
                Grand Theme
              </button>
            </div>
          </div>

          {/* Guest Transport Checkbox */}
          <div className="p-3 bg-[#1A2234] rounded-lg border border-slate-700 text-xs">
            <label className="flex items-center gap-2 text-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={includeCabs}
                onChange={(e) => setIncludeCabs(e.target.checked)}
                className="accent-emerald-500"
              />
              <span>Include Bridal Car + 2 Guest Pickup Cabs (+{formatPrice(120, currentCurrency)})</span>
            </label>
          </div>

          {/* Summary Price */}
          <div className="pt-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 block">
              Estimated Total Package Price
            </span>
            <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums mt-1">
              {formatPrice(totalCalculatedBudget, currentCurrency)}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Stage decor, sound/DJ, seating setup, and dedicated on-site event coordinator included.
            </p>
          </div>

          <button
            onClick={() => onSelectEvent(selectedEvent.id)}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer shadow-md shadow-emerald-600/20"
          >
            <span>Book This Event Package</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
