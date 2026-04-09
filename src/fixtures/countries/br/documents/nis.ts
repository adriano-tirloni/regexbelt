/** Valid NIS numbers (XXX.XXXXX.XX-X) */
export const validNis = {
  /** Standard NIS number */
  standard: '123.45678.90-1',
  /** All zeros */
  allZeros: '000.00000.00-0',
  /** All nines */
  allNines: '999.99999.99-9',
};

/** Invalid NIS strings */
export const invalidNis = {
  /** Digits only, no formatting */
  noDots: '12345678901',
  /** Wrong separator characters */
  wrongSeparators: '123-45678-90.1',
  /** Too few digits in second group */
  tooShort: '123.4567.90-1',
  /** Missing dot separator */
  missingDot: '12345678.90-1',
};
