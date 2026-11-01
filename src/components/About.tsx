import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F7F3EC] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Real Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243C]/5 border border-[#10243C]/15 text-xs font-bold text-[#B69A6B] uppercase tracking-wider font-heading">
              <span>Sobre a ARC Compliance & Advisory</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243C] leading-tight">
              Transformando regras complexas em{' '}
              <span className="text-[#B69A6B]">práticas simples e seguras.</span>
            </h2>

            <p className="text-base text-[#414850] font-normal leading-relaxed">
              Fundada para desmistificar o compliance corporativo, a <strong className="text-[#10243C] font-semibold">ARC Compliance & Advisory</strong> elimina o excesso de juridiquês e burocracia inútil. Desenvolvemos programas sob medida que protegem o negócio e respeitam o ritmo operacional da sua equipe.
            </p>

            <p className="text-sm text-[#414850] leading-relaxed">
              Não vendemos pastas de manuais para ficarem guardadas na gaveta. Nossas entregas são operacionais: código de conduta visual, canal de denúncias independente, matriz dinâmica de riscos e capacitações práticas que geram conscientização imediata.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FFFCF8] border border-[#E8DFD2] shadow-sm">
                <span className="font-heading text-lg font-bold text-[#B69A6B] block">Corpo Sênior</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mt-1 font-heading">
                  Atendimento Direto
                </span>
                <p className="text-[11px] text-[#414850] mt-0.5">
                  Projetos conduzidos diretamente por especialistas em integridade
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFCF8] border border-[#E8DFD2] shadow-sm">
                <span className="font-heading text-lg font-bold text-[#B69A6B] block">Prática Real</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mt-1 font-heading">
                  Sem Burocracia
                </span>
                <p className="text-[11px] text-[#414850] mt-0.5">
                  Processos integrados à rotina operacional diária da empresa
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10243C] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider hover:bg-[#162D4A] transition-all cursor-pointer shadow-lg font-heading"
              >
                <span>Agendar Conversa com um Consultor Sênior</span>
                <ArrowRight className="w-4 h-4 text-[#B69A6B]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Values & Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-[#FFFCF8] border border-[#E8DFD2] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#10243C] mb-1">
                  Blindagem da Alta Gestão
                </h3>
                <p className="text-xs text-[#414850] leading-relaxed">
                  Evitamos que a responsabilidade por falhas de colaboradores recaia de forma direta e pessoal sobre o patrimônio dos sócios e executivos.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFCF8] border border-[#E8DFD2] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#10243C] mb-1">
                  Aprovação em Due Diligence
                </h3>
                <p className="text-xs text-[#414850] leading-relaxed">
                  Garantimos que sua empresa passe com louvor nas checagens cadastrais de multinacionais, fundos de investimento e instituições financeiras.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFCF8] border border-[#E8DFD2] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#10243C] mb-1">
                  Cultura de Integridade & Ambiente Saudável
                </h3>
                <p className="text-xs text-[#414850] leading-relaxed">
                  Redução drástica de conflitos trabalhistas, assédio e desvios éticos por meio de canais seguros e lideranças preparadas.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
