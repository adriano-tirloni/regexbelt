/** Valid Correios tracking codes (2 letters + 9 digits + 2 letters) */
export const validCorreiosTracking = {
  /** SEDEX tracking code */
  sedex: 'SS987654321BR',
  /** Generic tracking code */
  generic: 'AB123456789CD',
  /** Tracking code with all-zero digits */
  allZeroDigits: 'NX000000000BR',
};

/** Invalid Correios tracking code strings */
export const invalidCorreiosTracking = {
  /** Lowercase letters */
  lowercase: 'ss987654321br',
  /** Missing country code suffix */
  missingCountry: 'SS987654321',
  /** Too few digits — 8 instead of 9 */
  tooFewDigits: 'SS98765432BR',
  /** Digits instead of leading letters */
  digitsAsPrefix: '12987654321BR',
};
