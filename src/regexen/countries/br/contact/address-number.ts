/**
 * Matches a Brazilian address number: one or more digits, or S/N (case-insensitive)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123'
 * @example ❌ 'ABC'
 */
export const addressNumber = /^(?:\d+|[Ss]\/[Nn])$/;
