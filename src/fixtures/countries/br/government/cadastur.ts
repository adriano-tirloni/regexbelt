/** Valid formatted Cadastur numbers (XX.XXX.XXX/XXXX-XX) */
export const validCadasturFormatted = {
  /** Standard Cadastur number */
  standard: '12.345.678/0001-90',
  /** All zeros — structurally valid */
  allZeros: '00.000.000/0000-00',
  /** All nines — maximum digit values */
  allNines: '99.999.999/9999-99',
};

/** Invalid formatted Cadastur strings */
export const invalidCadasturFormatted = {
  /** No dots */
  noDots: '12345678/0001-90',
  /** No slash — dot instead */
  noSlash: '12.345.678.0001-90',
  /** Stripped format — not formatted */
  stripped: '12345678000190',
  /** Missing hyphen */
  missingHyphen: '12.345.678/000190',
};

/** Valid stripped Cadastur numbers (14 consecutive digits) */
export const validCadasturStripped = {
  /** Standard stripped Cadastur */
  standard: '12345678000190',
  /** All zeros */
  allZeros: '00000000000000',
  /** All nines */
  allNines: '99999999999999',
};

/** Invalid stripped Cadastur strings */
export const invalidCadasturStripped = {
  /** Formatted — not stripped */
  formatted: '12.345.678/0001-90',
  /** Too short — 13 digits */
  tooShort: '1234567800019',
  /** Too long — 15 digits */
  tooLong: '123456780001900',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijklmn',
};
