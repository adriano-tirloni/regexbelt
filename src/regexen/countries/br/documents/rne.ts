/**
 * Matches a Brazilian RNE (foreign national registry) number as a letter or digit followed by 6 digits and a letter or digit
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'G1234567'
 * @example ❌ 'g1234567'
 */
export const rne = /^[A-Z\d]\d{6}[A-Z\d]$/;
