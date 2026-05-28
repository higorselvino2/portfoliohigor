'use client';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';
import Image from 'next/image';

const translations: Record<string, Record<string, string>> = {
  pt: {
    badgeIdentity: "Identidade Visual",
    badgeMusic: "Música & Estúdio",
    roleTitle: "O Papel",
    roleDesc: "Direção de Arte, Design Gráfico, Identidade Visual, Packaging.",
    teamTitle: "Cliente",
    contextTitle: "Contexto",
    contextDesc: "Branding para Indústria Musical",
    yearTitle: "Ano",
    quotePart1: "\"Assim como a voz de um pássaro se une à sua beleza,",
    quotePart2: "o design encontra a música em perfeita harmonia.\"",
    p1: "A identidade da Songbird foi criada e baseada na maneira como os pássaros cantam e mostram a sua beleza. Em conjunto com a música, estes elementos complementam-se, fundindo o aspeto orgânico da natureza com a sofisticação da produção musical.",
    p2: "O desafio foi traduzir a fluidez e a elegância do canto dos pássaros num ecossistema visual sólido. O resultado é uma marca aplicável tanto ao ambiente digital corporativo quanto a materiais altamente físicos, como capas de discos de vinil e material de estúdio.",
    identityTitle: "Identidade & Marca",
    identityDesc: "O logótipo fluido e a paleta de cores sofisticada.",
    galleryTitle: "Aplicações do Design",
    galleryDesc: "De discos de vinil a estacionário de estúdio de design.",
    nextProject: "Próximo Projeto"
  },
  en: {
    badgeIdentity: "Visual Identity",
    badgeMusic: "Music & Studio",
    roleTitle: "The Role",
    roleDesc: "Art Direction, Graphic Design, Visual Identity, Packaging.",
    teamTitle: "Client",
    contextTitle: "Context",
    contextDesc: "Branding for the Music Industry",
    yearTitle: "Year",
    quotePart1: "\"Just as a bird's voice merges with its beauty,",
    quotePart2: "design meets music in perfect harmony.\"",
    p1: "The Songbird identity was created and based on the way birds sing and display their beauty. Together with the music, these elements complement each other, merging the organic aspect of nature with the sophistication of music production.",
    p2: "The challenge was to translate the fluidity and elegance of birdsong into a solid visual ecosystem. The result is a brand applicable both to the corporate digital environment and to highly physical materials, such as vinyl record covers and studio stationery.",
    identityTitle: "Identity & Brand",
    identityDesc: "The fluid logo and the sophisticated color palette.",
    galleryTitle: "Design Applications",
    galleryDesc: "From vinyl records to design studio stationery.",
    nextProject: "Next Project"
  }
};

export default function Songbird() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;

  return (
    <ProjectLayout brandColor="#05d596" brandClass="text-[#05d596]" bgGlowClass="bg-[#05d596]/5" footerThemeClass="text-[#05d596]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 sm:gap-6 animate-[fadeIn_1s_ease-out]">
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="bg-[#05d596] text-brand-dark px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{t('badgeIdentity')}</span>
                    <span className="border border-white/20 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('badgeMusic')}</span>
                </div>
                <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[130px] font-display font-black text-brand-light uppercase leading-[0.85] tracking-wider">
                    Song<span className="text-outline" style={{WebkitTextStroke: '1.5px #05d596'}}>bird</span>
                </h1>
            </div>
            
            <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:max-h-[65vh] xl:max-h-[75vh] rounded-[16px] sm:rounded-[24px] overflow-hidden relative cursor-view bg-brand-card border border-white/10 project-img-wrapper shadow-2xl">
                <Image src="/images/ultrawide imagem songbird.jpg" alt="Songbird Capa" fill className="object-cover object-center project-img-parallax opacity-90 hover:opacity-100 transition-all duration-700" data-speed="0.05" />
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#05d596] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('roleTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('roleDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#05d596] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('teamTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">Songbird Design Studio</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#05d596] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('contextTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('contextDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#05d596] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('yearTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">2024</p></div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-12">
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-[1.2] font-display font-black text-[#05d596] tracking-wider uppercase" data-aos="fade-up">
                    <span>{t('quotePart1')}</span> <span className="text-white"><span>{t('quotePart2')}</span></span>
                </blockquote>
                
                <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                </div>
                
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view bg-brand-card border border-white/5 shadow-xl mt-2 sm:mt-4" data-aos="fade-up">
                    <Image src="/images/identidade criada e baseada na maneira que pássaros cantaam e mostram sua beleza que em conjunto com a múscia se complementam como um pássaro e sua voz..jpg" alt="Conceito Songbird" width={1600} height={900} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#05d596]">{t('identityTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('identityDesc')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8">
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card flex justify-center items-center border border-white/5 cursor-view shadow-xl" data-aos="fade-right">
                    <Image src="/images/gif do projeto.gif" alt="Logo Animado Songbird" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-left">
                    <Image src="/images/paleta de cores s.jpg" alt="Paleta de Cores" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 relative">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#05d596]">{t('galleryTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('galleryDesc')}</p>
            </div>

            <div className="columns-1 sm:columns-2 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
                {[
                  '/images/aplicação do design no disco.jpg', 
                  '/images/aplicação do design.jpg', 
                  '/images/44-songbird-design-studio-6000.jpg', 
                  '/images/60-songbird-design-studio-11-1.jpg'
                ].map((src, i) => (
                    <div key={i} className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view break-inside-avoid relative group border border-white/5 bg-brand-card shadow-xl" data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
                        <Image src={src} alt="Design Applications" width={800} height={1200} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#05d596]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12 sm:mt-20" data-aos="fade-up">
            <Link href="/matcha-mojo" className="block w-full bg-[#B4E82E] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#B4E82E] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">Matcha Mojo</h2>
                </div>
            </Link>
        </section>

      </main>
    </ProjectLayout>
  );
}
