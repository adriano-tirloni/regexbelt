/** Valid ISO-8601 datetime strings with optional timezone */
export const validIso8601Standard = {
  /** UTC timezone */
  utc: '2022-12-31T23:59:59.999Z',
  /** Positive offset */
  positiveOffset: '2022-12-31T23:59:59+05:30',
  /** Negative offset */
  negativeOffset: '2022-12-31T23:59:59-03:00',
  /** Without timezone */
  noTimezone: '2022-12-31T23:59:59',
  /** Midnight with milliseconds */
  midnightMillis: '2000-01-01T00:00:00.000Z',
  /** Without milliseconds, UTC */
  noMillisUtc: '2024-06-15T12:30:45Z',
  /** Single millisecond digit */
  singleMillisDigit: '2024-01-01T00:00:00.1Z',
};

/** Invalid ISO-8601 standard strings */
export const invalidIso8601Standard = {
  /** Date only, no time component */
  dateOnly: '2022-12-31',
  /** Completely unrelated string */
  garbage: 'not-a-date',
  /** Space separator instead of T */
  spaceSeparator: '2022-12-31 23:59:59Z',
  /** Invalid month */
  invalidMonth: '2022-13-01T00:00:00Z',
  /** Invalid day */
  invalidDay: '2022-12-32T00:00:00Z',
  /** Invalid hour */
  invalidHour: '2022-12-31T24:00:00Z',
  /** Lowercase z */
  lowercaseZ: '2022-12-31T23:59:59z',
};

/** Valid ISO-8601 datetimes without timezone */
export const validIso8601DatetimeWithoutTz = {
  /** Basic datetime */
  basic: '2022-12-31T23:59:59',
  /** With milliseconds */
  withMillis: '2022-12-31T23:59:59.999',
  /** Midnight */
  midnight: '2000-01-01T00:00:00',
  /** Two-digit milliseconds */
  twoDigitMillis: '2024-01-01T12:00:00.12',
};

/** Invalid ISO-8601 datetimes without timezone (includes those with tz) */
export const invalidIso8601DatetimeWithoutTz = {
  /** Has UTC timezone */
  hasUtcTz: '2022-12-31T23:59:59Z',
  /** Has offset timezone */
  hasOffsetTz: '2022-12-31T23:59:59+05:30',
  /** Date only */
  dateOnly: '2022-12-31',
  /** Garbage */
  garbage: 'not-a-date',
};

/** Valid ISO-8601 datetimes with required timezone */
export const validIso8601DatetimeWithTz = {
  /** UTC timezone */
  utc: '2022-12-31T23:59:59Z',
  /** With milliseconds and UTC */
  millisUtc: '2022-12-31T23:59:59.999Z',
  /** Positive offset */
  positiveOffset: '2022-12-31T23:59:59+05:30',
  /** Negative offset */
  negativeOffset: '2022-12-31T23:59:59-03:00',
  /** Midnight UTC */
  midnightUtc: '2000-01-01T00:00:00.000Z',
  /** Max negative offset */
  maxNegativeOffset: '2024-01-01T00:00:00-12:00',
};

/** Invalid ISO-8601 datetimes with tz (missing timezone) */
export const invalidIso8601DatetimeWithTz = {
  /** Missing timezone */
  noTimezone: '2022-12-31T23:59:59',
  /** Missing timezone with millis */
  noTimezoneWithMillis: '2022-12-31T23:59:59.999',
  /** Date only */
  dateOnly: '2022-12-31',
  /** Garbage */
  garbage: 'not-a-date',
  /** Lowercase z */
  lowercaseZ: '2022-12-31T23:59:59z',
};
