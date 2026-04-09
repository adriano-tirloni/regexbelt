/**
 * Matches an EAN-13 barcode as 13 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '7891234567890'
 * @example ❌ '789123456789'
 */
export const ean13 = /^\d{13}$/;
