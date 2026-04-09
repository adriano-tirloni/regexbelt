/** Valid Roraima (RR) Inscricao Estadual numbers */
export const validInscricaoEstadualRR = {
  /** Formatted with dash */
  formatted: '24123456-7',
  /** Stripped — 9 digits */
  stripped: '241234567',
  /** All zeros after prefix */
  allZeros: '24000000-0',
};

/** Invalid Roraima (RR) Inscricao Estadual strings */
export const invalidInscricaoEstadualRR = {
  /** Does not start with 24 */
  wrongPrefix: '25123456-7',
  /** Too short — 5 digits after prefix */
  tooShort: '2412345-7',
  /** Extra digit at the end */
  extraDigit: '24123456-78',
  /** Alphabetic characters */
  alphabetic: '24abcdef-g',
};
