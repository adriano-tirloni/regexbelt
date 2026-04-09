/**
 * Matches a Brazilian Cadastur number in the format XX.XXX.XXX/XXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12.345.678/0001-90'
 * @example ❌ '12345678000190'
 */
export const cadasturFormatted = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

/**
 * Matches a Brazilian Cadastur number as 14 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678000190'
 * @example ❌ '12.345.678/0001-90'
 */
export const cadasturStripped = /^\d{14}$/;
