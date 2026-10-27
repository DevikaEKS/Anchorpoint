import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { fleetCars } from '../data/fleetData';
import { CarCard } from '../components/CarCard';
import {
  Car,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Plane,
  Briefcase,
  Navigation,
  Sparkles,
  Phone,
  Send,
  HelpCircle,
} from 'lucide-react';

interface CabServicesPageProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const CabServicesPage: React.FC<CabServicesPageProps> = ({ onNavigate }) => {
  const service = servicesData.cabs;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingType, setBookingType] = useState('airport');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    passengers: '2',
    preferredCar: 'Mercedes-Benz S-Class',
    pickupAddress: '',
    dropAddress: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-100 pt-10 pb-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-[#106eea] cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Cab Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
                Anchor Point Mobility Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071830] tracking-tight">
                Cab Services & Executive Chauffeur Fleet
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Our cab services offer a convenient, safe, and punctual way to travel across Chennai and Tamil Nadu. Equipped with well-maintained sedans, luxury MPVs, and professional chauffeurs.
              </p>

              {/* Direct callout to Browse All Cars */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('cars')}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <Car className="w-4 h-4" />
                  <span>Open All Available Cars ({fleetCars.length})</span>
                </button>
                <a
                  href="tel:+919003163335"
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#106eea]" />
                  <span>Call Dispatch: +91 90031 63335</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-100">
              <img
                src={service.heroImage}
                alt="Anchor Point Fleet"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-slate-50 py-8 px-4 sm:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-200/70 flex items-center gap-3 shadow-2xs"
            >
              <CheckCircle2 className="w-5 h-5 text-[#106eea] shrink-0" />
              <span className="text-xs font-semibold text-slate-800">{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Use Cases & Pillars */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Engineered for Discerning Travelers
            </span>
            <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
              Tailored Mobility Verticals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Whether you need rapid curbside airport pickup or full-day corporate roadshow dispatch, Anchor Point ensures smooth journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
                  {idx === 0 ? (
                    <Plane className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Briefcase className="w-5 h-5" />
                  ) : idx === 2 ? (
                    <Navigation className="w-5 h-5" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#071830] mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet Vehicles Available & Callout to Cars Page */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
                Vehicle Roster
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071830] tracking-tight">
                Our Fleet of Available Taxis & Cabs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Choose any taxi or car to see full vehicle descriptions, interior photos, and transparent tariff rates.
              </p>
            </div>

            <button
              onClick={() => onNavigate('cars')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#106eea] hover:bg-[#0d5ac3] rounded-lg shadow-xs transition-colors cursor-pointer shrink-0"
            >
              Open Complete Fleet Page ({fleetCars.length} Cars & Taxis) →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              fleetCars.find((c) => c.id === 'maruti-dzire-taxi')!,
              fleetCars.find((c) => c.id === 'toyota-etios-taxi')!,
              fleetCars.find((c) => c.id === 'maruti-ertiga-taxi')!,
              fleetCars.find((c) => c.id === 'toyota-innova-crysta')!,
              fleetCars.find((c) => c.id === 'toyota-innova-hycross')!,
              fleetCars.find((c) => c.id === 'mercedes-s-class')!,
            ].map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onSelect={() => onNavigate('cars', car.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / 4-Step Process */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Seamless Protocol
            </span>
            <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
              How Anchor Point Cab Dispatch Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs relative"
              >
                <span className="text-3xl font-black text-sky-100 block mb-2 font-mono">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-[#071830] mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & FAQ Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-[#071830] mb-1">
              Book Your Cab Service
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Instant reservation desk for Chennai city and airport pickups
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  Cab Reservation Confirmed!
                </h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Your {formData.preferredCar} request has been scheduled for {formData.date}. Our dispatcher will message driver and vehicle coordinates to <span className="font-semibold">{formData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#106eea] bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setBookingType('airport')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      bookingType === 'airport' ? 'bg-white text-[#106eea] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Airport Transfer
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('local')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      bookingType === 'local' ? 'bg-white text-[#106eea] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Local 8h/80km
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('outstation')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      bookingType === 'outstation' ? 'bg-white text-[#106eea] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Outstation
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh K"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 90031 63335"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Preferred Vehicle Model
                    </label>
                    <select
                      value={formData.preferredCar}
                      onChange={(e) => setFormData({ ...formData, preferredCar: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    >
                      {fleetCars.map((car) => (
                        <option key={car.id} value={car.name}>
                          {car.name} ({car.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Pickup Address / Landmark
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai Airport Terminal 2"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Destination Address
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hiranandani Egattur / OMR IT Park"
                      value={formData.dropAddress}
                      onChange={(e) => setFormData({ ...formData, dropAddress: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Cab Reservation</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Frequently Asked Questions (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#071830] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#106eea]" />
              <span>Cab Services FAQs</span>
            </h3>
            <div className="space-y-3">
              {service.faq.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <h4 className="text-xs sm:text-sm font-bold text-[#071830] mb-1">
                    {item.question}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
