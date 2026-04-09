import { describe, expect, it } from 'vitest';
import {
  embeddedDashedDate,
  invalidDashedDate,
  validDashedDate,
} from '../../fixtures/datetime/dashed-dates.ts';
import { dashedDateLoose } from './dashed-date-loose.ts';

describe('dashedDateLoose', () => {
  it.each(Object.entries(validDashedDate))('%s: %s', (_, value) => {
    expect(dashedDateLoose.test(value)).toBe(true);
  });

  it.each(Object.entries(embeddedDashedDate))('matches embedded: %s: %s', (_, value) => {
    expect(dashedDateLoose.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidDashedDate))('%s: %s', (_, value) => {
    expect(dashedDateLoose.test(value)).toBe(false);
  });
});
