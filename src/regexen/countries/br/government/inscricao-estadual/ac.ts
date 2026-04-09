/**
 * Matches an Acre (AC) Inscricao Estadual starting with 01 in the format 01.XXX.XXX/XXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '01.234.567/890-12'
 * @example ❌ '02.234.567/890-12'
 */
export const inscricaoEstadualAC = /^01\.?\d{3}\.?\d{3}\/?\d{3}-?\d{2}$/;
