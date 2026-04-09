/**
 * Matches a Brazilian ANTT registration number as 8 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678'
 * @example ❌ '1234567'
 */
export const antt = /^\d{8}$/;
