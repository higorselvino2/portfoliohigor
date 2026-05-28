'use client';
import React, { useState } from 'react';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';
import Image from 'next/image';

const translations: Record<string, Record<string, string>> = {
  pt: {
    badgeHQ: "História em Quadrinhos",
    tagAcademic: "Projeto Acadêmico",
    roleTitle: "O Projeto",
    roleDesc: "Criação de História em Quadrinhos (Graphic Novel), Direção de Arte, Ilustração, Identidade Visual.",
    teamTitle: "Equipe",
    contextTitle: "Contexto",
    contextDesc: "TCC Design Gráfico (Univ. Anhembi Morumbi)",
    yearTitle: "Ano",
    quotePart1: "\"Mariposas costumavam seguir a luz da lua para encontrar comida e voltar pra casa, mas o homem inventou as lâmpadas.",
    quotePart2: "Agora giram em círculos, atraídas por um brilho que engana.\"",
    p1: "Em um mundo onde a humanidade conquistou espaço em Marte, as feridas entre os que ficaram e os que partiram ainda estão abertas. Scott é um jovem insatisfeito com a vida que leva na Terra - um lugar que parece cada vez mais sufocante e dividido.",
    p2: "Quando conhece uma garota vinda de Marte, ele vê nascer a chance de escapar da monotonia. Juntos, eles decidem seguir rumo a Saphira, uma cidade cercada por promessas de prosperidade e recomeço. Mas o caminho até lá revelará as barreiras impostas por um mundo dividido.",
    p3: "Este projeto utiliza a narrativa visual da História em Quadrinhos como ferramenta crítica e empática para debater o deslocamento imigrante, barreiras linguísticas e a xenofobia no contexto contemporâneo.",
    videoTitle: "Apresentação do Projeto",
    videoSubtitle: "Vídeo de defesa e imersão no universo da HQ.",
    interactiveTitle: "Leia a HQ",
    interactiveDesc: "Escolha o seu modo de leitura favorito abaixo.",
    galleryTitle: "Expandindo o Universo",
    galleryDesc: "Impressão, itens colecionáveis e materiais promocionais da Graphic Novel.",
    assetsTitle: "Acervo Digital",
    assetsDesc: "Explore os materiais de apoio e os PDFs completos do projeto.",
    hqComplete: "HQ Completa",
    hqDesc: "Faça o download do miolo e veja a história na íntegra.",
    sketchDesc: "Estudos de personagem, cenários e bastidores da criação.",
    manualTitle: "Manual da Marca",
    manualDesc: "Identidade Visual, tipografia e diretrizes de design do projeto.",
    btnView: "Ver PDF",
    nextProject: "Próximo Projeto"
  },
  en: {
    badgeHQ: "Comic Book / Graphic Novel",
    tagAcademic: "Academic Project",
    roleTitle: "The Project",
    roleDesc: "Comic Book Creation, Art Direction, Illustration, Visual Identity.",
    teamTitle: "Team",
    contextTitle: "Context",
    contextDesc: "Graphic Design Thesis (Anhembi Morumbi Univ.)",
    yearTitle: "Year",
    quotePart1: "\"Moths used to follow the moonlight to find food and return home, but man invented lamps.",
    quotePart2: "Now they spin in circles, drawn to a deceiving glow.\"",
    p1: "In a world where humanity has conquered space in Mars, the wounds between those who stayed and those who left are still open. Scott is a young man dissatisfied with life on Earth - a place that seems increasingly suffocating and divided.",
    p2: "When he meets a girl from Mars, he sees a chance to escape the monotony. Together, they decide to head to Saphira, a city surrounded by promises of prosperity and a fresh start. But the journey will reveal the barriers imposed by a divided world.",
    p3: "This project uses the visual narrative of Comic Books as a critical and empathetic tool to discuss immigrant displacement, language barriers, and xenophobia in a contemporary context.",
    videoTitle: "Project Presentation",
    videoSubtitle: "Defense video and immersion into the comic's universe.",
    interactiveTitle: "Read the Comic",
    interactiveDesc: "Choose your favorite reading mode below.",
    galleryTitle: "Expanding the Universe",
    galleryDesc: "Printing, collectibles, and promotional materials for the Graphic Novel.",
    assetsTitle: "Digital Archive",
    assetsDesc: "Explore the supporting materials and the complete project PDFs.",
    hqComplete: "Full Comic Book",
    hqDesc: "Download the core files and read the full story.",
    sketchDesc: "Character studies, environments, and behind-the-scenes creation.",
    manualTitle: "Brand Guidelines",
    manualDesc: "Visual Identity, typography, and design guidelines of the project.",
    btnView: "View PDF",
    nextProject: "Next Project"
  }
};

