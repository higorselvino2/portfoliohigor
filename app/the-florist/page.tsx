'use client';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';

const translations: Record<string, Record<string, string>> = {
  pt: {
    badgePitch: "Pitch Deck",
    badgeArt: "Direção de Arte",
    heroDesc: "Design editorial cinematográfico para captação de investidores em Hollywood.",
    roleTitle: "O Papel",
    roleDesc: "Design Editorial, Direção de Arte, Pitch Deck, Apresentação Comercial.",
    teamTitle: "Cliente",
    contextTitle: "Contexto",
    contextDesc: "Projeto de Cinema / Captação de Recursos",
    yearTitle: "Ano",
    quotePart1: "O tom de Succession,",
    quotePart2: "o ritmo de Parasita.",
    p1: "Em meio ao glamour e às sombras da Hollywood de 1946, a icônica Vivien Leigh luta contra o transtorno bipolar, encontrando um refúgio inesperado num florista local.",
    p2: "A missão deste Pitch Deck era comunicar o peso dramático desta narrativa a grandes estúdios e investidores. A identidade visual baseou-se numa paleta profunda de pretos, magentas e dourados envelhecidos, refletindo o suspense e a elegância da época.",
    castTitle: "Cast & Equip",
    castDesc: "Design focado em credibilidade e impacto visual. A disposição fotográfica e a tipografia clássica (serifada) destacam as estrelas vinculadas ao projeto, como Jason Isaacs e Carla Gugino, criando uma estética de revista de alto padrão.",
    roadmapTitle: "Roadmap Visual",
    roadmapDesc: "Transformação de dados densos (cronogramas de pré-produção, filmagens e pós-produção) numa linha do tempo fluída, clara e atraente, guiando o olhar do investidor até à meta: o lançamento num festival internacional.",
    businessTitle: "O Modelo de Negócio",
    businessDesc: "Gráficos financeiros e justificações de mercado não precisam de ser monótonos. A organização das cotas de financiamento e a projeção de lucros foram desenhadas para comunicar transparência com uma estética premium.",
    nextProject: "Próximo Projeto"
  },
  en: {
    badgePitch: "Pitch Deck",
    badgeArt: "Art Direction",
    heroDesc: "Cinematic editorial design to attract investors in Hollywood.",
    roleTitle: "The Role",
    roleDesc: "Editorial Design, Art Direction, Pitch Deck, Commercial Presentation.",
    teamTitle: "Client",
    contextTitle: "Context",
    contextDesc: "Film Project / Short Film",
    yearTitle: "Year",
    quotePart1: "The tone of Succession,",
    quotePart2: "the pacing of Parasite.",
    p1: "Amidst the glamour and shadows of 1946 Hollywood, the iconic Vivien Leigh struggles with bipolar disorder, finding an unexpected refuge in a local florist.",
    p2: "The mission of this Pitch Deck was to communicate the dramatic weight of this narrative to major studios and investors. The visual identity was based on a deep palette of blacks, magentas, and aged golds, reflecting the suspense and elegance of the era.",
    castTitle: "Cast & Crew",
    castDesc: "Design focused on credibility and visual impact. The photographic layout and classic (serif) typography highlight the stars attached to the project, such as Jason Isaacs and Carla Gugino, creating a high-end magazine aesthetic.",
    roadmapTitle: "Visual Roadmap",
    roadmapDesc: "Transforming dense data (pre-production, filming, and post-production schedules) into a fluid, clear, and attractive timeline, guiding the investor's eye to the goal: launching at an international festival.",
    businessTitle: "The Business Model",
    businessDesc: "Financial charts and market justifications don't have to be boring. The organization of funding quotas and profit projections were designed to communicate transparency with a premium aesthetic.",
    nextProject: "Next Project"
  }
};

