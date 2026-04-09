/**
 * Matches a Rio Grande do Norte (RN) Inscricao Estadual with 9 digits starting with 20
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '20.123.456-7'
 * @example ❌ '21.123.456-7'
 */
export const inscricaoEstadualRN9 = /^20\.?\d{3}\.?\d{3}-?\d$/;

/**
 * Matches a Rio Grande do Norte (RN) Inscricao Estadual with 10 digits starting with 20
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '20.1.234.567-8'
 * @example ❌ '21.1.234.567-8'
 */
export const inscricaoEstadualRN10 = /^20\.?\d\.?\d{3}\.?\d{3}-?\d$/;
