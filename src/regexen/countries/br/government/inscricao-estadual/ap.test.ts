import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualAP,
  validInscricaoEstadualAP,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ap.ts';
import { inscricaoEstadualAP } from './ap.ts';

describe('inscricaoEstadualAP', () => {
  it.each(Object.entries(validInscricaoEstadualAP))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAP.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualAP))('%s: %s', (_, value) => {
    expect(inscricaoEstadualAP.test(value)).toBe(false);
  });
});
