/** Valid Pernambuco (PE) Inscricao Estadual numbers */
export const validInscricaoEstadualPE = {
  /** Formatted with dash */
  formatted: '1234567-89',
  /** Stripped — 9 digits */
  stripped: '123456789',
  /** All zeros — structurally valid */
  allZeros: '0000000-00',
};

/** Invalid Pernambuco (PE) Inscricao Estadual strings */
export const invalidInscricaoEstadualPE = {
  /** Too short — 6 digits before dash */
  tooShort: '123456-89',
  /** Wrong split — 8+1 instead of 7+2 */
  wrongSplit: '12345678-9',
  /** Alphabetic characters */
  alphabetic: 'abcdefg-hi',
  /** Too long — 10 digits */
  tooLong: '12345678-90',
};
