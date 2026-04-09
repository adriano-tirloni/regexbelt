/** Valid Minas Gerais (MG) Inscricao Estadual numbers */
export const validInscricaoEstadualMG = {
  /** Fully formatted */
  formatted: '123.456.789/0123',
  /** Fully stripped */
  stripped: '1234567890123',
  /** All zeros — structurally valid */
  allZeros: '000.000.000/0000',
};

/** Invalid Minas Gerais (MG) Inscricao Estadual strings */
export const invalidInscricaoEstadualMG = {
  /** Too short — missing last digit */
  tooShort: '123.456.789/012',
  /** Wrong separator — dash instead of slash */
  wrongSeparator: '123.456.789-0123',
  /** Too long — extra digit */
  tooLong: '123.456.789/01234',
  /** Alphabetic characters */
  alphabetic: 'abc.def.ghi/jklm',
};
