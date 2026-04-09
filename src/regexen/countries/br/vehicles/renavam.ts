/**
 * Matches a Brazilian RENAVAM number in the format XXXX.XXXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234.567890-1'
 * @example ❌ '12345678901'
 */
export const renavamFormatted = /^\d{4}\.\d{6}-\d$/;

/**
 * Matches a Brazilian RENAVAM number as 11 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678901'
 * @example ❌ '1234.567890-1'
 */
export const renavamStripped = /^\d{11}$/;
