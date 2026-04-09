/** Valid ANTT registration numbers (8 consecutive digits) */
export const validAntt = {
  /** Standard ANTT number */
  standard: '12345678',
  /** All zeros — structurally valid */
  allZeros: '00000000',
  /** All nines — maximum digit values */
  allNines: '99999999',
};

/** Invalid ANTT registration strings */
export const invalidAntt = {
  /** Too few digits */
  tooShort: '1234567',
  /** Too many digits */
  tooLong: '123456789',
  /** Alphabetic characters instead of digits */
  alphabetic: 'abcdefgh',
  /** Digits separated by dash */
  withDash: '1234-5678',
};
