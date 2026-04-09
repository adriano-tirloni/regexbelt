/**
 * Matches a Brazilian CNJ process number in the format NNNNNNN-DD.AAAA.J.TR.OOOO
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '0002028-80.2020.8.26.0100'
 * @example ❌ '00020288020208260100'
 */
export const cnjProcessFormatted = /^\d{7}-\d{2}\.\d{4}\.[4-8]\.\d{2}\.\d{4}$/;

/**
 * Matches a Brazilian CNJ process number as 20 consecutive digits where the 16th digit is 4-8
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '00020288020208260100'
 * @example ❌ '0002028-80.2020.8.26.0100'
 */
export const cnjProcessStripped = /^\d{15}[4-8]\d{4}$/;
