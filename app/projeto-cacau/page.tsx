'use client';
import Link from 'next/link';

export default function CacauParque() {
  return (
    <>
      <div className="noise-bg"></div>
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 py-4 flex justify-between items-center text-white border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 font-display uppercase text-xs font-bold hover:text-brand-orange">&larr; Voltar ao Portfólio</Link>
      </nav>
      <main className="w-full mx-auto flex flex-col pb-20 pt-32 px-4 md:px-12 max-w-[1600px]">
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#EB5612] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase">Design de Embalagem</span>
            <span className="border border-[#EB5612] text-[#EB5612] px-4 py-1.5 rounded-full text-xs font-bold uppercase">🏆 Vencedor Anhembi Awards</span>
          </div>
          <h1 className="text-[12vw] md:text-[100px] font-display font-black uppercase leading-[0.85] text-white">Cacau <span className="text-outline" style={{WebkitTextStroke: '2px #EB5612'}}>Parque</span></h1>
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-brand-card shadow-2xl mt-8">
            <img src="/ultrawide imagem cacau parque.jpg" className="w-full h-full object-cover" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-8 uppercase font-bold text-sm">
            <div><h4 className="text-[#EB5612]">O Papel</h4><p className="text-white/80">Direção de Arte, Design de Embalagem.</p></div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 text-lg text-white/70">
            <blockquote className="text-3xl font-display font-black text-[#EB5612] uppercase">&quot;O Willy Wonka Brasileiro.&quot;</blockquote>
            <p>Com a aquisição do grupo Playcenter pela Cacau Show, o projeto Cacau Parque nasceu para celebrar este novo capítulo...</p>
          </div>
        </section>

        <section className="mb-24">
            <img src="/embalagem na gondula mockup.png" className="w-full rounded-2xl shadow-xl border border-white/10" />
        </section>
      </main>
    </>
  );
}
