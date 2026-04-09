import { describe, expect, it } from 'vitest';
import {
  invalidTime24hh,
  invalidTime24hhmm,
  invalidTime24hhmmss,
  validTime24hh,
  validTime24hhmm,
  validTime24hhmmss,
} from '../../fixtures/datetime/time-24h.ts';
import { time24hh, time24hhmm, time24hhmmss } from './time-24h.ts';

describe('time24hhmmss', () => {
  it.each(Object.entries(validTime24hhmmss))('%s: %s', (_, value) => {
    expect(time24hhmmss.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidTime24hhmmss))('%s: %s', (_, value) => {
    expect(time24hhmmss.test(value)).toBe(false);
  });
});

describe('time24hhmm', () => {
  it.each(Object.entries(validTime24hhmm))('%s: %s', (_, value) => {
    expect(time24hhmm.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidTime24hhmm))('%s: %s', (_, value) => {
    expect(time24hhmm.test(value)).toBe(false);
  });
});

describe('time24hh', () => {
  it.each(Object.entries(validTime24hh))('%s: %s', (_, value) => {
    expect(time24hh.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidTime24hh))('%s: %s', (_, value) => {
    expect(time24hh.test(value)).toBe(false);
  });
});
