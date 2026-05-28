'use client';
import { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import { useLang } from '@/app/LangContext';

interface ProjectLayoutProps {
  children: ReactNode;
  brandColor: string; // e.g., '#00FFA3'
  brandClass: string; // e.g., 'text-brand-green'
  bgGlowClass?: string; // e.g., 'bg-brand-green/5'
  footerThemeClass?: string; // e.g., 'text-brand-green/5'
}

export default function ProjectLayout({ children, brandColor, brandClass, bgGlowClass = 'bg-brand-yellow/5', footerThemeClass = 'text-brand-yellow/5' }: ProjectLayoutProps) {
  const { lang, setLang } = useLang();
  const [showScroll, setShowScroll] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [cursorStyles, setCursorStyles] = useState({ left: '-100px', top: '-100px', effect: '' });

  useEffect(() => {
    import('aos').then((AOS) => AOS.init({ once: true, offset: 50, duration: 800 }));

    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);

      // Parallax logic for .project-img-parallax
      const parallaxImages = document.querySelectorAll('.project-img-parallax') as NodeListOf<HTMLElement>;
      parallaxImages.forEach(img => {
          const rect = img.parentElement?.getBoundingClientRect();
          if(rect) {
            const imgCenter = rect.top + (rect.height / 2);
            const windowCenter = window.innerHeight / 2;
            const speed = parseFloat(img.getAttribute('data-speed') || '-0.05');
            const yPos = (windowCenter - imgCenter) * speed;
            img.style.transform = `translateY(${yPos}px) scale(1.15)`;
          }
      });
    };
    window.addEventListener('scroll', handleScroll);

    // Custom cursor logic
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setCursorStyles(prev => ({ ...prev, left: `${e.clientX}px`, top: `${e.clientY}px` }));
      };
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
     // Apply dynamic hover effects for cursor by adding global listeners
     const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const closestView = target.closest('.cursor-view');
        const closestHover = target.closest('.cursor-hover, a, button');
        const closestFlip = target.closest('.cursor-flip');
        
        if (closestView) {
            setCursorStyles(prev => ({ ...prev, effect: 'view-effect hover-effect' }));
        } else if (closestFlip) {
            setCursorStyles(prev => ({ ...prev, effect: 'flip-effect hover-effect' }));
        } else if (closestHover) {
            setCursorStyles(prev => ({ ...prev, effect: 'hover-effect' }));
        } else {
            setCursorStyles(prev => ({ ...prev, effect: '' }));
        }
     };

     // Handle lightbox clicks
     const handleClick = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         const viewEl = target.closest('.cursor-view');
         if (viewEl) {
             e.preventDefault();
             const img = viewEl.querySelector('img');
             if (img) {
                 setLightboxSrc(img.src);
                 setLightboxOpen(true);
                 document.body.style.overflow = 'hidden';
             }
         }
     };

     window.addEventListener('mouseover', handleMouseOver);
     window.addEventListener('click', handleClick);
     
     return () => {
         window.removeEventListener('mouseover', handleMouseOver);
         window.removeEventListener('click', handleClick);
     }
  }, []);

  const closeLightbox = () => {
      setLightboxOpen(false);
      setTimeout(() => {
          setLightboxSrc('');
          document.body.style.overflow = '';
      }, 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="noise-bg"></div>

      <div className={`fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[150px] pointer-events-none z-[-1] ${bgGlowClass}`}></div>
      <div className={`fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none z-[-1] ${bgGlowClass}`}></div>

      <div 
        id="custom-cursor" 
        className={`hidden md:block ${cursorStyles.effect}`}
        style={{ left: cursorStyles.left, top: cursorStyles.top, backgroundColor: brandColor, borderColor: brandColor }}
      ></div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex justify-center items-center backdrop-blur-md transition-opacity duration-300 pointer-events-auto opacity-100" onClick={closeLightbox}>
            <button className={`absolute top-4 right-4 md:top-10 md:right-10 text-white/50 hover:${brandClass} transition-colors z-50 bg-black/50 md:bg-transparent rounded-full p-2 md:p-0`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img src={lightboxSrc} alt="Expanded View" className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl transform scale-100 transition-transform duration-300" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <button onClick={scrollToTop} className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 text-black p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white cursor-hover ${showScroll ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`} style={{ backgroundColor: brandColor }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md px-4 sm:px-6 md:px-12 py-4 md:py-5 flex justify-between items-center text-white border-b border-white/10 transition-all duration-300">
          <div className="flex-1 flex justify-start">
              <Link href="/" className={`flex items-center gap-2 font-display uppercase text-[10px] sm:text-xs md:text-sm tracking-widest font-bold hover:${brandClass} transition-colors cursor-hover`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  <span className="hidden sm:inline">{lang === 'pt' ? 'Voltar ao Portfólio' : 'Back to Portfolio'}</span>
                  <span className="sm:hidden">{lang === 'pt' ? 'Voltar' : 'Back'}</span>
              </Link>
          </div>
          
          <div className="flex-1 flex justify-end items-center">
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-bold font-display tracking-widest">
                  <button onClick={() => setLang('pt')} className={`${lang === 'pt' ? brandClass : 'text-white/50'} transition-colors cursor-hover`}>PT</button>
                  <span className="text-white/20">/</span>
                  <button onClick={() => setLang('en')} className={`${lang === 'en' ? brandClass : 'text-white/50'} transition-colors cursor-hover`}>EN</button>
              </div>
          </div>
      </nav>

      {children}

      <footer id="contact" className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mt-16 md:mt-20 reveal-site pb-12">
          <div className="bg-brand-card border border-white/10 rounded-[32px] p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[50vh] md:min-h-[60vh] cursor-hover relative overflow-hidden shadow-2xl">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute -right-16 -bottom-16 md:-right-32 md:-bottom-32 animate-spin-slow pointer-events-none z-0 ${footerThemeClass}`}>
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
              </svg>

              <div className="text-center relative z-10 flex flex-col items-center">
                  <h2 className={`text-4xl sm:text-[8vw] md:text-[6vw] lg:text-[8vw] font-display font-black text-white uppercase leading-[1] tracking-wider mb-8 md:mb-12 hover:${brandClass} transition-colors duration-500 break-words w-full text-shadow-hard`}>
                      {lang === 'pt' ? 'ENTRE EM CONTATO' : 'REACH OUT'}
                  </h2>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-8 w-full sm:w-auto justify-center">
                      <a href="mailto:hh.selvino@gmail.com" className={`px-6 py-3 md:px-8 md:py-4 text-black rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 md:gap-3 shadow-xl hover:text-brand-dark`} style={{ backgroundColor: brandColor }}>
                          hh.selvino@gmail.com
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </a>
                      <a href="https://wa.me/5511975976122" target="_blank" className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-white hover:text-brand-dark transition-all flex justify-center items-center gap-3">
                          11 97597-6122
                      </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8 md:mt-12 justify-center">
                      <a href="https://www.linkedin.com/in/higor-selvino-de-oliveira-124011170/" target="_blank" className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-white/20 hover:border-white transition-all bg-white/5 backdrop-blur-sm cursor-hover font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                          LinkedIn
                      </a>
                      <a href="https://instagram.com/higor.selvino" target="_blank" className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-white/20 hover:border-white transition-all bg-white/5 backdrop-blur-sm cursor-hover font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                          Instagram
                      </a>
                  </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center w-full mt-20 md:mt-32 border-t border-white/10 pt-6 md:pt-8 relative z-10 text-white/50 font-medium text-xs md:text-sm gap-4 md:gap-0">
                  <p className="text-center md:text-left order-2 md:order-1">{lang === 'pt' ? '© 2026 Todos os direitos reservados' : '© 2026 All rights reserved'}</p>
              </div>
          </div>
      </footer>
    </>
  );
}
