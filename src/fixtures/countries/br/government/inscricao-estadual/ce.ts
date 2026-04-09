/** Valid Ceara (CE) Inscricao Estadual numbers */
export const validInscricaoEstadualCE = {
  /** Formatted with dash */
  formatted: '12345678-9',
  /** Stripped — 9 digits */
  stripped: '123456789',
  /** All zeros — structurally valid */
  allZeros: '00000000-0',
};

/** Invalid Ceara (CE) Inscricao Estadual strings */
export const invalidInscricaoEstadualCE = {
  /** Too short — 7 digits before dash */
  tooShort: '1234567-9',
  /** Extra digit at the end */
  extraDigit: '12345678-90',
  /** Alphabetic characters */
  alphabetic: 'abcdefgh-i',
  /** Wrong separator */
  wrongSeparator: '12345678.9',
};
