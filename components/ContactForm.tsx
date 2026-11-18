'use client';
import { useState, type FormEvent } from 'react';
import { SITE, SERVICES, whatsappText } from '@/lib/site';
export default function ContactForm({service=''}:{service?:string}) {
 const [opened,setOpened]=useState(false);
 function submit(event:FormEvent<HTMLFormElement>) {
   event.preventDefault();
   const data=new FormData(event.currentTarget);
   const message=['Hello MTM Recovery, I would like a recovery quote.',
   'Name: '+data.get('name'),'Phone: '+data.get('phone'),
   'Service: '+data.get('service'),'Pickup / location: '+data.get('pickup'),
   'Destination: '+data.get('destination'),'Vehicle: '+data.get('vehicle'),
   'Details: '+data.get('details')].join('\n');
   window.open(whatsappText(message),'_blank','noopener,noreferrer');
   setOpened(true);
 }
 return <form className="quote-form panel" onSubmit={submit}>
  <div className="eyebrow">Request a quote</div><h3>Tell us what you need</h3>
  <div className="form-grid"><label>Your name<input name="name" required placeholder="Full name"/></label><label>Phone number<input name="phone" type="tel" required placeholder="Your contact number"/></label></div>
  <label>Service needed<select name="service" defaultValue={service} required><option value="">Choose a service</option>{SERVICES.map(s=><option value={s.title} key={s.slug}>{s.title}</option>)}</select></label>
  <label>Pickup / current location<input required name="pickup" placeholder="Town, street or postcode"/></label>
  <label>Drop-off destination<input name="destination" placeholder="Destination (if known)"/></label>
  <label>Vehicle details<input name="vehicle" placeholder="Make, model and condition"/></label>
  <label>More details<textarea name="details" rows={3} placeholder="Tell us what happened"/></label>
  <button className="btn btn-primary full" type="submit">{opened?'Open WhatsApp again':'Send enquiry on WhatsApp'}</button>
  <p className="fine">This opens WhatsApp with your details. No information is sent from this website.</p>
 </form>;
}