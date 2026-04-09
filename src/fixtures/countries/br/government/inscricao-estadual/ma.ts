/** Valid Maranhao (MA) Inscricao Estadual numbers */
export const validInscricaoEstadualMA = {
  /** Standard MA number */
  standard: '121234567',
  /** All zeros after prefix */
  allZeros: '120000000',
  /** All nines after prefix */
  allNines: '129999999',
};

/** Invalid Maranhao (MA) Inscricao Estadual strings */
export const invalidInscricaoEstadualMA = {
  /** Does not start with 12 */
  wrongPrefix: '131234567',
  /** Too short — 8 digits */
  tooShort: '12123456',
  /** Too long — 10 digits */
  tooLong: '1212345678',
  /** Alphabetic characters */
  alphabetic: '12abcdefg',
};
