/** Valid EAN-13 barcodes (13 digits) */
export const validEan13 = {
  /** Brazilian product barcode */
  brazilianProduct: '7891234567890',
  /** All zeros — structurally valid */
  allZeros: '0000000000000',
  /** All nines — maximum digit values */
  allNines: '9999999999999',
};

/** Invalid EAN-13 barcode strings */
export const invalidEan13 = {
  /** Too few digits */
  tooShort: '789123456789',
  /** Too many digits */
  tooLong: '78912345678901',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijklm',
  /** Digits with dash separator */
  withDash: '789-123456789',
};
