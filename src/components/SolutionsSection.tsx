import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Search, 
  GraduationCap, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  Sparkles
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
    title: 'Diagnóstico & Auditoria de Integridade',
    category: 'Maturidade & Risco',
    description: 'Análise aprofundada da estrutura atual da sua empresa, identificando vulnerabilidades regulatórias e oportunidades de blindagem.',
    highlights: [
      'Mapeamento de riscos sob a Lei 12.846/13 e LGPD',
      'Benchmark setorial de maturidade de governança',
      'Roadmap prioritário de ações corretivas',
      'Relatório executivo para Sócios e Conselho',
    ],
  },
  {
    id: 'codigo-politicas',
    icon: FileText,
    title: 'Código de Conduta & Políticas Internas',
    category: 'Cultura & Diretrizes',
    description: 'Desenvolvimento de políticas operacionais claras, sem juridiquês excessivo, que os colaboradores realmente compreendem e aplicam.',
    highlights: [
      'Código de Ética personalizado e diagramado',
      'Política Anticorrupção e Relações Governamentais',
      'Políticas de Brindes, Conflito de Interesses e Compras',
      'Termos de responsabilidade e adesão formal',
    ],
  },
  {
    id: 'canal-denuncias',
    icon: Lock,
    title: 'Canal de Denúncias & Comitê de Ética',
    category: 'Segurança & Apuração',
    description: 'Estruturação de canal seguro e independente com sigilo absoluto para recepção de relatos, prevenindo fraudes e escândalos internos.',
    highlights: [
      'Garantia irrestrita de anonimato do denunciante',
      'Protocolos técnicos de triagem e investigação',
      'Apoio consultivo externo ao Comitê de Ética',
      'Relatórios consolidados de recorrência e resolução',
    ],
  },
  {
    id: 'due-diligence',
    icon: ShieldCheck,
    title: 'Due Diligence de Terceiros & Parceiros',
    category: 'Cadeia de Suprimentos',
    description: 'Checagem reputacional e cadastral prévia de fornecedores, distribuidores e parceiros estratégicos para evitar contaminação de riscos.',
    highlights: [
      'Background check de sócios e empresas parceiras',
      'Verificação em listas restritivas e processos judiciais',
      'Questionários de integridade para homologação',
      'Pareceres consultivos de risco para novas contratações',
    ],
  },
  {
    id: 'treinamentos',
    icon: GraduationCap,
    title: 'Treinamentos Corporativos & ARC Academy',
    category: 'Capacitação Prática',
    description: 'Workshops dinâmicos focados em dilemas reais do dia a dia corporativo, substituindo treinamentos maçantes por conscientização efetiva.',
    highlights: [
      'Capacitação executiva para Sócios e Alta Liderança',
      'Workshops específicos para Compras, Comercial e Financeiro',
      'Treinamentos de prevenção a assédio moral e sexual',
      'Certificados formais de participação para auditoria',
    ],
  },
  {
    id: 'governanca-erm',
    icon: BarChart3,
    title: 'Governança Corporativa & Gestão de Riscos',
    category: 'Estratégia & Diretoria',
    description: 'Estruturação de processos decisórios e controles internos para assegurar a perenidade do negócio e valorização em rodadas de investimento.',
    highlights: [
      'Matriz dinâmica de riscos operacionais e reputacionais',
      'Definição de alçadas de aprovação e governança',
      'Preparação para auditorias de grandes clientes e M&A',
      'Assessoria contínua para decisões críticas de gestão',
    ],
  },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'governanca' | 'operacao' | 'cultura'>('todos');

  const filteredSolutions = SOLUTIONS.filter((s) => {
    if (activeTab === 'governanca') return s.id === 'diagnostico' || s.id === 'governanca-erm';
    if (activeTab === 'operacao') return s.id === 'due-diligence' || s.id === 'canal-denuncias';
    if (activeTab === 'cultura') return s.id === 'codigo-politicas' || s.id === 'treinamentos';
    return true;
  });

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
            Abordagem moderna, prática e focada na proteção da diretoria e habilitação comercial com grandes clientes.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] font-heading">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'todos'
                  ? 'bg-[#10243C] text-[#F7F3EC] shadow'
                  : 'text-[#414850] hover:text-[#10243C]'
              }`}
            >
              Todas as Soluções
            </button>
            <button
              onClick={() => setActiveTab('governanca')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'governanca'
                  ? 'bg-[#10243C] text-[#F7F3EC] shadow'
                  : 'text-[#414850] hover:text-[#10243C]'
              }`}
            >
              Governança & Riscos
            </button>
            <button
              onClick={() => setActiveTab('operacao')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'operacao'
                  ? 'bg-[#10243C] text-[#F7F3EC] shadow'
                  : 'text-[#414850] hover:text-[#10243C]'
              }`}
            >
              Canais & Due Diligence
            </button>
            <button
              onClick={() => setActiveTab('cultura')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'cultura'
                  ? 'bg-[#10243C] text-[#F7F3EC] shadow'
                  : 'text-[#414850] hover:text-[#10243C]'
              }`}
            >
              Políticas & Capacitação
            </button>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredSolutions.map((solution, index) => {
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#10243C] block mb-2">
                      Principais Entregas:
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
                    className="w-full py-3 rounded-xl bg-[#F7F3EC] group-hover:bg-[#10243C] text-[#10243C] group-hover:text-[#F7F3EC] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Solicitar Proposta Desta Solução</span>
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
