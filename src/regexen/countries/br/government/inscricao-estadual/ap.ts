/**
 * Matches an Amapa (AP) Inscricao Estadual starting with 03 followed by 7 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '031234567'
 * @example ❌ '041234567'
 */
export const inscricaoEstadualAP = /^03\d{7}$/;
