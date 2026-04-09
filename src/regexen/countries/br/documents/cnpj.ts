/**
 * Matches a Brazilian CNPJ number in the format XX.XXX.XXX/XXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12.345.678/0001-95'
 * @example ❌ '12345678000195'
 */
export const cnpjFormatted = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

/**
 * Matches a Brazilian CNPJ number as 14 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678000195'
 * @example ❌ '12.345.678/0001-95'
 */
export const cnpjStripped = /^\d{14}$/;
