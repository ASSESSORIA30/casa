import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PublicHouse } from '@/data/types';
import { BRAND } from '@/config/brand';

export default function HouseCard({ house, priority = false }: { house: PublicHouse; priority?: boolean }) {
  const price = new Intl.NumberFormat(BRAND.locale, { style: 'currency', currency: BRAND.currency, maximumFractionDigits: 0 }).format(house.retailPrice);
  return (
    <article className="group">
      <Link href={`/modelos/${house.slug}`} className="block">
        <div className="arch-image relative aspect-[4/5] md:aspect-[5/4]">
          <img src={house.coverImage || house.hero} alt={`Vista conceptual de ${house.name}`} loading={priority ? 'eager' : 'lazy'} />
          <div className="image-shade absolute inset-0"/>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white md:p-7">
            <div><p className="eyebrow opacity-70">Collection {house.id}</p><h3 className="mt-2 text-4xl arch-serif md:text-5xl">{house.surface}</h3></div>
            <ArrowUpRight size={22} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"/>
          </div>
        </div>
        <div className="grid gap-3 border-b hairline py-5 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-lg arch-serif">{house.tagline}</p><p className="mt-2 text-[10px] uppercase tracking-[.14em] opacity-55">{house.bedrooms} dormitorios · {house.bathrooms} baños · {house.floors} planta</p></div>
          <p className="text-[10px] uppercase tracking-[.14em]">{BRAND.showPrices ? `Desde ${price}` : 'Descubrir modelo'}</p>
        </div>
      </Link>
    </article>
  );
}
