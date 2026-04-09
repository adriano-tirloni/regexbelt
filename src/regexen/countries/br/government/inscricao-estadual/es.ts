/**
 * Matches an Espirito Santo (ES) Inscricao Estadual as 9 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456789'
 * @example ❌ '12345678'
 */
export const inscricaoEstadualES = /^\d{9}$/;
