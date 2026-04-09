/** Valid Brazilian address numbers (digits or S/N) */
export const validAddressNumber = {
  /** Three-digit number */
  threeDigits: '123',
  /** Single digit */
  singleDigit: '1',
  /** Large number */
  largeNumber: '99999',
  /** S/N uppercase — sem numero */
  snUppercase: 'S/N',
  /** s/n lowercase */
  snLowercase: 's/n',
  /** S/n mixed case */
  snMixedUpper: 'S/n',
  /** s/N mixed case */
  snMixedLower: 's/N',
};

/** Invalid Brazilian address number strings */
export const invalidAddressNumber = {
  /** Alphabetic letters (not S/N) */
  letters: 'ABC',
  /** Mixed digits and letters */
  mixed: '12A',
  /** SN without slash separator */
  snNoSlash: 'SN',
  /** S/ N with space */
  snWithSpace: 'S/ N',
  /** Only a space character */
  space: ' ',
};
