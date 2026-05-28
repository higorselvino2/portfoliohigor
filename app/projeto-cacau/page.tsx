'use client';
import ProjectLayout from '@/components/ProjectLayout';
import { useLang } from '@/app/LangContext';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const translations: Record<string, Record<string, string>> = {
  pt: {
    badgePackaging: "Design de Embalagem",
    badgeAward: "🏆 Vencedor Anhembi Awards",
    roleTitle: "O Papel",
    roleDesc: "Direção de Arte, Design de Embalagem, Identidade Visual, Ilustração.",
    contextTitle: "Contexto",
    contextDesc: "Projeto Académico | Universidade Anhembi Morumbi",
    yearTitle: "Ano",
    quotePart1: "\"O Willy Wonka Brasileiro.",
    quotePart2: "Integrando chocolate premium à fantasia do primeiro parque temático Show.\"",
    p1: "Com a aquisição do grupo Playcenter pela Cacau Show, o projeto <strong>Cacau Parque</strong> nasceu para celebrar este novo capítulo. O desafio foi integrar a linha *La Creme* com o universo lúdico de um parque de diversões.",
    p2: "Desenvolvemos uma identidade visual vibrante onde o logótipo principal equilibra o prestígio da marca mãe com a tipografia acessível e divertida do novo empreendimento.",
    designSystemTitle: "Sistema Visual",
    designSystemDesc: "A paleta foi inspirada nas cores vibrantes dos parques de diversões clássicos, refinada para o mercado premium. A tipografia Never Mind Rounded foi escolhida para garantir leitura fácil e um tom amigável.",
    attractionsTitle: "As Atracções",
    attractionsDesc: "Ícones e ilustrações desenvolvidos para mapear cada área temática do parque.",
    packagingTitle: "A Coleção La Creme",
    packagingDesc: "O resultado final da linha de embalagens, prontas para o ponto de venda e ativação digital.",
    ticketTitle: "O Bilhete Dourado",
    ticketDesc: "O prémio máximo. Um ingresso VIP com acabamentos metálicos que materializa a magia do projeto.",
    mapTitle: "Mapeamento & Imersão",
    mapDesc: "A experiência do Cacau Parque culmina no mapeamento oficial, onde cada sabor corresponde a uma área temática única.",
    nextProject: "Próximo Projeto"
  },
  en: {
    badgePackaging: "Packaging Design",
    badgeAward: "🏆 Anhembi Awards Winner",
    roleTitle: "The Role",
    roleDesc: "Art Direction, Packaging Design, Visual Identity, Illustration.",
    contextTitle: "Context",
    contextDesc: "Academic Project (Anhembi Morumbi University)",
    yearTitle: "Year",
    quotePart1: "\"The Brazilian Willy Wonka.",
    quotePart2: "Merging premium chocolate with the fantasy of the first Show theme park.\"",
    p1: "With the acquisition of the Playcenter group by Cacau Show, the <strong>Cacau Parque</strong> project was born to celebrate this new chapter. The challenge was to integrate the *La Creme* line with the playful universe of an amusement park.",
    p2: "We developed a vibrant visual identity where the main logo balances the prestige of the parent brand with accessible and fun typography.",
    designSystemTitle: "Visual System",
    designSystemDesc: "The palette was inspired by the vibrant colors of classic amusement parks, refined for the premium market. The Never Mind Rounded typography was chosen to ensure easy reading and a friendly tone.",
    attractionsTitle: "The Attractions",
    attractionsDesc: "Icons and illustrations developed to map each thematic area of the park.",
    packagingTitle: "The La Creme Collection",
    packagingDesc: "The final result of the packaging line, ready for point of sale and digital activation.",
    ticketTitle: "The Golden Ticket",
    ticketDesc: "The ultimate prize. A VIP ticket with metallic finishes that materializes the magic of the project.",
    mapTitle: "Mapping & Immersion",
    mapDesc: "The Cacau Parque experience culminates in the official mapping, where each flavor corresponds to a unique themed area.",
    nextProject: "Next Project"
  }
};

