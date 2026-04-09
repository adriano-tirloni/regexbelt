import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualRJ,
  validInscricaoEstadualRJ,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/rj.ts';
import { inscricaoEstadualRJ } from './rj.ts';

describe('inscricaoEstadualRJ', () => {
  it.each(Object.entries(validInscricaoEstadualRJ))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRJ.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualRJ))('%s: %s', (_, value) => {
    expect(inscricaoEstadualRJ.test(value)).toBe(false);
  });
});
