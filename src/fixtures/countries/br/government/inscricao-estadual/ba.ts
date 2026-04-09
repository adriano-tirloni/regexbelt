/** Valid Bahia (BA) Inscricao Estadual 9-digit numbers */
export const validInscricaoEstadualBA9 = {
  /** Formatted with dash */
  formatted: '1234567-89',
  /** Stripped — 9 digits */
  stripped: '123456789',
  /** All zeros — structurally valid */
  allZeros: '0000000-00',
};

/** Invalid Bahia (BA) Inscricao Estadual 9-digit strings */
export const invalidInscricaoEstadualBA9 = {
  /** Too short — 8 digits with dash (6+2) */
  tooShort: '123456-89',
  /** Too long — 10 digits */
  tooLong: '12345678-90',
  /** Alphabetic characters */
  alphabetic: 'abcdefg-hi',
  /** Wrong separator */
  wrongSeparator: '1234567.89',
};

/** Valid Bahia (BA) Inscricao Estadual 8-digit numbers */
export const validInscricaoEstadualBA8 = {
  /** Formatted with dash */
  formatted: '123456-78',
  /** Stripped — 8 digits */
  stripped: '12345678',
  /** All zeros — structurally valid */
  allZeros: '000000-00',
};

/** Invalid Bahia (BA) Inscricao Estadual 8-digit strings */
export const invalidInscricaoEstadualBA8 = {
  /** Too long — 9-digit format */
  tooLong: '1234567-89',
  /** Too short — 7 digits */
  tooShort: '12345-78',
  /** Alphabetic characters */
  alphabetic: 'abcdef-gh',
  /** Wrong separator */
  wrongSeparator: '123456.78',
};
