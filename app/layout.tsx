import type {Metadata} from 'next';
import { Titillium_Web } from 'next/font/google';
import 'aos/dist/aos.css';
import './globals.css';
import { LangProvider } from './LangContext';

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-titillium-[--font-sans]',
});

export const metadata: Metadata = {
  title: 'Higor Selvino | Designer',
  description: 'Portfólio de Higor Selvino, designer gráfico em São Paulo.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-PT" className={`scroll-smooth ${titillium.className}`}>
      <body suppressHydrationWarning className="antialiased selection:bg-brand-yellow selection:text-black tracking-wide">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
