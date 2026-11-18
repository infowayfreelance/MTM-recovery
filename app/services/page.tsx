import type { Metadata } from 'next';
import { SERVICES } from '@/lib/site';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
export const metadata:Metadata={title:'Vehicle Recovery & Towing Services',description:'Explore MTM Recovery’s 12 breakdown, towing, auction collection, jump-start, fuel delivery and transport services.',alternates:{canonical:'/services'}};
export default function Services(){return <><section className="inner-hero"><div className="container"><div className="eyebrow">Our services</div><h1>Vehicle Recovery & Roadside Assistance</h1><p>Choose the right service or contact us directly if you are not sure what you need.</p></div></section><section className="section container"><div className="cards">{SERVICES.map(s=><ServiceCard service={s} key={s.slug}/>)}</div></section><section className="section section-muted"><div className="container narrow"><ContactForm/></div></section></>}