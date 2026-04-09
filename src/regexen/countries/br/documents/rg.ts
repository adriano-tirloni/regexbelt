/**
 * Matches a Brazilian RG number in the format X.XXX.XXX-X or XX.XXX.XXX-X where the last character can be a digit or X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '12.345.678-9'
 * @example ❌ '123456789'
 */
export const rgFormatted = /^\d{1,2}\.\d{3}\.\d{3}-[\dXx]$/;

/**
 * Matches a Brazilian RG number as 8 or 9 characters (7-8 digits followed by a digit or X)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123456789'
 * @example ❌ '12.345.678-9'
 */
export const rgStripped = /^\d{7,8}[\dXx]$/;
