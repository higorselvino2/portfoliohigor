'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [starTaps, setStarTaps] = useState(0);
  const [isShrekMode, setIsShrekMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  const [showScroll, setShowScroll] = useState(false);

  const [projectsDB, setProjectsDB] = useState<any[]>([]);

  useEffect(() => {
    // import AOS
    import('aos').then((AOS) => {
      AOS.init({ once: true, offset: 50, duration: 800, easing: 'ease-out-cubic' });
    });

    import('@/lib/supabase').then(({ supabase }) => {
        supabase.from('projects').select('*').order('created_at', { ascending: false }).then(({ data }) => {
            if (data) setProjectsDB(data);
        });
    });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
      const nameFirst = document.getElementById('name-first-wrapper');
      const nameLast = document.getElementById('name-last-wrapper');
      if (nameFirst && nameLast) {
        nameFirst.style.transform = `translateX(${window.scrollY * -0.15}px)`;
        nameLast.style.transform = `translateX(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerBalance = () => {
    if (mainRef.current?.classList.contains('balance-active')) return;
    // playBeep(); // Audio removed for simplicity
    mainRef.current?.classList.add('balance-active');
    setTimeout(() => mainRef.current?.classList.remove('balance-active'), 2000);
  };

  const handleStarClick = () => {
    setStarTaps(prev => {
      if (prev + 1 === 3) {
        triggerBalance();
        return 0;
      }
      return prev + 1;
    });
  };

  const handleProfileClick = () => {
    setClickCount(prev => {
      if (prev + 1 === 5 && !isShrekMode) {
        setIsShrekMode(true);
        document.body.classList.add('shrek-mode');
      }
      return prev + 1;
    });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const baseProjects = [
    { title: 'Além do Céu', desc: 'Livro & HQ', link: '/projeto-hq', img: '/images/Além do Céu imagem principal 1.jpg', badge: '🏆 Vencedor Expocom Sudeste' },
    { title: 'Cacau Parque', desc: 'Embalagem & Identidade Visual', link: '/projeto-cacau', img: '/images/Cacau Parque imagem principal 1.jpg', badge: '🏆 Vencedor do Anhembi Awards' },
    { title: 'Song Bird', desc: 'Música & Estúdio', link: '/songbird', img: '/images/song bird imagem principal 1.jpg' },
    { title: 'Matcha Mojo', desc: 'Branding', link: '/matcha-mojo', img: '/images/matcha mojo imagem principal 1.jpg' },
    { title: 'Baly', desc: 'Redesign de Marca', link: '/projeto-baly', img: '/images/baly imagem principal 1.jpg' },
    { title: 'Doaleite', desc: 'Ação & Branding', link: '/doaleite', img: '/images/doaleite imagem principal 1.jpg' },
    { title: 'The Florist', desc: 'Direção de Arte', link: '/the-florist', img: '/images/the florist imagem principal 1.jpg' },
    { title: 'Ilustrações', desc: 'Arte Digital', link: 'https://instagram.com/higor.selvino', img: '/images/Ilustrações imagem principal 1.jpg', blank: true },
  ];

  const shrekProjects = [
    { title: 'Além do Pântano', desc: 'Ogro & Aventura', link: '/projeto-hq', img: '/images/1211043-shrek-arrive-sur-netflix-le-1er-novembre-2025.jpg', badge: '🏆 Vencedor do Pântano' },
    { title: 'Cacau do Ogro', desc: 'Sabor de Lama', link: '/projeto-cacau', img: '/images/shrek-passeios-kids.jpg', badge: '🏆 Cebola de Ouro' },
    { title: 'Voz da Fiona', desc: 'Canto da Fiona', link: '/songbird', img: '/images/images (1).jpg' },
    { title: 'Matcha do Burro', desc: 'Sabor de Lama', link: '/matcha-mojo', img: '/images/5d43f01-shrek-1024x576.jpg' },
    { title: 'Baly Ogro', desc: 'Baly de Ogro', link: '/projeto-baly', img: '/images/maxresdefault.jpg' },
    { title: 'Doaleite Ogrístico', desc: 'Amigos da Fiona', link: '/doaleite', img: '/images/blob_reva.jpg' },
    { title: 'O Florista Ogro', desc: 'O Florista Ogro', link: '/the-florist', img: '/images/burro-do-shrek_2025-07-30_14-47-35.jpg' },
    { title: 'Rabiscos do Shrek', desc: 'Rabiscos na Lama', link: 'https://instagram.com/higor.selvino', img: '/images/Shrek_Shrek_FE-TUBBZ_PL_1.jpg', blank: true },
  ];

  const projects = isShrekMode ? shrekProjects : baseProjects;

  return (
    <>
      <div className="noise-bg"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[150px] pointer-events-none z-[-1] bg-brand-yellow/5"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none z-[-1] bg-brand-yellow/5"></div>

      <button onClick={scrollToTop} className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-brand-yellow text-brand-dark p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white ${showScroll ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`} style={{ boxShadow: '0 0 20px var(--brand-accent-glow)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 sm:px-6 md:px-12 py-4 md:py-5 flex justify-between items-center text-white border-b border-white/10">
        <div className="flex-1 font-display uppercase text-[10px] sm:text-xs md:text-sm tracking-widest font-bold text-brand-yellow flex items-center">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-yellow rounded-full mr-2 animate-pulse"></span>
            <span className="hidden sm:inline">Disponível</span>
        </div>
        
        <div onClick={handleStarClick} className="flex flex-1 justify-center cursor-pointer active:scale-90 transition-transform">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="animate-[spin_12s_linear_infinite] text-brand-yellow lg:w-8 lg:h-8 overflow-visible">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
            </svg>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-2 sm:gap-4">
            <a href="#contact" className="px-3 sm:px-6 py-1.5 sm:py-2 border border-white/20 rounded-full font-display uppercase text-[9px] sm:text-xs md:text-sm tracking-widest font-bold hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all text-center whitespace-nowrap">
                Fale Comigo
            </a>
        </div>
      </nav>

      <main ref={mainRef} className={`w-full mx-auto flex flex-col gap-16 md:gap-24 pb-20 relative bg-grid-pattern`}>
        
        <header className="w-full min-h-[90vh] md:min-h-screen pt-28 md:pt-32 pb-16 px-4 md:px-8 lg:px-12 flex flex-col justify-center relative z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[22vw] font-display font-black text-white/[0.03] pointer-events-none z-[-1] whitespace-nowrap select-none animate-[pan_25s_ease-in-out_infinite_alternate]">
                CREATIVE
            </div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 justify-between relative">
                <div className="w-full md:w-3/5 text-center md:text-left overflow-visible">
                    <h1 className="font-display font-black text-brand-light uppercase leading-[0.85] tracking-wider text-[16vw] sm:text-[14vw] md:text-[11vw] lg:text-[130px] xl:text-[160px] flex flex-col">
                        <span id="name-first-wrapper" className="block will-change-transform pr-2">
                            <span>{isShrekMode ? 'SHREK' : 'HIGOR'}</span>
                        </span>
                        <span id="name-last-wrapper" className="block will-change-transform overflow-visible">
                            <span className="text-outline">{isShrekMode ? 'OGRO' : 'SELVINO'}</span>
                        </span>
                    </h1>
                    <div className="mt-6 md:mt-10 lg:mt-12 max-w-xl lg:max-w-2xl mx-auto md:mx-0 px-4 md:px-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-relaxed font-display font-normal text-white/80 tracking-wide">
                            {isShrekMode ? 'Designer de Tão Tão Distante (São Paulo). Crio camadas (como cebolas) e protejo meu pântano de designs sem graça.' : 'Sou designer gráfico em São Paulo. Crio identidades visuais e materiais digitais que fazem marcas se destacarem.'}
                        </h2>
                    </div>
                </div>

                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-2/5 lg:w-1/3 relative mt-8 md:mt-0 mx-auto md:mx-0">
                    <div onClick={handleProfileClick} className="relative aspect-[4/5] rounded-[24px] overflow-hidden group cursor-pointer bg-brand-yellow shadow-2xl border border-white/10">
                        <div className="absolute inset-0 bg-brand-yellow opacity-20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                        <div className="w-full h-full">
                            <Image src={isShrekMode ? '/images/Shrek29_29.jpg' : '/images/freepik__-model-midjourney-dalle3-stablediffusion-subjectre__89002.png'} alt="Higor Selvino" fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-brand-dark/80 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/10 flex items-center gap-2 md:gap-3 z-20 shadow-xl">
                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-yellow animate-pulse"></div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-light whitespace-nowrap">{isShrekMode ? 'Ogro Profissional' : 'Designer Gráfico'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-12 md:pt-16">
            <div className="mb-10 md:mb-16 flex items-center gap-3 md:gap-4" data-aos="fade-up">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-yellow md:w-10 md:h-10"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/></svg>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold uppercase tracking-wider text-white">Projetos em Destaque</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {[...projectsDB, ...projects].map((p, i) => (
                    <div key={i} data-aos="fade-up" className="group">
                        <Link href={p.link} target={p.blank ? '_blank' : '_self'} className="block w-full relative aspect-square rounded-[24px] overflow-hidden project-img-wrapper border border-white/5 bg-brand-card shadow-2xl">
                            <Image src={p.img} alt={p.title} fill className="object-cover project-img-parallax opacity-90 group-hover:opacity-100 transition-opacity" />
                            {p.badge && (
                                <div className="absolute bottom-6 left-6 z-20 pointer-events-none transition-transform duration-300 group-hover:-translate-y-2">
                                    <span className="bg-brand-yellow text-brand-dark px-4 py-2.5 md:px-5 md:py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest flex items-center gap-2.5 border-2 border-white/20 animate-pulse" style={{ boxShadow: '0 0 20px var(--brand-accent-glow-strong)' }}>
                                        {p.badge}
                                    </span>
                                </div>
                            )}
                            <div className="absolute inset-0 flex flex-col justify-start p-6 md:p-8 z-10 bg-gradient-to-b from-black/70 via-transparent to-transparent">
                                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-black text-brand-yellow uppercase tracking-wider mb-1 text-shadow-hard">{p.title}</h2>
                                <p className="text-white/90 font-normal text-lg text-shadow-hard">{p.desc}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>

        <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mt-12 md:mt-20" data-aos="fade-up">
            <div className="w-full bg-brand-yellow rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col lg:flex-row gap-10 lg:gap-20 shadow-2xl relative overflow-hidden text-brand-dark">
                <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none animate-pulse">
                    <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                </div>
                <div className="lg:w-[55%] relative z-10">
                    <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] leading-[1.2] lg:leading-[1.1] font-display font-black uppercase tracking-wider">Criando experiências digitais que deixam marcas.</h4>
                    <p className="mt-6 md:mt-8 text-lg sm:text-xl font-medium text-brand-dark/80 max-w-xl">Após anos de dedicação à direção de arte e design, criei este espaço para servir o que mais gosto: transformar conceitos em puro impacto visual.</p>
                </div>
                <div className="lg:w-[45%] flex flex-col sm:flex-row gap-8 md:gap-12 justify-between lg:justify-end relative z-10 mt-6 lg:mt-0">
                    <div className="flex flex-col items-start w-full">
                        <span className="text-brand-dark/50 mb-4 md:mb-6 font-bold text-[10px] md:text-xs tracking-widest uppercase">Meu Arsenal</span>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {['Graphic Design', 'Packaging', 'Webflow', 'Figma', 'Editorial Design'].map((skill, i) => (
                                <span key={i} className="border-2 border-brand-dark/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm uppercase bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-yellow transition-colors cursor-default">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mt-16 md:mt-20 pb-12">
            <div className="bg-brand-card border border-white/10 rounded-[32px] p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[50vh] md:min-h-[60vh] relative overflow-hidden shadow-2xl">
                
                <svg width="400" height="400" viewBox="0 0 24 24" fill="none" className="absolute -top-24 -left-24 text-brand-yellow/5 animate-[spin_12s_linear_infinite] pointer-events-none z-0 overflow-visible">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                </svg>

                <div className="text-center relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl sm:text-[8vw] md:text-[6vw] lg:text-[8vw] font-display font-black text-white uppercase leading-[1] tracking-wider mb-8 md:mb-12 hover:text-brand-yellow transition-colors duration-500 break-words w-full text-shadow-hard">ENTRE EM CONTATO</h2>
                    
                    <form className="w-full max-w-lg mb-8" onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target as HTMLFormElement);
                        const data = Object.fromEntries(formData.entries());
                        const res = await fetch('/api/n8n', { method: 'POST', body: JSON.stringify(data) });
                        if (res.ok) {
                            alert('Mensagem enviada com sucesso! Logo entrarei em contato.');
                        } else {
                            alert('Houve um erro no envio, mas a tentativa foi registrada.');
                        }
                        (e.target as HTMLFormElement).reset();
                    }}>
                        <div className="flex flex-col gap-4">
                            <input name="name" required type="text" placeholder="Seu Nome" className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-yellow transition-colors" />
                            <input name="email" required type="email" placeholder="Seu Email" className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-yellow transition-colors" />
                            <textarea name="message" required placeholder="Mensagem" rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-yellow transition-colors"></textarea>
                            <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:scale-[1.02] transition-transform">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                    
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 w-full sm:w-auto justify-center">
                        <a href="mailto:hh.selvino@gmail.com" className="px-6 py-3 md:px-8 md:py-4 bg-brand-yellow text-brand-dark rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 md:gap-3" style={{ boxShadow: '0 0 30px var(--brand-accent-glow)' }}>
                            hh.selvino@gmail.com
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <a href="https://wa.me/5511975976122" target="_blank" className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-white hover:text-brand-dark transition-all flex justify-center items-center gap-3">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            11 97597-6122
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
