/**
 * Matches a positive integer (greater than zero, no leading zeros)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1'
 * @example ✅ '123'
 * @example ❌ '0'
 * @example ❌ '-1'
 * @example ❌ '01'
 */
export const positiveInteger = /^[1-9]\d*$/;

/**
 * Matches a negative integer (less than zero, no leading zeros)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '-1'
 * @example ✅ '-123'
 * @example ❌ '0'
 * @example ❌ '1'
 * @example ❌ '-01'
 */
export const negativeInteger = /^-[1-9]\d*$/;

/**
 * Matches any integer including zero (no leading zeros except for zero itself)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '0'
 * @example ✅ '123'
 * @example ✅ '-456'
 * @example ❌ '01'
 * @example ❌ '1.5'
 */
export const integer = /^(?:0|-?[1-9]\d*)$/;
