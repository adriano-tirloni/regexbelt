/**
 * Matches a Brazilian CPF number in the format XXX.XXX.XXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.456.789-09'
 * @example ❌ '12345678909'
 */
export const cpfFormatted = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Matches a Brazilian CPF number as 11 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678909'
 * @example ❌ '123.456.789-09'
 */
export const cpfStripped = /^\d{11}$/;
