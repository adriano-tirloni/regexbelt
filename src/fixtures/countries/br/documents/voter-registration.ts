/** Valid formatted voter registration numbers (XXXX XXXX XXXX) */
export const validVoterRegistrationFormatted = {
  /** Standard voter registration */
  standard: '1234 5678 9012',
  /** All zeros */
  allZeros: '0000 0000 0000',
  /** All nines */
  allNines: '9999 9999 9999',
};

/** Invalid formatted voter registration strings */
export const invalidVoterRegistrationFormatted = {
  /** Digits only, no spaces */
  noSpaces: '123456789012',
  /** Dashes instead of spaces */
  dashesInstead: '1234-5678-9012',
  /** Too few groups */
  tooFewGroups: '1234 5678',
  /** Dots instead of spaces */
  dotsInstead: '1234.5678.9012',
};

/** Valid stripped voter registration numbers (12 consecutive digits) */
export const validVoterRegistrationStripped = {
  /** Standard voter registration without formatting */
  standard: '123456789012',
  /** All zeros */
  allZeros: '000000000000',
  /** All nines */
  allNines: '999999999999',
};

/** Invalid stripped voter registration strings */
export const invalidVoterRegistrationStripped = {
  /** Formatted with spaces — not stripped */
  formatted: '1234 5678 9012',
  /** Too few digits */
  tooShort: '12345678901',
  /** Too many digits */
  tooLong: '1234567890123',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijkl',
};
