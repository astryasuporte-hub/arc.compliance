import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, Award, ArrowRight, Lock, CheckCircle2, FileText } from 'lucide-react';

interface DifferentiatorsSectionProps {
  onOpenContact: () => void;
}

export const DifferentiatorsSection: React.FC<DifferentiatorsSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EC] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug">
                Blindagem Decisória dos Sócios
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Protegemos o patrimônio pessoal de administradores e fundadores, estabelecendo defesas jurídicas sólidas perante leis anticorrupção.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading">
              Segurança Patrimonial &bull; C-Level
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug">
                Habilitação em Grandes Contas
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Adequamos sua empresa aos requisitos mais exigentes de Due Diligence e homologação de fornecedores de multinacionais.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading">
              Aceleração de Vendas B2B
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug">
                Praticidade Sem Burocracia
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Substituímos manuais teóricos e engessados por processos objetivos e ferramentas que a equipe realmente adota com facilidade.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading">
              Aplicação Real no Cotidiano
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#FFFCF8] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#10243C] mb-2 leading-snug">
                Atendimento Sênior Direto
              </h3>
              <p className="text-xs text-[#414850] leading-relaxed">
                Seu projeto é liderado diretamente por consultores especialistas em governança e compliance, sem repasse para terceirizados juniores.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DFD2] text-[11px] font-semibold text-[#B69A6B] mt-4 font-heading">
              Expertise & Rigor Técnico
            </div>
          </motion.div>

        </div>

        {/* Institutional Assurance Banner (Authentic Commitments, No Fake Numbers) */}
        <div className="bg-[#10243C] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-[#B69A6B]/20">
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
              Metodologia estruturada para proteger o patrimônio dos sócios e gerar valor duradouro.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="p-5 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5">
                Segurança Jurídica
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Alinhamento às diretrizes da CGU, Lei 12.846/13 e padrões de integridade aceitos por órgãos reguladores.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5">
                Sigilo Absoluto
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Todas as análises, reuniões e documentos são resguardados sob Termo de Confidencialidade (NDA) formal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5">
                Foco em Negócios
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Compliance desenhado como acelerador de vendas B2B e credenciamento em concorrências internacionais.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#162D4A] border border-white/10 hover:border-[#B69A6B]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#B69A6B]/20 text-[#B69A6B] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-white mb-1.5">
                Adesão Prática
              </h4>
              <p className="text-xs text-[#E8DFD2]/80 leading-relaxed">
                Processos objetivos e materiais didáticos que eliminam burocracia e integram-se ao cotidiano dos times.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <span className="text-xs text-[#E8DFD2]/80 text-center sm:text-left">
              Pronto para elevar os padrões de governança e integridade da sua organização?
            </span>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl bg-[#B69A6B] text-[#10243C] text-xs font-bold uppercase tracking-wider hover:bg-[#C8AE7D] transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-lg font-heading"
            >
              <span>Falar com Nossos Especialistas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

