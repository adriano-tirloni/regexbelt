/** Valid formatted CEP numbers (XXXXX-XXX) */
export const validCepFormatted = {
  /** CEP for central Sao Paulo */
  saoPauloCentro: '01001-000',
  /** Standard CEP */
  standard: '12345-678',
  /** All nines — maximum digit values */
  allNines: '99999-999',
};

/** Invalid formatted CEP strings */
export const invalidCepFormatted = {
  /** Missing dash separator */
  noDash: '01001000',
  /** Too short — missing digit before dash */
  tooShort: '0100-000',
  /** Too long — extra digit after dash */
  tooLong: '123456-789',
  /** Alphabetic characters instead of digits */
  alphabetic: 'abcde-fgh',
  /** Invalid prefix — no postal region 00 exists */
  zeroPrefix: '00000-000',
};

/** Valid stripped CEP numbers (8 consecutive digits) */
export const validCepStripped = {
  /** CEP for central Sao Paulo without formatting */
  saoPauloCentro: '01001000',
  /** Standard CEP */
  standard: '12345678',
  /** All nines */
  allNines: '99999999',
};

/** Invalid stripped CEP strings */
export const invalidCepStripped = {
  /** Formatted CEP — not stripped */
  formatted: '01001-000',
  /** Too few digits */
  tooShort: '0100100',
  /** Too many digits */
  tooLong: '010010001',
  /** Alphabetic characters */
  alphabetic: 'abcdefgh',
  /** Invalid prefix — no postal region 00 exists */
  zeroPrefix: '00000000',
};
