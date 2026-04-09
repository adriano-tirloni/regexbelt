/**
 * Matches a Brazilian birth or marriage certificate number in the national unified format XXXXXX XX XX XXXX X XXXXX XXX XXXXXXX-XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '104753 01 55 2013 1 00025 003 1234567-89'
 * @example ❌ '1047530155201310002500312345678-9'
 */
export const birthMarriageCertificate =
  /^\d{6}\s\d{2}\s\d{2}\s\d{4}\s\d\s\d{5}\s\d{3}\s\d{7}-\d{2}$/;
