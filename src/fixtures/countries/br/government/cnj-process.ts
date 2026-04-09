/** Valid formatted CNJ process numbers (NNNNNNN-DD.AAAA.J.TR.OOOO) */
export const validCnjProcessFormatted = {
  /** Standard CNJ process number */
  standard: '0002028-80.2020.8.26.0100',
  /** Another valid process number */
  alternate: '1234567-89.2024.5.01.0001',
  /** Justice segment 4 */
  justice4: '0000001-00.2023.4.01.0001',
};

/** Invalid formatted CNJ process strings */
export const invalidCnjProcessFormatted = {
  /** Missing dashes */
  missingDashes: '000202880.2020.8.26.0100',
  /** Justice segment 3 — not in 4-8 range */
  justice3: '1234567-89.2024.3.01.0001',
  /** Justice segment 9 — not in 4-8 range */
  justice9: '1234567-89.2024.9.01.0001',
  /** Stripped format — not formatted */
  stripped: '00020288020208260100',
};

/** Valid stripped CNJ process numbers (20 digits, 16th is 4-8) */
export const validCnjProcessStripped = {
  /** 20 digits with 16th digit 8 */
  digit8: '00020288020208260100',
  /** 20 digits with 16th digit 5 */
  digit5: '12345678901234550001',
  /** All zeros with 16th digit 4 */
  allZerosJustice4: '00000000000000040000',
};

/** Invalid stripped CNJ process strings */
export const invalidCnjProcessStripped = {
  /** Too short — 19 digits */
  tooShort: '0002028802020826010',
  /** Justice segment 3 — 16th digit not in 4-8 range */
  justice3: '12345678920243010001',
  /** Formatted — not stripped */
  formatted: '0002028-80.2020.8.26.0100',
  /** Too long — 21 digits */
  tooLong: '000202880202082601001',
};
