import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin,
  Check, 
  Copy, 
  ExternalLink, 
  RefreshCw,
  ShieldCheck,
  AlertCircle,
  Building,
  User,
  Briefcase
} from 'lucide-react';
import { sanitizeInput, isValidEmail, buildSafeMailtoUrl } from '../utils/security.ts';

interface ContactSectionProps {
  initialSolution?: string;
}

const ARC_EMAIL = 'contato@arccompliance.com.br';
const INSTAGRAM_URL = 'https://www.instagram.com/arc.compliance?xtok=MWo2cHlmdmwwcTVwdQ==';
const LINKEDIN_URL = 'https://www.linkedin.com/company/arc-compliance/';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSolution = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    phone: '',
    solution: initialSolution || 'Diagnóstico de Integridade & Conformidade',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedMailtoUrl, setGeneratedMailtoUrl] = useState('');
  const [formattedMessagePreview, setFormattedMessagePreview] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [copied, setCopied] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  useEffect(() => {
    if (initialSolution) {
      setFormData((prev) => ({ ...prev, solution: initialSolution }));
    }
  }, [initialSolution]);

  // Phone mask helper for Brazilian phone numbers: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) {
      return numbers.length > 0 ? `(${numbers}` : '';
    }
    if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const validateField = (field: string, value: string): string | undefined => {
    const clean = value.trim();

    if (field === 'name') {
      if (!clean) return 'Por favor, informe seu nome completo.';
      if (clean.length < 3) return 'O nome deve ter no mínimo 3 caracteres.';
      if (!clean.includes(' ')) return 'Por favor, informe seu nome e sobrenome.';
    }

    if (field === 'email') {
      if (!clean) return 'Por favor, informe seu e-mail corporativo.';
      if (!isValidEmail(clean)) return 'Informe um e-mail corporativo válido (ex: seu.nome@empresa.com.br).';
    }

    if (field === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Por favor, informe seu telefone com DDD.';
      if (digits.length < 10) return 'Número incompleto. Digite o DDD + número (ex: 11 99999-9999).';
    }

    return undefined;
  };

  const validateAll = () => {
    const newErrors: FormErrors = {};
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    let finalValue = value;
    if (field === 'phone') {
      finalValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: finalValue }));

    // If field has been touched or submit was attempted, update error immediately
    if (touched[field] || submitAttempted) {
      const fieldError = validateField(field, finalValue);
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, formData[field as keyof typeof formData] || '');
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setTouched({ name: true, email: true, phone: true });

    const isValid = validateAll();
    if (!isValid) {
      // Focus on first invalid field
      const firstErrorKey = Object.keys(errors)[0] || 'name';
      const el = document.getElementById(`input-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    // Sanitize all inputs against XSS and injection
    const cleanName = sanitizeInput(formData.name, 100);
    const cleanRole = sanitizeInput(formData.role, 100);
    const cleanCompany = sanitizeInput(formData.company, 100);
    const cleanEmail = sanitizeInput(formData.email, 150);
    const cleanPhone = sanitizeInput(formData.phone, 30);
    const cleanSolution = sanitizeInput(formData.solution, 120);
    const cleanMessage = sanitizeInput(formData.message, 1500);

    setIsSubmitting(true);

    const subject = `Solicitação de Proposta | ARC Compliance - ${cleanCompany || cleanName}`;
    setEmailSubject(subject);

    // Build formatted message for Email
    const emailBody = [
      'Olá, equipe ARC Compliance & Advisory,',
      '',
      'Gostaria de solicitar uma proposta comercial personalizada para a nossa empresa:',
      '',
      `• Nome: ${cleanName}`,
      cleanCompany ? `• Empresa: ${cleanCompany}` : '',
      cleanRole ? `• Cargo / Função: ${cleanRole}` : '',
      `• E-mail Corporativo: ${cleanEmail}`,
      `• Telefone: ${cleanPhone}`,
      `• Interesse Principal: ${cleanSolution}`,
      cleanMessage ? `• Contexto / Detalhes: ${cleanMessage}` : '',
      '',
      'Solicitação enviada através do site oficial da ARC Compliance & Advisory.',
    ].filter(Boolean).join('\n');

    const safeMailto = buildSafeMailtoUrl(ARC_EMAIL, subject, emailBody);

    setFormattedMessagePreview(emailBody);
    setGeneratedMailtoUrl(safeMailto);

    // Smooth transition from checkmark on button to full confirmation view
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Trigger user default email client
      try {
        window.location.href = safeMailto;
      } catch {
        // Fallback: mailto link and copy button ready on screen
      }
    }, 600);
  };

  const handleCopyMessage = () => {
    if (navigator.clipboard) {
      const fullTextToCopy = `Para: ${ARC_EMAIL}\nAssunto: ${emailSubject}\n\n${formattedMessagePreview}`;
      navigator.clipboard.writeText(fullTextToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitAttempted(false);
    setTouched({});
    setErrors({});
    setCopied(false);
    setEmailClicked(false);
  };

  const hasErrors = Object.keys(errors).some((k) => !!errors[k as keyof FormErrors]);

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#FFFCF8] text-[#10243C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Subtle Scroll Entry Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243C]/5 border border-[#10243C]/15 text-xs font-bold text-[#B69A6B] uppercase tracking-wider mb-4 font-heading">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B69A6B]" />
            <span>Atendimento Executivo & Propostas</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243C] tracking-tight mb-5 leading-tight">
            Vamos conversar sobre as necessidades da{' '}
            <span className="text-[#B69A6B]">sua organização?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#414850] font-normal leading-relaxed max-w-2xl mx-auto">
            Preencha os dados abaixo para receber uma proposta personalizada diretamente por e-mail de nossa equipe de consultores especialistas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels with Scroll Entry Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#F7F3EC] p-5 sm:p-8 rounded-2xl border border-[#E8DFD2] shadow-sm space-y-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#10243C] border-b border-[#E8DFD2] pb-4">
                Canais Diretos de Atendimento
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {/* E-mail Institucional - Primary */}
                <div className="flex items-start gap-3 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#10243C]/5 transition-colors group">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#10243C] group-hover:bg-[#162D4A] text-[#B69A6B] shrink-0 shadow-sm transition-all group-hover:scale-105">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block font-heading">
                      E-mail Institucional
                    </span>
                    <a
                      href={`mailto:${ARC_EMAIL}`}
                      className="text-[13px] sm:text-[15px] lg:text-base font-bold text-[#10243C] group-hover:text-[#B69A6B] transition-colors block mt-0.5 tracking-tight truncate whitespace-nowrap"
                      title={ARC_EMAIL}
                    >
                      {ARC_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-3 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#10243C]/5 transition-colors group">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#10243C] group-hover:bg-[#162D4A] text-[#B69A6B] shrink-0 shadow-sm transition-all group-hover:scale-105">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block font-heading">
                      Telefone de Contato
                    </span>
                    <a
                      href="tel:+5511992561083"
                      className="text-sm sm:text-base font-bold text-[#10243C] group-hover:text-[#B69A6B] transition-colors block mt-0.5 tracking-tight"
                    >
                      +55 11 99256-1083
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#10243C]/5 transition-colors group">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#10243C] group-hover:bg-[#162D4A] text-[#B69A6B] shrink-0 shadow-sm transition-all group-hover:scale-105">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block font-heading">
                      Instagram Oficial
                    </span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#10243C] group-hover:text-[#B69A6B] transition-colors block mt-0.5 tracking-tight truncate"
                    >
                      @arc.compliance
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#10243C]/5 transition-colors group">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#10243C] group-hover:bg-[#162D4A] text-[#B69A6B] shrink-0 shadow-sm transition-all group-hover:scale-105">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block font-heading">
                      LinkedIn Corporativo
                    </span>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#10243C] group-hover:text-[#B69A6B] transition-colors block mt-0.5 tracking-tight truncate"
                    >
                      ARC Compliance & Advisory
                    </a>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-3 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#10243C]/5 transition-colors group">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#10243C] group-hover:bg-[#162D4A] text-[#B69A6B] shrink-0 shadow-sm transition-all group-hover:scale-105">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B69A6B] block font-heading">
                      Sede
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#10243C] block mt-0.5 tracking-tight">
                      São Paulo - SP
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Proposal Form via Email with Scroll Entry Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-2xl border border-[#E8DFD2] shadow-xl">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E8DFD2] pb-4 mb-2">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#10243C]">
                      Solicitar Proposta por E-mail
                    </h3>
                    <span className="text-[11px] font-medium text-[#414850]">
                      Campos com * obrigatórios
                    </span>
                  </div>

                  {/* General error alert banner when submission attempted with errors */}
                  <AnimatePresence>
                    {submitAttempted && hasErrors && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5 overflow-hidden"
                      >
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Por favor, corrija os campos destacados em vermelho abaixo antes de prosseguir.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome Completo */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="input-name" className="text-xs font-bold uppercase tracking-wider text-[#10243C] flex items-center gap-1 font-heading">
                          <User className="w-3.5 h-3.5 text-[#B69A6B]" />
                          <span>Nome Completo *</span>
                        </label>
                        {touched.name && !errors.name && formData.name.length >= 3 && (
                          <span className="text-emerald-600 text-[11px] flex items-center gap-1 font-semibold">
                            <Check className="w-3.5 h-3.5" /> Correto
                          </span>
                        )}
                      </div>
                      <input
                        id="input-name"
                        type="text"
                        maxLength={100}
                        placeholder="Ex: Carlos Eduardo Silva"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full px-4 py-3.5 rounded-xl text-base sm:text-xs transition-all focus:outline-none ${
                          touched.name && errors.name
                            ? 'bg-rose-50/50 border-2 border-rose-400 text-rose-950 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : touched.name && !errors.name && formData.name.length >= 3
                            ? 'bg-[#F7F3EC] border border-emerald-400 text-[#10243C] focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20'
                            : 'bg-[#F7F3EC] border border-[#E8DFD2] text-[#10243C] focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="input-company" className="text-xs font-bold uppercase tracking-wider text-[#10243C] flex items-center gap-1 mb-1.5 font-heading">
                        <Building className="w-3.5 h-3.5 text-[#B69A6B]" />
                        <span>Empresa</span>
                      </label>
                      <input
                        id="input-company"
                        type="text"
                        maxLength={100}
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-base sm:text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Cargo / Função */}
                    <div>
                      <label htmlFor="input-role" className="text-xs font-bold uppercase tracking-wider text-[#10243C] flex items-center gap-1 mb-1.5 font-heading">
                        <Briefcase className="w-3.5 h-3.5 text-[#B69A6B]" />
                        <span>Cargo / Função</span>
                      </label>
                      <input
                        id="input-role"
                        type="text"
                        maxLength={100}
                        placeholder="Ex: Diretor, Sócio, Gerente"
                        value={formData.role}
                        onChange={(e) => handleChange('role', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-base sm:text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20 transition-all"
                      />
                    </div>

                    {/* Telefone / WhatsApp */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="input-phone" className="text-xs font-bold uppercase tracking-wider text-[#10243C] flex items-center gap-1 font-heading">
                          <Phone className="w-3.5 h-3.5 text-[#B69A6B]" />
                          <span>Telefone com DDD *</span>
                        </label>
                        {touched.phone && !errors.phone && formData.phone.length >= 14 && (
                          <span className="text-emerald-600 text-[11px] flex items-center gap-1 font-semibold">
                            <Check className="w-3.5 h-3.5" /> Válido
                          </span>
                        )}
                      </div>
                      <input
                        id="input-phone"
                        type="tel"
                        maxLength={16}
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full px-4 py-3.5 rounded-xl text-base sm:text-xs transition-all focus:outline-none ${
                          touched.phone && errors.phone
                            ? 'bg-rose-50/50 border-2 border-rose-400 text-rose-950 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : touched.phone && !errors.phone && formData.phone.length >= 14
                            ? 'bg-[#F7F3EC] border border-emerald-400 text-[#10243C] focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20'
                            : 'bg-[#F7F3EC] border border-[#E8DFD2] text-[#10243C] focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* E-mail Corporativo */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="input-email" className="text-xs font-bold uppercase tracking-wider text-[#10243C] flex items-center gap-1 font-heading">
                        <Mail className="w-3.5 h-3.5 text-[#B69A6B]" />
                        <span>E-mail Corporativo *</span>
                      </label>
                      {touched.email && !errors.email && isValidEmail(formData.email) && (
                        <span className="text-emerald-600 text-[11px] flex items-center gap-1 font-semibold">
                          <Check className="w-3.5 h-3.5" /> Válido
                        </span>
                      )}
                    </div>
                    <input
                      id="input-email"
                      type="email"
                      maxLength={150}
                      placeholder="seu.nome@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-3.5 rounded-xl text-base sm:text-xs transition-all focus:outline-none ${
                        touched.email && errors.email
                          ? 'bg-rose-50/50 border-2 border-rose-400 text-rose-950 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : touched.email && !errors.email && isValidEmail(formData.email)
                          ? 'bg-[#F7F3EC] border border-emerald-400 text-[#10243C] focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20'
                          : 'bg-[#F7F3EC] border border-[#E8DFD2] text-[#10243C] focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Solução / Interesse Principal */}
                  <div>
                    <label htmlFor="select-solution" className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5 font-heading">
                      Solução / Interesse Principal
                    </label>
                    <select
                      id="select-solution"
                      value={formData.solution}
                      onChange={(e) => handleChange('solution', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-base sm:text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20 cursor-pointer transition-all"
                    >
                      <option value="Diagnóstico de Integridade & Conformidade">Diagnóstico de Integridade & Conformidade</option>
                      <option value="Código de Ética & Conduta Personalizado">Código de Ética & Conduta Personalizado</option>
                      <option value="Políticas e Procedimentos Internos">Políticas e Procedimentos Internos</option>
                      <option value="Gestão e Matriz de Riscos Corporativos">Gestão e Matriz de Riscos Corporativos</option>
                      <option value="Treinamentos Corporativos & Conscientização">Treinamentos Corporativos & Conscientização</option>
                      <option value="Estrutura Integrada de Compliance">Estrutura Integrada de Compliance</option>
                    </select>
                  </div>

                  {/* Detalhes da Necessidade */}
                  <div>
                    <label htmlFor="textarea-message" className="text-xs font-bold uppercase tracking-wider text-[#10243C] block mb-1.5 font-heading">
                      Detalhes da Necessidade / Mensagem (Opcional)
                    </label>
                    <textarea
                      id="textarea-message"
                      rows={3}
                      maxLength={1500}
                      placeholder="Descreva brevemente o momento da empresa, número aproximado de colaboradores ou prazos pretendidos..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-base sm:text-xs text-[#10243C] focus:outline-none focus:border-[#B69A6B] focus:ring-2 focus:ring-[#B69A6B]/20 resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button with Clean Mail Icon and Micro-interaction */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[52px] px-6 py-4 rounded-xl bg-[#B69A6B] hover:bg-[#C8AE7D] active:scale-[0.99] text-[#10243C] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#B69A6B]/25 cursor-pointer disabled:opacity-95 font-heading"
                    >
                      {isSubmitting ? (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center justify-center gap-2.5 text-center"
                        >
                          <motion.svg
                            className="w-4 h-4 text-[#10243C] shrink-0"
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
                          <span>Validado com Sucesso! Abrindo E-mail...</span>
                        </motion.span>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-2.5 text-center">
                          <span className="w-6 h-6 rounded-lg bg-[#10243C]/10 flex items-center justify-center shrink-0">
                            <Mail className="w-3.5 h-3.5 text-[#10243C]" />
                          </span>
                          <span>Enviar Solicitação de Proposta por E-mail</span>
                        </span>
                      )}
                    </button>
                    <span className="text-[11px] text-[#414850] text-center block mt-2">
                      Gera automaticamente a mensagem formatada para envio direto ao e-mail institucional da ARC.
                    </span>
                  </div>
                </form>
              ) : (
                /* Instant Ready Message State with Email Dispatch */
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
                        Solicitação Pronta para Envio!
                      </h4>
                      <p className="text-xs text-[#414850] mt-0.5">
                        Sua proposta foi estruturada e está pronta para envio para <strong>{ARC_EMAIL}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Formatted Message Box */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#414850] mb-2 font-heading">
                      <span>Texto Formatado para o E-mail:</span>
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

                    <pre className="p-4 rounded-xl bg-[#F7F3EC] border border-[#E8DFD2] text-xs text-[#10243C] font-mono whitespace-pre-wrap break-all leading-relaxed overflow-x-hidden max-w-full shadow-inner">
                      {`Destinatário: ${ARC_EMAIL}\nAssunto: ${emailSubject}\n\n${formattedMessagePreview}`}
                    </pre>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={generatedMailtoUrl}
                      onClick={() => {
                        setEmailClicked(true);
                        setTimeout(() => setEmailClicked(false), 2500);
                      }}
                      className="flex-1 py-3.5 rounded-xl bg-[#B69A6B] hover:bg-[#C8AE7D] text-[#10243C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all font-heading"
                    >
                      {emailClicked ? (
                        <motion.span
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center gap-1.5"
                        >
                          <Check className="w-4 h-4 text-[#10243C]" />
                          <span>Abrindo Aplicativo de E-mail...</span>
                        </motion.span>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Abrir no Aplicativo de E-mail</span>
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
                          <span>Copiar Dados</span>
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};
