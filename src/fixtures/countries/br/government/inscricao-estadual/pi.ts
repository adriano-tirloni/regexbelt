/** Valid Piaui (PI) Inscricao Estadual numbers */
export const validInscricaoEstadualPI = {
  /** Standard 9-digit number */
  standard: '123456789',
  /** All zeros — structurally valid */
  allZeros: '000000000',
  /** All nines — maximum digit values */
  allNines: '999999999',
};

/** Invalid Piaui (PI) Inscricao Estadual strings */
export const invalidInscricaoEstadualPI = {
  /** Too short — 8 digits */
  tooShort: '12345678',
  /** Too long — 10 digits */
  tooLong: '1234567890',
  /** Has dash separator */
  hasDash: '12345678-9',
  /** Alphabetic characters */
  alphabetic: 'abcdefghi',
};
