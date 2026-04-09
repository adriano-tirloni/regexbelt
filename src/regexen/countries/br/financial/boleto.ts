/**
 * Matches a Brazilian boleto payment line in the formatted pattern
 * XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXXXXXXXXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '23793.38128 60000.000003 00000.000408 1 84340000019900'
 * @example ❌ '23793381286000000000300000000408184340000019900'
 */
export const boletoFormatted = /^\d{5}\.\d{5}\s\d{5}\.\d{6}\s\d{5}\.\d{6}\s\d\s\d{14}$/;

/**
 * Matches a Brazilian boleto payment line as 47 consecutive digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '23793381286000000000300000000408184340000019900'
 * @example ❌ '23793.38128 60000.000003 00000.000408 1 84340000019900'
 */
export const boletoStripped = /^\d{47}$/;
