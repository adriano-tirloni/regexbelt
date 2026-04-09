/**
 * Matches a Sergipe (SE) Inscricao Estadual in the format XXXXXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678-9'
 * @example ❌ '1234567-9'
 */
export const inscricaoEstadualSE = /^\d{8}-?\d$/;
