import React, { useState } from 'react';
import { X, Phone, MessageSquare, Clock, Send, Check, ShieldCheck } from 'lucide-react';

interface ConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeDrawer: React.FC<ConciergeDrawerProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('cab');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <div className="bg-[#121826] border-l border-slate-700 w-full max-w-md h-full overflow-y-auto p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-5">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                24/7 Customer Support
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                CityConnect Help & Booking Desk
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-[#1A2234] rounded-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5">
            {/* Direct Phone Numbers */}
            <div className="p-4 bg-[#1A2234] border border-slate-700 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                <Clock className="w-4 h-4" />
                <span>Immediate 24/7 Assistance</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Toll-Free Helpline:</span>
                  <a href="tel:18002023000" className="font-bold text-white hover:text-emerald-400">
                    1800-202-3000
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>WhatsApp Booking:</span>
                  <span className="font-bold text-emerald-400">+1 (555) 234-5678</span>
                </div>
              </div>
            </div>

            {/* Quick Callback Request */}
            <div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Request a Quick Callback
              </span>

              {sent ? (
                <div className="bg-emerald-950/40 border border-emerald-500 rounded-xl p-4 text-center space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-white">Callback Request Sent!</div>
                  <p className="text-xs text-slate-300">
                    Our customer support agent will call you at {phone} within 10 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name *"
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone Number *"
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      <option value="cab">Cab Booking Query (Airport / City / Outstation)</option>
                      <option value="hotel">Hotel Stay & Room Booking Query</option>
                      <option value="event">Family Wedding / Birthday Event Planning</option>
                      <option value="combo">Combo Package Deal (Cabs + Hotel + Event)</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific questions or travel dates?"
                      className="w-full bg-[#1A2234] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Call Me Back</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
          <span>Safe, trusted travel and event planning for everyday families.</span>
        </div>
      </div>
    </div>
  );
};
