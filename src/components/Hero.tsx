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
    <section id="inicio" className="relative pt-28 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#10243C] w-full max-w-full">
      {/* Subtle, GPU-accelerated background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 sm:w-[500px] h-64 sm:h-[350px] bg-[#B69A6B]/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none transform-gpu max-w-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full max-w-full">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162D4A] border border-[#B69A6B]/30 text-[10px] sm:text-xs font-semibold text-[#B69A6B] uppercase tracking-widest mb-6 shadow-md max-w-full text-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B] shrink-0" />
          <span className="truncate sm:whitespace-normal">Consultoria em Compliance & Governança Corporativa</span>
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

        {/* Refined and objective "Sem burocracia" highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#162D4A]/70 border border-[#B69A6B]/30 text-xs text-[#E8DFD2] font-medium shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B]" />
          <span className="font-heading uppercase tracking-wider text-[11px] text-[#B69A6B] font-semibold">Sem burocracia</span>
        </motion.div>

      </div>
    </section>
  );
};
