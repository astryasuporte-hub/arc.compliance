import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToSolutions = () => {
    const el = document.getElementById('solucoes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#10243C]">
      {/* Subtle, GPU-accelerated background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#B69A6B]/10 rounded-full blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162D4A] border border-[#B69A6B]/30 text-[11px] sm:text-xs font-semibold text-[#B69A6B] uppercase tracking-widest mb-6 shadow-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B]" />
          <span>Consultoria em Compliance & Governança Corporativa</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-bold leading-[1.15] tracking-tight mb-6 max-w-4xl mx-auto"
        >
          Governança sólida começa com{' '}
          <span className="text-[#B69A6B]">integridade.</span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-[#E8DFD2]/90 font-normal leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Oferecemos consultoria especializada em Compliance, ética e gestão de riscos, contribuindo para decisões mais responsáveis, processos estruturados e organizações mais preparadas.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#B69A6B] text-[#10243C] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#C8AE7D] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#B69A6B]/25 cursor-pointer font-heading"
          >
            <span>Entrar em Contato</span>
            <ArrowRight className="w-4 h-4 text-[#10243C]" />
          </button>

          <button
            onClick={scrollToSolutions}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#162D4A] border border-[#B69A6B]/40 text-[#F7F3EC] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#1E3B61] hover:border-[#B69A6B] transition-all cursor-pointer font-heading"
          >
            <span>Conhecer Nossas Soluções</span>
          </button>
        </motion.div>

        {/* 3 Core Value Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-[#E8DFD2]/15 max-w-4xl mx-auto text-left"
        >
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#162D4A]/50 border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-[#B69A6B] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block font-heading">
                Decisões Responsáveis
              </span>
              <span className="text-xs text-[#A8B8CD] leading-snug block mt-0.5">
                Segurança e respaldo estratégico para os administradores.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#162D4A]/50 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#B69A6B] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block font-heading">
                Processos Estruturados
              </span>
              <span className="text-xs text-[#A8B8CD] leading-snug block mt-0.5">
                Diretrizes claras, políticas aplicáveis e zero burocracia inútil.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#162D4A]/50 border border-white/5">
            <Award className="w-5 h-5 text-[#B69A6B] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block font-heading">
                Organizações Preparadas
              </span>
              <span className="text-xs text-[#A8B8CD] leading-snug block mt-0.5">
                Cultura de conformidade alinhada ao porte e rotina do negócio.
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
