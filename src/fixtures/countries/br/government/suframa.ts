/** Valid SUFRAMA registration numbers (XX.XXX.XXX/XXXX) */
export const validSuframa = {
  /** Standard SUFRAMA number */
  standard: '12.345.678/0001',
  /** All zeros — structurally valid */
  allZeros: '00.000.000/0000',
  /** All nines — maximum digit values */
  allNines: '99.999.999/9999',
};

/** Invalid SUFRAMA registration strings */
export const invalidSuframa = {
  /** No dots */
  noDots: '12345678/0001',
  /** No slash — dot instead */
  noSlash: '12.345.678.0001',
  /** With check digits — not SUFRAMA format */
  withCheckDigits: '12.345.678/0001-90',
  /** Stripped digits only */
  stripped: '123456780001',
};
