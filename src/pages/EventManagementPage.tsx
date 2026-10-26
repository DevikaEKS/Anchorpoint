import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  Users,
  Check,
  ArrowRight,
  ArrowLeft,
  Phone,
  Printer,
  Copy,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Car,
  Hotel,
  Clock,
  Utensils,
  Music,
  Camera
} from 'lucide-react';
import { CurrencyCode, EventPackage } from '../types';
import { EVENT_PACKAGES, HOSPITALITY_PROPERTIES, EVENT_FAQS } from '../data/mockData';
import { formatPrice } from '../utils/formatCurrency';

interface EventManagementPageProps {
  currentCurrency: CurrencyCode;
  onNavigateHome: () => void;
  onNavigateCab: () => void;
  onOpenConcierge: () => void;
  onOpenBookingModal: (prefillId?: string) => void;
}

export const EventManagementPage: React.FC<EventManagementPageProps> = ({
  currentCurrency,
  onNavigateHome,
  onNavigateCab,
  onOpenConcierge,
  onOpenBookingModal,
}) => {
  // Wizard state
  const [selectedEventType, setSelectedEventType] = useState<'wedding' | 'celebration' | 'summit'>('wedding');
  const [guestCount, setGuestCount] = useState(150);
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [decorTier, setDecorTier] = useState<'budget' | 'standard' | 'premium'>('standard');
  const [selectedVenue, setSelectedVenue] = useState('Banquet Hall / Hotel Lawn');
  const [customerName, setCustomerName] = useState('Rajesh Sharma');
  const [customerPhone, setCustomerPhone] = useState('+1 555-0144');

  // Addons
  const [includeDJ, setIncludeDJ] = useState(true);
  const [includePhotography, setIncludePhotography] = useState(true);
  const [includeBridalCar, setIncludeBridalCar] = useState(true);
  const [includeBuffetDinner, setIncludeBuffetDinner] = useState(true);

  // Confirmation state
  const [proposalConfirmed, setProposalConfirmed] = useState(false);
  const [generatedRefCode, setGeneratedRefCode] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // FAQ accordion
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const matchingPackage =
    EVENT_PACKAGES.find((p) => p.category === selectedEventType) || EVENT_PACKAGES[0];

  // Dynamic Budget Calculation for everyday people
  const guestMultiplier = guestCount / 150;
  const decorMultiplier = decorTier === 'budget' ? 0.8 : decorTier === 'standard' ? 1.0 : 1.35;

  let calculatedBudgetUSD = Math.round(
    matchingPackage.startingBudgetUSD * guestMultiplier * decorMultiplier
  );

  if (includeDJ) calculatedBudgetUSD += 140;
  if (includePhotography) calculatedBudgetUSD += 160;
  if (includeBridalCar) calculatedBudgetUSD += 95;

  const handleGenerateProposal = (e: React.FormEvent) => {
    e.preventDefault();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `CC-EVT-${randomSuffix}`;
    setGeneratedRefCode(code);
    setProposalConfirmed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedRefCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
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
            <span className="text-white font-semibold">Event & Wedding Management</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateCab}
              className="text-emerald-400 hover:underline transition-colors hidden sm:inline"
            >
              Need Guest Cabs Only? View Taxi Fleet →
            </button>
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1 px-2.5 py-1 bg-[#1A2234] border border-slate-700 rounded-lg text-xs text-slate-200 hover:border-emerald-500"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Event Helpline</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative border-b border-slate-800 overflow-hidden py-10 lg:py-14">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img
            src="/src/assets/images/event_family_party_wedding_1793009743481.jpg"
            alt="Family celebration event"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 rounded-full text-xs font-semibold text-emerald-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Family & Business Event Management</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl tracking-tight leading-tight">
            Stress-Free Event Planning for Birthdays, Weddings & Parties
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Beautiful stage decoration, DJ sound, delicious catering, and guest transport managed by an experienced local event coordinator at budget-friendly family rates.
          </p>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Stage & Balloon Decor</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Delicious Veg / Non-Veg Buffet</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Decorated Bridal Car & Guest Cabs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dedicated On-Site Event Manager</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {proposalConfirmed ? (
          /* Confirmation Pass */
          <div className="max-w-xl mx-auto bg-[#121826] border border-emerald-500 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                Event Booking Request Received!
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Booking ID: {generatedRefCode}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                Your event specifications have been logged. An assigned event coordinator will call you within 2 hours to confirm stage design, menu tasting, and schedule.
              </p>
            </div>

            <div className="bg-[#1A2234] border border-slate-700 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Occasion:</span>
                <span className="text-white font-semibold">{matchingPackage.title}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Host Name:</span>
                <span className="text-white">{customerName} ({customerPhone})</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Venue Type:</span>
                <span className="text-white">{selectedVenue}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Guests & Date:</span>
                <span className="text-white">{guestCount} Guests on {eventDate}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Decoration Level:</span>
                <span className="text-emerald-400 font-semibold capitalize">{decorTier} Decoration</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400 font-semibold">Estimated Package Total:</span>
                <span className="font-display text-lg font-bold text-emerald-400">
                  {formatPrice(calculatedBudgetUSD, currentCurrency)}
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
                <span>Print Plan Summary</span>
              </button>
              <button
                onClick={() => setProposalConfirmed(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Plan Another Event
              </button>
            </div>
          </div>
        ) : (
          /* 5-Step Event Planner Wizard */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-8 bg-[#121826] border border-slate-700/80 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl">
              <div>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Custom Event Planner
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Plan Your Function & Estimate Budget
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Clear itemized costs for family weddings, kids birthdays, and office get-togethers.
                </p>
              </div>

              {/* STEP 1: Occasion */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  1. Celebration Type
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedEventType('wedding')}
                    className={`p-3.5 text-left rounded-xl border transition-all ${
                      selectedEventType === 'wedding'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white ring-1 ring-emerald-500'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-emerald-400 mb-1.5" />
                    <div className="text-xs font-bold">Family Wedding & Reception</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Stage decor, bridal car, DJ & buffet</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedEventType('celebration')}
                    className={`p-3.5 text-left rounded-xl border transition-all ${
                      selectedEventType === 'celebration'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white ring-1 ring-emerald-500'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400 mb-1.5" />
                    <div className="text-xs font-bold">Birthday / Anniversary / Baby Shower</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Balloon arch, party music, games & cake table</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedEventType('summit')}
                    className={`p-3.5 text-left rounded-xl border transition-all ${
                      selectedEventType === 'summit'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white ring-1 ring-emerald-500'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Users className="w-4 h-4 text-emerald-400 mb-1.5" />
                    <div className="text-xs font-bold">Office Meeting / Annual Day</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Projector, sound system, lunch & snacks</div>
                  </button>
                </div>
              </div>

              {/* STEP 2: Venue & Location */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  2. Venue Location
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedVenue('Banquet Hall / Community Hall')}
                    className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                      selectedVenue === 'Banquet Hall / Community Hall'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    Banquet / Community Hall
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedVenue('Outdoor Lawn / Resort Garden')}
                    className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                      selectedVenue === 'Outdoor Lawn / Resort Garden'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    Outdoor Lawn / Resort
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedVenue('Home / Society Clubhouse')}
                    className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                      selectedVenue === 'Home / Society Clubhouse'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400 hover:text-white'
                    }`}
                  >
                    Home / Society Clubhouse
                  </button>
                </div>
              </div>

              {/* STEP 3: Guest Count & Date */}
              <div className="space-y-3.5 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  3. Guest Count & Date
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-1.5">
                      <span>Expected Guests</span>
                      <span className="text-emerald-400 font-bold tabular-nums text-sm">
                        {guestCount} Guests
                      </span>
                    </div>
                    <input
                      type="range"
                      min={40}
                      max={500}
                      step={10}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer bg-slate-800 h-2 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                      <span>40 (Close Family)</span>
                      <span>150 (Standard)</span>
                      <span>500 (Grand)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 4: Decor Options */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  4. Stage & Lighting Decoration
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDecorTier('budget')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      decorTier === 'budget'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Essential Clean</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Balloon arch, backdrop drapes & couple sofa</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDecorTier('standard')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      decorTier === 'standard'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Deluxe Floral & Lights</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Fresh flower stage, fairy light ceiling & LED carpet</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDecorTier('premium')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      decorTier === 'premium'
                        ? 'border-emerald-500 bg-emerald-600/15 text-white'
                        : 'border-slate-700 bg-[#1A2234] text-slate-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Grand Theme</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Custom theme arches, photo booth & stage illumination</div>
                  </button>
                </div>
              </div>

              {/* STEP 5: Addon services */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  5. Additional Services
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-2.5 bg-[#1A2234] border border-slate-700 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeDJ}
                      onChange={(e) => setIncludeDJ(e.target.checked)}
                      className="accent-emerald-500"
                    />
                    <span>DJ & Sound System with Party Lights (+{formatPrice(140, currentCurrency)})</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 bg-[#1A2234] border border-slate-700 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includePhotography}
                      onChange={(e) => setIncludePhotography(e.target.checked)}
                      className="accent-emerald-500"
                    />
                    <span>Event Photographer & HD Video (+{formatPrice(160, currentCurrency)})</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 bg-[#1A2234] border border-slate-700 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeBridalCar}
                      onChange={(e) => setIncludeBridalCar(e.target.checked)}
                      className="accent-emerald-500"
                    />
                    <span>Decorated Bridal Car (Innova/Sedan) (+{formatPrice(95, currentCurrency)})</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 bg-[#1A2234] border border-slate-700 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeBuffetDinner}
                      onChange={(e) => setIncludeBuffetDinner(e.target.checked)}
                      className="accent-emerald-500"
                    />
                    <span>Buffet Dinner Setup with Warmers (Included)</span>
                  </label>
                </div>
              </div>

              {/* Host contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number (For Event Coordinator Call) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+1 555-0144 or mobile number"
                    className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Total Estimated Cost</span>
                  <div className="font-display text-2xl font-bold text-emerald-400 tabular-nums">
                    {formatPrice(calculatedBudgetUSD, currentCurrency)}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Includes stage decor, sound, lighting, and coordinator on-site.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateProposal}
                  className="w-full sm:w-auto px-7 py-3 text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-600/20 cursor-pointer whitespace-nowrap"
                >
                  Book Event & Request Call
                </button>
              </div>
            </div>

            {/* Right Column: Visual Summary */}
            <div className="lg:col-span-4 bg-[#121826] border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-5 sticky top-24">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-0.5">
                  Package Overview
                </span>
                <h3 className="font-display text-lg font-bold text-white">{matchingPackage.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{matchingPackage.description}</p>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
                <img
                  src={matchingPackage.image}
                  alt={matchingPackage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
                  Included in This Package:
                </h4>
                <div className="space-y-2">
                  {matchingPackage.inclusions.slice(0, 4).map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#1A2234] rounded-xl border border-slate-700 text-xs space-y-1">
                <div className="font-semibold text-white">Event Support:</div>
                <div className="text-slate-300 text-[11px]">
                  Dedicated on-site coordinator manages stage setup, sound check, and guest dining flow so you can relax with your family.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4-Step How It Works */}
        <div className="my-12 bg-[#121826] border border-slate-700/80 rounded-2xl p-5 sm:p-7">
          <div className="mb-6">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white">
              How CityConnect Plans Your Family Function
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simple, transparent, and hassle-free from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#1A2234] rounded-xl border border-slate-700 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400">Step 01</span>
              <h4 className="text-sm font-semibold text-white">Choose Your Event Plan</h4>
              <p className="text-xs text-slate-300">Select whether it's a wedding, birthday, or office party with your guest count.</p>
            </div>
            <div className="p-4 bg-[#1A2234] rounded-xl border border-slate-700 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400">Step 02</span>
              <h4 className="text-sm font-semibold text-white">Coordinator Consultation</h4>
              <p className="text-xs text-slate-300">Our local planner calls you to finalize stage colors, balloon themes, and food menu.</p>
            </div>
            <div className="p-4 bg-[#1A2234] rounded-xl border border-slate-700 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400">Step 03</span>
              <h4 className="text-sm font-semibold text-white">Advance Venue Setup</h4>
              <p className="text-xs text-slate-300">Our team arrives 3 hours prior to set up flowers, sound, lights, and buffet warmers.</p>
            </div>
            <div className="p-4 bg-[#1A2234] rounded-xl border border-slate-700 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400">Step 04</span>
              <h4 className="text-sm font-semibold text-white">Enjoy Your Celebration</h4>
              <p className="text-xs text-slate-300">Relax and celebrate with your guests while our team handles timing and clean-up.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="my-12 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-display text-xl font-bold text-white">
              Event Planning Questions & Answers
            </h2>
          </div>

          <div className="space-y-2.5">
            {EVENT_FAQS.map((faq, index) => {
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
