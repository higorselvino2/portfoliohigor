'use client';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';
import Image from 'next/image';

const translations: Record<string, Record<string, string>> = {
  pt: {
    tagIdentity: "Identidade Visual & Packaging",
    heroDesc: "Cool people drink matcha. Uma identidade visual vibrante, urbana e divertida para modernizar o consumo de matcha.",
    brandLabel: "A Marca:",
    brandText: "Afastando-se da estética tradicional e zen frequentemente associada ao chá asiático, a Matcha Mojo adota uma atitude irreverente, pop e muito expressiva. O objetivo era criar uma marca que dialogasse diretamente com o público jovem e urbano.",
    brandText2: "Com o lema \"Cool people drink matcha\", a identidade visual aposta no contraste forte entre o preto profundo e um verde lima radiante, complementado por ícones minimalistas e ilustrações cativantes em line-art.",
    roleTitle: "O Papel",
    roleDesc: "Naming, Criação de Logótipo, Design de Embalagens (Copos, Bags) e Sinalética de Ponto de Venda.",
    aestheticTitle: "A Estética",
    aestheticDesc: "Urbana, ousada e minimalista. A tipografia super grossa reflete confiança, enquanto os assets ilustrados à mão adicionam calor humano.",
    challengeTitle: "O Desafio",
    challengeDesc: "Criar um ecossistema visual coeso que funcione tão bem na aplicação minúscula de um autocolante como na fachada imponente de uma loja.",
    ecoSystemTitle: "O Ecossistema da Marca",
    ecoSystemSubtitle: "Variações de logótipo, selos e iconografia em line-art.",
    mockupsTitle: "Pontos de Contacto",
    mockupsDesc: "Como a marca vive no mundo real: fachadas, packaging de produto e merchandising.",
    quotePart1: "\"Go green, feel great. A Matcha Mojo nasceu para desmistificar",
    quotePart2: "e democratizar a cultura do chá verde.\"",
    nextProject: "Próximo Projeto"
  },
  en: {
    tagIdentity: "Visual Identity & Packaging",
    heroDesc: "Cool people drink matcha. A vibrant, urban, and fun visual identity to modernize matcha consumption.",
    brandLabel: "The Brand:",
    brandText: "Moving away from the traditional and zen aesthetics often associated with Asian tea, Matcha Mojo adopts an irreverent, pop, and highly expressive attitude. The goal was to create a brand that speaks directly to a young, urban audience.",
    brandText2: "With the motto \"Cool people drink matcha\", the visual identity focuses on the strong contrast between deep black and a radiant lime green, complemented by minimalist icons and captivating line-art illustrations.",
    roleTitle: "The Role",
    roleDesc: "Naming, Logo Creation, Packaging Design (Cups, Bags), and Point of Sale Signage.",
    aestheticTitle: "The Aesthetic",
    aestheticDesc: "Urban, bold, and minimalist. The ultra-thick typography reflects confidence, while the hand-illustrated assets add human warmth.",
    challengeTitle: "The Challenge",
    challengeDesc: "Create a cohesive visual ecosystem that works just as well on a tiny sticker application as it does on an imposing store facade.",
    ecoSystemTitle: "The Brand Ecosystem",
    ecoSystemSubtitle: "Logo variations, badges, and line-art iconography.",
    mockupsTitle: "Touchpoints",
    mockupsDesc: "How the brand lives in the real world: facades, product packaging, and merchandising.",
    quotePart1: "\"Go green, feel great. Matcha Mojo was born to demystify",
    quotePart2: "and democratize the green tea culture.\"",
    nextProject: "Next Project"
  }
};

