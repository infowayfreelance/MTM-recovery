import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import './globals.css';
const OG_IMAGE = 'https://mtm-recovery-infowayfreelance-4963.vercel.app/mtm-open-graph.webp';
export const metadata:Metadata={
 metadataBase:new URL(SITE.url),
 title:{default:'MTM Recovery | 24/7 Breakdown Recovery & Towing Manchester',template:'%s | MTM Recovery'},
 description:'MTM Recovery offers 24/7 emergency breakdown recovery, towing, auction vehicle collection, jump starts and transport from Manchester. Call 07766 339034.',
 alternates:{canonical:'/'},
 robots:{index:false,follow:true},
 openGraph:{type:'website',siteName:SITE.name,title:'MTM Recovery | 24/7 Breakdown Recovery & Towing',description:'Emergency recovery, towing and roadside assistance in Manchester. Call MTM Recovery 24/7.',url:'https://mtm-recovery-infowayfreelance-4963.vercel.app',images:[{url:OG_IMAGE,secureUrl:OG_IMAGE,width:1200,height:630,type:'image/webp',alt:'MTM Recovery vehicle recovery and transport services in Manchester'}]},
 twitter:{card:'summary_large_image',title:'MTM Recovery | 24/7 Breakdown Recovery & Towing',description:'Emergency recovery, towing and roadside assistance in Manchester.',images:[OG_IMAGE]},
};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en-GB"><body><Header/><main>{children}</main><Footer/><FloatingActions/></body></html>}