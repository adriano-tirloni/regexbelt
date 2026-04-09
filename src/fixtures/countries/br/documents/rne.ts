/** Valid RNE numbers (letter/digit + 6 digits + letter/digit) */
export const validRne = {
  /** Letter prefix with digit suffix */
  letterDigit: 'G1234567',
  /** Letter prefix with letter suffix */
  letterLetter: 'A123456B',
  /** Digit prefix with digit suffix */
  digitDigit: '91234567',
};

/** Invalid RNE strings */
export const invalidRne = {
  /** Includes RNE prefix text */
  withPrefix: 'RNEG1234567',
  /** Too few digits in the middle */
  tooShort: 'G12345',
  /** Lowercase letter — not accepted */
  lowercase: 'g1234567',
  /** Special character in digit position */
  specialChars: 'G12345#7',
};
