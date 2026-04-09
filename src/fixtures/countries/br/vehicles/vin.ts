/** Valid Vehicle Identification Numbers (17 alphanumeric, excluding I, O, Q) */
export const validVin = {
  /** Honda VIN */
  honda: '1HGBH41JXMN109186',
  /** Volkswagen VIN */
  volkswagen: 'WVWZZZ3CZWE123456',
  /** Tesla VIN */
  tesla: '5YJSA1E11HF000001',
};

/** Invalid Vehicle Identification Number strings */
export const invalidVin = {
  /** Contains forbidden letter I */
  containsI: '1IGBH41JXMN109186',
  /** Contains forbidden letter O */
  containsO: '1HGBH41OXMN109186',
  /** Contains forbidden letter Q */
  containsQ: '1HGBH41QXMN109186',
  /** Too short — 16 characters */
  tooShort: '1HGBH41JXMN10918',
  /** Too long — 18 characters */
  tooLong: '1HGBH41JXMN1091861',
  /** Lowercase letters */
  lowercase: '1hgbh41jxmn109186',
};
