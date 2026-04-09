/** Valid Rio Grande do Norte (RN) Inscricao Estadual 9-digit numbers */
export const validInscricaoEstadualRN9 = {
  /** Fully formatted */
  formatted: '20.123.456-7',
  /** Fully stripped */
  stripped: '201234567',
  /** All zeros after prefix */
  allZeros: '20.000.000-0',
};

/** Invalid Rio Grande do Norte (RN) Inscricao Estadual 9-digit strings */
export const invalidInscricaoEstadualRN9 = {
  /** Does not start with 20 */
  wrongPrefix: '21.123.456-7',
  /** Too long — 10 digits */
  tooLong: '2012345678',
  /** Extra digit at the end */
  extraDigit: '20.123.456-78',
  /** Alphabetic characters */
  alphabetic: '20.abc.def-g',
};

/** Valid Rio Grande do Norte (RN) Inscricao Estadual 10-digit numbers */
export const validInscricaoEstadualRN10 = {
  /** Fully formatted */
  formatted: '20.1.234.567-8',
  /** Fully stripped */
  stripped: '2012345678',
  /** All zeros after prefix */
  allZeros: '20.0.000.000-0',
};

/** Invalid Rio Grande do Norte (RN) Inscricao Estadual 10-digit strings */
export const invalidInscricaoEstadualRN10 = {
  /** Does not start with 20 */
  wrongPrefix: '21.1.234.567-8',
  /** Too short — 9 digits */
  tooShort: '201234567',
  /** Extra digit at the end */
  extraDigit: '20.1.234.567-89',
  /** Alphabetic characters */
  alphabetic: '20.a.bcd.efg-h',
};
