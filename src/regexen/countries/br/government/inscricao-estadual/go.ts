/**
 * Matches a Goias (GO) Inscricao Estadual in the format XX.XXX.XXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12.345.678-9'
 * @example ❌ '12.345.678-90'
 */
export const inscricaoEstadualGO = /^\d{2}\.?\d{3}\.?\d{3}-?\d$/;
