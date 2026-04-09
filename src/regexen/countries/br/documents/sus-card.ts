/**
 * Matches a Brazilian SUS card number in the format XXX XXXX XXXX XXXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123 4567 8901 2345'
 * @example ❌ '123456789012345'
 */
export const susCardFormatted = /^\d{3}\s\d{4}\s\d{4}\s\d{4}$/;

/**
 * Matches a Brazilian SUS card number as 15 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456789012345'
 * @example ❌ '123 4567 8901 2345'
 */
export const susCardStripped = /^\d{15}$/;
