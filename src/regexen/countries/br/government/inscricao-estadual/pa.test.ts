import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualPA,
  validInscricaoEstadualPA,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/pa.ts';
import { inscricaoEstadualPA } from './pa.ts';

describe('inscricaoEstadualPA', () => {
  it.each(Object.entries(validInscricaoEstadualPA))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPA.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualPA))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPA.test(value)).toBe(false);
  });
});
