/**
 * Matches a Brazilian NIS number in the format XXX.XXXXX.XX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.45678.90-1'
 * @example ❌ '12345678901'
 */
export const nis = /^\d{3}\.\d{5}\.\d{2}-\d$/;
