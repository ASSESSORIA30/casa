'use client';

import { useMemo, useState } from 'react';
import HouseCard from './HouseCard';
import type { PublicHouse } from '@/data/types';

const filters = [
  ['all', 'Todos'], ['u120', '≤120 m²'], ['120-160', '120—160 m²'], ['160-200', '160—200 m²'], ['o200', '+200 m²'], ['3b', '3 dormitorios'], ['4b', '4 dormitorios'], ['5b', '5 dormitorios'],
] as const;

export default function ModelsGrid({ houses }: { houses: PublicHouse[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>('all');
  const filtered = useMemo(() => houses.filter((h) => {
    if (filter === 'all') return true;
    if (filter === 'u120') return h.surface <= 120;
    if (filter === '120-160') return h.surface > 120 && h.surface <= 160;
    if (filter === '160-200') return h.surface > 160 && h.surface <= 200;
    if (filter === 'o200') return h.surface > 200;
    if (filter === '3b') return h.bedrooms === 3;
    if (filter === '4b') return h.bedrooms === 4;
    if (filter === '5b') return h.bedrooms >= 5;
    return true;
  }), [filter, houses]);

  return <>
    <div className="mb-12 flex gap-6 overflow-x-auto border-b border-white/20 pb-5 md:mb-16 md:flex-wrap">
      {filters.map(([value, label]) => <button key={value} onClick={() => setFilter(value)} className={`shrink-0 text-[10px] uppercase tracking-[.16em] transition ${filter === value ? 'text-white' : 'text-white/38 hover:text-white/80'}`}>{label}</button>)}
    </div>
    <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 xl:grid-cols-3">{filtered.map((house) => <HouseCard key={house.id} house={house}/>)}</div>
  </>;
}
