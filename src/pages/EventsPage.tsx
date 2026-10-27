import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import {
  Calendar,
  Sparkles,
  Users,
  Award,
  CheckCircle2,
  Phone,
  Send,
  HelpCircle,
  Tv,
  Music,
} from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const service = servicesData.events;
  const [eventFormSubmitted, setEventFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    eventType: 'Corporate Summit / Conference',
    estimatedAttendees: '200 - 500 Guests',
    eventDate: new Date().toISOString().split('T')[0],
    brief: '',
  });

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setEventFormSubmitted(true);
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
            <span className="text-slate-900 font-semibold">Event Management</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block">
                Anchor Point Experiential Production
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071830] tracking-tight">
                Event Management & Experiential Production
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Planning and executing a successful event requires meticulous attention to detail, strategic planning, and seamless execution. At Anchor Point, we bring your vision to life, creating unforgettable experiences.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#rfp"
                  className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Request Event Proposal (RFP)
                </a>
                <a
                  href="tel:+919003163335"
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#106eea]" />
                  <span>Call Production Desk: +91 90031 63335</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-100">
              <img
                src={service.heroImage}
                alt="Anchor Point Event Production"
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

      {/* Event Verticals */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              End-to-End Execution
            </span>
            <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
              Event Solutions We Produce
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#106eea] flex items-center justify-center mb-4">
                  {idx === 0 ? (
                    <Users className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Sparkles className="w-5 h-5" />
                  ) : idx === 2 ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <Tv className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#071830] mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Blueprint Process */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#106eea] uppercase tracking-wider block mb-1">
              Zero-Risk Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-[#071830] tracking-tight">
              Our 4-Stage Production Process
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

      {/* RFP Form & FAQ */}
      <section id="rfp" className="py-16 bg-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-[#071830] mb-1">
              Request an Event Proposal
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Share your preliminary requirements and receive a customized 3D concept & quotation within 24 hours.
            </p>

            {eventFormSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  Proposal Request Logged!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our lead event director is preparing a preliminary line-item proposal for your <span className="font-semibold text-slate-900">{formData.eventType}</span>. We will follow up on <span className="font-semibold text-slate-900">{formData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setEventFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#106eea] bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sudhir Narayanan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Organization / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TechCorp India"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Contact Phone *
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
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    >
                      <option value="Corporate Summit / Conference">Corporate Summit / Conference</option>
                      <option value="Product Launch / Brand Activation">Product Launch / Brand Activation</option>
                      <option value="Annual Day & Award Gala">Annual Day & Award Gala</option>
                      <option value="Luxury Destination Wedding">Luxury Destination Wedding</option>
                      <option value="VIP Delegation Logistics">VIP Delegation Logistics</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Estimated Audience
                    </label>
                    <select
                      value={formData.estimatedAttendees}
                      onChange={(e) => setFormData({ ...formData, estimatedAttendees: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                    >
                      <option value="Under 100 Guests">Under 100 Guests</option>
                      <option value="100 - 300 Guests">100 - 300 Guests</option>
                      <option value="300 - 800 Guests">300 - 800 Guests</option>
                      <option value="800 - 2000+ Guests">800 - 2,000+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Event Vision & Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your theme, preferred venue, dates, or AV lighting requirements..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#106eea]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#106eea] to-[#0284c7] hover:from-[#0d5ac3] hover:to-[#0369a1] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Proposal Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Event FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#071830] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#106eea]" />
              <span>Event Production FAQs</span>
            </h3>
            <div className="space-y-3">
              {service.faq.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 shadow-2xs">
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