export default function MatchaMojo() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;

  return (
    <ProjectLayout brandColor="#B4E82E" brandClass="text-[#B4E82E]" bgGlowClass="bg-[#B4E82E]/5" footerThemeClass="text-[#B4E82E]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="relative w-full min-h-[85vh] lg:max-h-[90vh] flex flex-col justify-end pt-32 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 bg-black overflow-hidden mt-[-100px]">
            <div className="absolute inset-0 z-0">
                <Image src="/images/matcha mojo imagem principal 1.jpg" alt="Matcha Mojo Texture" fill className="object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto w-full" data-aos="fade-up">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="bg-[#B4E82E] text-black text-[10px] sm:text-xs px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold uppercase tracking-wider drop-shadow-[0_0_15px_rgba(180,232,46,0.4)]">Branding</span>
                    <span className="border border-[#B4E82E]/30 text-white/80 text-[10px] sm:text-xs px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider">{t('tagIdentity')}</span>
                </div>
                <h1 className="font-display text-[14vw] sm:text-[10vw] md:text-[8rem] lg:text-[130px] xl:text-[160px] font-black uppercase tracking-wider leading-[0.9] mb-4 sm:mb-6 text-white">
                    Matcha <span className="text-[#B4E82E]">Mojo</span>
                </h1>
                <p className="font-sans text-lg sm:text-xl md:text-3xl text-gray-300 max-w-3xl font-normal tracking-wide">{t('heroDesc')}</p>
            </div>
        </header>

        <section className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto border-t border-[#B4E82E]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
                <div className="lg:col-span-7" data-aos="fade-right">
                    <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide leading-tight text-white mb-6 sm:mb-8 border-l-4 border-[#B4E82E] pl-6 sm:pl-8 py-2">
                        {t('quotePart1')} <span className="text-[#B4E82E]">desmistificar</span> {t('quotePart2')}
                    </blockquote>
                    <div className="space-y-4 sm:space-y-6 font-sans text-gray-400 leading-relaxed font-normal tracking-wide text-base sm:text-xl max-w-2xl text-justify md:text-left">
                        <p><strong className="text-white">{t('brandLabel')}</strong> {t('brandText')}</p>
                        <p>{t('brandText2')}</p>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6 sm:space-y-10 bg-brand-card p-6 sm:p-10 rounded-[24px] sm:rounded-3xl border border-white/5 tracking-wide" data-aos="fade-left">
                    <div><h3 className="font-display text-[10px] sm:text-sm uppercase tracking-widest font-bold text-[#B4E82E] mb-2 sm:mb-3">{t('roleTitle')}</h3><p className="font-sans text-white/80 text-base sm:text-lg">{t('roleDesc')}</p></div>
                    <div><h3 className="font-display text-[10px] sm:text-sm uppercase tracking-widest font-bold text-[#B4E82E] mb-2 sm:mb-3">{t('aestheticTitle')}</h3><p className="font-sans text-white/80 text-base sm:text-lg">{t('aestheticDesc')}</p></div>
                    <div><h3 className="font-display text-[10px] sm:text-sm uppercase tracking-widest font-bold text-[#B4E82E] mb-2 sm:mb-3">{t('challengeTitle')}</h3><p className="font-sans text-white/80 text-base sm:text-lg">{t('challengeDesc')}</p></div>
                </div>
            </div>
        </section>

        <section className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto relative border-t border-[#B4E82E]/20">
            <div className="text-center mb-8 sm:mb-16" data-aos="fade-up">
                <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase font-black text-white tracking-wider">{t('ecoSystemTitle')}</h2>
                <p className="font-sans text-gray-400 mt-2 sm:mt-4 text-base sm:text-xl tracking-wide">{t('ecoSystemSubtitle')}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[160px] sm:auto-rows-[250px] md:auto-rows-[300px]">
                <div className="col-span-2 row-span-2 bg-brand-card border border-white/5 rounded-[24px] sm:rounded-[32px] overflow-hidden flex items-center justify-center group cursor-view relative" data-aos="zoom-in">
                    <Image src="/images/matchoAtivo 1.png" alt="Ecosystem 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="col-span-1 row-span-1 bg-[#B4E82E] rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 flex items-center justify-center group cursor-view relative" data-aos="zoom-in" data-aos-delay="100">
                    <Image src="/images/matchoAtivo 3.png" alt="Ecosystem 3" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="col-span-1 row-span-1 bg-[#F080A5] rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 flex items-center justify-center group cursor-view relative" data-aos="zoom-in" data-aos-delay="200">
                    <Image src="/images/matchoAtivo 4.png" alt="Ecosystem 4" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="col-span-1 row-span-1 bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 flex items-center justify-center group cursor-view relative" data-aos="zoom-in" data-aos-delay="300">
                    <Image src="/images/matchoAtivo 5.png" alt="Ecosystem 5" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="col-span-1 row-span-1 bg-brand-card border border-white/5 rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 flex items-center justify-center group cursor-view relative" data-aos="zoom-in" data-aos-delay="400">
                    <Image src="/images/matchoAtivo 6.png" alt="Ecosystem 6" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="col-span-2 md:col-span-4 row-span-1 bg-[#B4E82E] rounded-[24px] sm:rounded-[32px] overflow-hidden p-6 sm:p-12 flex items-center justify-center group cursor-view relative" data-aos="fade-up" data-aos-delay="500">
                    <Image src="/images/matchoAtivo 7.png" alt="Ecosystem 7" fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>
        </section>

        <section className="py-12 sm:py-24 bg-brand-dark px-4 sm:px-8 md:px-12 border-t border-[#B4E82E]/20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#B4E82E]/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-4 sm:gap-6" data-aos="fade-up">
                    <div className="w-full md:w-auto">
                        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase font-black text-white tracking-wider">
                            Pontos de <span className="text-[#B4E82E]">Contacto</span>
                        </h2>
                    </div>
                    <p className="font-sans text-white/60 text-base sm:text-lg max-w-sm text-left md:text-right tracking-wide">{t('mockupsDesc')}</p>
                </div>
                
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {[
                      '/images/mockup matcha mojo 1.jpg', 
                      '/images/mockup matcha mojo 2.jpg', 
                      '/images/mockup matcha mojo 3.jpg', 
                      '/images/mockup matcha mojo 4.jpg', 
                      '/images/mockup matcha mojo 5.jpg'
                    ].map((src, i) => (
                        <div key={i} className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden break-inside-avoid relative group border border-white/5 bg-brand-card shadow-xl cursor-view" data-aos="fade-up" data-aos-delay={i * 100}>
                            <Image src={src} alt={`Mockup ${i+1}`} width={800} height={1200} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#B4E82E]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-20" data-aos="fade-up">
            <Link href="/projeto-baly" className="block w-full bg-[#FFE600] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#FFE600] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">
                        Baly Energy Drink
                    </h2>
                </div>
            </Link>
        </section>

      </main>
    </ProjectLayout>
  );
}
