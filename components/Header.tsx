'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BRAND } from '@/config/brand';

const NAV = [
  { href: '/modelos', label: 'Colección' },
  { href: '/todo-incluido', label: 'Concepto' },
  { href: '/tecnologia', label: 'Arquitectura' },
  { href: '/como-funciona', label: 'Proceso' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === '/' || /^\/modelos\/[^/]+$/.test(pathname);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 36);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`luxury-header fixed inset-x-0 top-0 z-50 border-b ${overHero ? 'over-hero' : ''} ${scrolled || !overHero ? 'scrolled' : ''}`}>
      <div className="container-wide flex h-[72px] items-center justify-between md:h-[82px]">
        <Link href="/" className="text-[12px] font-semibold uppercase tracking-[.22em]">{BRAND.name}</Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => <Link key={item.href} href={item.href} className="text-[10px] font-medium uppercase tracking-[.17em] opacity-75 transition hover:opacity-100">{item.label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Link href="/contacto" className="flex items-center gap-2 text-[10px] uppercase tracking-[.16em]">Contacto <ArrowUpRight size={13}/></Link></div>
        <button aria-label="Abrir menú" className="lg:hidden" onClick={() => setOpen(v => !v)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[72px] z-50 bg-[#1b1c1a] text-[#f2f0e9] lg:hidden">
          <div className="container-wide flex min-h-[calc(100svh-72px)] flex-col justify-between py-10">
            <nav>
              {[...NAV, { href: '/equipamiento', label: 'Todo incluido' }, { href: '/empresa', label: 'Empresa' }].map((item, index) => (
                <Link key={item.href} href={item.href} className="flex items-end justify-between border-t border-white/20 py-5">
                  <span className="text-[2.35rem] leading-none arch-serif">{item.label}</span><span className="eyebrow opacity-45">0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <div className="border-t border-white/20 pt-6"><Link href="/contacto" className="text-2xl arch-serif">Cuéntanos dónde quieres vivir →</Link></div>
          </div>
        </div>
      )}
    </header>
  );
}
