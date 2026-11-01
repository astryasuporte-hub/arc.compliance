/**
 * Security & Anti-XSS Sanitization Utilities
 * Protects against Reflected & Stored Cross-Site Scripting (XSS),
 * Header Injection and Payload Tampering.
 */

const HTML_ENTITY_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
};

/**
 * Escapes characters that could be interpreted as HTML markup or script injection.
 */
export function escapeHtml(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/[&<>"'`=\/]/g, (char) => HTML_ENTITY_MAP[char] || char);
}

/**
 * Strips script tags, javascript: protocols, inline event handlers and data URI vectors.
 */
export function sanitizeInput(input: string, maxLength = 2000): string {
  if (!input || typeof input !== 'string') return '';

  let cleaned = input.slice(0, maxLength);

  // Strip <script> and dangerous HTML tags
  cleaned = cleaned.replace(/<\s*script[^>]*>[\s\S]*?<\s*\/\s*script\s*>/gi, '');
  cleaned = cleaned.replace(/<\s*(iframe|object|embed|svg|applet|meta|link|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '');
  cleaned = cleaned.replace(/<\s*(iframe|object|embed|svg|applet|meta|link|style)[^>]*\/?>/gi, '');

  // Strip javascript:, data: URLs, vbscript:
  cleaned = cleaned.replace(/(javascript|vbscript|data):/gi, '');

  // Strip inline event handlers like onload, onerror, onclick, onmouseover
  cleaned = cleaned.replace(/\bon\w+\s*=\s*(['"]).*?\1/gi, '');
  cleaned = cleaned.replace(/\bon\w+\s*=\s*[^\s>]+/gi, '');

  // Strip remaining HTML tags
  cleaned = cleaned.replace(/<[^>]+>/g, '');

  return cleaned.trim();
}

/**
 * Validates corporate email format strictly.
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  // RFC 5322 standard compliant regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone / WhatsApp numbers safely.
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 8 && digitsOnly.length <= 16;
}

/**
 * Generates an XSS-safe encoded WhatsApp deep link.
 */
export function buildSafeWhatsAppUrl(phoneNumber: string, messageText: string): string {
  const safePhone = phoneNumber.replace(/\D/g, '');
  const sanitizedMessage = sanitizeInput(messageText, 3000);
  const encodedText = encodeURIComponent(sanitizedMessage);
  return `https://wa.me/${safePhone}?text=${encodedText}`;
}
