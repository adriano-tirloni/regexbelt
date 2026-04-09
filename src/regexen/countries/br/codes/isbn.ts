/**
 * Matches an ISBN-13: prefix 978 or 979 followed by 10 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '9780306406157'
 * @example ❌ '9770306406157'
 */
export const isbn13 = /^(?:978|979)\d{10}$/;

/**
 * Matches an ISBN-10: 9 digits followed by a check character (digit or uppercase X)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '0306406152'
 * @example ❌ '123456789x'
 */
export const isbn10 = /^\d{9}[\dX]$/;
