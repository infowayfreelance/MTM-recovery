export const SITE = {
  name: 'MTM Recovery',
  url: 'https://www.mtmrecovery.co.uk',
  phone: '+447766339034',
  phoneDisplay: '07766 339034',
  whatsapp: 'https://wa.me/447766339034',
  email: 'mtmrecovery00@gmail.com',
  location: 'Manchester, United Kingdom',
  area: 'Manchester and UK-wide vehicle transport',
  // Source imagery is deliberately left for the next asset/brand phase.
  // These are temporary references to the unedited B5 layout images.
  hero: 'https://b5recoveryandtowing.co.uk/hero-banner.webp',
  aboutPhoto: 'https://b5recoveryandtowing.co.uk/about-team.webp'
};
export const SERVICES = [
 { slug:'24-7-emergency-breakdown-recovery', title:'24/7 Emergency Breakdown Recovery', image:'emergency-vehicle-recovery.webp', desc:'Broken down unexpectedly? Contact MTM Recovery at any hour for help moving your vehicle safely.', detail:'Vehicle trouble can happen at home, on the road or during a journey. Tell us your exact location, vehicle type and what has happened. We will discuss a suitable recovery option.' },
 { slug:'auction-recovery-service', title:'Auction Recovery Service', image:'images/auction-vehicle-collection-1536x1024.webp', desc:'Arrange collection and transport of vehicles purchased from auction sites.', detail:'Need an auction purchase collected? Share the auction location, collection instructions, vehicle condition and delivery address so we can discuss transport.' },
 { slug:'vehicle-transport-service', title:'Vehicle Transport Service', image:'vehicle-transportation.webp', desc:'Planned point-to-point transport for cars and other suitable vehicles.', detail:'From a private sale to a garage transfer, tell us your pickup and destination details. We can discuss safe vehicle transport suitable for your needs.' },
 { slug:'we-buy-scrap-cars', title:'We Buy Scrap Cars', image:'car-recovery.webp', desc:'Contact us to discuss selling an unwanted, damaged or end-of-life car.', detail:'If you have an unwanted or damaged vehicle, send its make, model, registration, condition and postcode for a scrap car enquiry.' },
 { slug:'jump-start-service', title:'Jump Start Service', image:'roadside-breakdown-assistance.webp', desc:'Get help when a flat battery prevents your vehicle from starting.', detail:'A flat battery can leave you stranded. Let us know your vehicle details and location so we can discuss a jump-start visit.' },
 { slug:'long-distance-towing', title:'Long Distance Towing', image:'long-distance-vehicle-recovery.webp', desc:'Transport a vehicle between towns and cities across the UK.', detail:'Tell us the collection and delivery locations and whether the vehicle rolls and steers. We can discuss long-distance towing arrangements.' },
 { slug:'roadside-assistance', title:'Roadside Assistance', image:'roadside-breakdown-assistance.webp', desc:'Practical help for common problems while you are on the road.', detail:'Whether your car will not start or you need help deciding on recovery, contact us with your location and a short explanation.' },
 { slug:'accident-recovery', title:'Accident Recovery', image:'accident-recovery.webp', desc:'Vehicle collection and recovery after a road traffic accident.', detail:'After an accident, put safety first. When it is safe to do so, contact us with the vehicle condition and collection location to discuss recovery.' },
 { slug:'breakdown-recovery-service', title:'Breakdown Recovery Service', image:'car-breakdown-recovery.webp', desc:'Recovery when your vehicle cannot safely continue its journey.', detail:'For mechanical failures or non-starting vehicles, share your location and preferred destination to arrange a recovery enquiry.' },
 { slug:'van-commercial-recovery', title:'Van & Commercial Recovery', image:'images/van-recovery-service-1448x1086.webp', desc:'Discuss recovery options for vans and suitable commercial vehicles.', detail:'Please tell us the vehicle model, approximate weight, condition and current location so we can check an appropriate recovery option.' },
 { slug:'fuel-delivery-service', title:'Fuel Delivery Service', image:'images/fuel-delivery-2-1536x1024.webp', desc:'Run out of fuel? Ask about roadside fuel delivery.', detail:'If you have run out of fuel, share the vehicle type, fuel type and safe roadside location so we can discuss assistance.' },
 { slug:'fast-response-towing-service', title:'Fast Response Towing Service', image:'24-7-vehicle-recovery.webp', desc:'Get in touch for urgent towing when your vehicle needs moving.', detail:'When you need towing assistance, call us with the vehicle location and destination. We will advise on availability and next steps.' }
] as const;
export type RecoveryService = (typeof SERVICES)[number];
export function imageUrl(path: string) { return 'https://b5recoveryandtowing.co.uk/' + path; }
export function whatsappText(message: string) { return SITE.whatsapp + '?text=' + encodeURIComponent(message); }