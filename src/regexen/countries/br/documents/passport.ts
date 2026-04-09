/**
 * Matches a Brazilian passport number as 2 uppercase letters followed by 6 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'AB123456'
 * @example ❌ 'ab123456'
 */
export const passport = /^[A-Z]{2}\d{6}$/;
