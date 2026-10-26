import React from 'react';
import { Car, ArrowUp, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenConcierge }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080C14] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Car className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                CityConnect
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Your trusted all-in-one platform for everyday affordable cabs, budget-friendly hotels, and family event planning. No surge pricing, verified drivers, and guaranteed clean cars.
            </p>
            <div className="pt-1 flex items-center gap-3 text-slate-300">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>1800-202-3000 (Toll Free)</span>
              </span>
            </div>
          </div>

          {/* Nav Col 1: Cabs */}
          <div className="space-y-2.5">
            <h4 className="font-display text-sm font-semibold text-white">Everyday Cabs</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Airport Pickup & Drop</a></li>
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Hourly Local Rentals (4h/8h)</a></li>
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Family Innova / SUV Cabs</a></li>
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Comfort Dzire / Etios Sedans</a></li>
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Outstation Round Trips</a></li>
            </ul>
          </div>

          {/* Nav Col 2: Hotels */}
          <div className="space-y-2.5">
            <h4 className="font-display text-sm font-semibold text-white">Comfortable Stays</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#hospitality" className="hover:text-emerald-400 transition-colors">City Park Comfort Hotel</a></li>
              <li><a href="#hospitality" className="hover:text-emerald-400 transition-colors">Green Palms Family Resort</a></li>
              <li><a href="#hospitality" className="hover:text-emerald-400 transition-colors">Airport Express Transit Inn</a></li>
              <li><a href="#hospitality" className="hover:text-emerald-400 transition-colors">Complimentary Breakfast</a></li>
              <li><a href="#hospitality" className="hover:text-emerald-400 transition-colors">Group Room Bookings</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Events */}
          <div className="space-y-2.5">
            <h4 className="font-display text-sm font-semibold text-white">Family Events</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">Family Weddings & Reception</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">Birthday & Anniversary Parties</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">Stage & Balloon Decoration</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">DJ Sound & Photography</a></li>
              <li>
                <button onClick={onOpenBooking} className="text-emerald-400 font-semibold hover:underline">
                  Book Online Now →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} CityConnect Mobility & Events Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Clean Cars Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>Zero Surge Pricing</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#121826] border border-slate-700 rounded text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
