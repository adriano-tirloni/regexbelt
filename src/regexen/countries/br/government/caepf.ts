/**
 * Matches a Brazilian CAEPF number in the format XXX.XXX.XXX-XX/XX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.456.789-01/23'
 * @example ❌ '123456789-01/23'
 */
export const caepf = /^\d{3}\.\d{3}\.\d{3}-\d{2}\/\d{2}$/;
