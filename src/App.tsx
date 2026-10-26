/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CurrencyCode, NavigationPage, ServiceType } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FleetSection } from './components/FleetSection';
import { HospitalitySection } from './components/HospitalitySection';
import { EventsSection } from './components/EventsSection';
import { TrinityBundleSection } from './components/TrinityBundleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingModal } from './components/BookingModal';
import { ConciergeDrawer } from './components/ConciergeDrawer';
import { Footer } from './components/Footer';
import { CabServicePage } from './pages/CabServicePage';
import { EventManagementPage } from './pages/EventManagementPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('USD');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingServiceType, setBookingServiceType] = useState<ServiceType>('cab');
  const [bookingPrefillId, setBookingPrefillId] = useState<string | undefined>(undefined);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  const navigateTo = (page: NavigationPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (service: ServiceType = 'all_in_one', prefillId?: string) => {
    setBookingServiceType(service);
    setBookingPrefillId(prefillId);
    setIsBookingModalOpen(true);
  };

  const handleSelectVehicle = (vehicleId: string) => {
    setBookingServiceType('cab');
    setBookingPrefillId(vehicleId);
    setIsBookingModalOpen(true);
  };

  const handleSelectProperty = (propertyId: string) => {
    setBookingServiceType('hospitality');
    setBookingPrefillId(propertyId);
    setIsBookingModalOpen(true);
  };

  const handleSelectEvent = (eventId: string) => {
    setBookingServiceType('event');
    setBookingPrefillId(eventId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3EFE6] flex flex-col font-sans">
      {/* Royal Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        currentCurrency={currentCurrency}
        onCurrencyChange={(code) => setCurrentCurrency(code)}
        onOpenBooking={(service) => handleOpenBooking(service || 'all_in_one')}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* VIEW 1: DEDICATED CAB SERVICE PAGE */}
        {currentPage === 'cab' && (
          <CabServicePage
            currentCurrency={currentCurrency}
            onNavigateHome={() => navigateTo('home')}
            onNavigateEvents={() => navigateTo('events')}
            onOpenConcierge={() => setIsConciergeOpen(true)}
            onOpenBookingModal={(prefillId) => handleOpenBooking('cab', prefillId)}
          />
        )}

        {/* VIEW 2: DEDICATED EVENT MANAGEMENT PAGE */}
        {currentPage === 'events' && (
          <EventManagementPage
            currentCurrency={currentCurrency}
            onNavigateHome={() => navigateTo('home')}
            onNavigateCab={() => navigateTo('cab')}
            onOpenConcierge={() => setIsConciergeOpen(true)}
            onOpenBookingModal={(prefillId) => handleOpenBooking('event', prefillId)}
          />
        )}

        {/* VIEW 3: SANCTUARY HOME (ALL-IN-ONE OVERVIEW) */}
        {currentPage === 'home' && (
          <>
            {/* Hero Section with Live Reservation & Quotation Bar */}
            <HeroSection
              currentCurrency={currentCurrency}
              onOpenBooking={handleOpenBooking}
            />

            {/* Section 01: Royal Fleet & Chauffeur Mobility */}
            <FleetSection
              currentCurrency={currentCurrency}
              onSelectVehicle={handleSelectVehicle}
              onNavigateToCabPage={() => navigateTo('cab')}
            />

            {/* Section 02: Palatial Hospitality Suites & Heritage Stays */}
            <HospitalitySection
              currentCurrency={currentCurrency}
              onSelectProperty={handleSelectProperty}
            />

            {/* Section 03: Grand Event & Royal Wedding Direction */}
            <EventsSection
              currentCurrency={currentCurrency}
              onSelectEvent={handleSelectEvent}
              onNavigateToEventsPage={() => navigateTo('events')}
            />

            {/* The Trinity: All-In-One Unified Solution */}
            <TrinityBundleSection
              currentCurrency={currentCurrency}
              onOpenBookingAllInOne={() => handleOpenBooking('all_in_one')}
            />

            {/* Proof & Patron Testimony */}
            <TestimonialsSection />
          </>
        )}
      </main>

      {/* Royal Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking('all_in_one')}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Interactive Reservation & Quoting Engine Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currentCurrency={currentCurrency}
        initialServiceType={bookingServiceType}
        initialPreselectedId={bookingPrefillId}
      />

      {/* 24/7 Global Concierge Drawer */}
      <ConciergeDrawer
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />
    </div>
  );
}
