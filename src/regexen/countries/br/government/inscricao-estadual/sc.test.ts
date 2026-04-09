import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualSC,
  validInscricaoEstadualSC,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/sc.ts';
import { inscricaoEstadualSC } from './sc.ts';

describe('inscricaoEstadualSC', () => {
  it.each(Object.entries(validInscricaoEstadualSC))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSC.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualSC))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSC.test(value)).toBe(false);
  });
});
