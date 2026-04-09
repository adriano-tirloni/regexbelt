/**
 * Matches a Vehicle Identification Number (VIN) with 17 alphanumeric characters
 *
 * Excludes letters I, O, and Q as per VIN standard
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1HGBH41JXMN109186'
 * @example ❌ '1hgbh41jxmn109186'
 */
export const vin = /^[A-HJ-NPR-Z0-9]{17}$/;
