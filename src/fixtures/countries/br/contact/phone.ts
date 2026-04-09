/** Valid formatted Brazilian phone numbers */
export const validPhoneFormatted = {
  /** Mobile with country code */
  mobileWithCountry: '+55 (11) 91234-5678',
  /** Mobile without country code */
  mobileNoCountry: '(11) 91234-5678',
  /** Landline without country code */
  landline: '(11) 1234-5678',
  /** Landline with country code */
  landlineWithCountry: '+55 (21) 3456-7890',
};

/** Invalid formatted Brazilian phone strings */
export const invalidPhoneFormatted = {
  /** Missing parentheses around area code */
  noParens: '+55 11 91234-5678',
  /** Missing dash separator */
  noDash: '(11) 912345678',
  /** Wrong country code */
  wrongCountry: '+54 (11) 91234-5678',
  /** Missing area code */
  noAreaCode: '91234-5678',
};

/** Valid stripped Brazilian phone numbers (10 or 11 digits) */
export const validPhoneStripped = {
  /** Mobile — 11 digits */
  mobile: '11912345678',
  /** Landline — 10 digits */
  landline: '1112345678',
  /** Mobile from Rio — 11 digits */
  mobileRio: '21934567890',
  /** Landline from Rio — 10 digits */
  landlineRio: '2134567890',
};

/** Invalid stripped Brazilian phone strings */
export const invalidPhoneStripped = {
  /** Contains formatting characters */
  formatted: '+55 (11) 91234-5678',
  /** Too few digits — 9 digits */
  tooShort: '119123456',
  /** Too many digits — 12 digits */
  tooLong: '119123456789',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijk',
};
