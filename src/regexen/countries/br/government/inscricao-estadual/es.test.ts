import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualES,
  validInscricaoEstadualES,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/es.ts';
import { inscricaoEstadualES } from './es.ts';

describe('inscricaoEstadualES', () => {
  it.each(Object.entries(validInscricaoEstadualES))('%s: %s', (_, value) => {
    expect(inscricaoEstadualES.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualES))('%s: %s', (_, value) => {
    expect(inscricaoEstadualES.test(value)).toBe(false);
  });
});
