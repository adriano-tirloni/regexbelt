/**
 * Matches a Roraima (RR) Inscricao Estadual starting with 24 in the format 24XXXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '24123456-7'
 * @example ❌ '25123456-7'
 */
export const inscricaoEstadualRR = /^24\d{6}-?\d$/;
