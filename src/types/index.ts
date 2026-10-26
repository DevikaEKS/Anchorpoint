export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED' | 'INR';

export type NavigationPage = 'home' | 'cab' | 'events' | 'hospitality';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  rateFromUSD: number;
}

export type FleetCategory = 'all' | 'sedan' | 'vintage' | 'suv' | 'coach';

export interface FleetVehicle {
  id: string;
  name: string;
  subtitle: string;
  category: FleetCategory;
  image: string;
  hourlyRateUSD: number;
  dayRateUSD: number; // 8 hours
  capacityPassengers: number;
  capacityLuggage: number;
  engine: string;
  highlightFeatures: string[];
  securityGrade: string;
  chauffeurAttire: string;
  tagline: string;
  idealFor: string[];
}

export interface HospitalityProperty {
  id: string;
  name: string;
  estateType: string;
  location: string;
  image: string;
  nightlyRateUSD: number;
  squareFeet: number;
  maxGuests: number;
  bedrooms: number;
  butlerIncluded: boolean;
  michelinDining: boolean;
  architecturalStyle: string;
  amenities: string[];
  historicalNote: string;
}

export interface EventPackage {
  id: string;
  title: string;
  category: 'wedding' | 'gala' | 'summit' | 'celebration';
  durationDays: number;
  image: string;
  guestCapacity: string;
  startingBudgetUSD: number;
  description: string;
  decorTier: string;
  fleetSupport: string;
  hospitalityLiaison: string;
  inclusions: string[];
  timelineDays: { day: number; title: string; highlight: string }[];
}

export type ServiceType = 'cab' | 'hospitality' | 'event' | 'all_in_one';

export interface BookingSubmission {
  referenceId: string;
  serviceType: ServiceType;
  fullName: string;
  email: string;
  phone: string;
  startDate: string;
  endDate?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  selectedVehicleId?: string;
  selectedPropertyId?: string;
  selectedEventId?: string;
  guestCount: number;
  additionalRequests: string;
  currency: CurrencyCode;
  estimatedTotal: number;
  createdAt: string;
}

export interface FixedRouteRate {
  id: string;
  title: string;
  pickup: string;
  dropoff: string;
  vehicleModel: string;
  vehicleId: string;
  durationApprox: string;
  priceUSD: number;
  amenities: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
