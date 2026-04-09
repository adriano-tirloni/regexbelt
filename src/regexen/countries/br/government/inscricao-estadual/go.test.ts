import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualGO,
  validInscricaoEstadualGO,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/go.ts';
import { inscricaoEstadualGO } from './go.ts';

describe('inscricaoEstadualGO', () => {
  it.each(Object.entries(validInscricaoEstadualGO))('%s: %s', (_, value) => {
    expect(inscricaoEstadualGO.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualGO))('%s: %s', (_, value) => {
    expect(inscricaoEstadualGO.test(value)).toBe(false);
  });
});
