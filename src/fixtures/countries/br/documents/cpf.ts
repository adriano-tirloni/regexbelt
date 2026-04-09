/** Valid formatted CPF numbers (XXX.XXX.XXX-XX) */
export const validCpfFormatted = {
  /** Typical CPF number */
  standard: '123.456.789-09',
  /** All zeros — structurally valid format */
  allZeros: '000.000.000-00',
  /** All nines — maximum digit values */
  allNines: '999.999.999-99',
};

/** Invalid formatted CPF strings */
export const invalidCpfFormatted = {
  /** Digits only, no formatting */
  unformatted: '12345678909',
  /** Missing last check digit */
  tooShort: '123.456.789-0',
  /** Extra check digit */
  tooLong: '123.456.789-099',
  /** Hyphens instead of dots as group separators */
  wrongSeparator: '123-456-789-09',
  /** Missing the final hyphen separator */
  missingHyphen: '123.456.78909',
  /** Alphabetic characters instead of digits */
  alphabetic: 'abc.def.ghi-jk',
};

/** Valid stripped CPF numbers (11 consecutive digits) */
export const validCpfStripped = {
  /** Typical CPF number without formatting */
  standard: '12345678909',
  /** All zeros */
  allZeros: '00000000000',
  /** All nines */
  allNines: '99999999999',
};

/** Invalid stripped CPF strings */
export const invalidCpfStripped = {
  /** Formatted CPF — not stripped */
  formatted: '123.456.789-09',
  /** Too few digits */
  tooShort: '1234567890',
  /** Too many digits */
  tooLong: '123456789099',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijk',
};
