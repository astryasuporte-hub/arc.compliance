import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';

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
    { label: 'Sobre a ARC', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const INSTAGRAM_URL = 'https://www.instagram.com/arc.compliance?xtok=MWo2cHlmdmwwcTVwdQ==';
  const LINKEDIN_URL = 'https://www.linkedin.com/company/arc-compliance/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
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

        {/* Desktop Social links and CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#162D4A] border border-[#B69A6B]/25 text-[#E8DFD2] hover:text-[#B69A6B] hover:border-[#B69A6B] transition-all"
              title="Siga a ARC no LinkedIn"
              aria-label="LinkedIn da ARC Compliance"
            >
              <Linkedin className="w-4 h-4" />
            </a>

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
          </div>

          {/* Clean 'Entrar em Contato' CTA */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#10243C] bg-[#B69A6B] hover:bg-[#C8AE7D] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#B69A6B]/20 cursor-pointer whitespace-nowrap"
          >
            <span>Entrar em Contato</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu hamburger with 44px minimum touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-white hover:text-[#B69A6B] active:scale-95 transition-all cursor-pointer rounded-lg focus:outline-none"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#B69A6B]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            onClick={() => setMobileMenuOpen(false)} 
            className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-xs z-40 lg:hidden" 
          />
          <div className="relative z-50 lg:hidden bg-[#10243C] border-b border-[#B69A6B]/25 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium tracking-wide text-[#F7F3EC] active:text-[#B69A6B] hover:text-[#B69A6B] transition-colors py-3 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#B69A6B] opacity-60 text-xs">&rarr;</span>
              </a>
            ))}

            {/* Social links row in mobile drawer */}
            <div className="flex items-center justify-center gap-4 py-2 border-b border-white/5">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#E8DFD2] hover:text-[#B69A6B] py-1"
              >
                <Linkedin className="w-4 h-4 text-[#B69A6B]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#E8DFD2] hover:text-[#B69A6B] py-1"
              >
                <Instagram className="w-4 h-4 text-[#B69A6B]" />
                <span>Instagram</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full min-h-[48px] py-3.5 rounded-xl bg-[#B69A6B] active:bg-[#C8AE7D] text-[#10243C] text-xs sm:text-sm font-bold uppercase tracking-wider text-center mt-2 cursor-pointer shadow-md font-heading"
            >
              Entrar em Contato
            </button>
          </div>
        </>
      )}
    </header>
  );
};
