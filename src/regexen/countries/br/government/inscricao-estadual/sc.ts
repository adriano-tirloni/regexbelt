/**
 * Matches a Santa Catarina (SC) Inscricao Estadual in the format XXX.XXX.XXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.456.789'
 * @example ❌ '123.456.78'
 */
export const inscricaoEstadualSC = /^\d{3}\.?\d{3}\.?\d{3}$/;
