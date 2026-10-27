import React, { useState } from 'react';
import { Car } from '../types';
import {
  Users,
  Briefcase,
  Fuel,
  Cog,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  Sparkles,
  MapPin,
  Check,
  Send,
  X,
  CreditCard,
} from 'lucide-react';

interface CarDetailSectionProps {
  car: Car;
  onClose?: () => void;
  isModal?: boolean;
}

export const CarDetailSection: React.FC<CarDetailSectionProps> = ({
  car,
  onClose,
  isModal = false,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<'local' | 'airport' | 'outstation'>('local');
  const [outstationKm, setOutstationKm] = useState<number>(150);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    pickupLocation: 'Chennai Airport / City Central',
    notes: '',
  });

  // Calculate dynamic estimated rate
  const calculateEstimate = () => {
    if (selectedPackage === 'local') {
      return car.rates.local8hr80km;
    } else if (selectedPackage === 'airport') {
      return car.rates.airportFlatRate;
    } else {
      return Math.round(outstationKm * car.rates.outstationPerKm);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setBookingSubmitted(true);
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden ${isModal ? 'max-w-4xl w-full my-6' : 'w-full'}`}>
      {/* Top Banner & Header */}
      <div className="p-6 md:p-8 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close vehicle description"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#106eea] bg-sky-50 px-3 py-1 rounded-md">
            {car.categoryLabel}
          </span>
          <span className="text-xs text-slate-500 font-medium">·</span>
          <span className="text-xs font-medium text-slate-600">Model: {car.brand}</span>
          <span className="text-xs text-slate-500 font-medium">·</span>
          <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Fleet Available in Chennai
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#071830] tracking-tight">
          {car.name}
        </h2>
        <p className="text-sm md:text-base text-slate-600 mt-1 font-medium">
          {car.tagline}
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8 bg-white">
        {/* Visual Showcase + Quick At-A-Glance specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/10] relative">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Chauffeur-Driven · 100% Sanitized Fleet</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/70 p-5 rounded-xl border border-slate-200/80">
            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                Key Vehicle Specifications
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white p-3 rounded-lg border border-slate-200/60 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block">Seating Capacity</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#071830] mt-0.5 text-sm">
                    <Users className="w-4 h-4 text-[#106eea]" />
                    <span>{car.specs.seatingCapacity} Passengers</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200/60 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block">Luggage Space</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#071830] mt-0.5 text-sm">
                    <Briefcase className="w-4 h-4 text-[#106eea]" />
                    <span>{car.specs.luggageCapacity} Large Bags</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200/60 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block">Fuel / Powertrain</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#071830] mt-0.5 text-sm">
                    <Fuel className="w-4 h-4 text-[#106eea]" />
                    <span>{car.specs.fuelType}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200/60 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block">Transmission</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#071830] mt-0.5 text-sm">
                    <Cog className="w-4 h-4 text-[#106eea]" />
                    <span>{car.specs.transmission}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 space-y-2 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200/60">
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Engine / Power:</span>
                  <span className="font-semibold text-slate-800 text-right">{car.specs.engine}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Climate System:</span>
                  <span className="font-semibold text-slate-800 text-right">{car.specs.airConditioning}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Safety Rating:</span>
                  <span className="font-semibold text-emerald-700 text-right">{car.specs.safetyRating}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-xs text-slate-500">Starting Rental Package</span>
              <div className="flex items-baseline justify-between mt-0.5">
                <span className="text-2xl font-extrabold text-[#071830]">
                  ₹{car.rates.local8hr80km.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500">Local 8 Hours / 80 Km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description Narrative */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#071830] border-b border-slate-100 pb-2">
            Vehicle Overview & Experience
          </h3>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {car.detailedOverview}
          </p>
        </div>

        {/* Features & Amenities Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vehicle Engineering & Comfort Features */}
          <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-200/80">
            <h4 className="text-sm font-bold text-[#071830] flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#106eea]" />
              <span>Comfort & Vehicle Highlights</span>
            </h4>
            <ul className="space-y-2.5">
              {car.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#106eea] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complimentary On-Board Amenities */}
          <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-200/80">
            <h4 className="text-sm font-bold text-[#071830] flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Chauffeur & On-Board Hospitality</span>
            </h4>
            <ul className="space-y-2.5">
              {car.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ideal For scenarios */}
        <div className="bg-sky-50/40 p-5 rounded-xl border border-sky-100">
          <span className="text-xs font-bold text-[#071830] uppercase tracking-wider block mb-2">
            Recommended Travel Scenarios for {car.name}
          </span>
          <div className="flex flex-wrap gap-2">
            {car.idealFor.map((item, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-slate-800 bg-white border border-sky-200/60 px-3 py-1.5 rounded-lg shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Transparent Rates Grid */}
        <div>
          <h3 className="text-lg font-bold text-[#071830] mb-3">
            Transparent Tariff Structure
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 block uppercase">Local 8h / 80km</span>
              <span className="text-lg font-bold text-[#071830] block mt-1">
                ₹{car.rates.local8hr80km.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500">Base package</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 block uppercase">Extra Km Rate</span>
              <span className="text-lg font-bold text-[#071830] block mt-1">
                ₹{car.rates.extraKmRate}/km
              </span>
              <span className="text-[10px] text-slate-500">Beyond 80 km</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 block uppercase">Extra Hour</span>
              <span className="text-lg font-bold text-[#071830] block mt-1">
                ₹{car.rates.extraHourRate}/hr
              </span>
              <span className="text-[10px] text-slate-500">Beyond 8 hours</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 block uppercase">Airport Transfer</span>
              <span className="text-lg font-bold text-[#071830] block mt-1">
                ₹{car.rates.airportFlatRate.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500">Flat city to MAA</span>
            </div>
          </div>
        </div>

        {/* Interactive Booking & Fare Estimator Form */}
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#071830]">
                Reserve {car.name} with Instant Fare Estimate
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                All bookings include verified chauffeur, vehicle sanitization & 24/7 flight dispatch tracking.
              </p>
            </div>
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedPackage('local')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedPackage === 'local'
                    ? 'bg-[#106eea] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Local (8h/80km)
              </button>
              <button
                type="button"
                onClick={() => setSelectedPackage('airport')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedPackage === 'airport'
                    ? 'bg-[#106eea] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Airport Flat
              </button>
              <button
                type="button"
                onClick={() => setSelectedPackage('outstation')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedPackage === 'outstation'
                    ? 'bg-[#106eea] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Outstation
              </button>
            </div>
          </div>

          {bookingSubmitted ? (
            <div className="bg-white p-6 rounded-xl border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Booking Request Received for {car.name}!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Chennai dispatch desk is confirming vehicle availability for{' '}
                <span className="font-semibold text-slate-900">{formData.date} at {formData.time}</span>. You will receive an SMS and WhatsApp confirmation with driver details within 15 minutes.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setBookingSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#106eea] bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
                >
                  Make Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {selectedPackage === 'outstation' && (
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-2">
                    <span>Estimated Outstation Distance:</span>
                    <span className="font-bold text-[#106eea]">{outstationKm} Kilometers</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="25"
                    value={outstationKm}
                    onChange={(e) => setOutstationKm(Number(e.target.value))}
                    className="w-full accent-[#106eea] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>100 km (Mahabalipuram / Kanchi)</span>
                    <span>300 km (Puducherry / Vellore)</span>
                    <span>600 km (Bengaluru / Tirupati)</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea] focus:ring-1 focus:ring-[#106eea]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea] focus:ring-1 focus:ring-[#106eea]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Pickup Location / Landmark
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="e.g. Hiranandani Bridgewood, Egattur"
                      className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea] focus:ring-1 focus:ring-[#106eea]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Pickup Time
                    </label>
                    <div className="relative">
                      <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Special Travel Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Flight 6E 2145 arrival, need booster seat, child in car"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                  />
                </div>
              </div>

              {/* Price summary & CTA button */}
              <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase block">Estimated Base Tariff</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-[#071830]">
                      ₹{calculateEstimate().toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({selectedPackage === 'local' ? '8 hrs / 80 km' : selectedPackage === 'airport' ? 'Airport Flat' : `${outstationKm} km outstation`})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919003163335"
                    className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#106eea]" />
                    <span>Call Desk</span>
                  </a>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Booking Request</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
