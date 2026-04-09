/**
 * Matches a Bahia (BA) Inscricao Estadual with 9 digits in the format XXXXXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567-89'
 * @example ❌ '123456-89'
 */
export const inscricaoEstadualBA9 = /^\d{7}-?\d{2}$/;

/**
 * Matches a Bahia (BA) Inscricao Estadual with 8 digits in the format XXXXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456-78'
 * @example ❌ '1234567-89'
 */
export const inscricaoEstadualBA8 = /^\d{6}-?\d{2}$/;
