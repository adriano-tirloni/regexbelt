/** Valid Amapa (AP) Inscricao Estadual numbers */
export const validInscricaoEstadualAP = {
  /** Standard AP number */
  standard: '031234567',
  /** All zeros after prefix */
  allZeros: '030000000',
  /** All nines after prefix */
  allNines: '039999999',
};

/** Invalid Amapa (AP) Inscricao Estadual strings */
export const invalidInscricaoEstadualAP = {
  /** Does not start with 03 */
  wrongPrefix: '041234567',
  /** Too short — 8 digits */
  tooShort: '03123456',
  /** Too long — 10 digits */
  tooLong: '0312345678',
  /** Alphabetic characters */
  alphabetic: '03abcdefg',
};
