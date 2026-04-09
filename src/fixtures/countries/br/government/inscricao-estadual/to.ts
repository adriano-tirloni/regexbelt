/** Valid Tocantins (TO) Inscricao Estadual numbers */
export const validInscricaoEstadualTO = {
  /** Segment 01 */
  segment01: '29011234567',
  /** Segment 02 */
  segment02: '29021234567',
  /** Segment 03 */
  segment03: '29031234567',
  /** Segment 99 */
  segment99: '29991234567',
};

/** Invalid Tocantins (TO) Inscricao Estadual strings */
export const invalidInscricaoEstadualTO = {
  /** Segment 04 — not in allowed set */
  invalidSegment: '29041234567',
  /** Does not start with 29 */
  wrongPrefix: '28011234567',
  /** Too short — 10 digits */
  tooShort: '2901123456',
  /** Too long — 12 digits */
  tooLong: '290112345678',
};
