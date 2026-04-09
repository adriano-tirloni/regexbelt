import { describe, expect, it } from 'vitest';
import {
  invalidPixRandomKey,
  validPixRandomKey,
} from '../../../../fixtures/countries/br/financial/pix-random-key.ts';
import { pixRandomKey } from './pix-random-key.ts';

describe('pixRandomKey', () => {
  it.each(Object.entries(validPixRandomKey))('%s: %s', (_, value) => {
    expect(pixRandomKey.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPixRandomKey))('%s: %s', (_, value) => {
    expect(pixRandomKey.test(value)).toBe(false);
  });
});
