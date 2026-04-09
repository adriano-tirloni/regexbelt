/** Valid CRM numbers (5-6 digits + 2 uppercase state letters) */
export const validCrm = {
  /** Five-digit CRM with SP state */
  fiveDigits: '12345SP',
  /** Six-digit CRM with RJ state */
  sixDigits: '123456RJ',
  /** Low number with MG state */
  lowNumber: '00001MG',
};

/** Invalid CRM strings */
export const invalidCrm = {
  /** Lowercase state code */
  lowercaseState: '12345sp',
  /** Missing state code */
  noState: '12345',
  /** Too few digits */
  tooFewDigits: '1234SP',
  /** Slash separator before state */
  withSlash: '12345/SP',
};
