export type PageId =
  | 'home'
  | 'services'
  | 'cabs'
  | 'hospitality'
  | 'events'
  | 'cars'
  | 'about'
  | 'contact';

export type CarCategory =
  | 'all'
  | 'city-taxi'
  | 'taxi-mpv'
  | 'executive-mpv'
  | 'luxury-sedan'
  | 'premium-suv';

export interface CarSpecification {
  engine: string;
  fuelType: 'Petrol' | 'Diesel' | 'CNG' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
  seatingCapacity: number;
  luggageCapacity: number; // in bags
  mileageOrRange: string;
  airConditioning: string;
  safetyRating: string;
}

export interface CarRentalRates {
  local8hr80km: number; // in INR
  extraKmRate: number;
  extraHourRate: number;
  airportFlatRate: number;
  outstationPerKm: number;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  categoryLabel: string;
  image: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  idealFor: string[];
  features: string[];
  amenities: string[];
  specs: CarSpecification;
  rates: CarRentalRates;
  isTaxi?: boolean;
  isPopular?: boolean;
  isExecutive?: boolean;
}

export interface ServiceDetail {
  id: string;
  pageId: PageId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroImage: string;
  highlights: string[];
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}
