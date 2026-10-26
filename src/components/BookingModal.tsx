import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Car, Hotel, Calendar, Sparkles, Printer, Copy, Check, Phone } from 'lucide-react';
import { CurrencyCode, ServiceType, BookingSubmission } from '../types';
import { FLEET_VEHICLES, HOSPITALITY_PROPERTIES, EVENT_PACKAGES } from '../data/mockData';
import { formatPrice } from '../utils/formatCurrency';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  initialServiceType?: ServiceType;
  initialPreselectedId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  initialServiceType = 'cab',
  initialPreselectedId,
}) => {
  const [serviceType, setServiceType] = useState<ServiceType>(initialServiceType);
  const [selectedVehicleId, setSelectedVehicleId] = useState(
    initialServiceType === 'cab' && initialPreselectedId ? initialPreselectedId : FLEET_VEHICLES[0].id
  );
  const [selectedPropertyId, setSelectedPropertyId] = useState(
    initialServiceType === 'hospitality' && initialPreselectedId ? initialPreselectedId : HOSPITALITY_PROPERTIES[0].id
  );
  const [selectedEventId, setSelectedEventId] = useState(
    initialServiceType === 'event' && initialPreselectedId ? initialPreselectedId : EVENT_PACKAGES[0].id
  );

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');

  // Add-ons
  const [addLuggageCarrier, setAddLuggageCarrier] = useState(false);
  const [addChildSeat, setAddChildSeat] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(true);

  // Submission State
  const [submittedBooking, setSubmittedBooking] = useState<BookingSubmission | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (initialServiceType) {
      setServiceType(initialServiceType);
    }
    if (initialPreselectedId) {
      if (initialServiceType === 'cab') setSelectedVehicleId(initialPreselectedId);
      if (initialServiceType === 'hospitality') setSelectedPropertyId(initialPreselectedId);
      if (initialServiceType === 'event') setSelectedEventId(initialPreselectedId);
    }
  }, [initialServiceType, initialPreselectedId]);

  if (!isOpen) return null;

  const currentVehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  const currentProperty = HOSPITALITY_PROPERTIES.find((p) => p.id === selectedPropertyId) || HOSPITALITY_PROPERTIES[0];
  const currentEvent = EVENT_PACKAGES.find((e) => e.id === selectedEventId) || EVENT_PACKAGES[0];

  // Dynamic cost calculation for everyday normal people
  let baseCostUSD = 0;
  if (serviceType === 'cab') {
    baseCostUSD = currentVehicle.dayRateUSD;
  } else if (serviceType === 'hospitality') {
    baseCostUSD = currentProperty.nightlyRateUSD * 2;
  } else if (serviceType === 'event') {
    baseCostUSD = currentEvent.startingBudgetUSD;
  } else if (serviceType === 'all_in_one') {
    baseCostUSD = Math.round(
      (currentVehicle.dayRateUSD + currentProperty.nightlyRateUSD * 2 + currentEvent.startingBudgetUSD) * 0.85
    );
  }

  let addOnsUSD = 0;
  if (addLuggageCarrier) addOnsUSD += 8;

  const grandTotalUSD = baseCostUSD + addOnsUSD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `CC-2026-${randomSuffix}`;

    const submission: BookingSubmission = {
      referenceId: refCode,
      serviceType,
      fullName,
      email: email || 'customer@cityconnect.com',
      phone,
      startDate: startDate || new Date().toISOString().split('T')[0],
      pickupLocation,
      dropoffLocation,
      selectedVehicleId: serviceType === 'cab' || serviceType === 'all_in_one' ? selectedVehicleId : undefined,
      selectedPropertyId: serviceType === 'hospitality' || serviceType === 'all_in_one' ? selectedPropertyId : undefined,
      selectedEventId: serviceType === 'event' || serviceType === 'all_in_one' ? selectedEventId : undefined,
      guestCount,
      additionalRequests: specialRequests,
      currency: currentCurrency,
      estimatedTotal: grandTotalUSD,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setSubmittedBooking(submission);
  };

  const copyReference = () => {
    if (submittedBooking) {
      navigator.clipboard.writeText(submittedBooking.referenceId);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#121826] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#121826]/95 backdrop-blur-md border-b border-slate-800 px-5 py-3.5 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
              CityConnect Online Booking
            </span>
            <h3 className="font-display text-lg font-bold text-white">
              {submittedBooking ? 'Booking Confirmation Slip' : 'Book Cabs, Hotel or Event'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-[#1A2234]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          {submittedBooking ? (
            /* Confirmation Slip */
            <div className="space-y-5">
              <div className="bg-[#1A2234] border border-emerald-500 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">
                  Booking Confirmed: {submittedBooking.referenceId}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, {submittedBooking.fullName}! Your booking has been received. Our team will send driver and coordinator details to {submittedBooking.phone}.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={copyReference}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#121826] border border-slate-700 rounded-lg hover:border-emerald-500"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-emerald-400" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Booking ID'}</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Slip</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#1A2234] border border-slate-700 rounded-xl p-4 text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Customer:</span>
                  <span className="text-white font-medium">{submittedBooking.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Contact:</span>
                  <span className="text-white font-medium">{submittedBooking.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Date:</span>
                  <span className="text-white font-medium">{submittedBooking.startDate}</span>
                </div>
                {submittedBooking.selectedVehicleId && (
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Cab:</span>
                    <span className="text-emerald-400 font-medium">{currentVehicle.name}</span>
                  </div>
                )}
                {submittedBooking.selectedPropertyId && (
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Hotel:</span>
                    <span className="text-emerald-400 font-medium">{currentProperty.name}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400 font-medium">Estimated Amount:</span>
                  <span className="font-display text-base font-bold text-emerald-400">
                    {formatPrice(submittedBooking.estimatedTotal, currentCurrency)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmittedBooking(null);
                  onClose();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#1A2234] border border-slate-700 rounded-lg hover:border-slate-500"
              >
                Close Window
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Select What You Need
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('cab')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all ${
                      serviceType === 'cab'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Car className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                    <span>Cab Service</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('hospitality')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all ${
                      serviceType === 'hospitality'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Hotel className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                    <span>Hotel Room</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('event')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all ${
                      serviceType === 'event'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                    <span>Event Plan</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('all_in_one')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all ${
                      serviceType === 'all_in_one'
                        ? 'border-emerald-500 bg-emerald-600/20 text-white ring-1 ring-emerald-500'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                    <span>All-in-One (Save 15%)</span>
                  </button>
                </div>
              </div>

              {/* Service Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(serviceType === 'cab' || serviceType === 'all_in_one') && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Choose Cab
                    </label>
                    <select
                      value={selectedVehicleId}
                      onChange={(e) => setSelectedVehicleId(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      {FLEET_VEHICLES.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} ({formatPrice(v.dayRateUSD, currentCurrency)}/day)
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {(serviceType === 'hospitality' || serviceType === 'all_in_one') && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Choose Hotel
                    </label>
                    <select
                      value={selectedPropertyId}
                      onChange={(e) => setSelectedPropertyId(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      {HOSPITALITY_PROPERTIES.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({formatPrice(p.nightlyRateUSD, currentCurrency)}/night)
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {(serviceType === 'event' || serviceType === 'all_in_one') && (
                  <div className={serviceType === 'event' ? 'col-span-2' : ''}>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Choose Event Package
                    </label>
                    <select
                      value={selectedEventId}
                      onChange={(e) => setSelectedEventId(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      {EVENT_PACKAGES.map((ev) => (
                        <option key={ev.id} value={ev.id}>
                          {ev.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sunil Verma"
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number (For SMS / WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555-0199 or mobile number"
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Date & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Date of Booking
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Pickup Address / Event City
                  </label>
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Street, area, or railway/airport..."
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Addons */}
              <div className="flex flex-wrap gap-3 text-xs pt-1">
                <label className="flex items-center gap-1.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addLuggageCarrier}
                    onChange={(e) => setAddLuggageCarrier(e.target.checked)}
                    className="accent-emerald-500"
                  />
                  <span>Luggage Carrier (+{formatPrice(8, currentCurrency)})</span>
                </label>
                <label className="flex items-center gap-1.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addChildSeat}
                    onChange={(e) => setAddChildSeat(e.target.checked)}
                    className="accent-emerald-500"
                  />
                  <span>Free Baby Booster Seat</span>
                </label>
              </div>

              {/* Price & Submit */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-slate-400 block">Estimated Total</span>
                  <span className="font-display text-xl font-bold text-emerald-400 tabular-nums">
                    {formatPrice(grandTotalUSD, currentCurrency)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-2 text-xs font-semibold text-slate-300 bg-[#1A2234] border border-slate-700 rounded-lg hover:border-slate-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Confirm Booking
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
