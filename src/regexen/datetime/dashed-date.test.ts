import { describe, expect, it } from 'vitest';
import {
  embeddedDashedDate,
  invalidDashedDate,
  validDashedDate,
} from '../../fixtures/datetime/dashed-dates.ts';
import { dashedDate } from './dashed-date.ts';

describe('dashedDate', () => {
  it.each(Object.entries(validDashedDate))('%s: %s', (_, value) => {
    expect(dashedDate.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidDashedDate))('%s: %s', (_, value) => {
    expect(dashedDate.test(value)).toBe(false);
  });

  it.each(Object.entries(embeddedDashedDate))('rejects embedded: %s: %s', (_, value) => {
    expect(dashedDate.test(value)).toBe(false);
  });
});
