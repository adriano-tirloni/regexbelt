/** Valid formatted PIS/PASEP numbers (XXX.XXXXX.XX-X) */
export const validPisPasepFormatted = {
  /** Standard PIS/PASEP */
  standard: '123.45678.90-1',
  /** All zeros */
  allZeros: '000.00000.00-0',
  /** All nines */
  allNines: '999.99999.99-9',
};

/** Invalid formatted PIS/PASEP strings */
export const invalidPisPasepFormatted = {
  /** Digits only, no formatting */
  noDots: '12345678901',
  /** CPF format instead of PIS/PASEP format */
  wrongFormat: '123.456.789-01',
  /** Too few digits in second group */
  tooShort: '123.4567.90-1',
  /** Missing dash separator */
  missingDash: '123.45678.901',
};

/** Valid stripped PIS/PASEP numbers (11 consecutive digits) */
export const validPisPasepStripped = {
  /** Standard PIS/PASEP without formatting */
  standard: '12345678901',
  /** All zeros */
  allZeros: '00000000000',
  /** All nines */
  allNines: '99999999999',
};

/** Invalid stripped PIS/PASEP strings */
export const invalidPisPasepStripped = {
  /** Formatted PIS/PASEP — not stripped */
  formatted: '123.45678.90-1',
  /** Too few digits */
  tooShort: '1234567890',
  /** Too many digits */
  tooLong: '123456789012',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijk',
};