export default function ProjetoHQ() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;
  const [viewMode, setViewMode] = useState<'book' | 'scroll'>('book');
  
  const bookPages = [
    "/images/Cover.png",
    ...Array.from({length:37}).map((_,i) => `/images/P${i+1}.png`),
    "/images/P38-39.png",
    ...Array.from({length:5}).map((_,i) => `/images/P${i+40}.png`),
    "/images/Back Cover.png"
  ];
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ProjectLayout brandColor="#00FFA3" brandClass="text-[#00FFA3]" bgGlowClass="bg-[#00FFA3]/5" footerThemeClass="text-[#00FFA3]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 sm:gap-6 animate-[fadeIn_1s_ease-out]">
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="bg-[#00FFA3] text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{t('badgeHQ')}</span>
                    <span className="border border-white/20 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('tagAcademic')}</span>
                    <span className="border border-[#00FFA3] text-[#00FFA3] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">🏆 Vencedor Expocom Sudeste</span>
                </div>
                <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[130px] font-display font-black text-brand-light uppercase leading-[0.85] tracking-wider">
                    Além <span className="text-outline" style={{WebkitTextStroke: '1.5px #00FFA3'}}>do Céu</span>
                </h1>
            </div>
            
            <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:max-h-[65vh] xl:max-h-[75vh] rounded-[16px] sm:rounded-[24px] overflow-hidden relative cursor-view bg-brand-card border border-white/10 project-img-wrapper shadow-2xl">
                <Image src="/images/ultrawide imagem além do céu.jpg" alt="Capa Ultrawide Além do Céu" fill className="object-cover object-center project-img-parallax opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-105" data-speed="0.05" />
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#00FFA3] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('roleTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('roleDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#00FFA3] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('teamTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">Higor Selvino, Felipe Moreira, Ruan Lucas</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#00FFA3] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('contextTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('contextDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#00FFA3] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('yearTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">2025</p></div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-12">
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-[1.2] font-display font-black text-[#00FFA3] tracking-wider uppercase" data-aos="fade-up">
                    <span>{t('quotePart1')}</span> <span className="text-white"><span>{t('quotePart2')}</span></span>
                </blockquote>
                <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                    <p className="text-white font-medium border-l-2 border-[#00FFA3] pl-6 py-2 mt-2 sm:mt-4 bg-white/5 rounded-r-lg" dangerouslySetInnerHTML={{__html: t('p3')}}></p>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12" data-aos="fade-up">
            <div className="mb-6 sm:mb-8 flex flex-col gap-2 sm:gap-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-white">{t('videoTitle')}</h3>
                <p className="text-white/50 font-medium text-sm sm:text-base">{t('videoSubtitle')}</p>
            </div>
            <div className="w-full aspect-video rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card shadow-2xl border border-white/5 cursor-hover">
                <video className="w-full h-full object-cover" controls playsInline poster="/images/Além do Céu imagem principal 1.jpg">
                    <source src="/videos/Final_video.mp4" type="video/mp4" />
                </video>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 relative bg-gradient-to-b from-brand-dark via-brand-card/40 to-brand-dark rounded-[24px] md:rounded-[40px] border-y border-white/5 mt-8 sm:mt-12 mb-8 sm:mb-12 shadow-2xl" id="leitor-hq" data-aos="fade-up">
            <div className="mb-8 flex flex-col gap-2 text-center">
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#00FFA3]">{t('interactiveTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('interactiveDesc')}</p>
            </div>

            <div className="flex flex-wrap justify-center mb-10 gap-4 relative z-20">
                <button onClick={() => setViewMode('book')} className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all cursor-hover ${viewMode === 'book' ? 'bg-[#00FFA3] text-black shadow-[0_0_15px_rgba(0,255,163,0.3)]' : 'bg-white/5 text-white border border-white/10'}`}>
                    Modo Livro (Páginas)
                </button>
                <button onClick={() => setViewMode('scroll')} className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all cursor-hover ${viewMode === 'scroll' ? 'bg-[#00FFA3] text-black shadow-[0_0_15px_rgba(0,255,163,0.3)]' : 'bg-white/5 text-white border border-white/10'}`}>
                    Modo Cascata (Vertical)
                </button>
            </div>
            
            {viewMode === 'book' && (
              <div className="relative w-full flex flex-col items-center py-6 sm:py-10">
                  <div className="w-full max-w-5xl aspect-[3/4] sm:aspect-square md:aspect-[4/3] lg:aspect-[16/9] relative bg-[#0a0a0a] rounded-lg shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
                      <Image src={bookPages[currentPage]} alt={`Página ${currentPage + 1}`} fill className="object-contain p-2" />
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-8 w-full max-w-md mx-auto bg-black/50 p-4 rounded-full border border-white/10 shadow-2xl relative z-10 backdrop-blur-sm">
                      <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#00FFA3] hover:text-black transition-colors text-white cursor-hover"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                      <span className="text-[#00FFA3] font-bold tracking-widest text-sm font-display">PÁG. {currentPage + 1} / {bookPages.length}</span>
                      <button onClick={() => setCurrentPage(p => Math.min(bookPages.length - 1, p + 1))} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#00FFA3] hover:text-black transition-colors text-white cursor-hover"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
                  </div>
              </div>
            )}

            {viewMode === 'scroll' && (
              <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 py-6 bg-black border border-white/5 rounded-2xl shadow-2xl p-2 sm:p-6 md:p-10">
                  <Image src="/images/Cover.png" alt="Capa" width={1200} height={1800} className="w-full h-auto object-contain shadow-lg" />
                  {Array.from({length:37}).map((_,i) => <Image key={i} src={`/images/P${i+1}.png`} alt={`Página ${i+1}`} width={1200} height={1800} className="w-full h-auto object-contain shadow-lg" />)}
                  <Image src="/images/P38-39.png" alt="Páginas 38-39" width={2400} height={1800} className="w-full h-auto object-contain shadow-2xl my-4 border border-[#00FFA3]/20 rounded-lg" />
                  {Array.from({length:5}).map((_,i) => <Image key={i} src={`/images/P${i+40}.png`} alt={`Página ${i+40}`} width={1200} height={1800} className="w-full h-auto object-contain shadow-lg" />)}
                  <Image src="/images/Back Cover.png" alt="Contracapa" width={1200} height={1800} className="w-full h-auto object-contain shadow-lg" />
              </div>
            )}

        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 relative border-t border-white/5 mt-8 sm:mt-12">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#00FFA3]">{t('galleryTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('galleryDesc')}</p>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
                {['/images/imagem HQ e Sketch.jpg', '/images/1768425642299.jpg', '/images/1768425642365.jpg', '/images/1768425645964.jpg', '/images/cards.jpg', '/images/1768425644019.jpg', '/images/1768425644264.jpg', '/images/bottons.jpg'].map((src, i) => (
                    <div key={i} className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view break-inside-avoid relative border border-white/5 bg-brand-card shadow-xl group" data-aos="fade-up">
                        <Image src={src} alt={`Galeria ${i+1}`} width={800} height={1200} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                ))}
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 border-t border-white/10" data-aos="fade-up">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-white">{t('assetsTitle')}</h3>
                <p className="text-white/50 font-medium text-sm sm:text-lg">{t('assetsDesc')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <a href="/pdfs/HQ diagramação - miolo ver.pdf" target="_blank" className="pdf-card bg-brand-card border border-white/10 rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center cursor-hover group shadow-xl hover:-translate-y-2 transition-transform">
                    <h4 className="font-display font-bold text-xl sm:text-2xl uppercase text-white mb-2">{t('hqComplete')}</h4>
                    <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">{t('hqDesc')}</p>
                    <span className="mt-auto px-4 sm:px-6 py-1.5 sm:py-2 border border-[#00FFA3] text-[#00FFA3] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('btnView')}</span>
                </a>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12 sm:mt-20" data-aos="fade-up">
            <Link href="/projeto-cacau" className="block w-full bg-[#CAD225] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#CAD225] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">Cacau Parque</h2>
                </div>
            </Link>
        </section>

      </main>
    </ProjectLayout>
  );
}
