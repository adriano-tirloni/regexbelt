/** Valid formatted CNPJ numbers (XX.XXX.XXX/XXXX-XX) */
export const validCnpjFormatted = {
  /** Standard CNPJ */
  standard: '12.345.678/0001-95',
  /** All zeros — structurally valid */
  allZeros: '00.000.000/0000-00',
  /** All nines — maximum digit values */
  allNines: '99.999.999/9999-99',
};

/** Invalid formatted CNPJ strings */
export const invalidCnpjFormatted = {
  /** Digits only, no formatting */
  unformatted: '12345678000195',
  /** Hyphens instead of dots as group separators */
  wrongSeparator: '12-345-678/0001-95',
  /** Dot instead of slash separator */
  missingSlash: '12.345.678.0001-95',
  /** Too few digits in branch segment */
  tooShort: '12.345.678/001-95',
  /** Alphabetic characters instead of digits */
  alphabetic: 'ab.cde.fgh/ijkl-mn',
};

/** Valid stripped CNPJ numbers (14 consecutive digits) */
export const validCnpjStripped = {
  /** Standard CNPJ without formatting */
  standard: '12345678000195',
  /** All zeros */
  allZeros: '00000000000000',
  /** All nines */
  allNines: '99999999999999',
};

/** Invalid stripped CNPJ strings */
export const invalidCnpjStripped = {
  /** Formatted CNPJ — not stripped */
  formatted: '12.345.678/0001-95',
  /** Too few digits */
  tooShort: '1234567800019',
  /** Too many digits */
  tooLong: '123456780001950',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijklmn',
};
