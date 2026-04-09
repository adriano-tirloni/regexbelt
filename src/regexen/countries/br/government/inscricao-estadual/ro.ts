/**
 * Matches a Rondonia (RO) Inscricao Estadual in the old format (before 01/08/2000) XXX.XXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.45678-9'
 * @example ❌ '123.4567-9'
 */
export const inscricaoEstadualROOld = /^\d{3}\.?\d{5}-?\d$/;

/**
 * Matches a Rondonia (RO) Inscricao Estadual in the new format (after 01/08/2000) XXXXXXXXXXXXX-X
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567890123-4'
 * @example ❌ '123456789012-4'
 */
export const inscricaoEstadualRONew = /^\d{13}-?\d$/;
