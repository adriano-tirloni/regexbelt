import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualRONew,
  invalidInscricaoEstadualROOld,
  validInscricaoEstadualRONew,
  validInscricaoEstadualROOld,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ro.ts';
import { inscricaoEstadualRONew, inscricaoEstadualROOld } from './ro.ts';

describe('inscricaoEstadualROOld', () => {
  it.each(Object.entries(validInscricaoEstadualROOld))('%s: %s', (_, value) => {
    expect(inscricaoEstadualROOld.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualROOld))('%s: %s', (_, value) => {
    expect(inscricaoEstadualROOld.test(value)).toBe(false);
  });
});

describe('inscricaoEstadualRONew', () => {
  it.each(Object.entries(validInscricaoEstadualRONew))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRONew.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualRONew))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRONew.test(value)).toBe(false);
  });
});
