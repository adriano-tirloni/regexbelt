/** Valid birth/marriage certificate numbers (national unified format) */
export const validBirthMarriageCertificate = {
  /** Standard birth certificate number */
  standard: '104753 01 55 2013 1 00025 003 1234567-89',
  /** All zeros — structurally valid */
  allZeros: '000000 00 00 0000 0 00000 000 0000000-00',
  /** All nines — maximum digit values */
  allNines: '999999 99 99 9999 9 99999 999 9999999-99',
};

/** Invalid birth/marriage certificate strings */
export const invalidBirthMarriageCertificate = {
  /** No spaces between groups */
  noSpaces: '1047530155201310002500312345678-9',
  /** Dashes instead of spaces */
  wrongSeparator: '104753-01-55-2013-1-00025-003-1234567-89',
  /** Too few digits in last segment before dash */
  tooShort: '104753 01 55 2013 1 00025 003 123456-89',
  /** Missing dash before check digits */
  missingDash: '104753 01 55 2013 1 00025 003 123456789',
};
