/**
 * Matches a Parana (PR) Inscricao Estadual in the format XXX.XXXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.45678-90'
 * @example ❌ '123.4567-90'
 */
export const inscricaoEstadualPR = /^\d{3}\.?\d{5}-?\d{2}$/;
