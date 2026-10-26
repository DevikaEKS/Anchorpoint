import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS, SERVICE_PROMISES } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span>Customer Experiences</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Real Feedback</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Loved by Families, Travelers & Event Hosts
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            See what everyday customers say about our reliable airport cabs, cozy hotel stays, and stress-free event decorations.
          </p>
        </div>
      </div>

      {/* 4 Service Promises */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {SERVICE_PROMISES.map((promise) => (
          <div key={promise.number} className="bg-[#121826] border border-slate-700/80 rounded-xl p-5 space-y-1.5">
            <span className="text-xs font-bold font-display text-emerald-400 block">
              Promise {promise.number}
            </span>
            <h4 className="font-display text-base font-bold text-white">{promise.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{promise.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-[#121826] border border-slate-700/80 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-colors"
          >
            <div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <h4 className="font-display text-sm font-bold text-white">{t.author}</h4>
              <p className="text-xs text-emerald-400">{t.designation}</p>
              
              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Booking: {t.verifiedBooking}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
