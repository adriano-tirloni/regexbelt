/**
 * Matches a 24-hour time in HH:MM:SS format
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '23:59:59'
 * @example ✅ '00:00:00'
 * @example ❌ '24:00:00'
 * @example ❌ '23:59'
 */
export const time24hhmmss = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

/**
 * Matches a 24-hour time in HH:MM format
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '23:59'
 * @example ✅ '00:00'
 * @example ❌ '24:00'
 * @example ❌ '23:59:59'
 */
export const time24hhmm = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

/**
 * Matches a 24-hour hour in HH format
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '23'
 * @example ✅ '00'
 * @example ❌ '24'
 * @example ❌ '5'
 */
export const time24hh = /^(?:[01]\d|2[0-3])$/;
