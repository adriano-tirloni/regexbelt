/** Valid ENEM registration numbers (12 digits) */
export const validEnem = {
  /** Standard ENEM number */
  standard: '123456789012',
  /** All zeros — structurally valid */
  allZeros: '000000000000',
  /** All nines — maximum digit values */
  allNines: '999999999999',
};

/** Invalid ENEM registration strings */
export const invalidEnem = {
  /** Too few digits */
  tooShort: '12345678901',
  /** Too many digits */
  tooLong: '1234567890123',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijkl',
  /** Digits with dot separators */
  withDots: '123.456.789.012',
};
