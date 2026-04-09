import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualMA,
  validInscricaoEstadualMA,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ma.ts';
import { inscricaoEstadualMA } from './ma.ts';

describe('inscricaoEstadualMA', () => {
  it.each(Object.entries(validInscricaoEstadualMA))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMA.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualMA))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMA.test(value)).toBe(false);
  });
});
