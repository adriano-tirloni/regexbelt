/**
 * Matches a Rio de Janeiro (RJ) Inscricao Estadual in the format XX.XXX.XX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12.345.67-8'
 * @example ❌ '12.345.678-9'
 */
export const inscricaoEstadualRJ = /^\d{2}\.?\d{3}\.?\d{2}-?\d$/;
