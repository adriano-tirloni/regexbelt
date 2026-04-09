import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualAL,
  validInscricaoEstadualAL,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/al.ts';
import { inscricaoEstadualAL } from './al.ts';

describe('inscricaoEstadualAL', () => {
  it.each(Object.entries(validInscricaoEstadualAL))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAL.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualAL))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAL.test(value)).toBe(false);
  });
});
