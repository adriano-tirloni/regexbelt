/**
 * Matches a Brazilian Municipal Registration number with 6 to 15 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567890'
 * @example ❌ '12345'
 */
export const municipalRegistration = /^\d{6,15}$/;
