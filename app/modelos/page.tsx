import type { Metadata } from 'next';
import ModelsGrid from '@/components/ModelsGrid';
import { getPublicHouses } from '@/data/houses';

export const metadata: Metadata = { title: 'Colección', description: 'Colección de viviendas industrializadas de hormigón de 90 a 244 m², completamente equipadas.' };

export default function ModelsPage() {
  const houses = getPublicHouses();
  return <>
    <section className="container-wide pb-16 pt-36 md:pb-24 md:pt-48">
      <div className="grid gap-10 border-t hairline pt-6 md:grid-cols-[.58fr_1.42fr]"><p className="eyebrow pt-2 opacity-45">The collection · 01—07</p><div><h1 className="display-hero">Siete casas.<br/><span className="italic">Ya resueltas.</span></h1><p className="body-lg mt-10 max-w-2xl opacity-68">De 92 a 244 m². Cada modelo se concibe como un producto completo: arquitectura, distribución, acabados y equipamiento definidos desde el inicio.</p></div></div>
    </section>
    <section className="bg-[#1b1c1a] py-16 text-[#f2f0e9] md:py-24"><div className="container-wide"><ModelsGrid houses={houses}/></div></section>
  </>;
}
