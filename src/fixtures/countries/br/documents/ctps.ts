/** Valid CTPS numbers (7 consecutive digits) */
export const validCtps = {
  /** Standard CTPS number */
  standard: '1234567',
  /** All zeros */
  allZeros: '0000000',
  /** All nines */
  allNines: '9999999',
};

/** Invalid CTPS strings */
export const invalidCtps = {
  /** Too few digits */
  tooShort: '123456',
  /** Too many digits */
  tooLong: '12345678',
  /** Alphabetic characters */
  alphabetic: 'abcdefg',
  /** Dash separator in the middle */
  withDash: '123-4567',
};
