'use client';
import Link from 'next/link';

export default function Songbird() {
  return (
    <>
      <div className="noise-bg"></div>
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 py-4 flex justify-between items-center text-white border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 font-display uppercase text-xs font-bold hover:text-[#05d596]">&larr; Voltar ao Portfólio</Link>
      </nav>
      <main className="w-full mx-auto flex flex-col pb-20 pt-32 px-4 md:px-12 max-w-[1600px]">
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#05d596] text-brand-dark px-4 py-1.5 rounded-full text-xs font-black uppercase">Identidade Visual</span>
            <span className="border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">Música & Estúdio</span>
          </div>
          <h1 className="text-[12vw] md:text-[100px] font-display font-black uppercase leading-[0.85] text-white">Song<span className="text-outline" style={{WebkitTextStroke: '2px #05d596'}}>bird</span></h1>
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-brand-card shadow-2xl mt-8">
            <img src="/ultrawide imagem songbird.jpg" className="w-full h-full object-cover" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-8 uppercase font-bold text-sm">
            <div><h4 className="text-[#05d596]">O Papel</h4><p className="text-white/80">Direção de Arte, Design Gráfico, Identidade Visual.</p></div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 text-lg text-white/70">
            <blockquote className="text-3xl font-display font-black text-[#05d596] uppercase">"Assim como a voz de um pássaro se une à sua beleza..."</blockquote>
            <p>A identidade da Songbird foi criada e baseada na maneira como os pássaros cantam e mostram a sua beleza. Em conjunto com a música, estes elementos complementam-se, fundindo o aspeto orgânico da natureza com a sofisticação da produção musical.</p>
          </div>
        </section>

        <section className="mb-24 space-y-12">
            <img src="/aplicação do design no disco.jpg" className="w-full rounded-2xl shadow-xl border border-white/10" />
            <img src="/aplicação do design.jpg" className="w-full rounded-2xl shadow-xl border border-white/10" />
        </section>
      </main>
    </>
  );
}
