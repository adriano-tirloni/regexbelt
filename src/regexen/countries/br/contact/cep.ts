/**
 * Matches a Brazilian CEP (postal code) in the format XXXXX-XXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '01001-000'
 * @example ❌ '01001000'
 */
export const cepFormatted = /^\d{5}-\d{3}$/;

/**
 * Matches a Brazilian CEP (postal code) as 8 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '01001000'
 * @example ❌ '01001-000'
 */
export const cepStripped = /^\d{8}$/;
