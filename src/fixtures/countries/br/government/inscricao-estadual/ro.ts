/** Valid Rondonia (RO) Inscricao Estadual old format numbers */
export const validInscricaoEstadualROOld = {
  /** Fully formatted */
  formatted: '123.45678-9',
  /** Fully stripped */
  stripped: '123456789',
  /** All zeros — structurally valid */
  allZeros: '000.00000-0',
};

/** Invalid Rondonia (RO) Inscricao Estadual old format strings */
export const invalidInscricaoEstadualROOld = {
  /** Too short — 4-digit middle group */
  tooShort: '123.4567-9',
  /** Too long — 6-digit middle group */
  tooLong: '123.456789-9',
  /** Alphabetic characters */
  alphabetic: 'abc.defgh-i',
  /** Extra check digit */
  extraCheck: '123.45678-90',
};

/** Valid Rondonia (RO) Inscricao Estadual new format numbers */
export const validInscricaoEstadualRONew = {
  /** Formatted with dash */
  formatted: '1234567890123-4',
  /** Stripped — 14 digits */
  stripped: '12345678901234',
  /** All zeros — structurally valid */
  allZeros: '0000000000000-0',
};

/** Invalid Rondonia (RO) Inscricao Estadual new format strings */
export const invalidInscricaoEstadualRONew = {
  /** Too short — 12 digits before dash */
  tooShort: '123456789012-4',
  /** Extra check digit */
  extraCheck: '1234567890123-45',
  /** Alphabetic characters */
  alphabetic: 'abcdefghijklm-n',
  /** Too long — 15 digits before dash */
  tooLong: '12345678901234-5',
};
