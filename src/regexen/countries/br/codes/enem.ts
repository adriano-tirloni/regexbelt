/**
 * Matches a Brazilian ENEM registration number as 12 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456789012'
 * @example ❌ '12345678901'
 */
export const enem = /^\d{12}$/;
