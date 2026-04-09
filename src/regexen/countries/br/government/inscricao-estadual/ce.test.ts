import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualCE,
  validInscricaoEstadualCE,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ce.ts';
import { inscricaoEstadualCE } from './ce.ts';

describe('inscricaoEstadualCE', () => {
  it.each(Object.entries(validInscricaoEstadualCE))('%s: %s', (_, value) => {
    expect(inscricaoEstadualCE.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualCE))('%s: %s', (_, value) => {
    expect(inscricaoEstadualCE.test(value)).toBe(false);
  });
});
