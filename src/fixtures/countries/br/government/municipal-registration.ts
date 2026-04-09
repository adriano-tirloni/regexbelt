/** Valid Municipal Registration numbers (6 to 15 digits) */
export const validMunicipalRegistration = {
  /** Minimum length — 6 digits */
  minLength: '123456',
  /** Maximum length — 15 digits */
  maxLength: '123456789012345',
  /** Mid-range — 10 digits */
  midRange: '1234567890',
};

/** Invalid Municipal Registration strings */
export const invalidMunicipalRegistration = {
  /** Too short — 5 digits */
  tooShort: '12345',
  /** Too long — 16 digits */
  tooLong: '1234567890123456',
  /** Alphabetic characters */
  alphabetic: 'abcdefghij',
  /** Contains dot separators */
  withDots: '123.456.789',
};
