/** Valid positive integers */
export const validPositiveInteger = {
  /** Single digit */
  singleDigit: '1',
  /** Multi-digit */
  multiDigit: '123',
  /** Large number */
  large: '9999999',
  /** Nine */
  nine: '9',
};

/** Invalid positive integers */
export const invalidPositiveInteger = {
  /** Zero is not positive */
  zero: '0',
  /** Negative */
  negative: '-1',
  /** Leading zero */
  leadingZero: '01',
  /** Decimal */
  decimal: '1.5',
  /** Empty */
  empty: '',
  /** Alphabetic */
  alphabetic: 'abc',
};

/** Valid negative integers */
export const validNegativeInteger = {
  /** Single digit */
  singleDigit: '-1',
  /** Multi-digit */
  multiDigit: '-123',
  /** Large negative */
  large: '-9999999',
};

/** Invalid negative integers */
export const invalidNegativeInteger = {
  /** Zero */
  zero: '0',
  /** Positive */
  positive: '1',
  /** Leading zero after minus */
  leadingZero: '-01',
  /** Negative decimal */
  decimal: '-1.5',
  /** Minus only */
  minusOnly: '-',
};

/** Valid integers (any sign including zero) */
export const validInteger = {
  /** Zero */
  zero: '0',
  /** Positive */
  positive: '123',
  /** Negative */
  negative: '-456',
  /** Single digit */
  singleDigit: '7',
  /** Single negative digit */
  singleNegativeDigit: '-3',
};

/** Invalid integers */
export const invalidInteger = {
  /** Leading zero */
  leadingZero: '01',
  /** Negative leading zero */
  negativeLeadingZero: '-01',
  /** Decimal */
  decimal: '1.5',
  /** Alphabetic */
  alphabetic: 'abc',
  /** Empty */
  empty: '',
  /** Negative zero */
  negativeZero: '-0',
};
