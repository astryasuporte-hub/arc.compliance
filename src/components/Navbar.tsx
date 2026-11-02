import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified and objective navigation per user request
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Sobre a ARC', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const INSTAGRAM_URL = 'https://www.instagram.com/arc.compliance?xtok=MWo2cHlmdmwwcTVwdQ==';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#10243C]/95 backdrop-blur-md border-b border-[#B69A6B]/20 shadow-xl py-3'
          : 'bg-[#10243C]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo with White Letters & Gold Ribbon */}
        <a href="#inicio" className="group flex items-center shrink-0">
          <img
            src="/assets/aistudio/arc-logo-white.png"
            alt="ARC Compliance & Advisory"
            width={160}
            height={44}
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              // Fallback for different host setups
              const target = e.currentTarget;
              if (!target.src.includes('/public/assets/')) {
                target.src = '/public/assets/aistudio/arc-logo-white.png';
              }
            }}
            className="h-9 sm:h-11 w-auto object-contain filter drop-shadow transition-transform duration-200 group-hover:scale-102"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-medium tracking-wider text-[#E8DFD2]/90 hover:text-[#B69A6B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B69A6B] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Social */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* Instagram link */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#162D4A] border border-[#B69A6B]/25 text-[#E8DFD2] hover:text-[#B69A6B] hover:border-[#B69A6B] transition-all"
            title="Siga a ARC no Instagram"
            aria-label="Instagram da ARC Compliance"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Clean 'Entrar em Contato' CTA */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#10243C] bg-[#B69A6B] hover:bg-[#C8AE7D] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#B69A6B]/20 cursor-pointer whitespace-nowrap"
          >
            <span>Entrar em Contato</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#B69A6B] transition-colors cursor-pointer"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10243C] border-b border-[#B69A6B]/25 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wide text-[#F7F3EC] hover:text-[#B69A6B] transition-colors py-2.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3.5 rounded-xl bg-[#B69A6B] text-[#10243C] text-xs font-bold uppercase tracking-wider text-center mt-2 cursor-pointer shadow-md"
          >
            Entrar em Contato
          </button>
        </div>
      )}
    </header>
  );
};
