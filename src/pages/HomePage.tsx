import React, { useState } from 'react';
import { PageId } from '../types';
import { fleetCars } from '../data/fleetData';
import { CarCard } from '../components/CarCard';
import {
  Car,
  Hotel,
  Calendar,
  Clock,
  ShieldCheck,
  Award,
  Users,
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  CheckCircle2,
  Send,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'cabs' | 'hospitality' | 'events'>('cabs');
  const [quickFormSuccess, setQuickFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Cab Services / Airport Transfer',
    date: new Date().toISOString().split('T')[0],
    details: '',
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setQuickFormSuccess(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200/60 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#106eea]" />
                <span className="text-xs font-semibold text-[#106eea] tracking-wide uppercase">
                  Anchor Point Hospitality Private Limited · Chennai
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071830] tracking-tight leading-[1.1] text-balance">
                Welcome to <span className="text-[#106eea]">Anchor Point</span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
                Cab Services, Hospitality and Event Management
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Delivering seamless executive transportation, boutique hotel accommodations, and turnkey corporate event coordination. Built on uncompromising punctuality, personal warmth, and verified standards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('cars')}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <Car className="w-4 h-4" />
                  <span>Browse Available Cars</span>
                </button>

                <button
                  onClick={() => onNavigate('cabs')}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#106eea]" />
                </button>
              </div>

              {/* Key Trust Metrics */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-[#071830]">
                <div>
                  <span className="block text-2xl font-extrabold text-[#106eea]">10+</span>
                  <span className="text-xs text-slate-600 mt-0.5 block">Years of Trust</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#106eea]">100%</span>
                  <span className="text-xs text-slate-600 mt-0.5 block">Sanitized Fleet</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#106eea]">24/7</span>
                  <span className="text-xs text-slate-600 mt-0.5 block">Live Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="./assets/images/hero_fleet_mobility_1793079585882.jpg"
                  alt="Anchor Point Executive Fleet"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Executive Mobility & Hospitality</span>
                  </div>
                  <h3 className="text-lg font-bold">Premium Chauffeur Fleet in Chennai</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Airport transfers, corporate commutes, and event convoys with police-verified drivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking & Inquiry Bar */}
      <section className="bg-slate-50 py-10 px-4 sm:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#071830]">
                  Fast Booking & Inquiry Desk
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get prompt confirmation from Anchor Point operations team
                </p>
              </div>

              {/* Functional tabs */}
              <div className="grid grid-cols-3 items-stretch gap-1 bg-slate-100 p-1 rounded-lg w-full sm:flex sm:w-auto sm:items-center">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('cabs');
                    setFormData((f) => ({ ...f, serviceType: 'Cab Services / Airport Transfer' }));
                  }}
                  className={`min-w-0 w-full justify-center px-1.5 py-2 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs text-center font-semibold rounded-md transition-colors cursor-pointer flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 leading-tight ${
                    activeTab === 'cabs'
                      ? 'bg-white text-[#106eea] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span className="min-w-0 break-words">Cab Services</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('hospitality');
                    setFormData((f) => ({ ...f, serviceType: 'Hospitality / The Edge Suites' }));
                  }}
                  className={`min-w-0 w-full justify-center px-1.5 py-2 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs text-center font-semibold rounded-md transition-colors cursor-pointer flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 leading-tight ${
                    activeTab === 'hospitality'
                      ? 'bg-white text-[#106eea] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Hotel className="w-3.5 h-3.5" />
                  <span className="min-w-0 break-words">Hospitality</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('events');
                    setFormData((f) => ({ ...f, serviceType: 'Event Management Coordination' }));
                  }}
                  className={`min-w-0 w-full justify-center px-1.5 py-2 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs text-center font-semibold rounded-md transition-colors cursor-pointer flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 leading-tight ${
                    activeTab === 'events'
                      ? 'bg-white text-[#106eea] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="min-w-0 break-words">Event Management</span>
                </button>
              </div>
            </div>

            {quickFormSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our desk at Hiranandani Bridgewood Chennai is reviewing your request for <span className="font-semibold">{formData.serviceType}</span> and will call you on <span className="font-semibold">{formData.phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setQuickFormSuccess(false)}
                  className="mt-2 text-xs font-semibold text-[#106eea] hover:underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand R"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Contact Phone / WhatsApp *
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

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Required Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* The 3 Core Services Section (All Services Have Dedicated Detail Pages) */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
                Explore Our Comprehensive Solutions
              </span>
              <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
                Our Primary Services
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Each service is managed with dedicated operations infrastructure, trained personnel, and strict quality assurance. Click any service to view its dedicated page.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Cab Services */}
            <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group">
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-5">
                  <img
                    src="./assets/images/hero_fleet_mobility_1793079585882.jpg"
                    alt="Cab Services"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#106eea] shadow-xs">
                    01. Mobility & Fleet
                  </div>
                </div>

                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                  <Car className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-[#071830] group-hover:text-[#106eea] transition-colors">
                  Cab Services
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Convenient and hassle-free travel for daily commutes, city exploration, and airport transfers. Supported by a fleet of well-maintained vehicles and verified drivers.
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>Executive Airport Transfers (MAA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>Local 8hr/80km & Outstation packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>Corporate Monthly Fleet Leasing</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('cabs')}
                  className="text-xs font-bold text-[#106eea] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Cab Services Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('cars')}
                  className="px-3 py-1.5 bg-sky-50 text-[#106eea] hover:bg-sky-100 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  View Cars →
                </button>
              </div>
            </div>

            {/* Service 2: Hospitality */}
            <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group">
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-5">
                  <img
                    src="./assets/images/service_hospitality_suite_1793079585353.jpg"
                    alt="Hospitality"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#106eea] shadow-xs">
                    02. Stays & Suites
                  </div>
                </div>

                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                  <Hotel className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-[#071830] group-hover:text-[#106eea] transition-colors">
                  Hospitality
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  A commitment to exceeding expectations. From short-stay executive boutique suites to extended corporate residences with personal warmth and attention to detail.
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>The Edge by Anchor Point, Sholinganallur</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>Hiranandani Bridgewood Serviced Suites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>Chef-Prepared Dining & 24/7 Housekeeping</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('hospitality')}
                  className="text-xs font-bold text-[#106eea] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Hospitality Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 3: Event Management */}
            <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group">
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-5">
                  <img
                    src="./assets/images/service_event_management_1793079586307.jpg"
                    alt="Event Management"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#106eea] shadow-xs">
                    03. Experiential Events
                  </div>
                </div>

                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-[#071830] group-hover:text-[#106eea] transition-colors">
                  Event Management
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Strategic planning, meticulous coordination, and seamless execution that brings your vision to life and leaves a lasting impression on your guests.
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>Corporate Summits & Annual Day Galas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>LED Video Walls, Stage Design & Acoustics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106eea] shrink-0" />
                    <span>VIP Delegate Mobility & Convoy Logistics</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('events')}
                  className="text-xs font-bold text-[#106eea] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Event Management Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Available Cars Showcase (direct gateway to Cars Page) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
                Anchor Point Fleet Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071830] tracking-tight">
                Featured Fleet & Taxi Cars Available
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select any car or taxi to open its full description, interior specifications, and instant booking details.
              </p>
            </div>

            <button
              onClick={() => onNavigate('cars')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#106eea] hover:bg-[#0d5ac3] rounded-lg shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <Car className="w-4 h-4" />
              <span>Open All Cars & Taxis ({fleetCars.length})</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show a balanced mix: Dzire Taxi, Ertiga 7-Seater Taxi, Innova Crysta, Fortuner, BMW, Mercedes S-Class */}
            {[
              fleetCars.find((c) => c.id === 'maruti-dzire-taxi')!,
              fleetCars.find((c) => c.id === 'maruti-ertiga-taxi')!,
              fleetCars.find((c) => c.id === 'toyota-innova-crysta')!,
              fleetCars.find((c) => c.id === 'toyota-innova-hycross')!,
              fleetCars.find((c) => c.id === 'bmw-5-series')!,
              fleetCars.find((c) => c.id === 'mercedes-s-class')!,
            ].map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onSelect={() => onNavigate('cars', car.id)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('cars')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#106eea] bg-white border border-[#106eea]/30 hover:bg-sky-50 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <span>Explore All {fleetCars.length} Available Taxis & Executive Cars</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Proof & Location Callout */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
              Registered Corporate Hub · Chennai
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071830] tracking-tight">
              Headquartered at Hiranandani Bridgewood, Chennai
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Anchor Point Hospitality Private Limited operates from B 2601, Bridgewood Hiranandani in Egattur, Padur, Kancheepuram (Chennai - 603103). Positioned strategically on the IT expressway (OMR), we provide rapid dispatch to tech parks, industrial corridors, and the international airport.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#106eea] shrink-0 mt-0.5" />
                <span>B 2601, Bridgewood Hiranandani, Egattur, Padur, Chennai - 603103</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#106eea] shrink-0" />
                <span className="font-semibold text-slate-900">+91 90031 63335</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#071830] hover:bg-[#106eea] rounded-lg transition-colors cursor-pointer"
              >
                Reach Corporate Desk
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] shadow-sm">
            <iframe
              title="Anchor Point Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0859309785387!2d80.23174650520568!3d12.837723522599362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a5f22bc130b%3A0x89c4ce4231005496!2sHouse%20of%20Hiranandani%20-%20Bridgewood!5e0!3m2!1sen!2sin!4v1715594996942!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
