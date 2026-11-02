import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  GraduationCap, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution: (solutionName: string) => void;
}

interface SolutionItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'diagnostico',
    icon: Search,
    title: 'Diagnóstico de Integridade & Compliance',
    category: 'Diagnóstico Inicial',
    description: 'Avaliação consultiva das práticas existentes na sua organização para identificar oportunidades prioritárias de melhoria e fortalecimento da governança.',
    highlights: [
      'Questionário estruturado de conformidade',
      'Análise dos principais fluxos e rotinas da empresa',
      'Identificação de lacunas e prioridades de ajuste',
      'Plano de Ação (PDA) com recomendações práticas',
    ],
  },
  {
    id: 'codigo-conduta',
    icon: FileText,
    title: 'Código de Ética e Conduta Personalizado',
    category: 'Diretrizes Formais',
    description: 'Elaboração de diretrizes claras e compreensíveis, alinhadas à cultura e à realidade operacional do negócio, orientando o dia a dia da equipe.',
    highlights: [
      'Diretrizes sob medida para a identidade da empresa',
      'Comunicação acessível sem juridiquês complexo',
      'Princípios de conduta para sócios, lideranças e colaboradores',
      'Orientações práticas para implementação e engajamento',
    ],
  },
  {
    id: 'politicas-internas',
    icon: Layers,
    title: 'Políticas e Procedimentos Internos',
    category: 'Normas Operacionais',
    description: 'Estruturação de normas internas essenciais para orientar decisões de compras, relações comerciais, brindes e prevenção de conflitos de interesse.',
    highlights: [
      'Políticas adaptadas ao porte e às rotinas da empresa',
      'Definição de fluxos de aprovação e responsabilidades',
      'Prevenção de conflitos de interesse e desvios operacionais',
      'Material prático de consulta rápida para os colaboradores',
    ],
  },
  {
    id: 'gestao-riscos',
    icon: BarChart3,
    title: 'Gestão e Matriz de Riscos Corporativos',
    category: 'Governança & Prevenção',
    description: 'Mapeamento preventivo de vulnerabilidades operacionais e reputacionais, organizando prioridades para proteger a tomada de decisão da diretoria.',
    highlights: [
      'Matriz de riscos com critérios de probabilidade e impacto',
      'Classificação de riscos por ordem de criticidade',
      'Medidas preventivas para blindagem dos sócios e executivos',
      'Suporte técnico e metodológico para decisões estratégicas',
    ],
  },
  {
    id: 'treinamentos',
    icon: GraduationCap,
    title: 'Treinamentos Corporativos & Conscientização',
    category: 'Capacitação Prática',
    description: 'Workshops objetivos focados em dilemas reais do dia a dia, promovendo a compreensão e a assimilação das práticas éticas por toda a equipe.',
    highlights: [
      'Capacitação prática para lideranças e áreas-chave',
      'Estudos de caso e exemplos aplicados à rotina',
      'Material de apoio didático e dinâmico',
      'Relatório de participação e registro de aprendizagem',
    ],
  },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-[#FFFCF8] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243C]/5 border border-[#10243C]/15 text-xs font-bold text-[#B69A6B] uppercase tracking-wider mb-4 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A6B]" />
            <span>Nossas Soluções Corporativas</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243C] tracking-tight mb-5 leading-tight">
            Consultoria sob medida para as{' '}
            <span className="text-[#B69A6B]">reais necessidades</span> da sua empresa.
          </h2>

          <p className="text-base text-[#414850] font-normal leading-relaxed">
            Panorama das soluções que desenvolvemos para fortalecer a governança, a cultura ética e a segurança jurídica da sua organização.
          </p>
        </div>

        {/* Panoramic Grid (Clean, Simple, Without Prices or Modules) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8DFD2] shadow-sm hover:shadow-xl hover:border-[#B69A6B]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F3EC] group-hover:bg-[#10243C] text-[#B69A6B] group-hover:text-[#B69A6B] flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A6B] bg-[#F7F3EC] px-2.5 py-1 rounded-full border border-[#E8DFD2] font-heading">
                      {solution.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#10243C] mb-2.5 leading-snug group-hover:text-[#B69A6B] transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-xs text-[#414850] leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#E8DFD2]/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#10243C] block mb-2 font-heading">
                      O que está contemplado:
                    </span>
                    {solution.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#414850] leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A6B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8DFD2]/60 mt-auto">
                  <button
                    onClick={() => onSelectSolution(solution.title)}
                    className="w-full py-3 rounded-xl bg-[#F7F3EC] group-hover:bg-[#10243C] text-[#10243C] group-hover:text-[#F7F3EC] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer font-heading"
                  >
                    <span>Solicitar Proposta por E-mail</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B69A6B]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
