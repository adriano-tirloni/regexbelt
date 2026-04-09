/** Valid Rio de Janeiro (RJ) Inscricao Estadual numbers */
export const validInscricaoEstadualRJ = {
  /** Fully formatted */
  formatted: '12.345.67-8',
  /** Fully stripped */
  stripped: '12345678',
  /** All zeros — structurally valid */
  allZeros: '00.000.00-0',
};

/** Invalid Rio de Janeiro (RJ) Inscricao Estadual strings */
export const invalidInscricaoEstadualRJ = {
  /** Extra digit — 3 digits in third group */
  extraDigit: '12.345.678-9',
  /** First group has only 1 digit */
  shortFirstGroup: '1.345.67-8',
  /** Too long — stripped with extra digit */
  tooLong: '123456789',
  /** Alphabetic characters */
  alphabetic: 'ab.cde.fg-h',
};
