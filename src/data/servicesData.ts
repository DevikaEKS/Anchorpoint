import { ServiceDetail } from '../types';

export const servicesData: Record<string, ServiceDetail> = {
  cabs: {
    id: 'cabs',
    pageId: 'cabs',
    title: 'Cab Services & Corporate Fleet Mobility',
    shortDesc:
      'Convenient, punctual, and hassle-free transportation for daily commuting, executive airport transfers, city exploration, and outstation journeys.',
    fullDesc:
      'Anchor Point’s cab services offer a reliable, sophisticated way to travel across Chennai and southern India. With a meticulously maintained fleet of executive sedans, luxury MPVs, and rugged SUVs paired with police-verified, professionally trained chauffeurs, we ensure every journey is safe, comfortable, and punctual. Whether navigating daily peak hours along the Rajiv Gandhi Salai (OMR) tech corridor, catching early morning international departures from Chennai International Airport (MAA), or organizing VIP convoys for high-stakes corporate summits, our dedicated fleet operations guarantee 100% on-time performance.',
    iconName: 'Car',
    heroImage: './assets/images/hero_fleet_mobility_1793079585882.jpg',
    highlights: [
      '24/7 Centralized Dispatch & Real-Time GPS Tracking',
      'Police-Verified, English & Multi-Lingual Trained Chauffeurs',
      '100% Sanitized Vehicles with Fresh Bottled Water & Wi-Fi',
      'Transparent Metered & Package Pricing with Zero Surge Fees',
      'Corporate Monthly Fleet Leasing & GST Compliant Billing',
      'Flight-Tracked Airport Meet-and-Greet with Nameboards',
    ],
    features: [
      {
        title: 'Executive Airport Transfers (MAA)',
        description:
          'Automated live flight monitoring ensures our chauffeurs are waiting curbside with personalized digital nameboards, assisting with luggage regardless of flight delays or terminal changes.',
      },
      {
        title: 'Daily Corporate Commutes & Tech Shuttles',
        description:
          'Dedicated employee commute routes, executive point-to-point transfers across OMR, Guindy, Siruseri SIPCOT, and Sriperumbudur manufacturing hubs with corporate SLA agreements.',
      },
      {
        title: 'Inter-City & Outstation Travel',
        description:
          'Comfortable long-distance chauffeur travel from Chennai to Puducherry, Bengaluru, Tirupati, Vellore, and Mahabalipuram with all-inclusive per-kilometer transparent rates.',
      },
      {
        title: 'Luxury Wedding & VIP Delegation Convoys',
        description:
          'Coordinated fleet deployment of matching Mercedes-Benz, BMW, and Toyota luxury multi-utility vehicles for weddings, celebrity appearances, and international business delegations.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Select Vehicle & Travel Package',
        desc: 'Browse our extensive fleet of sedans, MPVs, and luxury cars. Choose local hourly packages, flat airport rates, or outstation kilometers.',
      },
      {
        step: '02',
        title: 'Instant Confirmation & Chauffeur Details',
        desc: 'Receive immediate booking confirmation with driver name, contact number, license plate, and live GPS vehicle tracking link.',
      },
      {
        step: '03',
        title: 'Curbside Arrival & Chauffeur Etiquette',
        desc: 'Your chauffeur arrives 15 minutes before schedule in crisp uniform, handles your luggage, and provides a climate-controlled, quiet cabin.',
      },
      {
        step: '04',
        title: 'Seamless Digital Payment & GST Invoicing',
        desc: 'Complete trip settlement via UPI, corporate billing voucher, credit card, or net banking with instant GST tax receipts.',
      },
    ],
    faq: [
      {
        question: 'How early should I book an airport transfer or rental?',
        answer:
          'While we accommodate urgent bookings within 45 to 60 minutes subject to availability, we recommend booking at least 3 to 4 hours in advance for airport transfers and 24 hours in advance for luxury segment vehicles (Mercedes/BMW).',
      },
      {
        question: 'Are toll taxes, parking fees, and driver allowances included?',
        answer:
          'Local 8hr/80km packages include vehicle, fuel, and chauffeur charges. Tolls, state permits (if crossing interstate borders), and parking are billed at actuals transparently on the final receipt.',
      },
      {
        question: 'Can corporate clients open a monthly credit billing account?',
        answer:
          'Yes! We provide customized corporate accounts with monthly invoicing, GST input credit compliance, automated trip MIS reports, and dedicated account relationship managers.',
      },
      {
        question: 'What safety measures and hygiene standards are followed?',
        answer:
          'Every vehicle is vacuumed and sanitized before every dispatch. Drivers undergo strict background verification, defensive driving training, and health assessments. GPS SOS panic tracking is active 24/7.',
      },
    ],
  },
  hospitality: {
    id: 'hospitality',
    pageId: 'hospitality',
    title: 'Hospitality Solutions & Boutique Living',
    shortDesc:
      'A commitment to exceeding guest expectations with personalized warmth, sophisticated accommodations, and attention to detail.',
    fullDesc:
      'At Anchor Point, hospitality isn’t merely a service; it’s an enduring culture of care, warmth, and attention to detail. Operating under Anchor Point Hospitality Private Limited, we manage premier short-stay boutique properties, serviced residential apartments, and corporate guest houses, including our renowned property "The Edge by Anchor Point" in Sholinganallur, Chennai. Designed for traveling business leaders, long-term project consultants, expat executives, and discerning families, our accommodations blend the comfort of home with the rigorous standards of five-star hospitality.',
    iconName: 'Hotel',
    heroImage: './assets/images/service_hospitality_suite_1793079585353.jpg',
    highlights: [
      'The Edge by Anchor Point: Boutique hotel & suites in Sholinganallur',
      'Corporate serviced residences at Hiranandani Bridgewood, Egattur',
      '24/7 Professional Housekeeping, Concierge & Front-Desk Support',
      'Curated Chef-Prepared Dining & Multi-Cuisine In-Room Service',
      'Ultra-Fast Gigabit Fiber Wi-Fi & Dedicated Ergonomic Workspaces',
      '100% 24/7 Power Backup, Centralized Water Filtration & Security',
    ],
    features: [
      {
        title: 'Short-Stay Executive Suites',
        description:
          'Contemporary rooms and master suites furnished with premium orthopedic mattresses, Egyptian cotton linens, smart entertainment systems, and luxurious rainfall shower bathrooms.',
      },
      {
        title: 'Corporate Extended Stay Residences',
        description:
          'Fully serviced 1, 2, and 3-BHK luxury apartments with modular kitchens, microwave, washing machine, and dining area, ideal for consultants and corporate relocation.',
      },
      {
        title: 'Corporate Guest House Management',
        description:
          'Complete facility management for multinational enterprises looking to operate high-efficiency private employee guest houses with zero administrative overhead.',
      },
      {
        title: 'Gourmet Dining & Nutritional Catering',
        description:
          'Freshly prepared homestyle and multi-cuisine breakfast spreads, curated executive lunch boxes, and tailor-made dietary catering for visiting delegates.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Inquire or Select Your Stay Dates',
        desc: 'Choose your desired location in Chennai (Sholinganallur or Hiranandani Egattur) and room configuration.',
      },
      {
        step: '02',
        title: 'Personalized Stay Coordination',
        desc: 'Our reservation concierge contacts you to confirm arrival times, airport transfers, dietary preferences, and room setup.',
      },
      {
        step: '03',
        title: 'Express Check-In & Welcome Hospitality',
        desc: 'Arrive to a smooth, paperless check-in with chilled welcome refreshments and personalized property orientation.',
      },
      {
        step: '04',
        title: '24/7 Butler & Housekeeping Assistance',
        desc: 'Enjoy immaculate daily housekeeping, laundry valet, room dining, and seamless checkout with consolidated corporate invoices.',
      },
    ],
    faq: [
      {
        question: 'Where are Anchor Point hospitality properties situated in Chennai?',
        answer:
          'Our flagship property "The Edge by Anchorpoint" is located at No: 19, Narayanaswamy Nagar 3rd Street, Sholinganallur (Chennai - 600119), minutes away from ELCOT SEZ and Infosys/TCS tech parks. We also maintain corporate residential suites at Hiranandani Bridgewood, Egattur.',
      },
      {
        question: 'Are the properties suitable for extended stays of weeks or months?',
        answer:
          'Absolutely. We offer tailored extended-stay tariffs that include utilities, daily housekeeping, weekly linen change, high-speed fiber internet, and complimentary breakfast options.',
      },
      {
        question: 'Is high-speed internet available for remote work and video calls?',
        answer:
          'Yes, each suite and apartment is backed by dedicated enterprise gigabit fiber internet with mesh routers, providing guaranteed latency-free Zoom/Teams video conferencing.',
      },
      {
        question: 'Do you offer airport pickup in conjunction with room bookings?',
        answer:
          'Yes! Because Anchor Point operates its own dedicated executive fleet, we provide integrated airport pickup directly to your room door with zero transit friction.',
      },
    ],
  },
  events: {
    id: 'events',
    pageId: 'events',
    title: 'Event Management & Experiential Production',
    shortDesc:
      'Meticulous planning, creative design, and seamless execution that brings your vision to life and leaves a lasting impression.',
    fullDesc:
      'Planning and executing a memorable event requires rigorous precision, aesthetic elegance, and flawless execution under real-time pressure. Anchor Point’s Event Management division specializes in delivering unforgettable corporate summits, award galas, high-tech product launches, exhibitions, and lavish private celebrations. From concept conceptualization and venue transformation to cutting-edge audio-visual staging and comprehensive VIP delegate logistics, our turnkey solutions eliminate client stress and elevate brand prestige.',
    iconName: 'Calendar',
    heroImage: './assets/images/service_event_management_1793079586307.jpg',
    highlights: [
      'Turnkey Corporate Conferences, Annual Days & Global Summits',
      'Luxury Weddings, Receptions & Milestone Celebrations',
      'Advanced AV Production: LED Video Walls, Line-Array Audio & Stage Lights',
      'End-to-End Guest Hospitality & Coordinated Fleet Transportation',
      'Celebrity Artist, Emcee & Entertainment Management',
      'Regulatory Permissions, Fire Safety & Crowd Management Protocol',
    ],
    features: [
      {
        title: 'Corporate Conferences & Annual Summits',
        description:
          'Flawless orchestration of multi-track tech conferences, keynotes, panel discussions, branded stage structures, breakout rooms, and executive catering.',
      },
      {
        title: 'Product Unveilings & Brand Activations',
        description:
          'Immersive sensory launches with synchronized pyrotechnics, intelligent laser lighting, interactive projection mapping, and media press management.',
      },
      {
        title: 'Bespoke Luxury Weddings',
        description:
          'Magical destination and ballroom weddings with customized floral sceneries, curated multi-course banquet menus, bridal hospitality, and choreography.',
      },
      {
        title: 'Integrated Delegate Mobility Logistics',
        description:
          'Leveraging Anchor Point’s fleet to seamlessly transfer hundreds of delegates between airports, five-star partner hotels, and convention centers on time.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Conceptual Ideation',
        desc: 'We sit down with your leadership team to understand the event objectives, audience demographic, theme, and budget parameters.',
      },
      {
        step: '02',
        title: '3D Spatial Design & Run-of-Show Blueprint',
        desc: 'We deliver comprehensive 3D stage renders, seating layouts, technical line sheets, and a minute-by-minute timeline.',
      },
      {
        step: '03',
        title: 'Vendor Curation & Technical Dry Runs',
        desc: 'Stage construction, sound checks, lighting calibration, hospitality briefings, and contingency drills 24 hours prior to launch.',
      },
      {
        step: '04',
        title: 'Live Event Direction & Post-Event Wrap',
        desc: 'Dedicated on-ground show directors manage queues, stage transitions, VIP movement, and AV cues flawlessly to final applause.',
      },
    ],
    faq: [
      {
        question: 'What scale of events does Anchor Point manage?',
        answer:
          'We manage events ranging from intimate 30-person VIP boardroom retreats and executive dinners up to 2,500+ attendee international tech summits and multi-day convention exhibitions.',
      },
      {
        question: 'Can Anchor Point manage both the event production and guest transport?',
        answer:
          'Yes! This is our unique core advantage. Because Anchor Point operates both fleet mobility and hospitality arms, we deliver an all-in-one unified solution spanning airport transfers, hotel room blocks, and stage production.',
      },
      {
        question: 'How do you handle audio-visual and stage lighting requirements?',
        answer:
          'We supply state-of-the-art P2.5/P3 indoor and outdoor LED screens, digital sound consoles with wireless Sennheiser/Shure microphones, computerized moving-head beam lights, and backup generators.',
      },
      {
        question: 'How do we receive a detailed budget proposal for an upcoming event?',
        answer:
          'Contact our event production desk via our online form or call +91 90031 63335. We deliver an itemized line-by-line financial quotation within 24 to 48 hours of initial briefing.',
      },
    ],
  },
};
