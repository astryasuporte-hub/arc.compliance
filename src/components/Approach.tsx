import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layers, FileCheck, Users, Eye, Check } from 'lucide-react';

interface PhaseDetail {
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  activities: string[];
  deliverable: string;
  icon: React.ElementType;
}

const PHASES: PhaseDetail[] = [
  {
    num: '01',
    title: 'Diagnóstico & Imersão',
    shortDesc: 'Entendimento profundo do contexto e identificação de riscos.',
    fullDesc: 'Imersão consultiva com os sócios e lideranças para mapear processos internos, fluxos operacionais e vulnerabilidades específicas do setor.',
    activities: [
      'Entrevistas estratégicas com C-Level e lideranças-chave',
      'Análise documental preventiva de contratos e fluxos sensíveis',
      'Mapeamento de riscos e conformidade regulatória',
    ],
    deliverable: 'Relatório Executivo de Maturidade & Matriz de Vulnerabilidades',
    icon: Shield,
  },
  {
    num: '02',
    title: 'Planejamento Estratégico',
    shortDesc: 'Definição de prioridades e roadmap personalizado.',
    fullDesc: 'Hierarquização dos riscos por severidade e impacto no negócio, estruturando um plano escalonado que proteja a empresa sem travar as operações.',
    activities: [
      'Matriz de priorização de riscos operacionais e reputacionais',
      'Cronograma objetivo de implementação em 30, 60 e 90 dias',
      'Alinhamento e validação direta com os fundadores e diretoria',
    ],
    deliverable: 'Plano Diretor de Integridade & Cronograma de Implantação',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Estruturação & Políticas',
    shortDesc: 'Desenvolvimento das normas e procedimentos operacionais.',
    fullDesc: 'Elaboração técnica de políticas sob medida, Código de Ética e Conduta objetivo e procedimentos claros de governança para as equipes.',
    activities: [
      'Redação personalizada de manuais e políticas operacionais',
      'Estruturação de diretrizes de conduta e resolução de conflitos',
      'Revisão e blindagem de cláusulas contratuais estratégicas',
    ],
    deliverable: 'Código de Conduta, Manuais Operacionais e Políticas Internas',
    icon: FileCheck,
  },
  {
    num: '04',
    title: 'Capacitação & Cultura',
    shortDesc: 'Engajamento das equipes com foco em dilemas reais.',
    fullDesc: 'Disseminação da cultura de integridade por meio de workshops práticos e dinâmicos para a média liderança e áreas sensíveis da empresa.',
    activities: [
      'Workshops executivos para a liderança e áreas sensíveis (Compras, Comercial, RH)',
      'Orientações práticas de conduta e tomada de decisão ética',
      'Emissão de relatórios e certificados corporativos de conclusão',
    ],
    deliverable: 'Certificados Corporativos & Relatório de Adesão',
    icon: Users,
  },
  {
    num: '05',
    title: 'Gestão Contínua',
    shortDesc: 'Acompanhamento preventivo e revisões periódicas.',
    fullDesc: 'Supervisão contínua da eficácia dos controles, apoio técnico às lideranças e atualização diante de novas exigências de mercado.',
    activities: [
      'Revisões periódicas nos processos de compras e fluxos internos',
      'Apoio consultivo técnico contínuo para suporte aos gestores',
      'Atualizações preventivas sobre tendências e boas práticas',
    ],
    deliverable: 'Painel Periódico de Integridade & Pareceres Técnicos',
    icon: Eye,
  },
];

export const Approach: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = PHASES[activePhaseIndex];
  const IconComp = activePhase.icon;

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-[#F7F3EC] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243C]/5 border border-[#10243C]/15 text-xs font-bold text-[#B69A6B] uppercase tracking-wider mb-4 font-heading">
            <span>Metodologia Comprovada</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243C] tracking-tight mb-5 leading-tight">
            Da análise à implementação com{' '}
            <span className="text-[#B69A6B]">agilidade e rigor técnico.</span>
          </h2>

          <p className="text-base text-[#414850] font-normal leading-relaxed">
            Metodologia em 5 etapas progressivas desenhada para gerar segurança jurídica sem gerar atrito nas vendas e na rotina operacional.
          </p>
        </div>

        {/* 5-Step Stepper Bar */}
        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#E8DFD2] z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {PHASES.map((p, idx) => {
              const isActive = idx === activePhaseIndex;
              return (
                <button
                  key={p.num}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-[#10243C] text-white border-[#B69A6B] shadow-xl'
                      : 'bg-[#FFFCF8] text-[#10243C] border-[#E8DFD2] hover:border-[#B69A6B]/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#B69A6B]' : 'text-[#8892B0]'
                    }`}>
                      {p.num}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#B69A6B]' : 'bg-[#E8DFD2]'
                    }`} />
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base leading-tight mb-1">
                    {p.title}
                  </div>
                  <div className={`text-[11px] line-clamp-2 ${
                    isActive ? 'text-[#E8DFD2]/80' : 'text-[#414850]'
                  }`}>
                    {p.shortDesc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFFCF8] rounded-2xl p-8 sm:p-10 border border-[#E8DFD2] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#10243C] text-[#B69A6B] flex items-center justify-center shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A6B] block">
                    Etapa {activePhase.num}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#10243C]">
                    {activePhase.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#414850] leading-relaxed">
                {activePhase.fullDesc}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10243C] block font-heading">
                  Atividades Principais:
                </span>
                {activePhase.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#414850]">
                    <Check className="w-4 h-4 text-[#B69A6B] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F7F3EC] p-6 rounded-xl border border-[#E8DFD2] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A6B] block font-heading">
                Entrega Formal Desta Etapa:
              </span>
              <div className="font-heading text-base sm:text-lg font-bold text-[#10243C]">
                {activePhase.deliverable}
              </div>
              <p className="text-xs text-[#414850] leading-relaxed">
                Documentação assinada por consultor especialista, pronta para apresentação a conselhos, sócios e grandes parceiros comerciais.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