export default function ProjetoCacau() {
  const { lang } = useLang();
  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    const mapContainer = document.getElementById('map-container');
    const mapImage = document.getElementById('map-image');
    if (mapContainer && mapImage && window.matchMedia("(pointer: fine)").matches) {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = mapContainer.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            mapImage.style.transformOrigin = `${x}% ${y}%`;
        };
        mapContainer.addEventListener('mousemove', handleMouseMove);
        return () => mapContainer.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <ProjectLayout brandColor="#eb5612" brandClass="text-[#eb5612]" bgGlowClass="bg-[#eb5612]/5" footerThemeClass="text-[#eb5612]/5">
      <main className="w-full mx-auto flex flex-col pb-20 pt-28 md:pt-40">
        
        <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4 sm:gap-6 animate-[fadeIn_1s_ease-out]">
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="bg-[#eb5612] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{t('badgePackaging')}</span>
                    <span className="border border-[#eb5612] text-[#eb5612] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('badgeAward')}</span>
                </div>
                <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[100px] xl:text-[130px] font-display font-black text-white uppercase leading-[0.85] tracking-wider">
                    Cacau <span className="text-outline" style={{WebkitTextStroke: '1.5px #eb5612'}}>Parque</span>
                </h1>
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 border-t border-white/5 mt-8 md:mt-12">
            <div className="bg-gradient-to-br from-[#eb5612]/20 to-brand-dark border border-[#eb5612]/30 rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center relative overflow-hidden shadow-[0_0_50px_rgba(235,86,18,0.1)]">
                <div className="w-full lg:w-1/2 relative z-10" data-aos="fade-right">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#eb5612] w-6 h-6 sm:w-8 sm:h-8"><path d="M12 15l-3-3m0 0l3-3m-3 3h8M2 12a10 10 0 1120 0 10 10 0 01-20 0z"></path><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="none"></path></svg>
                        <h4 className="text-[#eb5612] font-bold uppercase tracking-widest text-sm sm:text-base">Reconhecimento</h4>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-wider mb-4 sm:mb-6 leading-tight">
                        Vencedor do <span className="text-[#eb5612]">Anhembi Awards</span>
                    </h3>
                    <p className="text-white/80 font-light text-base sm:text-lg md:text-xl leading-relaxed">
                        O projeto Cacau Parque foi o grande vencedor da 1ª Edição do <strong>Anhembi Awards</strong>, conquistando o primeiro lugar na categoria de <strong>Design de Embalagem</strong>. Um reconhecimento do rigor técnico, criatividade e visão estratégica aplicada a este desafio.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-10" data-aos="fade-left">
                    <div className="w-full sm:w-1/2 rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 cursor-view shadow-xl aspect-[3/4] sm:aspect-auto relative">
                        <Image src="/images/projects/projeto-cacau/eu com troféu.webp" alt="Higor Selvino com Troféu Anhembi Awards" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full sm:w-1/2 rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 cursor-view shadow-xl aspect-[3/4] sm:aspect-auto relative">
                        <Image src="/images/projects/projeto-cacau/troféu.webp" alt="Troféu Anhembi Awards" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 border-t border-white/5">
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 md:gap-10 border-l border-white/10 pl-6 sm:pl-8">
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#eb5612] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('roleTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('roleDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#eb5612] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('contextTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">{t('contextDesc')}</p></div>
                <div className="flex flex-col gap-1 sm:gap-2"><h4 className="text-[#eb5612] font-bold uppercase tracking-widest text-[10px] sm:text-sm">{t('yearTitle')}</h4><p className="text-base sm:text-lg text-white/90 font-medium">2024</p></div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-12">
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-[1.2] font-display font-black text-[#eb5612] tracking-wider uppercase" data-aos="fade-up">
                    <span>{t('quotePart1')}</span> <span className="text-white"><span>{t('quotePart2')}</span></span>
                </blockquote>
                <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    <p dangerouslySetInnerHTML={{ __html: t('p1') }}></p>
                    <p>{t('p2')}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch py-8 sm:py-12 border-y border-white/5" data-aos="fade-up">
                    <div className="bg-white/5 rounded-[16px] sm:rounded-[24px] p-6 sm:p-10 flex justify-center items-center border border-white/5 h-full">
                        <Image src="/images/projects/projeto-cacau/logo CACAU SHOW.webp" alt="Logo Cacau Show" width={400} height={200} className="w-full max-w-[150px] sm:max-w-[220px] h-auto object-contain opacity-80" />
                    </div>
                    <div className="bg-[#eb5612]/10 rounded-[16px] sm:rounded-[24px] p-6 sm:p-10 flex justify-center items-center border border-[#eb5612]/20 h-full">
                        <Image src="/images/projects/projeto-cacau/logo principal CACAU PARQUE.webp" alt="Logo Cacau Parque" width={400} height={200} className="w-full max-w-[180px] sm:max-w-[280px] h-auto object-contain drop-shadow-[0_0_20px_rgba(235,86,18,0.4)]" />
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-24 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
                <div className="lg:col-span-5 flex flex-col gap-8" data-aos="fade-right">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-wider text-[#eb5612]">Sistema <span className="text-white">Visual</span></h3>
                    <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('designSystemDesc') }}></p>
                    <div className="rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl cursor-view mt-4">
                        <Image src="/images/projects/projeto-cacau/paleta de cores c.webp" alt="Paleta de Cores" width={1200} height={800} className="w-full h-auto" />
                    </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:gap-8" data-aos="fade-left">
                    <div className="rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl cursor-view">
                        <Image src="/images/projects/projeto-cacau/hirarquia tipografica (1).webp" alt="Hierarquia" width={1600} height={800} className="w-full h-auto" />
                    </div>
                    <div className="rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl cursor-view">
                        <Image src="/images/projects/projeto-cacau/hirarquia tipografica (2).webp" alt="Hierarquia" width={1600} height={800} className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-24 border-t border-white/5 bg-brand-card/30 rounded-[24px] sm:rounded-[40px] mt-8 sm:mt-12 mb-8 sm:mb-12">
            <div className="mb-12 sm:mb-20 text-center" data-aos="fade-up">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-wider text-[#eb5612]">{t('attractionsTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg mt-2 sm:mt-4">{t('attractionsDesc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
                {[
                  { img: '/images/projects/projeto-cacau/brinquedo MONTANHA-RUSSA GIRA CHOCOMONSTROS.webp', label: 'Gira Chocomonstros' },
                  { img: '/images/projects/projeto-cacau/brinquedo RODA GIGABYTES.webp', label: 'Roda Gigabytes' },
                  { img: '/images/projects/projeto-cacau/brinquedo BENDITO KAMIKAZE.webp', label: 'Bendito Kamikaze' },
                  { img: '/images/projects/projeto-cacau/brinquedo CHOCOBICHOS CARROSSEL.webp', label: 'Chocobichos Carrossel' },
                  { img: '/images/projects/projeto-cacau/brinquedo ESPAÇO MIAU KIDS.webp', label: 'Espaço Miau Kids' },
                  { img: '/images/projects/projeto-cacau/brinquedo EXPRESSO CHOCOLATE.webp', label: 'Expresso Chocolate' },
                  { img: '/images/projects/projeto-cacau/brinquedo JARDIM DA BELLA.webp', label: 'Jardim da Bella' },
                  { img: '/images/projects/projeto-cacau/brinquedo MONTANHA RUSSA MONTEBELLO.webp', label: 'Montanha Russa Montebello' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 sm:gap-4 group" data-aos="zoom-in" data-aos-delay={(i % 4) * 100}>
                        <div className="w-full aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-6 sm:p-10 transition-all group-hover:bg-[#eb5612]/20 cursor-view shadow-xl relative">
                            <Image src={item.img} alt={item.label} fill className="object-contain p-6" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/50 text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-24 border-t border-white/5">
            <div className="mb-12 sm:mb-16 text-center lg:text-left" data-aos="fade-up">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-wider text-[#eb5612]">{t('packagingTitle')}</h3>
                <p className="text-white/70 font-medium text-sm sm:text-lg mt-2 sm:mt-4">{t('packagingDesc')}</p>
            </div>
            <div className="w-full aspect-[16/9] sm:aspect-video rounded-[16px] sm:rounded-[24px] overflow-hidden bg-brand-card shadow-2xl border border-white/10 mb-12 sm:mb-16" data-aos="fade-up">
                <video className="w-full h-full object-cover" controls playsInline poster="/images/projects/projeto-cacau/ultrawide imagem cacau parque.webp">
                    <source src="/videos/YTDown.com_YouTube_Media_RrafOBqSf9o_001_1080p.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
                {[1,2,3,4,5].map((num) => (
                    <div key={num} className="rounded-xl sm:rounded-2xl overflow-hidden cursor-view border border-white/5 bg-brand-card" data-aos="fade-up" data-aos-delay={num * 100}>
                        <Image src={`/images/projects/projeto-cacau/embalagem ${num}.webp`} alt={`Embalagem ${num}`} width={600} height={800} className="hover:scale-110 transition-all duration-500 w-full h-auto" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div className="rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl cursor-view bg-brand-card" data-aos="fade-right"><Image src="/images/projects/projeto-cacau/embalagem na gondula mockup.webp" alt="Embalagem Mockup 1" width={1200} height={800} className="w-full h-auto hover:scale-105 transition-transform duration-1000" /></div>
                <div className="rounded-[16px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl cursor-view bg-brand-card" data-aos="fade-left"><Image src="/images/projects/projeto-cacau/poster mockup sem fundo.webp" alt="Poster Mockup" width={1200} height={800} className="w-full h-auto hover:scale-105 transition-transform duration-1000" /></div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-24 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#eb5612]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                <div className="relative flex justify-center items-center cursor-view" data-aos="zoom-in">
                    <Image src="/images/projects/projeto-cacau/bilhete dourado.webp" alt="Bilhete Dourado" width={800} height={400} className="w-full max-w-[350px] sm:max-w-[450px] h-auto rounded-2xl shadow-2xl drop-shadow-[0_0_40px_rgba(235,86,18,0.3)] hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col gap-6 sm:gap-8" data-aos="fade-left">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-wider text-[#eb5612]">{t('ticketTitle')}</h3>
                    <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed">{t('ticketDesc')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="rounded-2xl overflow-hidden border border-white/10 cursor-view shadow-xl bg-brand-card relative aspect-video"><Image src="/images/projects/projeto-cacau/foto bilhete saindo da embalagem.webp" alt="Bilhete" fill className="object-cover hover:scale-105 transition-transform" /></div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 cursor-view shadow-xl bg-brand-card relative aspect-video"><Image src="/images/projects/projeto-cacau/varios bilhetes dourados foto.webp" alt="Bilhetes" fill className="object-cover hover:scale-105 transition-transform" /></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-24 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div id="map-container" className="lg:col-span-7 rounded-[16px] sm:rounded-[24px] lg:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl shadow-[0_0_50px_rgba(235,86,18,0.1)] relative cursor-crosshair pb-[100%]" data-aos="fade-right">
                    <Image id="map-image" src="/images/projects/projeto-cacau/mapa projetado do cacau parque.webp" alt="Map" fill className="object-cover transition-transform duration-300 ease-out hover:scale-[2.5]" />
                </div>
                <div className="lg:col-span-5" data-aos="fade-left">
                    <h3 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-wider text-[#eb5612] mb-4 sm:mb-6" dangerouslySetInnerHTML={{ __html: t('mapTitle') }}></h3>
                    <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed">{t('mapDesc')}</p>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-12 mb-8 sm:mb-12" data-aos="fade-up">
            <Link href="/songbird" className="block w-full bg-[#4DB8FF] rounded-[24px] sm:rounded-[40px] p-8 sm:p-16 lg:p-24 text-center cursor-hover group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brand-dark group-hover:text-[#4DB8FF] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-3 sm:mb-4 transition-colors">{t('nextProject')}</span>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-brand-dark group-hover:text-white uppercase tracking-wider transition-colors">Songbird</h2>
                </div>
            </Link>
        </section>

      </main>
    </ProjectLayout>
  );
}
