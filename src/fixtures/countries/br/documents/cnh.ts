/** Valid CNH numbers (11 consecutive digits) */
export const validCnh = {
  /** Standard CNH number */
  standard: '12345678901',
  /** All zeros */
  allZeros: '00000000000',
  /** All nines */
  allNines: '99999999999',
};

/** Invalid CNH strings */
export const invalidCnh = {
  /** Too few digits */
  tooShort: '1234567890',
  /** Too many digits */
  tooLong: '123456789012',
  /** Formatted with dots and dash — not valid */
  withDots: '123.456.789-01',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijk',
};
