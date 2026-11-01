import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Check,
  Copy, 
  ExternalLink, 
  RefreshCw,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { sanitizeInput, isValidEmail, isValidPhone, buildSafeWhatsAppUrl } from '../utils/security.ts';

interface ContactSectionProps {
  initialSolution?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSolution = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    phone: '',
    solution: initialSolution || 'Diagnóstico de Integridade & Compliance',
    message: '',
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');
  const [formattedMessagePreview, setFormattedMessagePreview] = useState('');
  const [copied, setCopied] = useState(false);
  const [whatsAppClicked, setWhatsAppClicked] = useState(false);

  useEffect(() => {
    if (initialSolution) {
      setFormData((prev) => ({ ...prev, solution: initialSolution }));
    }
  }, [initialSolution]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Sanitize all inputs against XSS and injection
    const cleanName = sanitizeInput(formData.name, 100);
    const cleanRole = sanitizeInput(formData.role, 100);
    const cleanCompany = sanitizeInput(formData.company, 100);
    const cleanEmail = sanitizeInput(formData.email, 150);
    const cleanPhone = sanitizeInput(formData.phone, 30);
    const cleanSolution = sanitizeInput(formData.solution, 120);
    const cleanMessage = sanitizeInput(formData.message, 1500);

    // Validation
    if (!cleanName || cleanName.length < 2) {
      setValidationError('Por favor, informe seu nome completo.');
      return;
    }
    if (!isValidEmail(cleanEmail)) {
      setValidationError('Por favor, informe um e-mail corporativo válido.');
      return;
    }
    if (!isValidPhone(cleanPhone)) {
      setValidationError('Por favor, informe um telefone/WhatsApp com DDD válido.');
      return;
    }

    // Trigger subtle success confirmation animation on the button first
    setIsSubmitting(true);

    // Build formatted message for WhatsApp & print
    const textLines = [
      '🏛️ *SOLICITAÇÃO DE PROPOSTA | ARC COMPLIANCE & ADVISORY*',
      '--------------------------------------------------',
      `👤 *Nome:* ${cleanName}`,
      cleanCompany ? `🏢 *Empresa:* ${cleanCompany}` : '',
      cleanRole ? `💼 *Cargo:* ${cleanRole}` : '',
      `📧 *E-mail:* ${cleanEmail}`,
      `📱 *Telefone:* ${cleanPhone}`,
      `🎯 *Interesse:* ${cleanSolution}`,
      cleanMessage ? `📝 *Detalhes:* ${cleanMessage}` : '',
      '--------------------------------------------------',
      'Enviado através do site oficial da ARC Compliance',
    ].filter(Boolean);

    const fullMessage = textLines.join('\n');
    const safeUrl = buildSafeWhatsAppUrl('5511992561083', fullMessage);

    setFormattedMessagePreview(fullMessage);
    setGeneratedWhatsAppUrl(safeUrl);

    // Smooth transition from checkmark on button to full confirmation view
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Trigger WhatsApp deep link in new tab
      try {
        window.open(safeUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback: URL is ready on screen for the user
      }
    }, 600);
  };

  const handleCopyMessage = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedMessagePreview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setCopied(false);
    setWhatsAppClicked(false);
  };

  const INSTAGRAM_URL = 'https://www.instagram.com/arc.compliance?xtok=MWo2cHlmdmwwcTVwdQ==';

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#FFFCF8] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243C]/5 border border-[#10243C]/15 text-xs font-bold text-[#B69A6B] uppercase tracking-wider mb-4 font-heading">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B69A6B]" />
            <span>Atendimento Executivo & Propostas</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243C] tracking-tight mb-5 leading-tight">
            Vamos conversar sobre as necessidades da{' '}
            <span className="text-[#B69A6B]">sua organização?</span>
          </h2>

          <p className="text-base text-[#414850] font-normal leading-relaxed">
            Preencha os dados abaixo para gerar instantaneamente sua solicitação de proposta personalizada e iniciar a conversa com um consultor especialista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Social */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F7F3EC] p-8 rounded-2xl border border-[#E8DFD2] shadow-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#10243C] border-b border-[#E8DFD2] pb-4">
                Canais Diretos de Atendimento
              </h3>

              <div className="space-y-4">
                {/* Telefone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#10243C] text-[#B69A6B] shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block">
                      Telefone & WhatsApp Oficial
                    </span>
                    <a
                      href="https://wa.me/5511992561083"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#10243C] hover:text-[#B69A6B] transition-colors block mt-0.5"
                    >
                      +55 11 99256-1083
                    </a>
                    <span className="text-xs text-[#414850] block mt-0.5">
                      Atendimento das 09h às 18h (Segunda a Sexta)
                    </span>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#10243C] text-[#B69A6B] shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block">
                      E-mail Institucional
                    </span>
                    <a
                      href="mailto:contato@arccompliance.com.br"
                      className="text-sm font-semibold text-[#10243C] hover:text-[#B69A6B] transition-colors block mt-0.5"
                    >
                      contato@arccompliance.com.br
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#10243C] text-[#B69A6B] shrink-0 shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block">
                      Instagram Oficial
                    </span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#10243C] hover:text-[#B69A6B] transition-colors block mt-0.5"
                    >
                      @arc.compliance
                    </a>
                    <span className="text-xs text-[#414850] block mt-0.5">
                      Artigos, notícias regulatórias e bastidores
                    </span>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#10243C] text-[#B69A6B] shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block">
                      Sede
                    </span>
                    <span className="text-sm font-semibold text-[#10243C] block mt-0.5">
                      São Paulo - SP
                    </span>
                    <span className="text-xs text-[#414850] block mt-0.5">
                      Atuação consultiva presencial e remota em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Commitment */}
              <div className="p-4 rounded-xl bg-[#FFFCF8] border border-[#E8DFD2] text-xs text-[#414850] leading-relaxed">
                <strong className="text-[#10243C] block mb-1">Sigilo Profissional Absoluto:</strong>
                Todas as informações enviadas são tratadas com sigilo estrito sob acordo prévio de confidencialidade técnica (NDA).
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form with Instant Ready Message */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#E8DFD2] shadow-xl">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E8DFD2] pb-4 mb-2">
                    <h3 className="font-heading text-xl font-bold text-[#10243C]">
                      Solicitar Proposta Personalizada
                    </h3>
                    <span className="text-[11px] font-medium text-[#414850]">
                      Campos com * obrigatórios
                    </span>
                  </div>

                  {validationError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        maxLength={100}
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                        Cargo / Função
                      </label>
                      <input
                        type="text"
                        maxLength={100}
                        placeholder="Ex: Diretor, Sócio, Gerente de RH"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={25}
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={150}
                      placeholder="seu.nome@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                      Solução / Interesse Principal
                    </label>
                    <select
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B] cursor-pointer"
                    >
                      <option value="Diagnóstico de Integridade & Compliance">Diagnóstico & Auditoria de Integridade</option>
                      <option value="Código de Conduta & Políticas Internas">Código de Conduta & Políticas Internas</option>
                      <option value="Canal de Denúncias & Comitê de Ética">Canal de Denúncias & Comitê de Ética</option>
                      <option value="Due Diligence de Terceiros & Fornecedores">Due Diligence de Terceiros & Fornecedores</option>
                      <option value="Treinamentos Corporativos & ARC Academy">Treinamentos Corporativos & ARC Academy</option>
                      <option value="Governança Corporativa & Gestão de Riscos">Governança Corporativa & Gestão de Riscos</option>
                      <option value="Consultoria Abrangente & Blindagem 360°">Consultoria Abrangente & Blindagem 360°</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5">
                      Detalhes da Necessidade / Mensagem
                    </label>
                    <textarea
                      rows={3}
                      maxLength={1500}
                      placeholder="Descreva brevemente o momento da empresa, número aproximado de colaboradores ou prazos pretendidos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#B69A6B] hover:bg-[#C8AE7D] text-[#10243C] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#B69A6B]/25 cursor-pointer disabled:opacity-95 overflow-hidden font-heading"
                    >
                      {isSubmitting ? (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-2"
                        >
                          <motion.svg
                            className="w-4 h-4 text-[#10243C]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <motion.path
                              d="M20 6L9 17L4 12"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                            />
                          </motion.svg>
                          <span>Solicitação Confirmada! Abrindo...</span>
                        </motion.span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Solicitação de Contato com a ARC</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-[#414850] text-center block mt-2">
                      Gera automaticamente o link no WhatsApp pronto para envio e cópia.
                    </span>
                  </div>
                </form>
              ) : (
                /* Instant Ready Message State with Subtle Checkmark Animation & WhatsApp */
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-[#F7F3EC] border border-[#B69A6B]/40 text-[#10243C] relative overflow-hidden">
                    {/* Animated Checkmark Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -25 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 22, delay: 0.1 }}
                      className="w-12 h-12 rounded-full bg-[#10243C] border-2 border-[#B69A6B] text-[#B69A6B] flex items-center justify-center shrink-0 shadow-md relative"
                    >
                      <span className="absolute inset-0 rounded-full bg-[#B69A6B]/30 animate-ping opacity-40 pointer-events-none" />
                      <svg
                        className="w-6 h-6 text-[#B69A6B]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M20 6L9 17L4 12"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
                        />
                      </svg>
                    </motion.div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-[#10243C]">
                        Solicitação Gerada com Sucesso!
                      </h4>
                      <p className="text-xs text-[#414850] mt-0.5">
                        Sua mensagem foi formatada e está pronta para envio direto pelo WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* Formatted Message Box */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#414850] mb-2 font-heading">
                      <span>Mensagem Pronta para Envio:</span>
                      <button
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1.5 text-[#B69A6B] hover:text-[#10243C] transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <motion.span
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-1 text-emerald-700 font-semibold"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Copiado!</span>
                          </motion.span>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto shadow-inner">
                      {formattedMessagePreview}
                    </pre>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setWhatsAppClicked(true);
                        setTimeout(() => setWhatsAppClicked(false), 2500);
                      }}
                      className="flex-1 py-3.5 rounded-xl bg-[#B69A6B] hover:bg-[#C8AE7D] text-[#10243C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all font-heading"
                    >
                      {whatsAppClicked ? (
                        <motion.span
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center gap-1.5"
                        >
                          <Check className="w-4 h-4 text-[#10243C]" />
                          <span>Abrindo no WhatsApp...</span>
                        </motion.span>
                      ) : (
                        <>
                          <span>Abrir no WhatsApp</span>
                          <ExternalLink className="w-4 h-4" />
                        </>
                      )}
                    </a>

                    <button
                      onClick={handleCopyMessage}
                      className="px-5 py-3.5 rounded-xl bg-[#10243C] hover:bg-[#162D4A] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer font-heading"
                    >
                      {copied ? (
                        <motion.span
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center gap-1.5 text-[#B69A6B]"
                        >
                          <Check className="w-4 h-4" />
                          <span>Copiado!</span>
                        </motion.span>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#B69A6B]" />
                          <span>Copiar Mensagem</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleReset}
                      className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-[#414850] hover:text-[#10243C] transition-colors flex items-center justify-center cursor-pointer"
                      title="Preencher nova solicitação"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>

                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
