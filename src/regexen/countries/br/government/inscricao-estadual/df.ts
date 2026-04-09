/**
 * Matches a Distrito Federal (DF) Inscricao Estadual in the format XXXXXXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678-90'
 * @example ❌ '1234567-90'
 */
export const inscricaoEstadualDF = /^\d{8}-?\d{2}$/;
