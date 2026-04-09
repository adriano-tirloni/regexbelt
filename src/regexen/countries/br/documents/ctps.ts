/**
 * Matches a Brazilian CTPS (work card) number as 7 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567'
 * @example ❌ '123456'
 */
export const ctps = /^\d{7}$/;
