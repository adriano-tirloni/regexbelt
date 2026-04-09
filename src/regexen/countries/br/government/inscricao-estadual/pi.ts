/**
 * Matches a Piaui (PI) Inscricao Estadual as 9 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456789'
 * @example ❌ '12345678'
 */
export const inscricaoEstadualPI = /^\d{9}$/;
