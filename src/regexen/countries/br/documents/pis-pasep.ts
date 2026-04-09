/**
 * Matches a Brazilian PIS/PASEP number in the format XXX.XXXXX.XX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.45678.90-1'
 * @example ❌ '12345678901'
 */
export const pisPasepFormatted = /^\d{3}\.\d{5}\.\d{2}-\d$/;

/**
 * Matches a Brazilian PIS/PASEP number as 11 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678901'
 * @example ❌ '123.45678.90-1'
 */
export const pisPasepStripped = /^\d{11}$/;
