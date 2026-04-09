/** Valid Sao Paulo (SP) Inscricao Estadual numbers */
export const validInscricaoEstadualSP = {
  /** Fully formatted */
  formatted: '123.456.789.012',
  /** Fully stripped */
  stripped: '123456789012',
  /** All zeros — structurally valid */
  allZeros: '000.000.000.000',
};

/** Invalid Sao Paulo (SP) Inscricao Estadual strings */
export const invalidInscricaoEstadualSP = {
  /** Too short — only 3 groups */
  tooShort: '123.456.789',
  /** Too long — extra digit */
  tooLong: '123.456.789.0123',
  /** Wrong separator — dashes */
  wrongSeparator: '123-456-789-012',
  /** Alphabetic characters */
  alphabetic: 'abc.def.ghi.jkl',
};

/** Valid Sao Paulo (SP) rural Inscricao Estadual numbers */
export const validInscricaoEstadualSPRural = {
  /** Fully formatted */
  formatted: 'P-12345678.9/012',
  /** Stripped — no separators */
  stripped: 'P123456789012',
  /** All zeros — structurally valid */
  allZeros: 'P-00000000.0/000',
};

/** Invalid Sao Paulo (SP) rural Inscricao Estadual strings */
export const invalidInscricaoEstadualSPRural = {
  /** Missing P prefix */
  noPrefix: '12345678.9/012',
  /** Too short — missing digits */
  tooShort: 'P-1234567.9/012',
  /** Too long — extra digit */
  tooLong: 'P-123456789.9/012',
  /** Lowercase p */
  lowercase: 'p-12345678.9/012',
};
