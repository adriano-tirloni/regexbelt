/** Valid CNES codes (7 digits) */
export const validCnes = {
  /** Standard CNES code */
  standard: '1234567',
  /** All zeros — structurally valid */
  allZeros: '0000000',
  /** All nines — maximum digit values */
  allNines: '9999999',
};

/** Invalid CNES code strings */
export const invalidCnes = {
  /** Too few digits */
  tooShort: '123456',
  /** Too many digits */
  tooLong: '12345678',
  /** Alphabetic characters */
  alphabetic: 'abcdefg',
  /** Digits with dot separators */
  withDots: '123.456.7',
};
