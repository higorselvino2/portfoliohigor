'use client';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';

const translations: Record<string, Record<string, string>> = {
  pt: {
    badgeRebrand: "Redesign de Marca",
    badgeAcademic: "Projeto Acadêmico",
    roleTitle: "O Papel",
    roleDesc: "Rebranding, Criação de Logo, Aplicação Visual de Embalagens.",
    contextTitle: "Contexto",
    contextDesc: "Projeto Académico",
    yearTitle: "Ano",
    quotePart1: "\"Mais que energia, atitude. Um reposicionamento visual completo ",
    quotePart2: "para comunicar com uma nova geração.\"",
    p1: "O projeto focou-se no reposicionamento visual da marca Baly Energy Drink. O objetivo central era modernizar a identidade da marca, tornando-a mais apelativa para um público jovem e enérgico, sem perder o seu reconhecimento de mercado.",
    p2: "Desenvolvemos um novo ecossistema visual que inclui uma paleta de cores super vibrante, novas identidades visuais aplicadas nas embalagens para cada sabor e a criação de um logótipo reformulado.",
    logoTitle: "Criação de Logo",
    logoDesc: "Estudos e desenvolvimento do novo logótipo.",
    mockupsTitle: "Mockups e Aplicações",
    mockupsDesc: "Uma nova perspetiva para os sabores clássicos e novas adições.",
    patternsTitle: "Padrões Visuais",
    patternsDesc: "Identidade de apoio aplicada em backgrounds e texturas.",
    nextProject: "Próximo Projeto"
  },
  en: {
    badgeRebrand: "Brand Redesign",
    badgeAcademic: "Academic Project",
    roleTitle: "The Role",
    roleDesc: "Rebranding, Logo Creation, Visual Application in Packaging.",
    contextTitle: "Context",
    contextDesc: "Academic Project",
    yearTitle: "Year",
    quotePart1: "\"More than energy, attitude. A complete visual repositioning ",
    quotePart2: "to communicate with a new generation.\"",
    p1: "This project focused on the visual repositioning of the Baly Energy Drink brand. The main goal was to modernize the brand identity, making it more appealing to a young audience.",
    p2: "We developed a new visual ecosystem that includes a super vibrant color palette, new visual identities applied to each flavor, and a redesigned logo.",
    logoTitle: "Logo Creation",
    logoDesc: "Studies and development of the new logo.",
    mockupsTitle: "Mockups and Applications",
    mockupsDesc: "A new perspective for classic flavors and new additions.",
    patternsTitle: "Visual Patterns",
    patternsDesc: "Supporting identity applied to backgrounds and textures.",
    nextProject: "Next Project"
  }
};

export default function ProjetoBaly() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;

  return (
    <ProjectLayout brandColor="#FFE600" brandClass="text-[#FFE600]" bgGlowClass="bg-[#FFE600]/5" footerThemeClass="text-[#FFE600]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 sm:gap-6 animate-[fadeIn_1s_ease-out]">
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="bg-[#FFE600] text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{t('badgeRebrand')}</span>
                    <span className="border border-white/20 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('badgeAcademic')}</span>
                </div>
                <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[130px] font-display font-black text-white uppercase leading-[0.9] tracking-wider">
                    Baly <span className="text-outline" style={{WebkitTextStroke: '1.5px #FFE600'}}>Energy Drink</span>
                </h1>
            </div>
            <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:max-h-[65vh] xl:max-h-[75vh] rounded-[16px] sm:rounded-[24px] overflow-hidden relative cursor-view bg-brand-card border border-white/10 project-img-wrapper shadow-2xl">
                <img src="/baly imagem principal 1.jpg" alt="Baly Capa Principal" className="w-full h-full object-cover object-center project-img-parallax opacity-90 hover:opacity-100 transition-all duration-700" data-speed="0.05" />
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FFE600] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('roleTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('roleDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FFE600] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('contextTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('contextDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FFE600] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('yearTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">2024</p></div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-12">
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-[1.2] font-display font-black text-[#FFE600] tracking-wider uppercase" data-aos="fade-up">
                    <span>{t('quotePart1')}</span><span className="text-white"><span>{t('quotePart2')}</span></span>
                </blockquote>
                <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 border-t border-white/5">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#FFE600]">{t('logoTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('logoDesc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-up">
                    <img src="/O Baly é meninoPrancheta 2@3x.png" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 p-4 sm:p-8" />
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-up" data-aos-delay="100">
                    <img src="/O Baly é meninoPrancheta 2 cópia@3x.png" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 p-4 sm:p-8" />
                </div>
            </div>
        </section>

        <section className="w-full bg-gradient-to-b from-brand-card to-brand-dark py-16 md:py-24 relative overflow-hidden mt-8 sm:mt-12 border-y border-white/5">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="mb-12 sm:mb-16 flex flex-col gap-2 sm:gap-4 text-center" data-aos="fade-up">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#FFE600]">{t('mockupsTitle')}</h3>
                    <p className="text-white/70 font-medium text-sm sm:text-lg">{t('mockupsDesc')}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="100">
                    {[
                      { src: '/LATA TRADICIONAL.png', label: 'Tradicional' },
                      { src: '/LATA MAÇÃ VERDE.png', label: 'Maçã Verde' },
                      { src: '/LATA MELANCIA.png', label: 'Melancia', hl: true },
                      { src: '/LATA AÇAÍ.png', label: 'Açaí' },
                      { src: '/LATA GUARANÁ.png', label: 'Guaraná' },
                    ].map((item, i) => (
                      <div key={i} className={`flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-4 cursor-view group ${item.hl ? 'md:-translate-y-6' : ''}`}>
                          <div className={`w-full aspect-[3/4] md:aspect-[4/5] rounded-[16px] sm:rounded-[24px] overflow-hidden border bg-brand-dark shadow-xl ${item.hl ? 'border-[#FFE600]/30 shadow-[0_20px_40px_rgba(255,230,0,0.15)]' : 'border-white/5'}`}>
                              <img src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                          <span className={`font-display font-bold uppercase tracking-widest text-[9px] sm:text-xs text-center ${item.hl ? 'text-[#FFE600]' : 'text-white/50'}`}>{item.label}</span>
                      </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 border-b border-white/5">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#FFE600]">{t('patternsTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('patternsDesc')}</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {[
                  '/melancia planoPrancheta 1 cópia 3.png', 
                  '/melancia planoPrancheta 1 cópia 2.png', 
                  '/planoPrancheta 1 cópia.png', 
                  '/planoPrancheta 1.png'
                ].map((src, i) => (
                  <div key={i} className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-lg" data-aos="fade-up" data-aos-delay={i * 100}>
                      <img src={src} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mt-12 sm:mt-20" data-aos="fade-up">
            <Link href="/songbird" className="block w-full bg-[#4DB8FF] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#4DB8FF] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">Songbird</h2>
                </div>
            </Link>
        </section>

      </main>
    </ProjectLayout>
  );
}
