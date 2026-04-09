import { describe, expect, it } from 'vitest';
import { invalidUrlHttps, validUrlHttps } from '../../../fixtures/network/url/https.ts';
import { urlHttps } from './https.ts';

describe('urlHttps', () => {
  it.each(Object.entries(validUrlHttps))('%s: %s', (_, value) => {
    expect(urlHttps.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlHttps))('%s: %s', (_, value) => {
    expect(urlHttps.test(value)).toBe(false);
  });
});
