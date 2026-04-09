/** Valid hex color values */
export const validHexColor = {
  /** 6-digit with hash */
  sixDigitWithHash: '#ff0000',
  /** 3-digit with hash */
  threeDigitWithHash: '#FFF',
  /** 6-digit without hash */
  sixDigitNoHash: 'aabbcc',
  /** 3-digit without hash */
  threeDigitNoHash: 'abc',
  /** Mixed case */
  mixedCase: '#aAbBcC',
  /** All zeros */
  allZeros: '#000000',
};

/** Invalid hex color values */
export const invalidHexColor = {
  /** 4-digit (not valid shorthand) */
  fourDigit: '#ff00',
  /** Invalid hex character */
  invalidHex: '#gggggg',
  /** 7-digit */
  sevenDigit: '#1234567',
  /** Empty */
  empty: '',
  /** Only hash */
  onlyHash: '#',
  /** CSS named color */
  namedColor: 'red',
};
