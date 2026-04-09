/**
 * Matches a Brazilian license plate in old or Mercosul format
 *
 * Old format: 3 uppercase letters + 4 digits (e.g. ABC1234)
 * Mercosul format: 3 uppercase letters + 1 digit + 1 letter-or-digit + 2 digits (e.g. ABC1D23)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'ABC1234'
 * @example ❌ 'abc1234'
 */
export const licensePlate = /^[A-Z]{3}\d[0-9A-Z]\d{2}$/;
