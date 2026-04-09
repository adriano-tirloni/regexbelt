/** Valid positive decimals */
export const validPositiveDecimal = {
  /** Simple */
  simple: '1.5',
  /** Zero-prefixed */
  zeroPrefixed: '0.123',
  /** Multi-digit */
  multiDigit: '123.456',
  /** Long fraction */
  longFraction: '1.123456789',
  /** Zero point something */
  zeroPoint: '0.0',
};

/** Invalid positive decimals */
export const invalidPositiveDecimal = {
  /** Negative */
  negative: '-1.5',
  /** Integer */
  integer: '1',
  /** Leading zero in whole part */
  leadingZero: '01.5',
  /** Missing whole part */
  missingWhole: '.5',
  /** Missing fraction */
  missingFraction: '1.',
  /** Alphabetic */
  alphabetic: 'abc',
};

/** Valid negative decimals */
export const validNegativeDecimal = {
  /** Simple */
  simple: '-1.5',
  /** Zero-prefixed */
  zeroPrefixed: '-0.123',
  /** Multi-digit */
  multiDigit: '-123.456',
};

/** Invalid negative decimals */
export const invalidNegativeDecimal = {
  /** Positive */
  positive: '1.5',
  /** Integer */
  integer: '-1',
  /** Leading zero */
  leadingZero: '-01.5',
  /** Missing whole */
  missingWhole: '-.5',
};

/** Valid decimals (any sign) */
export const validDecimal = {
  /** Positive */
  positive: '1.5',
  /** Negative */
  negative: '-0.123',
  /** Zero */
  zero: '0.0',
  /** Large */
  large: '9999.9999',
  /** Negative large */
  negativeLarge: '-9999.9999',
};

/** Invalid decimals */
export const invalidDecimal = {
  /** Integer */
  integer: '1',
  /** Negative integer */
  negativeInteger: '-1',
  /** Leading zero */
  leadingZero: '01.5',
  /** Missing fraction */
  missingFraction: '1.',
  /** Missing whole */
  missingWhole: '.5',
};
