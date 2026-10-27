import React, { useState } from 'react';
import { PageId } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Car,
  Hotel,
  Calendar,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Cab Services & Fleet Rental',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
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
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
              24/7 Dispatch & Support Operations
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071830] tracking-tight">
              Contact Anchor Point
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Reach out today to discover how Anchor Point can make your corporate travel, hospitality stay, or event vision a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid (Official addresses & phones) */}
      <section className="py-12 px-4 sm:px-8 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Corporate Office */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#071830] mb-2 uppercase tracking-wide">
              Registered Corporate Office
            </h3>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              ANCHOR POINT HOSPITALITY PRIVATE LIMITED
            </p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              B 2601, Bridgewood Hiranandani, Egattur, Padur, Kancheepuram, Chennai, Tamil Nadu - 603103
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Hours: 24/7 Operations & Dispatch
            </div>
          </div>

          {/* Card 2: Phone & Direct Desk */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#071830] mb-2 uppercase tracking-wide">
              Call & WhatsApp Desk
            </h3>
            <a
              href="tel:+919003163335"
              className="text-base font-extrabold text-[#106eea] hover:underline block"
            >
              +91 90031 63335
            </a>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Immediate response for emergency airport pickups, immediate vehicle dispatch, and guest concierge.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-emerald-700 font-medium">
              Live Chauffeur Coordinator on Duty
            </div>
          </div>

          {/* Card 3: Email & Invoicing */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#071830] mb-2 uppercase tracking-wide">
              Email Communications
            </h3>
            <a
              href="mailto:bookings@anchorpoint.in"
              className="text-sm font-bold text-[#106eea] hover:underline block"
            >
              bookings@anchorpoint.in
            </a>
            <a
              href="mailto:accounts@anchorpoint.in"
              className="text-xs text-slate-600 hover:text-slate-900 block mt-1"
            >
              accounts@anchorpoint.in (Corporate Billing)
            </a>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Response time within 30 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form & Maps */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-6 bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#071830] mb-1">
              Send a Message or Corporate RFP
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Fill in your details below and our relationship executive will connect promptly.
            </p>

            {formSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your message regarding <span className="font-semibold text-slate-900">{formData.service}</span> has been assigned to our operations lead. We will call you on <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#106eea] bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Balaji S"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
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
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    >
                      <option value="Cab Services & Fleet Rental">Cab Services & Fleet Rental</option>
                      <option value="Airport Transfer Flat Rate">Airport Transfer Flat Rate</option>
                      <option value="Hospitality Stay (The Edge / Hiranandani)">Hospitality Stay (The Edge / Hiranandani)</option>
                      <option value="Corporate Event Management">Corporate Event Management</option>
                      <option value="Corporate Monthly Fleet Account">Corporate Monthly Fleet Account</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Message / Travel Itinerary Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about dates, destination, number of travelers, or vehicle preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Location & Map Preview (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
                Strategic Geography
              </span>
              <h3 className="text-lg font-bold text-[#071830]">
                House of Hiranandani, Chennai
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Located right off the Rajiv Gandhi IT Expressway (OMR), our vehicle fleet and operations hub has immediate arterial access to Siruseri SIPCOT, ELCOT SEZ, Sholinganallur, and GST Road.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#106eea] shrink-0" />
                  <span>Egattur, Padur, Kancheepuram, Chennai - 603103</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#106eea] shrink-0" />
                  <span>24 Hours · 7 Days a Week Operation</span>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/10] bg-slate-100">
              <iframe
                title="Anchor Point Chennai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0859309785387!2d80.23174650520568!3d12.837723522599362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a5f22bc130b%3A0x89c4ce4231005496!2sHouse%20of%20Hiranandani%20-%20Bridgewood!5e0!3m2!1sen!2sin!4v1715594996942!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
