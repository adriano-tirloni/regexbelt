/**
 * Matches a Minas Gerais (MG) Inscricao Estadual in the format XXX.XXX.XXX/XXXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123.456.789/0123'
 * @example ❌ '123.456.789/012'
 */
export const inscricaoEstadualMG = /^\d{3}\.?\d{3}\.?\d{3}\/?\d{4}$/;
