/** Valid Acre (AC) Inscricao Estadual numbers */
export const validInscricaoEstadualAC = {
  /** Fully formatted */
  formatted: '01.234.567/890-12',
  /** Partially stripped — only dash */
  partiallyStripped: '01234567890-12',
  /** Fully stripped */
  stripped: '0123456789012',
};

/** Invalid Acre (AC) Inscricao Estadual strings */
export const invalidInscricaoEstadualAC = {
  /** Does not start with 01 */
  wrongPrefix: '02.234.567/890-12',
  /** Missing prefix digits */
  missingPrefix: '234.567/890-12',
  /** Too short */
  tooShort: '01.234.567/890-1',
  /** Alphabetic characters */
  alphabetic: 'ab.cde.fgh/ijk-lm',
};
