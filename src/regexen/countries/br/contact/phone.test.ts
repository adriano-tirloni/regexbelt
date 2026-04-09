import { describe, expect, it } from 'vitest';
import {
  invalidPhoneFormatted,
  invalidPhoneInternational,
  invalidPhoneStripped,
  validPhoneFormatted,
  validPhoneInternational,
  validPhoneStripped,
} from '../../../../fixtures/countries/br/contact/phone.ts';
import { phoneFormatted, phoneInternational, phoneStripped } from './phone.ts';

describe('phoneFormatted', () => {
  it.each(Object.entries(validPhoneFormatted))('%s: %s', (_, value) => {
    expect(phoneFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPhoneFormatted))('%s: %s', (_, value) => {
    expect(phoneFormatted.test(value)).toBe(false);
  });
});

describe('phoneStripped', () => {
  it.each(Object.entries(validPhoneStripped))('%s: %s', (_, value) => {
    expect(phoneStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPhoneStripped))('%s: %s', (_, value) => {
    expect(phoneStripped.test(value)).toBe(false);
  });
});

describe('phoneInternational', () => {
  it.each(Object.entries(validPhoneInternational))('%s: %s', (_, value) => {
    expect(phoneInternational.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPhoneInternational))('%s: %s', (_, value) => {
    expect(phoneInternational.test(value)).toBe(false);
  });
});
