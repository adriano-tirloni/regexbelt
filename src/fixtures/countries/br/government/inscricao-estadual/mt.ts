/** Valid Mato Grosso (MT) Inscricao Estadual numbers */
export const validInscricaoEstadualMT = {
  /** Formatted with dash */
  formatted: '1234567890-1',
  /** Stripped — 11 digits */
  stripped: '12345678901',
  /** All zeros — structurally valid */
  allZeros: '0000000000-0',
};

/** Invalid Mato Grosso (MT) Inscricao Estadual strings */
export const invalidInscricaoEstadualMT = {
  /** Too short — 9 digits before dash */
  tooShort: '123456789-1',
  /** Extra digit at the end */
  extraDigit: '1234567890-12',
  /** Alphabetic characters */
  alphabetic: 'abcdefghij-k',
  /** Wrong separator */
  wrongSeparator: '1234567890.1',
};
