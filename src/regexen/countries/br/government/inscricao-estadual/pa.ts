/**
 * Matches a Para (PA) Inscricao Estadual starting with 15 in the format 15XXXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '15123456-7'
 * @example ❌ '16123456-7'
 */
export const inscricaoEstadualPA = /^15\d{6}-?\d$/;
