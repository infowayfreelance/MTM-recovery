'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Phone, Menu, X, Truck } from 'lucide-react';
import { SITE } from '@/lib/site';
const NAV=[['/','Home'],['/services','Services'],['/about','About Us'],['/service-areas','Service Areas'],['/gallery','Gallery'],['/faqs','FAQs'],['/contact','Contact Us']];
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="container header-inner">
 <Link href="/" className="wordmark" aria-label="MTM Recovery home"><span className="mark-icon"><Truck size={23}/></span><span><b><em>MTM</em> Recovery</b><small>24/7 Vehicle Assistance</small></span></Link>
 <nav className="desktop-nav" aria-label="Main navigation">{NAV.map(([href,name])=><Link key={href} href={href}>{name}</Link>)}</nav>
 <a className="btn btn-primary desktop-call" href={'tel:'+SITE.phone}><Phone size={17}/> {SITE.phoneDisplay}</a>
 <button className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{NAV.map(([href,name])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{name}</Link>)}<a className="btn btn-primary" href={'tel:'+SITE.phone}>Call {SITE.phoneDisplay}</a></nav>}</header>;
}