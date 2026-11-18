import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { RecoveryService, imageUrl } from '@/lib/site';
export default function ServiceCard({service}:{service:RecoveryService}){return <Link className="service-card" href={'/services/'+service.slug}>
<div className="service-photo" style={{backgroundImage:'linear-gradient(0deg,rgba(22,9,32,.55),rgba(34,12,51,.2)),url("'+imageUrl(service.image)+'")'}} role="img" aria-label={service.title+' photo placeholder'}><span>MTM <b>RECOVERY</b></span></div><div className="service-info"><h3>{service.title}</h3><p>{service.desc}</p><span className="learn-more">Learn more <ArrowUpRight size={17}/></span></div></Link>}