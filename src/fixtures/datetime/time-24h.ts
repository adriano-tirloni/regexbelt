/** Valid 24-hour HH:MM:SS times */
export const validTime24hhmmss = {
  /** End of day */
  endOfDay: '23:59:59',
  /** Start of day */
  startOfDay: '00:00:00',
  /** Noon */
  noon: '12:00:00',
  /** Arbitrary mid-afternoon */
  midAfternoon: '15:30:45',
};

/** Invalid 24-hour HH:MM:SS times */
export const invalidTime24hhmmss = {
  /** Hour 24 is out of range */
  hour24: '24:00:00',
  /** Minute 60 is out of range */
  minute60: '23:60:00',
  /** Second 60 is out of range */
  second60: '23:59:60',
  /** Missing seconds */
  missingSeconds: '23:59',
  /** Single digit hour */
  singleDigitHour: '5:30:00',
  /** Garbage */
  garbage: 'not-a-time',
};

/** Valid 24-hour HH:MM times */
export const validTime24hhmm = {
  /** End of day */
  endOfDay: '23:59',
  /** Start of day */
  startOfDay: '00:00',
  /** Noon */
  noon: '12:00',
  /** Arbitrary */
  arbitrary: '08:45',
};

/** Invalid 24-hour HH:MM times */
export const invalidTime24hhmm = {
  /** Hour 24 is out of range */
  hour24: '24:00',
  /** Minute 60 is out of range */
  minute60: '23:60',
  /** Has seconds component */
  hasSeconds: '23:59:59',
  /** Single digit hour */
  singleDigitHour: '5:30',
  /** Garbage */
  garbage: 'not-a-time',
};

/** Valid 24-hour HH values */
export const validTime24hh = {
  /** Maximum */
  max: '23',
  /** Minimum */
  min: '00',
  /** Noon */
  noon: '12',
  /** Morning */
  morning: '08',
};

/** Invalid 24-hour HH values */
export const invalidTime24hh = {
  /** Hour 24 is out of range */
  hour24: '24',
  /** Single digit */
  singleDigit: '5',
  /** Has minutes */
  hasMinutes: '23:59',
  /** Garbage */
  garbage: 'not-a-time',
};
