/** Valid formatted RG numbers (X.XXX.XXX-X or XX.XXX.XXX-X) */
export const validRgFormatted = {
  /** Single-digit prefix with numeric check */
  singleDigitPrefix: '1.234.567-8',
  /** Double-digit prefix with numeric check */
  doubleDigitPrefix: '12.345.678-9',
  /** Uppercase X as check character */
  uppercaseX: '12.345.678-X',
  /** Lowercase x as check character */
  lowercaseX: '12.345.678-x',
};

/** Invalid formatted RG strings */
export const invalidRgFormatted = {
  /** Digits only, no separators */
  noSeparators: '123456789',
  /** Missing dash before check character */
  missingDash: '12.345.6789',
  /** Invalid check character */
  wrongCheck: '12.345.678-AB',
  /** Too many digits in prefix */
  tooLongPrefix: '123.345.678-9',
};

/** Valid stripped RG numbers (8 or 9 characters) */
export const validRgStripped = {
  /** Eight-digit RG */
  eightDigits: '12345678',
  /** Nine-digit RG */
  nineDigits: '123456789',
  /** Uppercase X as check character */
  uppercaseX: '12345678X',
  /** Lowercase x as check character */
  lowercaseX: '12345678x',
};

/** Invalid stripped RG strings */
export const invalidRgStripped = {
  /** Formatted RG — not stripped */
  formatted: '12.345.678-9',
  /** Too few characters */
  tooShort: '1234567',
  /** Too many characters */
  tooLong: '1234567890',
  /** Alphabetic characters */
  alphabetic: 'abcdefghi',
};
