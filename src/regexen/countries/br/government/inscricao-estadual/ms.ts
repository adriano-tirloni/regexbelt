/**
 * Matches a Mato Grosso do Sul (MS) Inscricao Estadual starting with 28 followed by 7 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '281234567'
 * @example ❌ '291234567'
 */
export const inscricaoEstadualMS = /^28\d{7}$/;
