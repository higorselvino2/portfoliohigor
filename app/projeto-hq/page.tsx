'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjetoHQ() {
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');

  useEffect(() => {
    import('aos').then((AOS) => AOS.init({ once: true }));
  }, []);

  return (
    <>
      <div className="noise-bg"></div>

      {showLightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex justify-center items-center backdrop-blur-md" onClick={() => setShowLightbox(false)}>
          <button className="absolute top-4 right-4 text-white hover:text-brand-green z-50">X</button>
          <img src={lightboxSrc} className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl" />
        </div>
      )}

      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 py-4 flex justify-between items-center text-white border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 font-display uppercase text-xs font-bold hover:text-brand-green">&larr; Voltar ao Portfólio</Link>
      </nav>

      <main className="w-full mx-auto flex flex-col pb-20 pt-32 px-4 md:px-12 max-w-[1600px]">
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap gap-2">
            <span className="bg-brand-green text-black px-4 py-1.5 rounded-full text-xs font-black uppercase">História em Quadrinhos</span>
            <span className="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase">🏆 Vencedor Expocom Sudeste</span>
          </div>
          <h1 className="text-[12vw] md:text-[100px] font-display font-black uppercase leading-[0.85] text-brand-green">Além do Céu</h1>
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-brand-card shadow-2xl mt-8">
            <img src="/ultrawide imagem além do céu.jpg" className="w-full h-full object-cover" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-8 uppercase font-bold text-sm">
            <div><h4 className="text-brand-green">O Projeto</h4><p className="text-white/80">Criação de História em Quadrinhos, Direção de Arte.</p></div>
            <div><h4 className="text-brand-green">Equipe</h4><p className="text-white/80">Higor Selvino, Felipe Moreira, Ruan Lucas</p></div>
            <div><h4 className="text-brand-green">Contexto</h4><p className="text-white/80">TCC Design Gráfico (Univ. Anhembi Morumbi)</p></div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 text-lg text-white/70">
            <blockquote className="text-3xl font-display font-black text-brand-green uppercase">&quot;Mariposas costumavam seguir a luz da lua... Agora giram em círculos, atraídas por um brilho que engana.&quot;</blockquote>
            <p>Em um mundo onde a humanidade conquistou espaço em Marte, Scott é um jovem insatisfeito com a vida na Terra...</p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl font-bold uppercase text-brand-green mb-8">Acervo Digital</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <a href="/HQ diagramação - miolo ver.pdf" target="_blank" className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-green">
               <h4 className="font-bold text-xl uppercase mb-4">HQ Completa</h4>
               <p className="text-white/50 text-sm">Download do PDF</p>
             </a>
          </div>
        </section>

      </main>
    </>
  );
}
