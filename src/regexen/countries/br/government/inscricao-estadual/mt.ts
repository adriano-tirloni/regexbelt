/**
 * Matches a Mato Grosso (MT) Inscricao Estadual in the format XXXXXXXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567890-1'
 * @example ❌ '123456789-1'
 */
export const inscricaoEstadualMT = /^\d{10}-?\d$/;
