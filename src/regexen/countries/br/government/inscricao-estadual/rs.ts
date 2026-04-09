/**
 * Matches a Rio Grande do Sul (RS) Inscricao Estadual in the format XXX/XXXXXXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123/4567890'
 * @example ❌ '123/456789'
 */
export const inscricaoEstadualRS = /^\d{3}\/?\d{7}$/;
