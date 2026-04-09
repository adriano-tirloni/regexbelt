/**
 * Matches a Brazilian SUFRAMA registration number in the format XX.XXX.XXX/XXXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12.345.678/0001'
 * @example ❌ '12345678/0001'
 */
export const suframa = /^\d{2}\.\d{3}\.\d{3}\/\d{4}$/;
