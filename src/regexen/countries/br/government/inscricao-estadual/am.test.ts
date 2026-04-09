import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualAM,
  validInscricaoEstadualAM,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/am.ts';
import { inscricaoEstadualAM } from './am.ts';

describe('inscricaoEstadualAM', () => {
  it.each(Object.entries(validInscricaoEstadualAM))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAM.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualAM))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAM.test(value)).toBe(false);
  });
});
