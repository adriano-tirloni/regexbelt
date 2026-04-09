import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualDF,
  validInscricaoEstadualDF,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/df.ts';
import { inscricaoEstadualDF } from './df.ts';

describe('inscricaoEstadualDF', () => {
  it.each(Object.entries(validInscricaoEstadualDF))('%s: %s', (_, value) => {
    expect(inscricaoEstadualDF.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualDF))('%s: %s', (_, value) => {
    expect(inscricaoEstadualDF.test(value)).toBe(false);
  });
});
