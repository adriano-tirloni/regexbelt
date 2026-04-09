import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualAC,
  validInscricaoEstadualAC,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ac.ts';
import { inscricaoEstadualAC } from './ac.ts';

describe('inscricaoEstadualAC', () => {
  it.each(Object.entries(validInscricaoEstadualAC))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAC.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualAC))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAC.test(value)).toBe(false);
  });
});
