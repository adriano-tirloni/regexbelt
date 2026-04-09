import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualPR,
  validInscricaoEstadualPR,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/pr.ts';
import { inscricaoEstadualPR } from './pr.ts';

describe('inscricaoEstadualPR', () => {
  it.each(Object.entries(validInscricaoEstadualPR))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPR.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualPR))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPR.test(value)).toBe(false);
  });
});
