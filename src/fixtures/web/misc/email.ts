/** Valid email addresses */
export const validEmail = {
  /** Simple */
  simple: 'user@example.com',
  /** With tag */
  withTag: 'name+tag@sub.domain.org',
  /** With dots in local */
  dotsInLocal: 'first.last@example.com',
  /** Hyphenated domain */
  hyphenatedDomain: 'user@my-domain.com',
  /** Numeric local */
  numericLocal: '123@example.com',
};

/** Invalid email addresses */
export const invalidEmail = {
  /** Missing local part */
  noLocal: '@example.com',
  /** Missing domain */
  noDomain: 'user@',
  /** No at sign */
  noAtSign: 'plaintext',
  /** Missing TLD */
  noTld: 'user@domain',
  /** Empty */
  empty: '',
};
