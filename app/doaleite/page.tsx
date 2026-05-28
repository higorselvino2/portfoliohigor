'use client';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';
import Image from 'next/image';

const translations: Record<string, Record<string, string>> = {
  pt: {
    badgeSocial: "Campanha Social",
    badgeBranding: "Ação & Branding",
    roleTitle: "O Papel",
    roleDesc: "Direção de Arte, Design Gráfico, Campanha Publicitária, Identidade Visual.",
    teamTitle: "Cliente/Projeto",
    contextTitle: "Contexto",
    contextDesc: "Campanha de Consciencialização Social",
    yearTitle: "Ano",
    quotePart1: "\"Cada gota importa. Uma identidade visual empática",
    quotePart2: "para conectar mães e salvar vidas.\"",
    p1: "A campanha Doaleite nasceu com o propósito de consciencializar, educar e facilitar o processo de doação de leite materno. A identidade visual foi desenhada para afastar o tom frio e clínico, abraçando uma paleta de cores acolhedora e calorosa.",
    p2: "Através de uma comunicação visual clara e direta, o projeto desmistifica o processo de doação. Os elementos gráficos, que incluem selos, tipografia amigável e ilustrações orgânicas, visam criar uma rede de apoio e engajar novas doadoras com empatia e urgência.",
    identityTitle: "Identidade & Cores",
    identityDesc: "O logótipo dinâmico e a paleta cromática calorosa e acolhedora.",
    typoTitle: "Tipografia & Ilustrações",
    typoDesc: "Elementos amigáveis criados para humanizar a comunicação.",
    motionTitle: "A Campanha em Movimento",
    motionSubtitle: "Animação e fluidez para redes sociais e meios digitais.",
    socialTitle: "Redes Sociais",
    socialDesc: "A campanha aplicada ao ambiente digital para engajar doadoras.",
    nextProject: "Próximo Projeto"
  },
  en: {
    badgeSocial: "Social Campaign",
    badgeBranding: "Action & Branding",
    roleTitle: "The Role",
    roleDesc: "Art Direction, Graphic Design, Advertising Campaign, Visual Identity.",
    teamTitle: "Client/Project",
    contextTitle: "Context",
    contextDesc: "Social Awareness Campaign",
    yearTitle: "Year",
    quotePart1: "\"Every drop matters. An empathetic visual identity",
    quotePart2: "to connect mothers and save lives.\"",
    p1: "The Doaleite campaign was born with the purpose of raising awareness, educating, and facilitating the breast milk donation process. The visual identity was designed to move away from a cold, clinical tone, embracing a warm and welcoming color palette.",
    p2: "Through clear and direct visual communication, the project demystifies the donation process. The graphic elements, which include badges, friendly typography, and organic illustrations, aim to create a support network and engage new donors with empathy and urgency.",
    identityTitle: "Identity & Colors",
    identityDesc: "The dynamic logo and the warm, welcoming color palette.",
    typoTitle: "Typography & Illustrations",
    typoDesc: "Friendly elements created to humanize communication.",
    motionTitle: "The Campaign in Motion",
    motionSubtitle: "Animation and fluidity for social media and digital platforms.",
    socialTitle: "Social Media",
    socialDesc: "The campaign applied to the digital environment to engage donors.",
    nextProject: "Next Project"
  }
};

export default function Doaleite() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;

  return (
    <ProjectLayout brandColor="#FF7A00" brandClass="text-[#FF7A00]" bgGlowClass="bg-[#FF7A00]/5" footerThemeClass="text-[#FF7A00]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 sm:gap-6 animate-[fadeIn_1s_ease-out]">
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="bg-[#FF7A00] text-brand-dark px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{t('badgeSocial')}</span>
                    <span className="border border-white/20 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('badgeBranding')}</span>
                </div>
                <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[130px] font-display font-black text-brand-light uppercase leading-[0.85] tracking-wider">
                    Doa<span className="text-outline" style={{WebkitTextStroke: '1.5px #FF7A00'}}>leite</span>
                </h1>
            </div>
            <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:max-h-[65vh] xl:max-h-[75vh] rounded-[16px] sm:rounded-[24px] overflow-hidden relative cursor-view bg-brand-card border border-white/10 project-img-wrapper shadow-2xl">
                <Image src="/images/projects/doaleite/ultrawide imagem doaleite.webp" alt="Doaleite" fill className="object-cover object-center project-img-parallax opacity-90 hover:opacity-100 transition-all duration-700" data-speed="0.05" />
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FF7A00] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('roleTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('roleDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FF7A00] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('teamTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">Doaleite</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FF7A00] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('contextTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('contextDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#FF7A00] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('yearTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">2024</p></div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-12">
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-[1.2] font-display font-black text-[#FF7A00] tracking-wider uppercase" data-aos="fade-up">
                    <span>{t('quotePart1')}</span> <span className="text-white"><span>{t('quotePart2')}</span></span>
                </blockquote>
                <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-view bg-brand-card border border-white/5 shadow-xl mt-2 sm:mt-4" data-aos="fade-up">
                    <Image src="/images/projects/doaleite/sobre o projeto.webp" alt="Sobre o Projeto" width={1600} height={900} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#FF7A00]">{t('identityTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('identityDesc')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8">
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-white flex justify-center items-center border border-white/5 cursor-view shadow-xl" data-aos="fade-right">
                    <Image src="/images/projects/doaleite/gif logo doaleite.gif" alt="Logo Animado Doaleite" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-left">
                    <Image src="/images/projects/doaleite/paleta de cores d.webp" alt="Paleta de Cores" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#FF7A00]">{t('typoTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('typoDesc')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-up">
                    <Image src="/images/projects/doaleite/tipografia.webp" alt="Tipografia" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-up" data-aos-delay="100">
                    <Image src="/images/projects/doaleite/Ilustrações.webp" alt="Ilustrações" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16" data-aos="fade-up">
            <div className="mb-6 sm:mb-8 flex flex-col gap-2 sm:gap-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-white">{t('motionTitle')}</h3>
                <p className="text-white/50 font-medium text-sm sm:text-lg">{t('motionSubtitle')}</p>
            </div>
            <div className="w-full bg-brand-card rounded-[16px] sm:rounded-[24px] border border-white/5 flex justify-center items-center overflow-hidden cursor-view shadow-xl">
                <Image src="/images/projects/doaleite/53a997149768183.62ed293c64dbe.gif" alt="Doaleite Motion" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 text-center md:text-left" data-aos="fade-up">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-[#FF7A00]">{t('socialTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg">{t('socialDesc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-up">
                    <Image src="/images/projects/doaleite/aplicação na rede social.webp" alt="Aplicação Rede Social 1" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card border border-white/5 cursor-view shadow-xl" data-aos="fade-up" data-aos-delay="100">
                    <Image src="/images/projects/doaleite/aplicação na rede social 2.webp" alt="Aplicação Rede Social 2" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12 sm:mt-20" data-aos="fade-up">
            <Link href="/the-florist" className="block w-full bg-[#E82569] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#E82569] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">The Florist</h2>
                </div>
            </Link>
        </section>

      </main>
    </ProjectLayout>
  );
}
