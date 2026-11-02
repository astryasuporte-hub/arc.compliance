import React, { useState } from 'react';
import { Mail, Instagram, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const INSTAGRAM_URL = 'https://www.instagram.com/arc.compliance?xtok=MWo2cHlmdmwwcTVwdQ==';

  return (
    <footer className="bg-[#0B1A2C] text-[#F7F3EC] pt-16 pb-12 border-t border-[#B69A6B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Presentation with White Logo */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center">
              <img
                src="/public/assets/aistudio/arc-logo-white.png"
                alt="ARC Compliance & Advisory"
                className="h-12 w-auto object-contain filter drop-shadow"
              />
            </div>

            <p className="text-xs text-[#E8DFD2]/80 leading-relaxed max-w-md">
              Consultoria boutique especializada em governança corporativa, conformidade estratégica e gestão preventiva de riscos empresariais. Transformando integridade em valor tangível e segurança patrimonial para sua empresa.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#162D4A] hover:bg-[#1E3B61] border border-[#B69A6B]/30 text-xs font-semibold text-[#F7F3EC] hover:text-[#B69A6B] transition-all"
                title="Acessar Instagram da ARC"
              >
                <Instagram className="w-4 h-4 text-[#B69A6B]" />
                <span>@arc.compliance</span>
              </a>

              <a
                href="mailto:contato@arccompliance.com.br"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#B69A6B]/20 hover:bg-[#B69A6B]/30 border border-[#B69A6B]/40 text-xs font-semibold text-[#B69A6B] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contato@arccompliance.com.br</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#B69A6B]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DFD2]/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Nossas Soluções</a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a ARC</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>

          {/* Legal and Governance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#B69A6B]">
              Governança & Sigilo
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DFD2]/80">
              <li>
                <button
                  onClick={() => setLegalModal('privacidade')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('termos')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('lgpd')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Conformidade LGPD
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('anticorrupcao')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Lei nº 12.846/13
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8892B0]">
          <div>
            &copy; {new Date().getFullYear()} ARC Compliance & Advisory &bull; Todos os direitos reservados.
          </div>
          <div className="font-heading font-medium text-[#B69A6B] text-xs uppercase tracking-wider">
            Integridade hoje. Valor perene amanhã.
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#10243C] border border-[#B69A6B]/40 rounded-2xl max-w-lg w-full p-6 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading text-lg font-bold text-[#B69A6B] capitalize">
                {legalModal === 'privacidade' && 'Política de Privacidade & Sigilo'}
                {legalModal === 'termos' && 'Termos de Uso & Responsabilidade'}
                {legalModal === 'lgpd' && 'Tratamento de Dados & LGPD (Lei 13.709/18)'}
                {legalModal === 'anticorrupcao' && 'Diretrizes da Lei Anticorrupção (Lei 12.846/13)'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded text-[#8892B0] hover:text-white cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-[#E8DFD2] space-y-3 leading-relaxed max-h-60 overflow-y-auto">
              <p>
                A ARC Compliance & Advisory atua sob estritos termos de confidencialidade técnica e ética profissional em todas as consultorias prestadas.
              </p>
              <p>
                Os dados inseridos no site e solicitações são processados unicamente para atendimento direto a respeito de serviços de integridade, sem cessão a terceiros.
              </p>
            </div>
            <button
              onClick={() => setLegalModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#B69A6B] text-[#10243C] text-xs font-bold uppercase tracking-wider hover:bg-[#C8AE7D] cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
