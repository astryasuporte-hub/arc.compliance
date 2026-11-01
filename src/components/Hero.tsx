import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, FileCheck } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToSolutions = () => {
    const el = document.getElementById('solucoes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#10243C]">
      {/* Background ambient lighting matching brand colors */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#B69A6B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#162D4A]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Modern, Objective Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Elegant Sub-Header / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162D4A] border border-[#B69A6B]/30 text-xs font-semibold text-[#B69A6B] uppercase tracking-widest mb-6 w-fit shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B]" />
              <span>Consultoria em Compliance & Governança Corporativa</span>
            </div>

            {/* Inspiring, Modern & Objective Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] text-white font-bold leading-[1.14] tracking-tight mb-6">
              Integridade estratégica que{' '}
              <span className="text-[#B69A6B]">blinda sua empresa</span>{' '}
              e impulsiona novos negócios.
            </h1>

            {/* Objective Narrative */}
            <p className="text-base sm:text-lg text-[#E8DFD2]/90 font-normal leading-relaxed mb-8 max-w-2xl">
              Desenvolvemos programas de compliance práticos, eficientes e sem burocracia inútil. Protegemos a tomada de decisão da diretoria, mitigamos riscos legais e credenciamos sua organização para aprovação imediata em concorrências e auditorias de grandes clientes.
            </p>

            {/* Clean CTAs: 'Entrar em Contato' & 'Conhecer Soluções' */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#B69A6B] text-[#10243C] text-xs font-bold uppercase tracking-wider hover:bg-[#C8AE7D] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#B69A6B]/25 cursor-pointer"
              >
                <span>Entrar em Contato</span>
                <ArrowRight className="w-4 h-4 text-[#10243C]" />
              </button>

              <button
                onClick={scrollToSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#162D4A] border border-[#B69A6B]/40 text-[#F7F3EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3B61] hover:border-[#B69A6B] transition-all cursor-pointer"
              >
                <span>Conhecer Nossas Soluções</span>
              </button>
            </div>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD2]/15">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B69A6B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block font-heading">
                    Zero Burocracia
                  </span>
                  <span className="text-[11px] text-[#A8B8CD] leading-snug">
                    Políticas aplicáveis ao dia a dia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B69A6B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block font-heading">
                    Blindagem Decisória
                  </span>
                  <span className="text-[11px] text-[#A8B8CD] leading-snug">
                    Segurança patrimonial para sócios
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B69A6B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block font-heading">
                    Aprovação B2B
                  </span>
                  <span className="text-[11px] text-[#A8B8CD] leading-snug">
                    Diferencial em Due Diligence
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Strategic Pillars & Deliverables Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-[#FFFCF8] rounded-2xl p-7 sm:p-8 shadow-2xl border border-[#E8DFD2] overflow-hidden text-[#10243C]">
              
              {/* Brand Header inside Card */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD2]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#B69A6B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10243C] font-heading">
                    Excelência em Compliance
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#10243C] text-[#F7F3EC]">
                  Padrão ARC
                </span>
              </div>

              {/* Institutional Assurance Pillars (Authentic & Objective, Zero Fake Numbers) */}
              <div className="grid grid-cols-2 gap-3.5 py-5 border-b border-[#E8DFD2]">
                <div className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B69A6B]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#10243C] font-heading">
                      Lei 12.846/13
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#10243C] block leading-tight font-heading">
                    Conformidade Legal
                  </span>
                  <span className="text-[11px] text-[#414850] block mt-1 leading-snug">
                    Blindagem contra sanções e responsabilização objetiva
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Lock className="w-4 h-4 text-[#B69A6B]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A6B] font-heading">
                      Sigilo Estrito
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#10243C] block leading-tight font-heading">
                    Proteção sob NDA
                  </span>
                  <span className="text-[11px] text-[#414850] block mt-1 leading-snug">
                    Termo formal de confidencialidade técnica
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B69A6B]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A6B] font-heading">
                      Due Diligence
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#10243C] block leading-tight font-heading">
                    Homologação B2B
                  </span>
                  <span className="text-[11px] text-[#414850] block mt-1 leading-snug">
                    Aprovação facilitada perante grandes clientes
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FileCheck className="w-4 h-4 text-[#B69A6B]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#10243C] font-heading">
                      Corpo Técnico
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#10243C] block leading-tight font-heading">
                    Consultoria Sênior
                  </span>
                  <span className="text-[11px] text-[#414850] block mt-1 leading-snug">
                    Condução direta por especialistas em integridade
                  </span>
                </div>
              </div>

              {/* Core Corporate Deliverables */}
              <div className="pt-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#414850] mb-2">
                  Atuação Estratégica Completa
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F7F3EC] transition-colors">
                  <FileCheck className="w-4 h-4 text-[#B69A6B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#10243C]">
                      Código de Ética & Políticas Operacionais
                    </h4>
                    <p className="text-[11px] text-[#414850] leading-snug">
                      Diretrizes claras e manuais objetivos adaptados à cultura da empresa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F7F3EC] transition-colors">
                  <Lock className="w-4 h-4 text-[#B69A6B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#10243C]">
                      Canal de Denúncias Independente & Sigiloso
                    </h4>
                    <p className="text-[11px] text-[#414850] leading-snug">
                      Recepção e triagem imparcial de relatos com proteção integral ao denunciante.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3.5 rounded-xl bg-[#10243C] hover:bg-[#162D4A] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Solicitar Proposta para Minha Empresa</span>
                    <ArrowRight className="w-4 h-4 text-[#B69A6B]" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
