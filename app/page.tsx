import Link from 'next/link';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import HouseCard from '@/components/HouseCard';
import { getPublicHouses } from '@/data/houses';

export default function HomePage() {
  const houses = getPublicHouses();
  const signature = houses[6];
  const villa200 = houses[5];
  const family = houses[2];
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#aeb0aa] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/media/hero/hero-desktop-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/hero/hero-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
          <source src="/media/hero/hero-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        </video>
        <div className="hero-shade absolute inset-0"/>
        <div className="container-wide relative flex min-h-[100svh] flex-col justify-between pb-8 pt-28 md:pb-10 md:pt-32">
          <div className="flex justify-between"><p className="eyebrow reveal opacity-80">Industrialised concrete homes</p><p className="eyebrow hidden opacity-55 md:block">Collection 01 — 07</p></div>
          <div className="pb-8 md:pb-4">
            <h1 className="display-hero max-w-[1380px] reveal">Tu casa.<br/><span className="italic">Ya resuelta.</span></h1>
            <div className="mt-8 grid gap-7 border-t border-white/30 pt-5 md:grid-cols-[1fr_auto] md:items-end reveal-delay">
              <p className="max-w-2xl text-base leading-7 text-white/84 md:text-xl">Arquitectura industrializada de hormigón. Diseñada, terminada, equipada y preparada para entrar a vivir.</p>
              <div className="flex gap-7"><Link href="/modelos" className="btn-line">Explorar colección</Link><Link href="/todo-incluido" className="btn-line hidden sm:inline-flex">El concepto</Link></div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/20 pt-4"><span className="eyebrow opacity-55">Scroll to discover</span><ArrowDown size={16} className="opacity-65"/></div>
        </div>
      </section>

      <section className="py-24 md:py-44">
        <div className="container-wide grid gap-14 md:grid-cols-[.62fr_1.38fr]">
          <div><p className="eyebrow opacity-45">01 — The idea</p></div>
          <div><h2 className="display-lg max-w-5xl">Hemos eliminado la parte complicada de construir una casa.</h2>
            <div className="mt-14 grid gap-8 md:grid-cols-2"><p className="body-lg opacity-72">No empiezas con un plano en blanco. Escoges un modelo ya pensado, probado y optimizado para vivir bien.</p><p className="body-lg opacity-72">Nosotros adaptamos la vivienda a tu parcela, coordinamos el proceso y la entregamos completamente terminada y equipada.</p></div>
          </div>
        </div>
        <div className="container-wide mt-24 md:mt-36"><div className="grid border-y hairline md:grid-cols-4">{[
          ['01','Sin empezar de cero'],['02','Sin cientos de decisiones'],['03','Sin coordinar industriales'],['04','Sin amueblar después'],
        ].map(([n,t]) => <div key={n} className="border-b hairline py-7 md:border-b-0 md:border-r md:px-7 first:md:pl-0 last:md:border-r-0"><p className="eyebrow opacity-35">{n}</p><p className="mt-10 text-2xl arch-serif">{t}</p></div>)}</div></div>
      </section>

      <section className="bg-[#1b1c1a] text-[#f2f0e9]">
        <div className="container-wide py-20 md:py-32">
          <div className="grid gap-8 border-t border-white/20 pt-5 md:grid-cols-[.6fr_1.4fr]"><p className="eyebrow opacity-45">02 — The collection</p><div><h2 className="display-lg">Siete casas.<br/>Una sola idea.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Una colección coherente, desde 92 hasta 244 m². Diferentes escalas, el mismo lenguaje arquitectónico.</p></div></div>
        </div>
        <Link href={`/modelos/${villa200.slug}`} className="group block border-y border-white/15">
          <div className="grid md:grid-cols-[.34fr_1.66fr]">
            <div className="flex min-h-[330px] flex-col justify-between p-7 md:min-h-[680px] md:p-10"><div><p className="eyebrow opacity-45">06 — Villa</p><p className="mt-4 text-[6rem] leading-none arch-serif md:text-[9rem]">200</p></div><div><p className="max-w-xs text-2xl arch-serif">Una casa en torno al jardín.</p><p className="mt-4 text-[10px] uppercase tracking-[.15em] opacity-50">4 dormitorios · 3 baños · piscina · garaje</p></div></div>
            <div className="arch-image min-h-[430px] md:min-h-[680px]"><img src={villa200.coverImage || villa200.hero} alt={villa200.name}/></div>
          </div>
        </Link>
        <Link href={`/modelos/${signature.slug}`} className="group block border-b border-white/15">
          <div className="grid md:grid-cols-[1.55fr_.45fr]"><div className="arch-image min-h-[430px] md:min-h-[760px]"><img src={signature.coverImage || signature.gallery[1]?.src || signature.hero} alt={signature.name}/></div><div className="flex min-h-[330px] flex-col justify-between p-7 md:min-h-[760px] md:p-10"><div><p className="eyebrow opacity-45">07 — Signature</p><p className="mt-4 text-[6rem] leading-none arch-serif md:text-[9rem]">244</p></div><div><p className="max-w-xs text-2xl arch-serif">La expresión más completa de la colección.</p><div className="mt-7 flex items-center gap-2 text-[10px] uppercase tracking-[.15em]">Descubrir <ArrowRight size={14}/></div></div></div></div>
        </Link>
        <div className="container-wide py-20 md:py-28"><div className="grid gap-x-5 gap-y-16 md:grid-cols-2 xl:grid-cols-3">{houses.slice(0,5).map((h,i)=><HouseCard key={h.id} house={h} priority={i<2}/>)}</div><div className="mt-16 text-center"><Link href="/modelos" className="btn-light">Ver colección completa <ArrowRight size={14}/></Link></div></div>
      </section>

      <section className="py-24 md:py-40">
        <div className="container-wide grid gap-12 md:grid-cols-[.6fr_1.4fr]"><p className="eyebrow opacity-45">03 — Everything included</p><div><h2 className="display-lg">Cuando recibes las llaves,<br/>la casa está terminada.</h2><p className="body-lg mt-8 max-w-3xl opacity-68">No entregamos una vivienda para que empiece otra lista de compras. Cocina, electrodomésticos, baños, iluminación, climatización y mobiliario principal forman parte de una propuesta pensada como un todo.</p></div></div>
        <div className="container-wide mt-20 grid gap-4 md:grid-cols-12">
          <div className="group relative min-h-[540px] overflow-hidden md:col-span-7"><img src={family.interiorImage || family.gallery.find(x=>x.alt==='Cocina')?.src || family.gallery[3].src} alt="Cocina equipada" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.02]"/><div className="image-shade absolute inset-0"/><div className="absolute bottom-7 left-7 text-white"><p className="eyebrow opacity-65">Kitchen</p><p className="mt-2 text-4xl arch-serif">Completamente equipada.</p></div></div>
          <div className="group relative min-h-[540px] overflow-hidden md:col-span-5"><img src={family.gallery.find(x=>x.alt.includes('Suite'))?.src || family.gallery[4].src} alt="Dormitorio" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.02]"/><div className="image-shade absolute inset-0"/><div className="absolute bottom-7 left-7 text-white"><p className="eyebrow opacity-65">Bedroom</p><p className="mt-2 text-4xl arch-serif">Preparado para dormir.</p></div></div>
        </div>
        <div className="container-wide mt-5 grid border-y hairline md:grid-cols-4">{['Salón amueblado','Baños terminados','Iluminación integrada','Climatización incluida'].map((t,i)=><div key={t} className="border-b hairline py-6 md:border-b-0 md:border-r md:px-6 last:md:border-r-0"><p className="eyebrow opacity-35">0{i+1}</p><p className="mt-8 text-xl arch-serif">{t}</p></div>)}</div>
        <div className="container-wide mt-10"><Link href="/todo-incluido" className="btn-primary">Descubrir todo incluido <ArrowRight size={14}/></Link></div>
      </section>

      <section className="concrete-bg py-24 md:py-40">
        <div className="container-wide grid gap-12 md:grid-cols-[.6fr_1.4fr]"><p className="eyebrow opacity-45">04 — The process</p><div><h2 className="display-lg">Siete pasos.<br/>Una sola responsabilidad.</h2><div className="mt-16 border-t hairline">{['Escoge tu modelo','Estudiamos tu parcela','Adaptación técnica y licencias','Cimentación','Fabricación industrializada','Montaje y finalización','Te entregamos las llaves'].map((t,i)=><div key={t} className="grid grid-cols-[48px_1fr_auto] items-center border-b hairline py-5"><span className="eyebrow opacity-35">0{i+1}</span><span className="text-xl arch-serif md:text-2xl">{t}</span>{i===6?<Check size={16}/>:<span/>}</div>)}</div></div></div>
      </section>

      <section className="relative min-h-[78svh] overflow-hidden bg-[#1b1c1a] text-white"><img src={signature.coverImage || signature.gallery.find(x=>x.alt==='Piscina')?.src || signature.hero} alt="Villa Signature" className="absolute inset-0 h-full w-full object-cover opacity-65"/><div className="hero-shade absolute inset-0"/><div className="container-wide relative flex min-h-[78svh] flex-col justify-end py-12 md:py-16"><p className="eyebrow opacity-65">Find your house</p><h2 className="display-xl mt-5 max-w-5xl">Escoge la casa.<br/><span className="italic">Nosotros hacemos el resto.</span></h2><div className="mt-10 flex flex-wrap gap-3"><Link href="/modelos" className="btn-light">Explorar colección</Link><Link href="/contacto" className="btn-ghost !border-white/45 !text-white hover:!bg-white hover:!text-black">Solicitar información</Link></div></div></section>
    </>
  );
}
