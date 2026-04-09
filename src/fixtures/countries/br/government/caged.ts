/** Valid CAGED numbers (7 consecutive digits) */
export const validCaged = {
  /** Standard CAGED number */
  standard: '1234567',
  /** All zeros — structurally valid */
  allZeros: '0000000',
  /** All nines — maximum digit values */
  allNines: '9999999',
};

/** Invalid CAGED strings */
export const invalidCaged = {
  /** Too short — 6 digits */
  tooShort: '123456',
  /** Too long — 8 digits */
  tooLong: '12345678',
  /** Alphabetic characters */
  alphabetic: 'abcdefg',
  /** Contains separator */
  withSeparator: '123-4567',
};
