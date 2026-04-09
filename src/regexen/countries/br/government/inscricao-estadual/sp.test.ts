import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualSP,
  invalidInscricaoEstadualSPRural,
  validInscricaoEstadualSP,
  validInscricaoEstadualSPRural,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/sp.ts';
import { inscricaoEstadualSP, inscricaoEstadualSPRural } from './sp.ts';

describe('inscricaoEstadualSP', () => {
  it.each(Object.entries(validInscricaoEstadualSP))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSP.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualSP))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSP.test(value)).toBe(false);
  });
});

describe('inscricaoEstadualSPRural', () => {
  it.each(Object.entries(validInscricaoEstadualSPRural))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSPRural.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualSPRural))('%s: %s', (_, value) => {
    expect(inscricaoEstadualSPRural.test(value)).toBe(false);
  });
});
