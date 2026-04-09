/** Valid formatted RENAVAM numbers (XXXX.XXXXXX-X) */
export const validRenavamFormatted = {
  /** Standard RENAVAM */
  standard: '1234.567890-1',
  /** All zeros — structurally valid */
  allZeros: '0000.000000-0',
  /** All nines — maximum digit values */
  allNines: '9999.999999-9',
};

/** Invalid formatted RENAVAM strings */
export const invalidRenavamFormatted = {
  /** Missing dot separator */
  noDot: '1234567890-1',
  /** Missing dash separator */
  noDash: '1234.5678901',
  /** Too short — missing digit before dot */
  tooShort: '123.567890-1',
  /** Digits only, no formatting */
  unformatted: '12345678901',
};

/** Valid stripped RENAVAM numbers (11 consecutive digits) */
export const validRenavamStripped = {
  /** Standard RENAVAM without formatting */
  standard: '12345678901',
  /** All zeros */
  allZeros: '00000000000',
  /** All nines */
  allNines: '99999999999',
};

/** Invalid stripped RENAVAM strings */
export const invalidRenavamStripped = {
  /** Formatted RENAVAM — not stripped */
  formatted: '1234.567890-1',
  /** Too few digits */
  tooShort: '1234567890',
  /** Too many digits */
  tooLong: '123456789012',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijk',
};
