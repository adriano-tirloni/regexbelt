import { describe, expect, it } from 'vitest';
import { invalidUrlFull, validUrlFull } from '../../../fixtures/network/url/full.ts';
import { urlFull } from './full.ts';

describe('urlFull', () => {
  it.each(Object.entries(validUrlFull))('%s: %s', (_, value) => {
    expect(urlFull.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlFull))('%s: %s', (_, value) => {
    expect(urlFull.test(value)).toBe(false);
  });
});
