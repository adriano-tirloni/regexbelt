/**
 * Matches an Alagoas (AL) Inscricao Estadual starting with 24 followed by 0, 3, 5, 7, or 8
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '240123456'
 * @example ❌ '241123456'
 */
export const inscricaoEstadualAL = /^24[03578]\d{6}$/;
