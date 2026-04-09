import { describe, expect, it } from 'vitest';
import {
  invalidCpfFormatted,
  invalidCpfStripped,
  validCpfFormatted,
  validCpfStripped,
} from '../../../../fixtures/countries/br/documents/cpf.ts';
import { cpfFormatted, cpfStripped } from './cpf.ts';

describe('cpfFormatted', () => {
  it.each(Object.entries(validCpfFormatted))('%s: %s', (_, value) => {
    expect(cpfFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCpfFormatted))('%s: %s', (_, value) => {
    expect(cpfFormatted.test(value)).toBe(false);
  });
});

describe('cpfStripped', () => {
  it.each(Object.entries(validCpfStripped))('%s: %s', (_, value) => {
    expect(cpfStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCpfStripped))('%s: %s', (_, value) => {
    expect(cpfStripped.test(value)).toBe(false);
  });
});
