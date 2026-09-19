import Link from 'next/link';
import { BRAND } from '@/config/brand';

const NAV = [
  { href: '/modelos', label: 'Colección' },
  { href: '/todo-incluido', label: 'Concepto' },
  { href: '/tecnologia', label: 'Arquitectura' },
  { href: '/como-funciona', label: 'Proceso' },
  { href: '/equipamiento', label: 'Equipamiento' },
  { href: '/empresa', label: 'Empresa' },
];

export default function Footer() {
  return <footer className="bg-[#171816] text-[#f2f0e9]">
    <div className="container-wide py-16 md:py-24">
      <p className="eyebrow opacity-45">{BRAND.name}</p>
      <h2 className="mt-8 max-w-6xl text-[12vw] leading-[.78] tracking-[-.06em] arch-serif md:text-[9rem]">Architecture,<br/><span className="italic">made effortless.</span></h2>
      <div className="mt-20 grid gap-10 border-t border-white/20 pt-7 md:grid-cols-[1.4fr_.6fr_.6fr]">
        <div><p className="max-w-sm text-lg leading-7 text-white/60">Viviendas industrializadas de hormigón diseñadas como un producto completo y preparadas para vivir.</p></div>
        <div className="space-y-3 text-sm text-white/65">{NAV.map(item=><Link key={item.href} href={item.href} className="block hover:text-white">{item.label}</Link>)}</div>
        <div className="space-y-3 text-sm text-white/65"><Link href="/contacto" className="block text-white">Contacto</Link><p>{BRAND.email}</p><p>{BRAND.phone}</p><Link href="/legal/aviso-legal" className="block">Aviso legal</Link><Link href="/legal/privacidad" className="block">Privacidad</Link></div>
      </div>
    </div>
    <div className="container-wide flex flex-col gap-2 border-t border-white/15 py-5 text-[9px] uppercase tracking-[.16em] text-white/35 md:flex-row md:justify-between"><span>© {new Date().getFullYear()} {BRAND.name}</span><span>Concrete · Architecture · Living</span></div>
  </footer>;
}
