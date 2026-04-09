/** Valid Santa Catarina (SC) Inscricao Estadual numbers */
export const validInscricaoEstadualSC = {
  /** Fully formatted */
  formatted: '123.456.789',
  /** Fully stripped */
  stripped: '123456789',
  /** All zeros — structurally valid */
  allZeros: '000.000.000',
};

/** Invalid Santa Catarina (SC) Inscricao Estadual strings */
export const invalidInscricaoEstadualSC = {
  /** Too short — 2-digit last group */
  tooShort: '123.456.78',
  /** Extra digit */
  extraDigit: '123.456.789.0',
  /** Wrong separator — dashes instead of dots */
  wrongSeparator: '123-456-789',
  /** Alphabetic characters */
  alphabetic: 'abc.def.ghi',
};
