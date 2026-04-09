/**
 * Matches a Pernambuco (PE) Inscricao Estadual in the format XXXXXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567-89'
 * @example ❌ '123456-89'
 */
export const inscricaoEstadualPE = /^\d{7}-?\d{2}$/;
