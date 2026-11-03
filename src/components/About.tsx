import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onOpenContact?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F7F3EC] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Real Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              A <strong className="text-[#10243C] font-semibold">ARC Compliance & Advisory</strong> é uma consultoria voltada ao desenvolvimento e fortalecimento de práticas de ética, governança e integridade corporativa. Nosso propósito é auxiliar organizações na construção de ambientes mais transparentes e seguros.
            </p>

            <p className="text-sm text-[#414850] leading-relaxed">
              Atuamos com soluções sob medida, adequadas ao porte, à realidade operacional e aos riscos de cada negócio. Não vendemos manuais engessados para ficarem guardados na gaveta: desenvolvemos códigos de conduta claros, políticas aplicáveis e capacitações práticas.
            </p>

            <motion.div
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
              className="p-5 rounded-2xl bg-[#FFFCF8] border border-[#E8DFD2] hover:border-[#B69A6B]/60 hover:shadow-xl hover:shadow-[#B69A6B]/10 transition-all flex items-start gap-3.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#10243C] group-hover:bg-[#162D4A] text-[#B69A6B] flex items-center justify-center shrink-0 transition-colors shadow-sm mt-0.5">
                <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="font-heading text-sm font-bold text-[#10243C] group-hover:text-[#B69A6B] transition-colors block">
                  Adequação à Realidade Operacional
                </span>
                <p className="text-xs text-[#414850] mt-1 leading-relaxed">
                  Estruturamos programas objetivos que preservam o ritmo das equipes e respeitam o cotidiano da sua organização.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Values & Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-5"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
              className="p-6 rounded-2xl bg-[#FFFCF8] border border-[#E8DFD2] hover:border-[#B69A6B]/60 hover:shadow-xl hover:shadow-[#B69A6B]/15 transition-all flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center shrink-0 group-hover:bg-[#162D4A] transition-colors shadow-sm">
                <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#10243C] mb-1 group-hover:text-[#B69A6B] transition-colors">
                  Blindagem da Alta Gestão
                </h3>
                <p className="text-xs text-[#414850] leading-relaxed">
                  Protegemos a tomada de decisão de sócios, diretores e administradores, estabelecendo diretrizes formais que delimitam responsabilidades e preservam o patrimônio da empresa.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
              className="p-6 rounded-2xl bg-[#FFFCF8] border border-[#E8DFD2] hover:border-[#B69A6B]/60 hover:shadow-xl hover:shadow-[#B69A6B]/15 transition-all flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center shrink-0 group-hover:bg-[#162D4A] transition-colors shadow-sm">
                <Award className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#10243C] mb-1 group-hover:text-[#B69A6B] transition-colors">
                  Cultura de Integridade & Ambiente Saudável
                </h3>
                <p className="text-xs text-[#414850] leading-relaxed">
                  Redução de riscos de conduta e conflitos internos por meio de normas éticas acessíveis, comunicação transparente e lideranças preparadas para orientar suas equipes.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
