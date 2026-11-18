export const SITE = {
  name: 'MTM Recovery',
  url: 'https://www.mtmrecovery.co.uk',
  phone: '+447766339034',
  phoneDisplay: '07766 339034',
  whatsapp: 'https://wa.me/447766339034',
  email: 'mtmrecovery00@gmail.com',
  location: 'Manchester, United Kingdom',
  area: 'Manchester and UK-wide vehicle transport',
  // Verified client recovery photographs used for the hero and About section.
  hero: '/images/mtm/mtm-hero-night.webp',
  aboutPhoto: '/images/mtm/mtm-about-vehicle.webp'
};
export const SERVICES = [
 { slug:'24-7-emergency-breakdown-recovery', title:'24/7 Emergency Breakdown Recovery', image:'emergency-breakdown-recovery.webp', imageAlt:'Audi vehicle secured to an MTM Recovery trailer during a night breakdown callout', imageTitle:'24/7 Emergency Breakdown Recovery | MTM Recovery', desc:'Broken down unexpectedly? Contact MTM Recovery at any hour for help moving your vehicle safely.', detail:'Vehicle trouble can happen at home, on the road or during a journey. Tell us your exact location, vehicle type and what has happened. We will discuss a suitable recovery option.' },
 { slug:'auction-recovery-service', title:'Auction Recovery Service', image:'auction-recovery.webp', imageAlt:'Illustrative auction vehicle collection with a car secured on a flatbed truck', imageTitle:'Auction Recovery Service | MTM Recovery', desc:'Arrange collection and transport of vehicles purchased from auction sites.', detail:'Need an auction purchase collected? Share the auction location, collection instructions, vehicle condition and delivery address so we can discuss transport.' },
 { slug:'vehicle-transport-service', title:'Vehicle Transport Service', image:'vehicle-transport.webp', imageAlt:'Illustrative vehicle transport with a car safely secured on a recovery trailer', imageTitle:'Vehicle Transport Service | MTM Recovery', desc:'Planned point-to-point transport for cars and other suitable vehicles.', detail:'From a private sale to a garage transfer, tell us your pickup and destination details. We can discuss safe vehicle transport suitable for your needs.' },
 { slug:'we-buy-scrap-cars', title:'We Buy Scrap Cars', image:'scrap-car-collection.webp', imageAlt:'Illustrative collection of an unwanted car by a vehicle recovery operator', imageTitle:'We Buy Scrap Cars | MTM Recovery', desc:'Contact us to discuss selling an unwanted, damaged or end-of-life car.', detail:'If you have an unwanted or damaged vehicle, send its make, model, registration, condition and postcode for a scrap car enquiry.' },
 { slug:'jump-start-service', title:'Jump Start Service', image:'jump-start-service.webp', imageAlt:'Illustrative roadside battery jump start using jump leads with the bonnet open', imageTitle:'Jump Start Service | MTM Recovery', desc:'Get help when a flat battery prevents your vehicle from starting.', detail:'A flat battery can leave you stranded. Let us know your vehicle details and location so we can discuss a jump-start visit.' },
 { slug:'long-distance-towing', title:'Long Distance Towing', image:'long-distance-towing.webp', imageAlt:'Illustrative car transport on a recovery trailer during a long-distance journey', imageTitle:'Long Distance Towing | MTM Recovery', desc:'Transport a vehicle between towns and cities across the UK.', detail:'Tell us the collection and delivery locations and whether the vehicle rolls and steers. We can discuss long-distance towing arrangements.' },
 { slug:'roadside-assistance', title:'Roadside Assistance', image:'roadside-assistance.webp', imageAlt:'Black car secured to MTM Recovery trailer during a roadside recovery on a wet road', imageTitle:'Roadside Assistance | MTM Recovery', desc:'Practical help for common problems while you are on the road.', detail:'Whether your car will not start or you need help deciding on recovery, contact us with your location and a short explanation.' },
 { slug:'accident-recovery', title:'Accident Recovery', image:'accident-recovery.webp', imageAlt:'Illustrative damaged silver car secured to a flatbed truck for accident recovery', imageTitle:'Accident Recovery | MTM Recovery', desc:'Vehicle collection and recovery after a road traffic accident.', detail:'After an accident, put safety first. When it is safe to do so, contact us with the vehicle condition and collection location to discuss recovery.' },
 { slug:'breakdown-recovery-service', title:'Breakdown Recovery Service', image:'breakdown-recovery.webp', imageAlt:'Grey Audi recovered on an MTM Recovery trailer at night', imageTitle:'Breakdown Recovery Service | MTM Recovery', desc:'Recovery when your vehicle cannot safely continue its journey.', detail:'For mechanical failures or non-starting vehicles, share your location and preferred destination to arrange a recovery enquiry.' },
 { slug:'van-commercial-recovery', title:'Van & Commercial Recovery', image:'commercial-van-recovery.webp', imageAlt:'Illustrative white commercial van loaded on a flatbed recovery truck', imageTitle:'Van and Commercial Recovery | MTM Recovery', desc:'Discuss recovery options for vans and suitable commercial vehicles.', detail:'Please tell us the vehicle model, approximate weight, condition and current location so we can check an appropriate recovery option.' },
 { slug:'fuel-delivery-service', title:'Fuel Delivery Service', image:'fuel-delivery-service.webp', imageAlt:'Illustrative roadside fuel delivery to a car using a red portable fuel container', imageTitle:'Fuel Delivery Service | MTM Recovery', desc:'Run out of fuel? Ask about roadside fuel delivery.', detail:'If you have run out of fuel, share the vehicle type, fuel type and safe roadside location so we can discuss assistance.' },
 { slug:'fast-response-towing-service', title:'Fast Response Towing Service', image:'fast-response-towing.webp', imageAlt:'Illustrative night-time vehicle towing on a recovery truck under amber lights', imageTitle:'Fast Response Towing Service | MTM Recovery', desc:'Get in touch for urgent towing when your vehicle needs moving.', detail:'When you need towing assistance, call us with the vehicle location and destination. We will advise on availability and next steps.' }
] as const;
export type RecoveryService = (typeof SERVICES)[number];
export function imageUrl(path: string) { return path.startsWith('/') ? path : '/images/mtm/' + path; }
export function whatsappText(message: string) { return SITE.whatsapp + '?text=' + encodeURIComponent(message); }
// Genuine client-supplied recovery photographs, rather than AI service illustrations.
export const GALLERY = [
  {image:'mtm-hero-night.webp',title:'Night Vehicle Recovery',alt:'Grey Audi being transported on an MTM Recovery trailer at night'},
  {image:'gallery-silver-bmw.webp',title:'Car Transportation',alt:'Silver BMW estate on an MTM Recovery vehicle transport trailer'},
  {image:'gallery-city-recovery.webp',title:'City Recovery',alt:'Grey car on a recovery trailer during an evening city collection'},
  {image:'gallery-urban-recovery.webp',title:'Urban Vehicle Collection',alt:'Black saloon being moved on an MTM Recovery trailer in an urban area'},
  {image:'gallery-white-audi.webp',title:'Long-Distance Vehicle Transport',alt:'White SUV secured to a vehicle recovery trailer beside a UK road'},
  {image:'gallery-blue-mpv.webp',title:'Vehicle Towing',alt:'Blue MPV being transported on an MTM Recovery trailer'},
  {image:'gallery-van-recovery.webp',title:'Van Transportation',alt:'White commercial van transported on a vehicle recovery trailer'},
  {image:'mtm-about-vehicle.webp',title:'Vehicle Recovery',alt:'Car secured to an MTM Recovery trailer during daytime transport'},
] as const;
