import { describe, expect, it } from 'vitest';
import {
  invalidIso8601DatetimeWithoutTz,
  invalidIso8601DatetimeWithTz,
  invalidIso8601Standard,
  validIso8601DatetimeWithoutTz,
  validIso8601DatetimeWithTz,
  validIso8601Standard,
} from '../../fixtures/datetime/iso8601.ts';
import { iso8601DatetimeWithoutTz, iso8601DatetimeWithTz, iso8601Standard } from './iso8601.ts';

describe('iso8601Standard', () => {
  it.each(Object.entries(validIso8601Standard))('%s: %s', (_, value) => {
    expect(iso8601Standard.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIso8601Standard))('%s: %s', (_, value) => {
    expect(iso8601Standard.test(value)).toBe(false);
  });
});

describe('iso8601DatetimeWithoutTz', () => {
  it.each(Object.entries(validIso8601DatetimeWithoutTz))('%s: %s', (_, value) => {
    expect(iso8601DatetimeWithoutTz.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIso8601DatetimeWithoutTz))('%s: %s', (_, value) => {
    expect(iso8601DatetimeWithoutTz.test(value)).toBe(false);
  });
});

describe('iso8601DatetimeWithTz', () => {
  it.each(Object.entries(validIso8601DatetimeWithTz))('%s: %s', (_, value) => {
    expect(iso8601DatetimeWithTz.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIso8601DatetimeWithTz))('%s: %s', (_, value) => {
    expect(iso8601DatetimeWithTz.test(value)).toBe(false);
  });
});
