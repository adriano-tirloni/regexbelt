/** Valid ISBN-13 numbers (978 or 979 prefix + 10 digits) */
export const validIsbn13 = {
  /** Standard ISBN-13 with 978 prefix */
  prefix978: '9780306406157',
  /** ISBN-13 with 979 prefix */
  prefix979: '9791234567890',
  /** All zeros after prefix */
  allZerosAfterPrefix: '9780000000000',
};

/** Invalid ISBN-13 strings */
export const invalidIsbn13 = {
  /** Wrong prefix — 977 instead of 978/979 */
  wrongPrefix: '9770306406157',
  /** Too short — 12 digits */
  tooShort: '978030640615',
  /** Too long — 14 digits */
  tooLong: '97803064061571',
  /** Alphabetic characters */
  alphabetic: '978abcdefghij',
};

/** Valid ISBN-10 numbers (9 digits + check digit or X) */
export const validIsbn10 = {
  /** Standard ISBN-10 */
  standard: '0306406152',
  /** ISBN-10 with X check digit */
  withCheckX: '123456789X',
  /** All zeros */
  allZeros: '0000000000',
};

/** Invalid ISBN-10 strings */
export const invalidIsbn10 = {
  /** Too few digits */
  tooShort: '030640615',
  /** Too many digits */
  tooLong: '03064061521',
  /** Lowercase x as check digit */
  lowercaseX: '123456789x',
  /** Alphabetic characters */
  alphabetic: 'abcdefghij',
};
