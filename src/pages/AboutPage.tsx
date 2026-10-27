import React from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  Car,
  Hotel,
  Calendar,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <span className="text-slate-900 font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
              Corporate Identity & Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071830] tracking-tight">
              About Anchor Point
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Anchor Point Hospitality Private Limited is a premier Chennai-based provider of executive cab rentals, boutique hotel living, and experiential event management. We bring uncompromising professionalism to every journey, stay, and event.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
              Our Founding Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071830] tracking-tight">
              A Unified Ecosystem for Corporate Mobility, Hospitality & Events
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Operating out of Chennai’s thriving technology and automotive corridor, Anchor Point was created to eliminate the friction that corporate clients, business travelers, and families face when coordinating reliable transport, comfortable accommodations, and milestone events.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instead of dealing with fragmented vendor networks, inconsistent drivers, or unpredictable billing, Anchor Point delivers an integrated end-to-end standard: our own curated fleet of sedans and MPVs, our own serviced boutique suites (*The Edge by Anchor Point*), and our in-house production team for corporate galas and conferences.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="block text-2xl font-black text-[#106eea]">100%</span>
                <span className="text-xs text-slate-600">Police-Verified Drivers</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="block text-2xl font-black text-[#106eea]">24/7</span>
                <span className="text-xs text-slate-600">Central Dispatch Desk</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="block text-2xl font-black text-[#106eea]">Zero</span>
                <span className="text-xs text-slate-600">Surge Pricing Fees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-100">
            <img
              src="/src/assets/images/hero_fleet_mobility_1793079585882.jpg"
              alt="Anchor Point Corporate Chauffeur Fleet"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Integrated Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
              The Three Pillars of Anchor Point
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071830] mb-2">1. Cab Services & Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Executive airport transfers, hourly rentals, and long-term fleet contracts powered by luxury sedans, Innova MPVs, and verified chauffeurs.
              </p>
              <button
                onClick={() => onNavigate('cars')}
                className="text-xs font-semibold text-[#106eea] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Available Fleet Cars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071830] mb-2">2. Hospitality Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Operating *The Edge by Anchor Point* in Sholinganallur and serviced residential suites at Hiranandani Bridgewood with round-the-clock housekeeping and dining.
              </p>
              <button
                onClick={() => onNavigate('hospitality')}
                className="text-xs font-semibold text-[#106eea] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Hospitality Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071830] mb-2">3. Event Management</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Full-scale production for corporate annual days, conferences, exhibitions, and lavish weddings with complete staging, AV systems, and guest logistics.
              </p>
              <button
                onClick={() => onNavigate('events')}
                className="text-xs font-semibold text-[#106eea] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Event Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration & Head Office */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
              Corporate Governance
            </span>
            <h3 className="text-xl font-bold text-[#071830]">
              Anchor Point Hospitality Private Limited
            </h3>
            <p className="text-xs text-slate-600">
              B 2601, Bridgewood Hiranandani, Egattur, Padur, Kancheepuram, Chennai, Tamil Nadu - 603103
            </p>
            <p className="text-xs text-slate-500">
              Registered with Ministry of Corporate Affairs (ROC Chennai) · CIN: U55101TN2014PTC123048
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs font-semibold text-white bg-[#106eea] hover:bg-[#0d5ac3] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Get In Touch With Leadership
          </button>
        </div>
      </section>
    </div>
  );
};
