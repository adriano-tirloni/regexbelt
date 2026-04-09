/** Valid Safra account formats (XXXX XXXXXXXX-D) */
export const validBankAccountSafra = {
  /** Standard account with numeric check digit */
  standard: '1234 12345678-9',
  /** Account with X check digit */
  checkDigitX: '0001 00000001-X',
  /** All nines */
  allNines: '9999 99999999-9',
};

/** Invalid Safra account strings */
export const invalidBankAccountSafra = {
  /** Account number too short (7 digits) */
  shortAccount: '1234 1234567-9',
  /** Agency with check digit */
  agencyWithCheck: '1234-5 12345678-9',
  /** Missing space separator */
  noSpace: '123412345678-9',
  /** Alphabetic characters */
  alphabetic: 'abcd efghijkl-m',
};
