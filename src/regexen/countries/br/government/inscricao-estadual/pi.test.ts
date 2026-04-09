import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualPI,
  validInscricaoEstadualPI,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/pi.ts';
import { inscricaoEstadualPI } from './pi.ts';

describe('inscricaoEstadualPI', () => {
  it.each(Object.entries(validInscricaoEstadualPI))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPI.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualPI))('%s: %s', (_, value) => {
    expect(inscricaoEstadualPI.test(value)).toBe(false);
  });
});
