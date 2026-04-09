import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualBA8,
  invalidInscricaoEstadualBA9,
  validInscricaoEstadualBA8,
  validInscricaoEstadualBA9,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ba.ts';
import { inscricaoEstadualBA8, inscricaoEstadualBA9 } from './ba.ts';

describe('inscricaoEstadualBA9', () => {
  it.each(Object.entries(validInscricaoEstadualBA9))('%s: %s', (_, value) => {
    expect(inscricaoEstadualBA9.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualBA9))('%s: %s', (_, value) => {
    expect(inscricaoEstadualBA9.test(value)).toBe(false);
  });
});

describe('inscricaoEstadualBA8', () => {
  it.each(Object.entries(validInscricaoEstadualBA8))('%s: %s', (_, value) => {
    expect(inscricaoEstadualBA8.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualBA8))('%s: %s', (_, value) => {
    expect(inscricaoEstadualBA8.test(value)).toBe(false);
  });
});
