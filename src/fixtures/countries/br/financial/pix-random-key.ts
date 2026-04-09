/** Valid PIX random keys in UUID v4 lowercase format */
export const validPixRandomKey = {
  /** Standard UUID v4 key */
  standard: '123e4567-e89b-12d3-a456-426614174000',
  /** All zeros — structurally valid */
  allZeros: '00000000-0000-0000-0000-000000000000',
  /** All lowercase hex characters */
  allHex: 'abcdef01-2345-6789-abcd-ef0123456789',
};

/** Invalid PIX random key strings */
export const invalidPixRandomKey = {
  /** Uppercase letters — must be lowercase */
  uppercase: '123E4567-E89B-12D3-A456-426614174000',
  /** Missing dashes */
  noDashes: '123e4567e89b12d3a456426614174000',
  /** First segment too short (7 chars) */
  shortSegment: '123e456-e89b-12d3-a456-426614174000',
  /** Extra segment appended */
  extraSegment: '123e4567-e89b-12d3-a456-426614174000-extra',
};
