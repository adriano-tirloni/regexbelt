/** Valid Brazilian license plate numbers (old and Mercosul formats) */
export const validLicensePlate = {
  /** Old format plate */
  oldFormat: 'ABC1234',
  /** Mercosul format plate */
  mercosul: 'ABC1D23',
  /** Mercosul with letter in fifth position */
  mercosulLetter: 'XYZ9Z99',
  /** All minimum values */
  allMinimum: 'AAA0000',
};

/** Invalid Brazilian license plate strings */
export const invalidLicensePlate = {
  /** Lowercase letters */
  lowercase: 'abc1234',
  /** Too short — missing one digit */
  tooShort: 'ABC123',
  /** Too long — extra digit */
  tooLong: 'ABC12345',
  /** Starts with digit instead of letter */
  startsWithDigit: '1BC1234',
  /** Contains special character */
  specialChar: 'AB@1234',
};
