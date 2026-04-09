import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualPE,
  validInscricaoEstadualPE,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/pe.ts';
import { inscricaoEstadualPE } from './pe.ts';

describe('inscricaoEstadualPE', () => {
  it.each(Object.entries(validInscricaoEstadualPE))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPE.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualPE))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPE.test(value)).toBe(false);
  });
});
