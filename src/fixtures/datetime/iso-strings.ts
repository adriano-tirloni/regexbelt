/** Valid UTC ISO datetime strings (ending in Z) */
export const validIsoUtc = {
  /** Full precision: date, time, and milliseconds */
  withMilliseconds: '2022-12-31T23:59:59.999Z',
  /** No milliseconds */
  withoutMilliseconds: '2022-12-31T23:59:59Z',
  /** Midnight on epoch-adjacent date */
  midnight: '2000-01-01T00:00:00.000Z',
  /** All-zero time component */
  startOfDay: '2024-06-15T00:00:00Z',
};

/** ISO datetime strings that are NOT valid UTC (not ending in Z or malformed) */
export const invalidIsoUtc = {
  /** Date only, no time component */
  dateOnly: '2022-12-31',
  /** Missing trailing Z timezone indicator */
  missingTimezone: '2022-12-31T23:59:59',
  /** Has milliseconds but missing Z */
  millisecondsWithoutTimezone: '2022-12-31T23:59:59.999',
  /** Offset timezone instead of Z */
  offsetTimezone: '2022-12-31T23:59:59.999+00:00',
  /** Space separator instead of T */
  spaceSeparator: '2022-12-31 23:59:59Z',
  /** Completely unrelated string */
  garbage: 'not-a-date',
  /** Negative offset timezone */
  negativeOffset: '2022-12-31T23:59:59-05:00',
  /** Lowercase z instead of uppercase Z */
  lowercaseZ: '2022-12-31T23:59:59.999z',
};
