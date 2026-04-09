import { describe, expect, it } from 'vitest';
import {
  invalidUrlHttpsDomainOnly,
  validUrlHttpsDomainOnly,
} from '../../../fixtures/network/url/https-domain-only.ts';
import { urlHttpsDomainOnly } from './https-domain-only.ts';

describe('urlHttpsDomainOnly', () => {
  it.each(Object.entries(validUrlHttpsDomainOnly))('%s: %s', (_, value) => {
    expect(urlHttpsDomainOnly.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlHttpsDomainOnly))('%s: %s', (_, value) => {
    expect(urlHttpsDomainOnly.test(value)).toBe(false);
  });
});
