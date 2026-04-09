/**
 * Matches a Brazilian CRM (medical license) number as 5-6 digits followed by a 2-letter uppercase state code
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345SP'
 * @example ❌ '12345sp'
 */
export const crm = /^\d{5,6}[A-Z]{2}$/;
