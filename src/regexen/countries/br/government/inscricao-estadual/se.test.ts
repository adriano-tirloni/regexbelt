import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualSE,
  validInscricaoEstadualSE,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/se.ts';
import { inscricaoEstadualSE } from './se.ts';

describe('inscricaoEstadualSE', () => {
  it.each(Object.entries(validInscricaoEstadualSE))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSE.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualSE))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSE.test(value)).toBe(false);
  });
});
