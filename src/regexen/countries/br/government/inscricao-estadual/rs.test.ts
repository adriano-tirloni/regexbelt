import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualRS,
  validInscricaoEstadualRS,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/rs.ts';
import { inscricaoEstadualRS } from './rs.ts';

describe('inscricaoEstadualRS', () => {
  it.each(Object.entries(validInscricaoEstadualRS))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRS.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualRS))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRS.test(value)).toBe(false);
  });
});
