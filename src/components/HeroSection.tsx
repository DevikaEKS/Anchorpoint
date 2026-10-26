import React, { useState } from 'react';
import { Car, Hotel, Calendar, ShieldCheck, ArrowRight, Clock, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatCurrency';
import { FLEET_VEHICLES, HOSPITALITY_PROPERTIES, EVENT_PACKAGES } from '../data/mockData';

interface HeroSectionProps {
  currentCurrency: CurrencyCode;
  onOpenBooking: (prefillService: 'cab' | 'hospitality' | 'event' | 'all_in_one', prefillId?: string) => void;
  onNavigateToCab?: () => void;
  onNavigateToEvents?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentCurrency,
  onOpenBooking,
  onNavigateToCab,
  onNavigateToEvents,
}) => {
  const [activeTab, setActiveTab] = useState<'cab' | 'hospitality' | 'event'>('cab');

  // Interactive booking selector states
  const [cabTripType, setCabTripType] = useState<'airport' | 'hourly' | 'outstation' | 'wedding'>('airport');
  const [selectedVehicleId, setSelectedVehicleId] = useState(FLEET_VEHICLES[0].id);
  const [cabDurationHours, setCabDurationHours] = useState(4);
  const [pickupCity, setPickupCity] = useState('Central City Station / Home');

  const [selectedPropertyId, setSelectedPropertyId] = useState(HOSPITALITY_PROPERTIES[0].id);
  const [stayNights, setStayNights] = useState(2);
  const [guestCount, setGuestCount] = useState(2);

  const [selectedEventId, setSelectedEventId] = useState(EVENT_PACKAGES[0].id);
  const [eventGuestTier, setEventGuestTier] = useState<'intimate' | 'standard' | 'large'>('standard');

  const currentVehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  const currentProperty = HOSPITALITY_PROPERTIES.find((p) => p.id === selectedPropertyId) || HOSPITALITY_PROPERTIES[0];
  const currentEvent = EVENT_PACKAGES.find((e) => e.id === selectedEventId) || EVENT_PACKAGES[0];

  // Dynamic estimate calculations for everyday normal people
  let estimatedCabFare = 0;
  if (cabTripType === 'airport') {
    estimatedCabFare = currentVehicle.hourlyRateUSD * 1.5;
  } else if (cabTripType === 'hourly') {
    estimatedCabFare = currentVehicle.hourlyRateUSD * cabDurationHours;
  } else if (cabTripType === 'outstation') {
    estimatedCabFare = currentVehicle.dayRateUSD * 1.1;
  } else if (cabTripType === 'wedding') {
    estimatedCabFare = currentVehicle.dayRateUSD * 1.15;
  }

  const estimatedStayFare = currentProperty.nightlyRateUSD * stayNights;

  const eventMultiplier = eventGuestTier === 'intimate' ? 0.7 : eventGuestTier === 'standard' ? 1.0 : 1.45;
  const estimatedEventBudget = Math.round(currentEvent.startingBudgetUSD * eventMultiplier);

  return (
    <section className="relative w-full pt-6 pb-14 lg:pt-10 lg:pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Hero Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/src/assets/images/hero_everyday_services_1793009741651.jpg"
          alt="Everyday family taxi and hotel travel"
          className="w-full h-full object-cover object-center opacity-25 filter saturate-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Editorial Sub-kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 rounded-full text-xs font-semibold text-emerald-400 mb-4">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Affordable & Trusted Everyday Services</span>
        </div>

        {/* Hero Headline */}
        <div className="max-w-4xl mb-6">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Reliable Cabs, Comfortable Stays & Memorable Family Events
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            The simple all-in-one platform for everyday people: book sanitized city & airport taxis, clean budget-friendly hotels, and complete family wedding & birthday planning without stress.
          </p>
        </div>

        {/* Value badges */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 mb-8">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Surge Pricing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified, Friendly Drivers & Staff</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Clean AC Cars & Sanitized Rooms</span>
          </div>
        </div>

        {/* Master Interactive Booking & Fare Estimator Panel */}
        <div className="w-full bg-[#121826]/95 border border-slate-700/80 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-7 backdrop-blur-md">
          {/* Service Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-4 mb-5">
            <div className="flex items-center gap-1.5 bg-[#0B0F19] p-1.5 rounded-xl border border-slate-700/60">
              <button
                onClick={() => setActiveTab('cab')}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'cab'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Book a Cab</span>
              </button>
              <button
                onClick={() => setActiveTab('hospitality')}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'hospitality'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Hotel className="w-4 h-4" />
                <span>Hotel Stays</span>
              </button>
              <button
                onClick={() => setActiveTab('event')}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'event'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Family Event</span>
              </button>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Estimated Price</span>
              <span className="text-xl font-bold font-display text-emerald-400 tabular-nums">
                {activeTab === 'cab' && formatPrice(estimatedCabFare, currentCurrency)}
                {activeTab === 'hospitality' && formatPrice(estimatedStayFare, currentCurrency)}
                {activeTab === 'event' && formatPrice(estimatedEventBudget, currentCurrency)}
              </span>
            </div>
          </div>

          {/* TAB 1: Everyday Cab Booking Controls */}
          {activeTab === 'cab' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Ride Purpose
                </label>
                <select
                  value={cabTripType}
                  onChange={(e) => setCabTripType(e.target.value as any)}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="airport">Airport Pickup / Drop (Fixed Fare)</option>
                  <option value="hourly">Hourly Rental (4h / 8h Local City)</option>
                  <option value="outstation">Outstation Family Round Trip</option>
                  <option value="wedding">Wedding Guest Shuttles</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Car Type
                </label>
                <select
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(e.target.value)}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  {FLEET_VEHICLES.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.name} ({formatPrice(vehicle.hourlyRateUSD, currentCurrency)}/hr)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  {cabTripType === 'hourly' ? 'Duration (Hours)' : 'Pickup Area'}
                </label>
                {cabTripType === 'hourly' ? (
                  <select
                    value={cabDurationHours}
                    onChange={(e) => setCabDurationHours(Number(e.target.value))}
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value={4}>4 Hours / 40 km (Half Day)</option>
                    <option value={8}>8 Hours / 80 km (Full Day)</option>
                    <option value={12}>12 Hours / 120 km (Extended Day)</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    placeholder="Enter pickup address or station..."
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                )}
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking('cab', selectedVehicleId)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Book This Ride</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Hotel Stays Controls */}
          {activeTab === 'hospitality' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Hotel / Resort
                </label>
                <select
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  {HOSPITALITY_PROPERTIES.map((prop) => (
                    <option key={prop.id} value={prop.id}>
                      {prop.name} ({formatPrice(prop.nightlyRateUSD, currentCurrency)}/night)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Duration (Nights)
                </label>
                <select
                  value={stayNights}
                  onChange={(e) => setStayNights(Number(e.target.value))}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value={1}>1 Night (Transit / Short Stay)</option>
                  <option value={2}>2 Nights (Weekend Getaway)</option>
                  <option value={4}>4 Nights (Family Holiday)</option>
                  <option value={7}>7 Nights (Weekly Vacation)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value={1}>1 Person (Solo Travel)</option>
                  <option value={2}>2 Persons (Couple Room)</option>
                  <option value={4}>3–4 Persons (Family Room)</option>
                </select>
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking('hospitality', selectedPropertyId)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Book Hotel Room</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Event Management Controls */}
          {activeTab === 'event' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Family Event / Function
                </label>
                <select
                  value={selectedEventId}
                  onChange={(e) => setSelectedEventId(e.target.value)}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  {EVENT_PACKAGES.map((ev) => (
                    <option key={ev.id} value={ev.id}>
                      {ev.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Expected Guests
                </label>
                <select
                  value={eventGuestTier}
                  onChange={(e) => setEventGuestTier(e.target.value as any)}
                  className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="intimate">40 – 100 Guests (Birthday / Puja)</option>
                  <option value="standard">150 – 300 Guests (Wedding / Reception)</option>
                  <option value="large">300 – 600+ Guests (Grand Celebration)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Transport Included
                </label>
                <div className="bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-200 truncate">
                  {currentEvent.fleetSupport}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking('event', selectedEventId)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Plan My Event</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 4 Quantitative Service Proof Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-6 border-t border-slate-800">
          <div className="space-y-1">
            <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">15,000+</span>
            <p className="text-xs text-slate-400">Happy airport & city cab rides completed</p>
          </div>
          <div className="space-y-1">
            <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">4.8 / 5</span>
            <p className="text-xs text-slate-400">Average customer rating for cleanliness & driver courtesy</p>
          </div>
          <div className="space-y-1">
            <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">350+</span>
            <p className="text-xs text-slate-400">Family weddings, birthdays & celebrations organized</p>
          </div>
          <div className="space-y-1">
            <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">100%</span>
            <p className="text-xs text-slate-400">Fixed rate transparency with zero hidden charges</p>
          </div>
        </div>
      </div>
    </section>
  );
};
