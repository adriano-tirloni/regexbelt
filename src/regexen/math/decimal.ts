/**
 * Matches a positive decimal number (no leading zeros except before the dot)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1.5'
 * @example ✅ '0.123'
 * @example ✅ '123.456'
 * @example ❌ '-1.5'
 * @example ❌ '1'
 */
export const positiveDecimal = /^(?:0|[1-9]\d*)\.\d+$/;

/**
 * Matches a negative decimal number (no leading zeros except before the dot)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '-1.5'
 * @example ✅ '-0.123'
 * @example ❌ '1.5'
 * @example ❌ '-1'
 */
export const negativeDecimal = /^-(?:0|[1-9]\d*)\.\d+$/;

/**
 * Matches any decimal number including negative (no leading zeros except before the dot)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1.5'
 * @example ✅ '-0.123'
 * @example ✅ '0.0'
 * @example ❌ '1'
 * @example ❌ '-1'
 */
export const decimal = /^-?(?:0|[1-9]\d*)\.\d+$/;
