import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualRR,
  validInscricaoEstadualRR,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/rr.ts';
import { inscricaoEstadualRR } from './rr.ts';

describe('inscricaoEstadualRR', () => {
  it.each(Object.entries(validInscricaoEstadualRR))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRR.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualRR))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRR.test(value)).toBe(false);
  });
});
