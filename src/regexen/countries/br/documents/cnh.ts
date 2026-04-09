/**
 * Matches a Brazilian CNH (driver's license) number as 11 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12345678901'
 * @example ❌ '1234567890'
 */
export const cnh = /^\d{11}$/;
