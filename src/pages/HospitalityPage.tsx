import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import {
  Hotel,
  MapPin,
  Wifi,
  Coffee,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  Send,
  HelpCircle,
  Tv,
  Sparkles,
} from 'lucide-react';

interface HospitalityPageProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const HospitalityPage: React.FC<HospitalityPageProps> = ({ onNavigate }) => {
  const service = servicesData.hospitality;
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: 'The Edge by Anchorpoint, Sholinganallur',
    stayType: 'Short-Stay Executive Suite',
    checkIn: new Date().toISOString().split('T')[0],
    nights: '3',
    guests: '1',
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setInquirySubmitted(true);
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
            <span className="text-slate-900 font-semibold">Hospitality</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
                Anchor Point Hospitality Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071830] tracking-tight">
                Hospitality & Boutique Living
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Hospitality isn’t just a service at Anchor Point; it’s a commitment to exceeding your expectations. Experience our boutique hotel suites at Sholinganallur and luxury serviced corporate apartments at Hiranandani Egattur.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#inquiry"
                  className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Reserve Suite / Inquire Stay
                </a>
                <a
                  href="tel:+919003163335"
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#106eea]" />
                  <span>Call Front Desk: +91 90031 63335</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-100">
              <img
                src={service.heroImage}
                alt="Anchor Point Hospitality Suite"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Locations Spotlight */}
      <section className="bg-slate-50 py-10 px-4 sm:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Prime Chennai Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071830]">
              Our Hospitality Properties in Chennai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#106eea] bg-sky-50 px-2.5 py-1 rounded-md">
                  Boutique Hotel & Suites
                </span>
                <span className="text-xs text-slate-500 font-medium">Sholinganallur, OMR</span>
              </div>
              <h3 className="text-xl font-bold text-[#071830]">The Edge by Anchorpoint</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Modern boutique hotel rooms and executive suites located in Sholinganallur, seconds from the IT corridor, ELCOT SEZ, and major multinational campuses. Features plush bedding, in-room dining, smart TVs, and personalized concierge.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#106eea] shrink-0 mt-0.5" />
                <span>No: 19, Narayanaswamy Nagar 3rd Street, Sholinganallur, Chennai - 600119</span>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#106eea] bg-sky-50 px-2.5 py-1 rounded-md">
                  Serviced Residences & Corporate Suites
                </span>
                <span className="text-xs text-slate-500 font-medium">Egattur, Padur</span>
              </div>
              <h3 className="text-xl font-bold text-[#071830]">Hiranandani Bridgewood Residences</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Spacious luxury 1, 2 & 3-BHK serviced apartments inside the prestigious House of Hiranandani township. Ideal for expats, consultants on multi-month project assignments, and families seeking five-star security and amenities.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#106eea] shrink-0 mt-0.5" />
                <span>B 2601, Bridgewood Hiranandani, Egattur, Padur, Chennai - 603103</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Features */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Guest Experience
            </span>
            <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
              Crafted for Rest & Productivity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830] mb-1">Gigabit Fiber Internet</h4>
              <p className="text-xs text-slate-600">Dedicated enterprise high-speed Wi-Fi with guaranteed zero video call lag.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830] mb-1">Chef-Crafted Cuisine</h4>
              <p className="text-xs text-slate-600">Fresh breakfast spreads, personalized dietary options, and 24/7 room service.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830] mb-1">24/7 Security & Power</h4>
              <p className="text-xs text-slate-600">100% round-the-clock DG power backup, biometric access, and CCTV surveillance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071830] mb-1">Integrated Fleet Chauffeur</h4>
              <p className="text-xs text-slate-600">Door-to-door airport and office transfers using Anchor Point's own executive cars.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form & FAQs */}
      <section id="inquiry" className="py-16 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Reservation Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-[#071830] mb-1">
              Reserve or Inquire About Suites
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our reservation concierge will reply within 30 minutes with guaranteed availability
            </p>

            {inquirySubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  Stay Request Received!
                </h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Your reservation inquiry for <span className="font-semibold">{formData.property}</span> commencing on <span className="font-semibold">{formData.checkIn}</span> has been routed to our front desk. We will call you on <span className="font-semibold">{formData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#106eea] bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Select Property Location *
                  </label>
                  <select
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                  >
                    <option value="The Edge by Anchorpoint, Sholinganallur">
                      The Edge by Anchor Point (Sholinganallur, OMR)
                    </option>
                    <option value="Hiranandani Bridgewood Residences, Egattur">
                      Hiranandani Bridgewood Residences (Egattur, Padur)
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sundaram"
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Duration (Nights)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="180"
                      value={formData.nights}
                      onChange={(e) => setFormData({ ...formData, nights: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3-4">3 - 4 Guests</option>
                      <option value="Corporate Team">Corporate Group (5+)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Reservation Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Hospitality FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#071830] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#106eea]" />
              <span>Hospitality FAQs</span>
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
