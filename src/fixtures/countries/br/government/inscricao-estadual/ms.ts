/** Valid Mato Grosso do Sul (MS) Inscricao Estadual numbers */
export const validInscricaoEstadualMS = {
  /** Standard MS number */
  standard: '281234567',
  /** All zeros after prefix */
  allZeros: '280000000',
  /** All nines after prefix */
  allNines: '289999999',
};

/** Invalid Mato Grosso do Sul (MS) Inscricao Estadual strings */
export const invalidInscricaoEstadualMS = {
  /** Does not start with 28 */
  wrongPrefix: '291234567',
  /** Too short — 8 digits */
  tooShort: '28123456',
  /** Too long — 10 digits */
  tooLong: '2812345678',
  /** Alphabetic characters */
  alphabetic: '28abcdefg',
};
