import { describe, expect, it } from 'vitest';
import {
  invalidCadasturFormatted,
  invalidCadasturStripped,
  validCadasturFormatted,
  validCadasturStripped,
} from '../../../../fixtures/countries/br/government/cadastur.ts';
import { cadasturFormatted, cadasturStripped } from './cadastur.ts';

describe('cadasturFormatted', () => {
  it.each(Object.entries(validCadasturFormatted))('%s: %s', (_, value) => {
    expect(cadasturFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCadasturFormatted))('%s: %s', (_, value) => {
    expect(cadasturFormatted.test(value)).toBe(false);
  });
});

describe('cadasturStripped', () => {
  it.each(Object.entries(validCadasturStripped))('%s: %s', (_, value) => {
    expect(cadasturStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCadasturStripped))('%s: %s', (_, value) => {
    expect(cadasturStripped.test(value)).toBe(false);
  });
});
