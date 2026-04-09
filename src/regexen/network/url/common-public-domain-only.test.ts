import { describe, expect, it } from 'vitest';
import {
  invalidUrlCommonPublicDomainOnly,
  validUrlCommonPublicDomainOnly,
} from '../../../fixtures/network/url/common-public-domain-only.ts';
import { urlCommonPublicDomainOnly } from './common-public-domain-only.ts';

describe('urlCommonPublicDomainOnly', () => {
  it.each(Object.entries(validUrlCommonPublicDomainOnly))('%s: %s', (_, value) => {
    expect(urlCommonPublicDomainOnly.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlCommonPublicDomainOnly))('%s: %s', (_, value) => {
    expect(urlCommonPublicDomainOnly.test(value)).toBe(false);
  });
});
