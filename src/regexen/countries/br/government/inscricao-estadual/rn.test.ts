import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualRN9,
  invalidInscricaoEstadualRN10,
  validInscricaoEstadualRN9,
  validInscricaoEstadualRN10,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/rn.ts';
import { inscricaoEstadualRN9, inscricaoEstadualRN10 } from './rn.ts';

describe('inscricaoEstadualRN9', () => {
  it.each(Object.entries(validInscricaoEstadualRN9))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRN9.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualRN9))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRN9.test(value)).toBe(false);
  });
});

describe('inscricaoEstadualRN10', () => {
  it.each(Object.entries(validInscricaoEstadualRN10))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRN10.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualRN10))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRN10.test(value)).toBe(false);
  });
});
