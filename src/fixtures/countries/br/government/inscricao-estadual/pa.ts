/** Valid Para (PA) Inscricao Estadual numbers */
export const validInscricaoEstadualPA = {
  /** Formatted with dash */
  formatted: '15123456-7',
  /** Stripped — 9 digits */
  stripped: '151234567',
  /** All zeros after prefix */
  allZeros: '15000000-0',
};

/** Invalid Para (PA) Inscricao Estadual strings */
export const invalidInscricaoEstadualPA = {
  /** Does not start with 15 */
  wrongPrefix: '16123456-7',
  /** Too short — 5 digits after prefix */
  tooShort: '1512345-7',
  /** Extra digit at the end */
  extraDigit: '15123456-78',
  /** Alphabetic characters */
  alphabetic: '15abcdef-g',
};
