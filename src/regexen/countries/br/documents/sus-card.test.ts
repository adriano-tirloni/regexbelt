import { describe, expect, it } from 'vitest';
import {
  invalidSusCardFormatted,
  invalidSusCardStripped,
  validSusCardFormatted,
  validSusCardStripped,
} from '../../../../fixtures/countries/br/documents/sus-card.ts';
import { susCardFormatted, susCardStripped } from './sus-card.ts';

describe('susCardFormatted', () => {
  it.each(Object.entries(validSusCardFormatted))('%s: %s', (_, value) => {
    expect(susCardFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidSusCardFormatted))('%s: %s', (_, value) => {
    expect(susCardFormatted.test(value)).toBe(false);
  });
});

describe('susCardStripped', () => {
  it.each(Object.entries(validSusCardStripped))('%s: %s', (_, value) => {
    expect(susCardStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidSusCardStripped))('%s: %s', (_, value) => {
    expect(susCardStripped.test(value)).toBe(false);
  });
});
