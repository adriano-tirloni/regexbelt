/**
 * Matches a Brazilian Correios tracking code with 2 letters + 9 digits + 2 letters
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'SS987654321BR'
 * @example ❌ 'ss987654321br'
 */
export const correiosTracking = /^[A-Z]{2}\d{9}[A-Z]{2}$/;
