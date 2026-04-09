/** Valid CNS numbers (starts with 1-2 or 7-9, 15 digits total) */
export const validCns = {
  /** Starts with 1 — definitive card */
  startsWithOne: '198765432100010',
  /** Starts with 2 — provisional card */
  startsWithTwo: '289012345600019',
  /** Starts with 7 — special category */
  startsWithSeven: '700000000000000',
  /** Starts with 8 — special category */
  startsWithEight: '898765432101234',
};

/** Invalid CNS strings */
export const invalidCns = {
  /** Starts with 3 — not a valid prefix */
  startsWithThree: '398765432100010',
  /** Starts with 6 — not a valid prefix */
  startsWithSix: '600000000000000',
  /** Too few digits */
  tooShort: '19876543210001',
  /** Too many digits */
  tooLong: '1987654321000100',
};
