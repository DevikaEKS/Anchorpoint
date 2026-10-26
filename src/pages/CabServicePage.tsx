import React, { useState } from 'react';
import {
  Car,
  Plane,
  Clock,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Printer,
  Copy,
  CheckCircle2,
  Phone,
  ArrowLeft
} from 'lucide-react';
import { CurrencyCode, FleetVehicle } from '../types';
import { FLEET_VEHICLES, POPULAR_CAB_ROUTES, CAB_FAQS } from '../data/mockData';
import { formatPrice } from '../utils/formatCurrency';

interface CabServicePageProps {
  currentCurrency: CurrencyCode;
  onNavigateHome: () => void;
  onNavigateEvents: () => void;
  onOpenConcierge: () => void;
  onOpenBookingModal: (prefillId?: string) => void;
}

export const CabServicePage: React.FC<CabServicePageProps> = ({
  currentCurrency,
  onNavigateHome,
  onNavigateEvents,
  onOpenConcierge,
  onOpenBookingModal,
}) => {
  // Wizard state
  const [tripType, setTripType] = useState<'airport' | 'hourly' | 'outstation' | 'wedding'>('airport');
  const [selectedVehicleId, setSelectedVehicleId] = useState(FLEET_VEHICLES[0].id);
  const [pickupAddress, setPickupAddress] = useState('Home / Residential Society / Office');
  const [dropoffAddress, setDropoffAddress] = useState('Airport Terminal (Departures Gate)');
  const [pickupDate, setPickupDate] = useState('2026-11-05');
  const [pickupTime, setPickupTime] = useState('09:00');
  const [durationHours, setDurationHours] = useState(4);
  const [flightNumber, setFlightNumber] = useState('');
  const [passengerCount, setPassengerCount] = useState(2);
  const [customerName, setCustomerName] = useState('Sunil Verma');
  const [customerPhone, setCustomerPhone] = useState('+1 555-0199');
  const [needsChildSeat, setNeedsChildSeat] = useState(false);
  const [needsLuggageCarrier, setNeedsLuggageCarrier] = useState(false);

  // Confirmation state
  const [pageBookingConfirmed, setPageBookingConfirmed] = useState(false);
  const [generatedRefCode, setGeneratedRefCode] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const selectedVehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];

  // Dynamic Fare Calculation for everyday normal people
  let baseFareUSD = 0;
  if (tripType === 'airport') {
    baseFareUSD = selectedVehicle.hourlyRateUSD * 1.5;
  } else if (tripType === 'hourly') {
    baseFareUSD = selectedVehicle.hourlyRateUSD * durationHours;
  } else if (tripType === 'outstation') {
    baseFareUSD = selectedVehicle.dayRateUSD * 1.15;
  } else if (tripType === 'wedding') {
    baseFareUSD = selectedVehicle.dayRateUSD * 1.1;
  }

  if (needsLuggageCarrier) baseFareUSD += 8;

  const handleInstantConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `CC-CAB-${randomSuffix}`;
    setGeneratedRefCode(code);
    setPageBookingConfirmed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedRefCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const setPresetAirport = (pickup: string, dropoff: string) => {
    setPickupAddress(pickup);
    setDropoffAddress(dropoff);
  };

  return (
    <div className="w-full min-h-screen bg-[#0B0F19] text-[#F1F5F9] pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-800 bg-[#0F1422]/90 backdrop-blur-md sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-white font-semibold">Cab & Taxi Service</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateEvents}
              className="text-emerald-400 hover:underline transition-colors hidden sm:inline"
            >
              Planning a family event? View Event Packages →
            </button>
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1 px-2.5 py-1 bg-[#1A2234] border border-slate-700 rounded-lg text-xs text-slate-200 hover:border-emerald-500"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Cab Booking Helpline</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative border-b border-slate-800 overflow-hidden py-10 lg:py-14">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img
            src="/src/assets/images/cab_city_family_taxi_1793009742454.jpg"
            alt="City taxi cabs"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 rounded-full text-xs font-semibold text-emerald-400 mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Dedicated Cab Service</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl tracking-tight leading-tight">
            Reliable, Affordable Cabs for City, Airport & Outstation Travel
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Clean air-conditioned cars, polite background-verified drivers, and fixed rates with zero surge pricing. Book in under 60 seconds.
          </p>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>10-Min Early Arrival</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero Surge Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Inspected Clean AC Cars</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>24/7 Driver Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {pageBookingConfirmed ? (
          /* Confirmation Voucher */
          <div className="max-w-xl mx-auto bg-[#121826] border border-emerald-500 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                Cab Booking Confirmed!
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Booking ID: {generatedRefCode}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                Your ride is confirmed. Driver details and car registration will be sent to your phone via SMS/WhatsApp prior to pickup.
              </p>
            </div>

            <div className="bg-[#1A2234] border border-slate-700 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Vehicle:</span>
                <span className="text-white font-semibold">{selectedVehicle.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Passenger:</span>
                <span className="text-white">{customerName} ({customerPhone})</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Pickup Location:</span>
                <span className="text-white">{pickupAddress}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Destination:</span>
                <span className="text-white">{dropoffAddress}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Date & Time:</span>
                <span className="text-white">{pickupDate} at {pickupTime}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400 font-semibold">Total Fare:</span>
                <span className="font-display text-lg font-bold text-emerald-400">
                  {formatPrice(baseFareUSD, currentCurrency)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1A2234] border border-slate-700 rounded-lg hover:border-emerald-500"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
                <span>{copiedCode ? 'Copied' : 'Copy Booking ID'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
              >
                <Printer className="w-4 h-4" />
                <span>Print Booking Slip</span>
              </button>
              <button
                onClick={() => setPageBookingConfirmed(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Book Another Cab
              </button>
            </div>
          </div>
        ) : (
          /* 4-Step User-Friendly Cab Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-8 bg-[#121826] border border-slate-700/80 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl">
              <div>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Simple 4-Step Booking
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Book Your Cab in Seconds
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Clear upfront prices, zero surge charges, and verified polite drivers.
                </p>
              </div>

              {/* STEP 1: Trip Type */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  1. Select Travel Type
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setTripType('airport')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      tripType === 'airport'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Plane className="w-4 h-4 text-emerald-400 mb-1" />
                    <div className="text-xs font-bold">Airport Pickup/Drop</div>
                    <div className="text-[10px] text-slate-400">Fixed rate, no surge</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTripType('hourly')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      tripType === 'hourly'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Clock className="w-4 h-4 text-emerald-400 mb-1" />
                    <div className="text-xs font-bold">Hourly Local Rental</div>
                    <div className="text-[10px] text-slate-400">4h / 8h city stops</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTripType('outstation')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      tripType === 'outstation'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Car className="w-4 h-4 text-emerald-400 mb-1" />
                    <div className="text-xs font-bold">Outstation Trip</div>
                    <div className="text-[10px] text-slate-400">Family holiday / round trip</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTripType('wedding')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      tripType === 'wedding'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400 mb-1" />
                    <div className="text-xs font-bold">Wedding Guest Cab</div>
                    <div className="text-[10px] text-slate-400">Multiple pickups & events</div>
                  </button>
                </div>
              </div>

              {/* STEP 2: Route, Location & Schedule */}
              <div className="space-y-3.5 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  2. Pickup, Drop & Date
                </span>

                {tripType === 'airport' && (
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-1">
                      Quick Airport Shortcuts (Click to autofill):
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      <button
                        type="button"
                        onClick={() => setPresetAirport('City Center / Home', 'Airport Terminal 2 (Departures)')}
                        className="px-2.5 py-1 bg-[#1A2234] border border-slate-700 rounded-lg text-slate-300 hover:border-emerald-500"
                      >
                        Home → Airport T2
                      </button>
                      <button
                        type="button"
                        onClick={() => setPresetAirport('Airport Terminal 1 (Arrivals)', 'Downtown Hotel / Home')}
                        className="px-2.5 py-1 bg-[#1A2234] border border-slate-700 rounded-lg text-slate-300 hover:border-emerald-500"
                      >
                        Airport T1 → City Hotel
                      </button>
                      <button
                        type="button"
                        onClick={() => setPresetAirport('Central Railway Station', 'Home Doorstep')}
                        className="px-2.5 py-1 bg-[#1A2234] border border-slate-700 rounded-lg text-slate-300 hover:border-emerald-500"
                      >
                        Railway Station → Home
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder="House no, street, locality or station..."
                        className="w-full bg-[#1A2234] border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {tripType === 'hourly' ? 'Rental Duration' : 'Destination Address *'}
                    </label>
                    {tripType === 'hourly' ? (
                      <select
                        value={durationHours}
                        onChange={(e) => setDurationHours(Number(e.target.value))}
                        className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                      >
                        <option value={4}>4 Hours / 40 km (Half Day City)</option>
                        <option value={8}>8 Hours / 80 km (Full Day City)</option>
                        <option value={12}>12 Hours / 120 km (Full Day Extended)</option>
                      </select>
                    ) : (
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={dropoffAddress}
                          onChange={(e) => setDropoffAddress(e.target.value)}
                          placeholder="Airport terminal, hotel or address..."
                          className="w-full bg-[#1A2234] border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Passengers
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={passengerCount}
                      onChange={(e) => setPassengerCount(Number(e.target.value))}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 3: Choose Vehicle */}
              <div className="space-y-3.5 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  3. Select Your Preferred Car
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FLEET_VEHICLES.map((vehicle) => {
                    const isSelected = selectedVehicleId === vehicle.id;
                    return (
                      <div
                        key={vehicle.id}
                        onClick={() => setSelectedVehicleId(vehicle.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-950/20 ring-1 ring-emerald-500'
                            : 'border-slate-700 bg-[#1A2234] hover:border-slate-500'
                        }`}
                      >
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-18 h-14 object-cover rounded-lg shrink-0 bg-slate-900"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-white truncate">{vehicle.name}</h4>
                            {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                          </div>
                          <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                            {formatPrice(vehicle.hourlyRateUSD, currentCurrency)} / hr
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                            <span>{vehicle.capacityPassengers} Seats</span>
                            <span aria-hidden="true">·</span>
                            <span>{vehicle.capacityLuggage} Bags</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: Passenger Info */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  4. Passenger Contact & Preferences
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (For Driver SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+1 555-0199 or mobile number"
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs pt-1">
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needsLuggageCarrier}
                      onChange={(e) => setNeedsLuggageCarrier(e.target.checked)}
                      className="accent-emerald-500"
                    />
                    <span>Extra luggage roof carrier (+{formatPrice(8, currentCurrency)})</span>
                  </label>
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needsChildSeat}
                      onChange={(e) => setNeedsChildSeat(e.target.checked)}
                      className="accent-emerald-500"
                    />
                    <span>Free child safety booster seat</span>
                  </label>
                </div>
              </div>

              {/* Total & Confirm Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Total Estimated Fare</span>
                  <div className="font-display text-2xl font-bold text-emerald-400 tabular-nums">
                    {formatPrice(baseFareUSD, currentCurrency)}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Includes clean AC car, fuel, driver allowance and tolls.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleInstantConfirm}
                  className="w-full sm:w-auto px-7 py-3 text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-600/20 cursor-pointer whitespace-nowrap"
                >
                  Confirm & Reserve Cab
                </button>
              </div>
            </div>

            {/* Right Column: Vehicle specs summary */}
            <div className="lg:col-span-4 bg-[#121826] border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-5 sticky top-24">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-0.5">
                  Selected Car
                </span>
                <h3 className="font-display text-lg font-bold text-white">{selectedVehicle.name}</h3>
                <p className="text-xs text-slate-400">{selectedVehicle.subtitle}</p>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs bg-[#1A2234] p-3.5 rounded-xl border border-slate-700">
                <div>
                  <span className="text-slate-400 block">Seating:</span>
                  <span className="text-white font-semibold">{selectedVehicle.capacityPassengers} Adults</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Trunk:</span>
                  <span className="text-white font-semibold">{selectedVehicle.capacityLuggage} Suitcases</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  What's Included
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedVehicle.highlightFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Popular Fixed-Rate Everyday Routes */}
        <div className="my-12">
          <div className="max-w-2xl mb-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              Popular Fixed-Rate City & Airport Trips
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Guaranteed fixed rates with zero peak-hour surge charges. Book with one click.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POPULAR_CAB_ROUTES.map((route) => (
              <div
                key={route.id}
                className="bg-[#121826] border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold mb-1.5">
                    <span>{route.vehicleModel}</span>
                    <span className="text-slate-400">{route.durationApprox}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {route.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-300 mb-3">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Pickup:</strong> {route.pickup}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Dropoff:</strong> {route.dropoff}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Fixed Fare</span>
                    <span className="font-display text-lg font-bold text-emerald-400 tabular-nums">
                      {formatPrice(route.priceUSD, currentCurrency)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setPickupAddress(route.pickup);
                      setDropoffAddress(route.dropoff);
                      setSelectedVehicleId(route.vehicleId);
                      window.scrollTo({ top: 280, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Book Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Matrix Table */}
        <div className="my-12 bg-[#121826] border border-slate-700/80 rounded-2xl p-5 sm:p-6">
          <div className="mb-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white">
              Fleet Options & Fare Comparison
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Compare seating capacity, luggage limit, and package rates.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 px-3">Vehicle</th>
                  <th className="py-2.5 px-3">Ideal For</th>
                  <th className="py-2.5 px-3">Seats</th>
                  <th className="py-2.5 px-3">Luggage</th>
                  <th className="py-2.5 px-3">Air Conditioning</th>
                  <th className="py-2.5 px-3">Hourly Rate</th>
                  <th className="py-2.5 px-3">8-Hr (80 km)</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {FLEET_VEHICLES.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-[#1A2234] transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-white font-display">
                      {vehicle.name}
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 text-[11px]">
                      {vehicle.subtitle}
                    </td>
                    <td className="py-2.5 px-3 tabular-nums">{vehicle.capacityPassengers} Persons</td>
                    <td className="py-2.5 px-3 tabular-nums">{vehicle.capacityLuggage} Bags</td>
                    <td className="py-2.5 px-3 text-emerald-400">Included</td>
                    <td className="py-2.5 px-3 font-bold tabular-nums text-emerald-400">
                      {formatPrice(vehicle.hourlyRateUSD, currentCurrency)}
                    </td>
                    <td className="py-2.5 px-3 font-bold tabular-nums text-white">
                      {formatPrice(vehicle.dayRateUSD, currentCurrency)}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => {
                          setSelectedVehicleId(vehicle.id);
                          window.scrollTo({ top: 280, behavior: 'smooth' });
                        }}
                        className="px-2.5 py-1 bg-emerald-600/20 text-xs font-semibold text-emerald-400 border border-emerald-500/40 rounded-lg hover:bg-emerald-600 hover:text-white"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cab FAQs */}
        <div className="my-12 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-display text-xl font-bold text-white">
              Cab Service Questions & Answers
            </h2>
          </div>

          <div className="space-y-2.5">
            {CAB_FAQS.map((faq, index) => {
              const isOpen = expandedFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#121826] border border-slate-700/80 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
