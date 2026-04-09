/** Valid Parana (PR) Inscricao Estadual numbers */
export const validInscricaoEstadualPR = {
  /** Fully formatted */
  formatted: '123.45678-90',
  /** Partially stripped — no dot */
  partiallyStripped: '12345678-90',
  /** Fully stripped */
  stripped: '1234567890',
};

/** Invalid Parana (PR) Inscricao Estadual strings */
export const invalidInscricaoEstadualPR = {
  /** Too short — 4-digit middle group */
  tooShort: '123.4567-90',
  /** Too long — 6-digit middle group */
  tooLong: '123.456789-90',
  /** Alphabetic characters */
  alphabetic: 'abc.defgh-ij',
  /** Wrong separator */
  wrongSeparator: '123-45678.90',
};
