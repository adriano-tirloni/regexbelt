import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualTO,
  validInscricaoEstadualTO,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/to.ts';
import { inscricaoEstadualTO } from './to.ts';

describe('inscricaoEstadualTO', () => {
  it.each(Object.entries(validInscricaoEstadualTO))('%s: %s', (_, value) => {
    expect(inscricaoEstadualTO.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualTO))('%s: %s', (_, value) => {
    expect(inscricaoEstadualTO.test(value)).toBe(false);
  });
});
