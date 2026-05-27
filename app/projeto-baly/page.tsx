'use client';
import Link from 'next/link';

export default function ProjetoBaly() {
  return (
    <>
      <div className="noise-bg"></div>
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 py-4 flex justify-between items-center text-white border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 font-display uppercase text-xs font-bold hover:text-[#FFE600]">&larr; Voltar ao Portfólio</Link>
      </nav>
      <main className="w-full mx-auto flex flex-col pb-20 pt-32 px-4 md:px-12 max-w-[1600px]">
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#FFE600] text-black px-4 py-1.5 rounded-full text-xs font-black uppercase">Redesign de Marca</span>
          </div>
          <h1 className="text-[12vw] md:text-[100px] font-display font-black uppercase leading-[0.85] text-white">Baly <span className="text-outline" style={{WebkitTextStroke: '2px #FFE600'}}>Energy Drink</span></h1>
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-brand-card shadow-2xl mt-8">
            <img src="/baly imagem principal 1.jpg" className="w-full h-full object-cover" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-8 uppercase font-bold text-sm">
            <div><h4 className="text-[#FFE600]">O Papel</h4><p className="text-white/80">Rebranding, Criação de Logo, Aplicação Visual de Embalagens.</p></div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 text-lg text-white/70">
            <blockquote className="text-3xl font-display font-black text-[#FFE600] uppercase">"Mais que energia, atitude. Um reposicionamento visual completo..."</blockquote>
            <p>O projeto focou-se no reposicionamento visual da marca Baly Energy Drink. O objetivo central era modernizar a identidade da marca, tornando-a mais apelativa para um público jovem.</p>
          </div>
        </section>

        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/LATA TRADICIONAL.png" className="w-full rounded-2xl shadow-xl border border-white/10" />
            <img src="/LATA MAÇÃ VERDE.png" className="w-full rounded-2xl shadow-xl border border-white/10" />
            <img src="/LATA MELANCIA.png" className="w-full rounded-2xl shadow-xl border border-[#FFE600]/30" />
            <img src="/LATA AÇAÍ.png" className="w-full rounded-2xl shadow-xl border border-white/10" />
        </section>
      </main>
    </>
  );
}
