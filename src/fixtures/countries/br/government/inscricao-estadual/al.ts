/** Valid Alagoas (AL) Inscricao Estadual numbers */
export const validInscricaoEstadualAL = {
  /** Third digit 0 */
  digit0: '240123456',
  /** Third digit 3 */
  digit3: '243123456',
  /** Third digit 5 */
  digit5: '245678901',
  /** Third digit 7 */
  digit7: '247123456',
  /** Third digit 8 */
  digit8: '248123456',
};

/** Invalid Alagoas (AL) Inscricao Estadual strings */
export const invalidInscricaoEstadualAL = {
  /** Third digit 1 — not in allowed set */
  invalidThirdDigit: '241123456',
  /** Does not start with 24 */
  wrongPrefix: '230123456',
  /** Too long — 10 digits */
  tooLong: '2401234567',
  /** Too short — 8 digits */
  tooShort: '24012345',
};
