/** Valid Rio Grande do Sul (RS) Inscricao Estadual numbers */
export const validInscricaoEstadualRS = {
  /** Formatted with slash */
  formatted: '123/4567890',
  /** Stripped — 10 digits */
  stripped: '1234567890',
  /** All zeros — structurally valid */
  allZeros: '000/0000000',
};

/** Invalid Rio Grande do Sul (RS) Inscricao Estadual strings */
export const invalidInscricaoEstadualRS = {
  /** Too short — 6 digits after slash */
  tooShort: '123/456789',
  /** Wrong separator — dash instead of slash */
  wrongSeparator: '123-4567890',
  /** Too long — 8 digits after slash */
  tooLong: '123/45678901',
  /** Alphabetic characters */
  alphabetic: 'abc/defghij',
};