export default function TheFlorist() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;

  return (
    <ProjectLayout brandColor="#E82569" brandClass="text-[#E82569]" bgGlowClass="bg-[#E82569]/5" footerThemeClass="text-[#E82569]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 sm:gap-6 animate-[fadeIn_1s_ease-out]">
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="bg-[#E82569] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{t('badgePitch')}</span>
                    <span className="border border-white/20 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('badgeArt')}</span>
                </div>
                <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[130px] font-display font-black text-brand-light uppercase leading-[0.85] tracking-wider">
                    The <span className="text-outline" style={{WebkitTextStroke: '1.5px #E82569'}}>Florist</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white/80 max-w-3xl">{t('heroDesc')}</h2>
            </div>
            
            <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:max-h-[65vh] xl:max-h-[75vh] rounded-[16px] sm:rounded-[24px] overflow-hidden relative cursor-view bg-brand-card border border-white/10 project-img-wrapper shadow-2xl">
                <img src="/ultrawide imagem the florist.jpg" alt="The Florist Capa" className="w-full h-full object-cover object-center project-img-parallax opacity-90 hover:opacity-100 transition-all duration-700" data-speed="0.05" />
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#E82569] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('roleTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('roleDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#E82569] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('teamTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">The Florist (Curta-metragem)</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#E82569] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('contextTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('contextDesc')}</p></div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-12">
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-[1.2] font-display font-black text-[#E82569] tracking-wider uppercase" data-aos="fade-up">
                    <span>{t('quotePart1')}</span><br/><span className="text-white"><span>{t('quotePart2')}</span></span>
                </blockquote>
                
                <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                </div>
                
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view bg-brand-card border border-white/5 shadow-xl mt-2" data-aos="fade-up">
                    <img src="/The Florist - Pitch Deck 2 (2)_page-0004.jpg" alt="Página de História" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                <div className="w-full md:w-1/2 lg:w-3/5 rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view border border-white/5 bg-brand-card shadow-xl" data-aos="fade-up">
                    <img src="/The Florist - Pitch Deck 2 (2)_page-0007.jpg" alt="Cast e Equipe" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-display font-black uppercase tracking-wider text-white mb-4 sm:mb-6">{t('castTitle')}</h3>
                    <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed">{t('castDesc')}</p>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-16">
                <div className="w-full md:w-1/2 lg:w-3/5 rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view border border-white/5 bg-brand-card shadow-xl" data-aos="fade-up">
                    <img src="/The Florist - Pitch Deck 2 (2)_page-0011.jpg" alt="Timeline e Cronograma" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 text-left md:text-right" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-display font-black uppercase tracking-wider text-white mb-4 sm:mb-6">{t('roadmapTitle')}</h3>
                    <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed">{t('roadmapDesc')}</p>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mb-8 sm:mb-12 text-center" data-aos="fade-up">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-display font-black uppercase tracking-wider text-white">{t('businessTitle')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view border border-white/5 bg-brand-card shadow-xl" data-aos="fade-up">
                    <img src="/The Florist - Pitch Deck 2 (2)_page-0008.jpg" alt="Orçamento" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/5 bg-brand-card shadow-xl md:mt-12 lg:mt-20" data-aos="fade-up" data-aos-delay="100">
                    <img src="/The Florist - Pitch Deck 2 (2)_page-0013.jpg" alt="Porque Investir" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-10 sm:mt-16 text-center" data-aos="fade-up">
                <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed">{t('businessDesc')}</p>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 flex justify-center">
            <div className="w-full max-w-4xl rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view border border-white/5 bg-brand-card shadow-2xl" data-aos="zoom-in">
                <img src="/The Florist - Pitch Deck 2 (2)_page-0015.jpg" alt="Capa Traseira" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12 sm:mt-20" data-aos="fade-up">
            <a href="https://instagram.com/higor.selvino" target="_blank" className="block w-full bg-[#FFD500] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#FFD500] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">Ilustrações</h2>
                </div>
            </a>
        </section>

      </main>
    </ProjectLayout>
  );
}
