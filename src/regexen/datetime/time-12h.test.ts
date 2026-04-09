import { describe, expect, it } from 'vitest';
import {
  invalidTime12hh,
  invalidTime12hhmm,
  invalidTime12hhmmss,
  validTime12hh,
  validTime12hhmm,
  validTime12hhmmss,
} from '../../fixtures/datetime/time-12h.ts';
import { time12hh, time12hhmm, time12hhmmss } from './time-12h.ts';

describe('time12hhmmss', () => {
  it.each(Object.entries(validTime12hhmmss))('%s: %s', (_, value) => {
    expect(time12hhmmss.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidTime12hhmmss))('%s: %s', (_, value) => {
    expect(time12hhmmss.test(value)).toBe(false);
  });
});

describe('time12hhmm', () => {
  it.each(Object.entries(validTime12hhmm))('%s: %s', (_, value) => {
    expect(time12hhmm.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidTime12hhmm))('%s: %s', (_, value) => {
    expect(time12hhmm.test(value)).toBe(false);
  });
});

describe('time12hh', () => {
  it.each(Object.entries(validTime12hh))('%s: %s', (_, value) => {
    expect(time12hh.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidTime12hh))('%s: %s', (_, value) => {
    expect(time12hh.test(value)).toBe(false);
  });
});
