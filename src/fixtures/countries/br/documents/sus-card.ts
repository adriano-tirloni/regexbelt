/** Valid formatted SUS card numbers (XXX XXXX XXXX XXXX) */
export const validSusCardFormatted = {
  /** Standard SUS card number */
  standard: '123 4567 8901 2345',
  /** All zeros */
  allZeros: '000 0000 0000 0000',
  /** All nines */
  allNines: '999 9999 9999 9999',
};

/** Invalid formatted SUS card strings */
export const invalidSusCardFormatted = {
  /** Digits only, no spaces */
  noSpaces: '123456789012345',
  /** Dots instead of spaces */
  dotsInstead: '123.4567.8901.2345',
  /** Too few digits in last group */
  tooShort: '123 4567 8901 234',
  /** Dashes instead of spaces */
  dashesInstead: '123-4567-8901-2345',
};

/** Valid stripped SUS card numbers (15 consecutive digits) */
export const validSusCardStripped = {
  /** Standard SUS card without formatting */
  standard: '123456789012345',
  /** All zeros */
  allZeros: '000000000000000',
  /** All nines */
  allNines: '999999999999999',
};

/** Invalid stripped SUS card strings */
export const invalidSusCardStripped = {
  /** Formatted with spaces — not stripped */
  formatted: '123 4567 8901 2345',
  /** Too few digits */
  tooShort: '12345678901234',
  /** Too many digits */
  tooLong: '1234567890123456',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijklmno',
};
