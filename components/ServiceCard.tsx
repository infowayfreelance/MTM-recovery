import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { type RecoveryService, imageUrl } from '@/lib/site';
export default function ServiceCard({service}:{service:RecoveryService}){
 return <Link className="service-card" href={'/services/'+service.slug}>
  <div className="service-photo">
   <img src={imageUrl(service.image)} alt={service.imageAlt} title={service.imageTitle} loading="lazy" width={512} height={512}/>
   <span>MTM <b>RECOVERY</b></span>
  </div>
  <div className="service-info"><h3>{service.title}</h3><p>{service.desc}</p><span className="learn-more">Learn more <ArrowUpRight size={17}/></span></div>
 </Link>;
}
