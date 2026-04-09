/**
 * Matches a Brazilian alphanumeric CNPJ in the format XX.XXX.XXX/XXXX-XX where X is a letter or digit, and the last 2 characters are digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'A1.B2C.D3E/F4G5-67'
 * @example ❌ 'A1B2CD3EF4G567'
 */
export const cnpjAlphanumericFormatted =
  /^[A-Za-z0-9]{2}\.[A-Za-z0-9]{3}\.[A-Za-z0-9]{3}\/[A-Za-z0-9]{4}-\d{2}$/;

/**
 * Matches a Brazilian alphanumeric CNPJ as 12 alphanumeric characters followed by 2 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'A1B2CD3EF4G567'
 * @example ❌ 'A1.B2C.D3E/F4G5-67'
 */
export const cnpjAlphanumericStripped = /^[A-Za-z0-9]{12}\d{2}$/;
