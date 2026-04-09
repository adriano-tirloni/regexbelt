/** Valid formatted alphanumeric CNPJ numbers (XX.XXX.XXX/XXXX-XX with letters and digits) */
export const validCnpjAlphanumericFormatted = {
  /** Mixed letters and digits */
  mixed: 'A1.B2C.D3E/F4G5-67',
  /** Numeric CNPJ — still valid in alphanumeric format */
  numeric: '12.345.678/0001-95',
  /** All letters except check digits */
  allLetters: 'AB.CDE.FGH/IJKL-01',
};

/** Invalid formatted alphanumeric CNPJ strings */
export const invalidCnpjAlphanumericFormatted = {
  /** Missing dot separators */
  noDots: 'A1B2CD3EF4G5-67',
  /** Letters in check digit positions */
  lettersInCheckDigits: 'A1.B2C.D3E/F4G5-AB',
  /** Special character in check digit position */
  specialChars: 'A1.B2C.D3E/F4G5-6!',
  /** Unformatted — no separators at all */
  unformatted: 'A1B2CD3EF4G567',
};

/** Valid stripped alphanumeric CNPJ numbers (12 alphanumeric + 2 digits) */
export const validCnpjAlphanumericStripped = {
  /** Mixed letters and digits */
  mixed: 'A1B2CD3EF4G567',
  /** Numeric only — still valid */
  numeric: '12345678000195',
  /** All letters except check digits */
  allLetters: 'ABCDEFGHIJKL01',
};

/** Invalid stripped alphanumeric CNPJ strings */
export const invalidCnpjAlphanumericStripped = {
  /** Too few characters */
  tooShort: 'A1B2CD3EF4G56',
  /** Letters in last 2 positions */
  lettersInCheckDigits: 'A1B2CD3EF4G5AB',
  /** Formatted — not stripped */
  formatted: 'A1.B2C.D3E/F4G5-67',
};
