import { describe, expect, it } from 'vitest';
import {
  invalidPhoneFormatted,
  invalidPhoneStripped,
  validPhoneFormatted,
  validPhoneStripped,
} from '../../../../fixtures/countries/br/contact/phone.ts';
import { phoneFormatted, phoneStripped } from './phone.ts';

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
