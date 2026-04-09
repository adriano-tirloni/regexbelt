/**
 * Matches a Brazilian phone number with formatting
 *
 * Supports optional +55 country code, area code in parentheses,
 * mobile (9-digit, starts with 9) or landline (8-digit), with dash separator
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '(11) 91234-5678'
 * @example ❌ '+55 11 91234-5678'
 */
export const phoneFormatted = /^(?:\+55\s)?(?:\(\d{2}\)\s)(?:9\d{4}|\d{4})-\d{4}$/;

/**
 * Matches a Brazilian phone number as 10 or 11 consecutive digits
 *
 * 2-digit area code followed by 8-digit landline or 9-digit mobile (starts with 9)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '11912345678'
 * @example ❌ '+55 (11) 91234-5678'
 */
export const phoneStripped = /^\d{2}(?:9\d{8}|\d{8})$/;
