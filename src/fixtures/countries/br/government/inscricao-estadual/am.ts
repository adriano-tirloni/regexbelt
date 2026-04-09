/** Valid Amazonas (AM) Inscricao Estadual numbers */
export const validInscricaoEstadualAM = {
  /** Fully formatted */
  formatted: '12.345.678-9',
  /** Fully stripped */
  stripped: '123456789',
  /** All zeros — structurally valid */
  allZeros: '00.000.000-0',
};

/** Invalid Amazonas (AM) Inscricao Estadual strings */
export const invalidInscricaoEstadualAM = {
  /** Extra digit at the end */
  extraDigit: '12.345.678-90',
  /** First group has only 1 digit */
  shortFirstGroup: '1.345.678-9',
  /** Too short — missing check digit */
  tooShort: '12.345.678-',
  /** Too long — stripped with extra digit */
  tooLong: '1234567890',
};
