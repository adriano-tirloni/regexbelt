/**
 * Matches a Brazilian CEP (postal code) in the format XXXXX-XXX
 *
 * Rejects the `00` prefix as no postal region `00` exists (lowest CEP is `01001-000`)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '01001-000'
 * @example ❌ '01001000'
 * @example ❌ '00000-000'
 */
export const cepFormatted = /^(?:0[1-9]|[1-9]\d)\d{3}-\d{3}$/;

/**
 * Matches a Brazilian CEP (postal code) as 8 consecutive digits
 *
 * Rejects the `00` prefix as no postal region `00` exists (lowest CEP is `01001000`)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '01001000'
 * @example ❌ '01001-000'
 * @example ❌ '00000000'
 */
export const cepStripped = /^(?:0[1-9]|[1-9]\d)\d{6}$/;
