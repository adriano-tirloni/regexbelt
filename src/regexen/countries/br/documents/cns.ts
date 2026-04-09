/**
 * Matches a Brazilian CNS (national health card) number starting with 1-2 or 7-9 followed by 14 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '198765432100010'
 * @example ❌ '398765432100010'
 */
export const cns = /^(?:[12]\d{10}00[01]\d|[789]\d{14})$/;
