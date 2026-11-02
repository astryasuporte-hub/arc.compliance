import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Award, ArrowRight, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface DifferentiatorsSectionProps {
  onOpenContact: () => void;
}

export const DifferentiatorsSection: React.FC<DifferentiatorsSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EC] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Subtle Scroll Entry Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243C]/5 border border-[#10243C]/15 text-xs font-bold text-[#B69A6B] uppercase tracking-wider mb-4 font-heading">
            <Award className="w-3.5 h-3.5 text-[#B69A6B]" />
            <span>Diferenciais Estratégicos ARC</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243C] tracking-tight mb-5 leading-tight">
            Por que empresas escolhem a{' '}
            <span className="text-[#B69A6B]">ARC Compliance & Advisory</span>?
          </h2>

          <p className="text-base text-[#414850] font-normal leading-relaxed">
            Unimos visão de negócios, rigor técnico e agilidade para transformar governança corporativa em vantagem competitiva.
          </p>
        </motion.div>

        {/* 3 Cards Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
            whileTap={{ scale: 0.99 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-2xl hover:shadow-[#B69A6B]/15 hover:border-[#B69A6B]/60 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5 group-hover:bg-[#162D4A] transition-colors shadow-sm">
                <Target className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug group-hover:text-[#B69A6B] transition-colors">
                Soluções Sob Medida
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Desenvolvemos programas personalizados que respeitam a estrutura, o porte e a realidade operacional da sua organização.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading flex items-center justify-between">
              <span>Adequação Real ao Negócio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B]/50 group-hover:bg-[#B69A6B] group-hover:scale-150 transition-all" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
            whileTap={{ scale: 0.99 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-2xl hover:shadow-[#B69A6B]/15 hover:border-[#B69A6B]/60 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5 group-hover:bg-[#162D4A] transition-colors shadow-sm">
                <Zap className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug group-hover:text-[#B69A6B] transition-colors">
                Praticidade Sem Burocracia
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Substituímos manuais teóricos e engessados por processos objetivos e ferramentas que a equipe realmente adota com facilidade.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading flex items-center justify-between">
              <span>Aplicação Real no Cotidiano</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B]/50 group-hover:bg-[#B69A6B] group-hover:scale-150 transition-all" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.16 }}
            whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
            whileTap={{ scale: 0.99 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-2xl hover:shadow-[#B69A6B]/15 hover:border-[#B69A6B]/60 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5 group-hover:bg-[#162D4A] transition-colors shadow-sm">
                <Award className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug group-hover:text-[#B69A6B] transition-colors">
                Atendimento Sênior Direto
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Seu projeto é liderado diretamente por consultores especialistas em governança e compliance.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading flex items-center justify-between">
              <span>Expertise & Rigor Técnico</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6B]/50 group-hover:bg-[#B69A6B] group-hover:scale-150 transition-all" />
            </div>
          </motion.div>

        </div>

        {/* Institutional Assurance Banner with Scroll Entry Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#10243C] rounded-3xl p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-[#B69A6B]/20"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B69A6B]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 mb-8 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B69A6B] block font-heading mb-1">
                Garantia de Excelência & Confiança
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Pilares Institucionais da Prática ARC
              </h3>
            </div>
            <span className="text-xs text-[#E8DFD2]/70 max-w-sm">
              Metodologia estruturada para proteger o negócio e gerar valor duradouro.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/50 hover:shadow-xl hover:shadow-[#B69A6B]/10 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4 group-hover:bg-[#B69A6B] group-hover:text-[#10243C] transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5 group-hover:text-[#B69A6B] transition-colors">
                Conformidade Legal
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Alinhamento às diretrizes da CGU, Lei 12.846/13 e padrões de integridade aceitos por órgãos reguladores.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/50 hover:shadow-xl hover:shadow-[#B69A6B]/10 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4 group-hover:bg-[#B69A6B] group-hover:text-[#10243C] transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5 group-hover:text-[#B69A6B] transition-colors">
                Sigilo Absoluto
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Todas as análises, reuniões e documentos são resguardados sob Termo de Confidencialidade (NDA) formal.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/50 hover:shadow-xl hover:shadow-[#B69A6B]/10 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4 group-hover:bg-[#B69A6B] group-hover:text-[#10243C] transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5 group-hover:text-[#B69A6B] transition-colors">
                Adesão Prática
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Processos objetivos e materiais didáticos que eliminam burocracia e integram-se ao cotidiano dos times.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 w-full max-w-full">
            <span className="text-xs text-[#E8DFD2]/80 text-center sm:text-left">
              Pronto para elevar os padrões de governança e integridade da sua organização?
            </span>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B69A6B] text-[#10243C] text-xs font-bold uppercase tracking-wider hover:bg-[#C8AE7D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg font-heading text-center"
            >
              <span>Falar com Nossos Especialistas</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
