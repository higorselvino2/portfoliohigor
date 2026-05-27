'use client';
import Link from 'next/link';

export default function TheFlorist() {
  return (
    <>
      <div className="noise-bg"></div>
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 py-4 flex justify-between items-center text-white border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 font-display uppercase text-xs font-bold hover:text-[#E82569]">&larr; Voltar ao Portfólio</Link>
      </nav>
      <main className="w-full mx-auto flex flex-col pb-20 pt-32 px-4 md:px-12 max-w-[1600px]">
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#E82569] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase">Pitch Deck</span>
            <span className="border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">Direção de Arte</span>
          </div>
          <h1 className="text-[12vw] md:text-[100px] font-display font-black uppercase leading-[0.85] text-white">The <span className="text-outline" style={{WebkitTextStroke: '2px #E82569'}}>Florist</span></h1>
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-brand-card shadow-2xl mt-8">
            <img src="/ultrawide imagem the florist.jpg" className="w-full h-full object-cover" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-8 uppercase font-bold text-sm">
            <div><h4 className="text-[#E82569]">O Papel</h4><p className="text-white/80">Design Editorial, Direção de Arte, Pitch Deck.</p></div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 text-lg text-white/70">
            <blockquote className="text-3xl font-display font-black text-[#E82569] uppercase">O tom de Succession, o ritmo de Parasita.</blockquote>
            <p>Em meio ao glamour e às sombras da Hollywood de 1946, a icônica Vivien Leigh luta contra o transtorno bipolar, encontrando um refúgio inesperado num florista local.</p>
          </div>
        </section>

        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/The Florist - Pitch Deck 2 (2)_page-0004.jpg" className="w-full rounded-2xl shadow-xl border border-white/10" />
            <img src="/The Florist - Pitch Deck 2 (2)_page-0007.jpg" className="w-full rounded-2xl shadow-xl border border-white/10" />
            <img src="/The Florist - Pitch Deck 2 (2)_page-0011.jpg" className="w-full rounded-2xl shadow-xl border border-white/10" />
            <img src="/The Florist - Pitch Deck 2 (2)_page-0013.jpg" className="w-full rounded-2xl shadow-xl border border-white/10" />
        </section>
      </main>
    </>
  );
}
