/** Valid YYYY-MM-DD date strings (standalone, not embedded) */
export const validDashedDate = {
  /** Last day of the year */
  endOfYear: '2022-12-31',
  /** First day of the year */
  startOfYear: '2000-01-01',
  /** Maximum year value */
  maxYear: '9999-12-31',
  /** Minimum year value */
  minYear: '0000-01-01',
  /** Leap year date */
  leapYear: '2024-02-29',
};

/** Invalid YYYY-MM-DD date strings */
export const invalidDashedDate = {
  /** Month 13 does not exist */
  monthTooHigh: '2022-13-01',
  /** Month 00 does not exist */
  monthZero: '2022-00-01',
  /** Day 00 does not exist */
  dayZero: '2022-12-00',
  /** Day 32 does not exist */
  dayTooHigh: '2022-12-32',
  /** Completely unrelated string */
  garbage: 'not-a-date',
};

/** Strings that contain a valid YYYY-MM-DD date embedded in a longer string */
export const embeddedDashedDate = {
  /** ISO datetime with time and timezone */
  isoDatetime: '2022-12-31T23:59:59.999Z',
  /** Extra digits prefixed to the year */
  prefixedDigits: '9992022-12-31',
  /** Surrounded by other text */
  surrounded: 'prefix-2022-12-31-suffix',
};
