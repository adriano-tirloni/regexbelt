/**
 * Matches a date in the format YYYY-MM-DD
 * Valid digits are 0000 to 9999 for year, 01 to 12 for month and 01 to 31 for day.
 *
 * ___Enforces beginning and end of string___
 * @example '2022-12-31' (matches)
 * @example '2022-12-31T23:59:59.999Z' (does not match)
 * @example '9992022-12-31' (does not match)
 */
export const dashedDate = /^([0-9]{4}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1]))$/;
