import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualMG,
  validInscricaoEstadualMG,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/mg.ts';
import { inscricaoEstadualMG } from './mg.ts';

describe('inscricaoEstadualMG', () => {
  it.each(Object.entries(validInscricaoEstadualMG))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMG.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualMG))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMG.test(value)).toBe(false);
  });
});
