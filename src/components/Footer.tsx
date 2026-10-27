import React from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, carId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, carId?: string) => {
    onNavigate(page, carId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050e1d] text-slate-300 border-t border-slate-800">
      {/* Upper reassurance banner */}
      <div className="border-b border-slate-800/80 bg-[#07152b] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">24/7 Dispatch & Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">Round-the-clock airport meet & greet and emergency assistance.</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Police-Verified Chauffeurs</h4>
              <p className="text-xs text-slate-400 mt-0.5">Trained in defensive driving, executive etiquette & hospitality.</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Pristine Fleet & GST Invoicing</h4>
              <p className="text-xs text-slate-400 mt-0.5">100% sanitized vehicles, transparent pricing & corporate SLA.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#106eea] to-[#0ea5e9] p-1.5 flex items-center justify-center">
                <img
                  src="./assets/logo_icon.png"
                  alt="Anchor Point"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Anchor <span className="text-sky-400">Point</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anchor Point Hospitality Private Limited is Chennai’s leading corporate mobility, boutique hospitality, and luxury event management partner. We deliver punctuality, comfort, and uncompromising professional standards.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-medium text-slate-300">Corporate Office:</p>
              <p>B 2601, Bridgewood Hiranandani, Egattur, Padur, Kancheepuram, Chennai, Tamil Nadu - 603103</p>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">Our Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('cabs')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  <span>Cab Services & Corporate Fleet</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hospitality')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  <span>Hospitality & The Edge Suites</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('events')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  <span>Corporate Event Management</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cabs')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  <span>Executive Airport Transfers (MAA)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cars')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  <span>Monthly Corporate Fleet Leasing</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Fleet Categories & Cars (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">Fleet Available</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('cars', 'mercedes-s-class')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Mercedes-Benz S-Class
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cars', 'lexus-lm-executive')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Lexus LM Lounge MPV
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cars', 'bmw-5-series')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  BMW 5 Series Sedan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cars', 'toyota-innova-crysta')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Toyota Innova Crysta
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cars', 'toyota-fortuner-legender')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  Toyota Fortuner Legender
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cars')}
                  className="text-sky-400 font-semibold hover:underline cursor-pointer"
                >
                  View All Fleet Cars →
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">Direct Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href="tel:+919003163335"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-slate-300"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold text-white">+91 90031 63335</span>
              </a>
              <a
                href="mailto:bookings@anchorpoint.in"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>bookings@anchorpoint.in</span>
              </a>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-medium">Boutique Property:</span>
                  <p className="mt-0.5 text-slate-400">
                    The Edge By Anchorpoint, No: 19, Narayanaswamy Nagar 3rd St, Sholinganallur, Chennai - 600119
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Anchor Point Hospitality Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 cursor-pointer">
              About Anchor Point
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 cursor-pointer">
              Contact Desk
            </button>
            <a
              href="https://anchorpoint.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              anchorpoint.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
