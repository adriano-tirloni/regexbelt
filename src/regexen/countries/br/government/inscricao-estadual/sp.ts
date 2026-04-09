/**
 * Matches a Sao Paulo (SP) Inscricao Estadual in the format XXX.XXX.XXX.XXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.456.789.012'
 * @example ❌ '123.456.789'
 */
export const inscricaoEstadualSP = /^\d{3}\.?\d{3}\.?\d{3}\.?\d{3}$/;

/**
 * Matches a Sao Paulo (SP) rural Inscricao Estadual in the format P-XXXXXXXX.X/XXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'P-12345678.9/012'
 * @example ❌ '12345678.9/012'
 */
export const inscricaoEstadualSPRural = /^P-?\d{8}\.?\d\/?\d{3}$/;
