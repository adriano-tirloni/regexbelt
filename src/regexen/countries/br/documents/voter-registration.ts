/**
 * Matches a Brazilian voter registration number in the format XXXX XXXX XXXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234 5678 9012'
 * @example ❌ '123456789012'
 */
export const voterRegistrationFormatted = /^\d{4}\s\d{4}\s\d{4}$/;

/**
 * Matches a Brazilian voter registration number as 12 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456789012'
 * @example ❌ '1234 5678 9012'
 */
export const voterRegistrationStripped = /^\d{12}$/;
