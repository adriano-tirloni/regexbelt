import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualMT,
  validInscricaoEstadualMT,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/mt.ts';
import { inscricaoEstadualMT } from './mt.ts';

describe('inscricaoEstadualMT', () => {
  it.each(Object.entries(validInscricaoEstadualMT))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMT.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualMT))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMT.test(value)).toBe(false);
  });
});
