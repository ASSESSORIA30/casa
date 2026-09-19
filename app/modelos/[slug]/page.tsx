import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, Car, Waves } from 'lucide-react';
import PlanTabs from '@/components/PlanTabs';
import ContactForm from '@/components/ContactForm';
import { BRAND } from '@/config/brand';
import { getHouseSlugs, getPublicHouse, getPublicHouses } from '@/data/houses';

export function generateStaticParams() { return getHouseSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const house = getPublicHouse(slug);
  if (!house) return {};
  return { title: `${house.name} · ${house.surface} m²`, description: `${house.name}: ${house.bedrooms} dormitorios, ${house.bathrooms} baños, ${house.surface} m². Vivienda industrializada completamente equipada.` };
}

export default async function HousePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const maybeHouse = getPublicHouse(slug);
  if (!maybeHouse) notFound();
  const house = maybeHouse!;
  const allHouses = getPublicHouses();
  const price = new Intl.NumberFormat(BRAND.locale, { style: 'currency', currency: BRAND.currency, maximumFractionDigits: 0 }).format(house.retailPrice);
  const living = house.interiorImage || house.gallery.find(x => x.alt.toLowerCase().includes('salón'))?.src || house.gallery[2]?.src;
  const kitchen = house.gallery.find(x => x.alt.toLowerCase().includes('cocina'))?.src || house.gallery[3]?.src;
  const bedroom = house.gallery.find(x => x.alt.toLowerCase().includes('suite') || x.alt.toLowerCase().includes('dormitorio'))?.src || house.gallery[4]?.src;
  return <>
    <section className="relative min-h-[100svh] overflow-hidden bg-[#aeb0aa] text-white">
      <img src={house.hero} alt={`Vista conceptual de ${house.name}`} className="absolute inset-0 h-full w-full object-cover"/>
      <div className="hero-shade absolute inset-0"/>
      <div className="container-wide relative flex min-h-[100svh] flex-col justify-between pb-8 pt-28 md:pb-10 md:pt-32">
        <div className="flex justify-between"><p className="eyebrow opacity-75">Collection {house.id}</p><p className="eyebrow hidden opacity-55 md:block">{house.surface} m² · {house.bedrooms} bedrooms · {house.bathrooms} bathrooms</p></div>
        <div>
          <p className="text-[6rem] leading-[.72] tracking-[-.06em] arch-serif md:text-[12rem]">{house.surface}</p>
          <div className="mt-8 grid gap-8 border-t border-white/30 pt-5 md:grid-cols-[1fr_auto] md:items-end"><div><h1 className="max-w-4xl text-4xl leading-none arch-serif md:text-6xl">{house.tagline}</h1><p className="mt-4 max-w-2xl text-base leading-7 text-white/74">{house.description}</p></div><Link href="#contacto-modelo" className="btn-line">Quiero esta casa</Link></div>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-40">
      <div className="container-wide grid gap-12 md:grid-cols-[.58fr_1.42fr]"><div><p className="eyebrow opacity-45">01 — Architecture</p><p className="mt-5 max-w-xs text-sm leading-6 opacity-55">{house.audience}</p></div><div><h2 className="display-lg">Pensada como una casa.<br/><span className="italic">Resuelta como un producto.</span></h2><div className="mt-12 grid gap-8 md:grid-cols-2"><p className="body-lg opacity-68">Distribuciones cerradas, recorridos cortos y una relación directa entre zona de día, porche y jardín.</p><p className="body-lg opacity-68">La personalización se concentra en acabados y packs seleccionados para preservar la calidad, el plazo y la coherencia del modelo.</p></div></div></div>
      <div className="container-wide mt-20 grid border-y hairline md:grid-cols-4">{[[`${house.surface} m²`,'Construidos'],[`${house.usableSurface} m²`,'Útiles'],[String(house.bedrooms),'Dormitorios'],[String(house.bathrooms),'Baños']].map(([v,l])=><div key={l} className="border-b hairline py-6 md:border-b-0 md:border-r md:px-7 first:md:pl-0 last:md:border-r-0"><p className="text-4xl arch-serif">{v}</p><p className="eyebrow mt-5 opacity-40">{l}</p></div>)}</div>
    </section>

    <section className="container-wide pb-24 md:pb-40">
      <div className="grid gap-4 md:grid-cols-12">
        <figure className="arch-image relative min-h-[460px] md:col-span-8 md:min-h-[760px]"><img src={house.coverImage || house.gallery[1]?.src || house.hero} alt={house.gallery[1]?.alt || house.name} className="h-full w-full object-cover"/><figcaption className="absolute bottom-5 left-5 bg-[#f1f1ed]/88 px-3 py-2 text-[9px] uppercase tracking-[.15em] backdrop-blur">Exterior</figcaption></figure>
        <figure className="arch-image relative min-h-[460px] md:col-span-4 md:min-h-[760px]"><img src={living} alt="Interior" className="h-full w-full object-cover"/><figcaption className="absolute bottom-5 left-5 bg-[#f1f1ed]/88 px-3 py-2 text-[9px] uppercase tracking-[.15em] backdrop-blur">Living</figcaption></figure>
        <figure className="arch-image relative min-h-[420px] md:col-span-5 md:min-h-[580px]"><img src={kitchen} alt="Cocina" className="h-full w-full object-cover"/></figure>
        <figure className="arch-image relative min-h-[420px] md:col-span-7 md:min-h-[580px]"><img src={bedroom} alt="Dormitorio principal" className="h-full w-full object-cover"/></figure>
      </div>
    </section>

    <section className="concrete-bg py-24 md:py-36">
      <div className="container-wide grid gap-14 md:grid-cols-[.55fr_1.45fr]"><div><p className="eyebrow opacity-45">02 — Floor plan</p><h2 className="display-md mt-7">Cada metro<br/>tiene un trabajo.</h2><p className="mt-7 max-w-sm text-sm leading-6 opacity-60">Plano conceptual y comercial. La implantación final deberá validarse según parcela, normativa, orientación y sistema estructural.</p></div><PlanTabs plan={house.plan}/></div>
      <div className="container-wide mt-12 grid gap-10 md:grid-cols-[.55fr_1.45fr]"><div/><div className="grid md:grid-cols-2"><div className="border-t hairline">{house.rooms.slice(0, Math.ceil(house.rooms.length/2)).map(room=><div key={room.name} className="flex justify-between border-b hairline py-3 text-sm"><span>{room.name}</span><span className="tabular-nums opacity-55">{room.area.toFixed(1).replace('.', ',')} m²</span></div>)}</div><div className="border-t hairline md:ml-8">{house.rooms.slice(Math.ceil(house.rooms.length/2)).map(room=><div key={room.name} className="flex justify-between border-b hairline py-3 text-sm"><span>{room.name}</span><span className="tabular-nums opacity-55">{room.area.toFixed(1).replace('.', ',')} m²</span></div>)}</div></div></div>
      <p className="container-wide mt-7 text-[9px] uppercase tracking-[.14em] opacity-40">Distribución orientativa sujeta a adaptación técnica, urbanística y estructural.</p>
    </section>

    <section className="bg-[#1b1c1a] py-24 text-[#f2f0e9] md:py-40">
      <div className="container-wide grid gap-14 md:grid-cols-[.55fr_1.45fr]"><div><p className="eyebrow opacity-45">03 — Everything included</p></div><div><h2 className="display-lg">La casa no termina<br/>en las paredes.</h2><p className="body-lg mt-8 max-w-3xl text-white/60">El equipamiento se integra desde el diseño. El objetivo no es entregarte una obra terminada, sino una vivienda preparada para vivir.</p></div></div>
      <div className="container-wide mt-20 grid gap-4 md:grid-cols-2"><div className="arch-image min-h-[520px]"><img src={kitchen} alt="Cocina equipada" className="h-full w-full object-cover"/></div><div className="flex flex-col justify-between border border-white/15 p-7 md:p-10"><div><p className="eyebrow opacity-45">Included</p><div className="mt-10">{house.equipment.map(item=><div key={item} className="flex gap-3 border-b border-white/15 py-4 text-sm text-white/72"><Check size={15} className="mt-1 shrink-0"/>{item}</div>)}</div></div><Link href="/equipamiento" className="btn-line mt-10 w-fit">Ver equipamiento completo</Link></div></div>
    </section>

    <section className="py-24 md:py-36"><div className="container-wide grid gap-14 md:grid-cols-[.55fr_1.45fr]"><div><p className="eyebrow opacity-45">04 — Configuration</p></div><div><h2 className="display-md">Personaliza sin volver<br/>a empezar.</h2><p className="mt-7 max-w-2xl text-lg leading-8 opacity-62">Las opciones se plantean como packs predefinidos. Así protegemos la arquitectura, la industrialización y el control de cada modelo.</p><div className="mt-14 border-t hairline">{house.options.map((option,i)=><div key={option} className="grid grid-cols-[48px_1fr] border-b hairline py-5"><span className="eyebrow opacity-35">0{i+1}</span><span className="text-2xl arch-serif">{option}</span></div>)}</div><div className="mt-8 flex gap-5 text-[10px] uppercase tracking-[.14em] opacity-55">{house.garage&&<span className="flex items-center gap-2"><Car size={14}/>Garaje</span>}{house.pool&&<span className="flex items-center gap-2"><Waves size={14}/>Piscina</span>}<span>{house.porchSurface} m² porches</span><span>{house.dimensions}</span></div></div></div></section>

    <section id="contacto-modelo" className="concrete-bg py-24 md:py-40"><div className="container-wide grid gap-14 md:grid-cols-[.55fr_1.45fr]"><div><p className="eyebrow opacity-45">{BRAND.showPrices ? `Desde ${price}` : 'Request information'}</p></div><div><h2 className="display-lg">Quiero esta casa.</h2><p className="body-lg mt-7 max-w-2xl opacity-65">Cuéntanos dónde quieres construirla. El siguiente paso es comprobar cómo encaja este modelo en tu parcela.</p><div className="mt-12"><ContactForm houses={allHouses} defaultModel={house.name}/></div></div></div></section>
  </>;
}
