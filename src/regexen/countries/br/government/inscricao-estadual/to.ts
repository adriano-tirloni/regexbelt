/**
 * Matches a Tocantins (TO) Inscricao Estadual starting with 29 followed by 01, 02, 03, or 99
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '29011234567'
 * @example ❌ '29041234567'
 */
export const inscricaoEstadualTO = /^29(?:01|02|03|99)\d{7}$/;
