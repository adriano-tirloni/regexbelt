/** Valid Distrito Federal (DF) Inscricao Estadual numbers */
export const validInscricaoEstadualDF = {
  /** Formatted with dash */
  formatted: '12345678-90',
  /** Stripped — 10 digits */
  stripped: '1234567890',
  /** All zeros — structurally valid */
  allZeros: '00000000-00',
};

/** Invalid Distrito Federal (DF) Inscricao Estadual strings */
export const invalidInscricaoEstadualDF = {
  /** Too short — 7 digits before dash */
  tooShort: '1234567-90',
  /** Only 1-digit check */
  singleCheck: '12345678-9',
  /** Alphabetic characters */
  alphabetic: 'abcdefgh-ij',
  /** Too long — 11 digits */
  tooLong: '12345678-901',
};
