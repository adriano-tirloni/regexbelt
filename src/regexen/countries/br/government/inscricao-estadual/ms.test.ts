import { describe, expect, it } from 'vitest';
import {
  invalidInscricaoEstadualMS,
  validInscricaoEstadualMS,
} from '../../../../../fixtures/countries/br/government/inscricao-estadual/ms.ts';
import { inscricaoEstadualMS } from './ms.ts';

describe('inscricaoEstadualMS', () => {
  it.each(Object.entries(validInscricaoEstadualMS))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMS.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInscricaoEstadualMS))('%s: %s', (_, value) => {
    expect(inscricaoEstadualMS.test(value)).toBe(false);
  });
});
