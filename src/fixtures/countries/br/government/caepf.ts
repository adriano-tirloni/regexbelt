/** Valid CAEPF numbers (XXX.XXX.XXX-XX/XX) */
export const validCaepf = {
  /** Standard CAEPF number */
  standard: '123.456.789-01/23',
  /** All zeros — structurally valid */
  allZeros: '000.000.000-00/00',
  /** All nines — maximum digit values */
  allNines: '999.999.999-99/99',
};

/** Invalid CAEPF strings */
export const invalidCaepf = {
  /** No dots */
  noDots: '123456789-01/23',
  /** No slash — missing branch separator */
  noSlash: '123.456.789-0123',
  /** Too short — missing last digit */
  tooShort: '123.456.789-01/2',
  /** Stripped digits only */
  stripped: '12345678901/23',
};
