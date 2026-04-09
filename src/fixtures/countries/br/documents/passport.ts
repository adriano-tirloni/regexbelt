/** Valid Brazilian passport numbers (2 uppercase letters + 6 digits) */
export const validPassport = {
  /** Standard passport number */
  standard: 'AB123456',
  /** Letters at end of alphabet with all zeros */
  endOfAlphabet: 'YZ000000',
  /** All nines in digit portion */
  allNines: 'CD999999',
};

/** Invalid Brazilian passport strings */
export const invalidPassport = {
  /** Lowercase letters */
  lowercase: 'ab123456',
  /** Too few digits */
  tooFewDigits: 'AB12345',
  /** Too many digits */
  tooManyDigits: 'AB1234567',
  /** Digits before letters */
  digitsFirst: '12ABCDEF',
};
