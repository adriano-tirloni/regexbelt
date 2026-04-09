/** Valid formatted boleto payment lines (XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXXXXXXXXX) */
export const validBoletoFormatted = {
  /** Standard boleto line */
  standard: '23793.38128 60000.000003 00000.000408 1 84340000019900',
  /** All zeros — structurally valid format */
  allZeros: '00000.00000 00000.000000 00000.000000 0 00000000000000',
  /** All nines — maximum digit values */
  allNines: '99999.99999 99999.999999 99999.999999 9 99999999999999',
};

/** Invalid formatted boleto strings */
export const invalidBoletoFormatted = {
  /** Spaces instead of dots between groups */
  noDots: '23793 38128 60000 000003 00000 000408 1 84340000019900',
  /** Stripped digits only — no formatting */
  stripped: '23793381286000000000300000000408184340000019900',
  /** Missing spaces between fields */
  missingSpaces: '23793.3812860000.00000300000.00040818434000001990',
  /** Alphabetic characters */
  alphabetic: 'abcde.fghij klmno.pqrstu vwxyz.abcdef g hijklmnopqrstuv',
};

/** Valid stripped boleto payment lines (47 consecutive digits) */
export const validBoletoStripped = {
  /** Standard boleto as digits only */
  standard: '23793381286000000000300000000408184340000019900',
  /** All zeros */
  allZeros: '00000000000000000000000000000000000000000000000',
  /** All nines */
  allNines: '99999999999999999999999999999999999999999999999',
};

/** Invalid stripped boleto strings */
export const invalidBoletoStripped = {
  /** Formatted boleto — not stripped */
  formatted: '23793.38128 60000.000003 00000.000408 1 84340000019900',
  /** Too few digits (46) */
  tooShort: '2379338128600000000030000000040818434000001990',
  /** Too many digits (48) */
  tooLong: '237933812860000000003000000004081843400000199001',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv',
};
