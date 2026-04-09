/**
 * Matches a Maranhao (MA) Inscricao Estadual starting with 12 followed by 7 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '121234567'
 * @example ❌ '131234567'
 */
export const inscricaoEstadualMA = /^12\d{7}$/;
