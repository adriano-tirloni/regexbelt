import { describe, expect, it } from 'vitest';
import {
  invalidUrlCommonPublic,
  validUrlCommonPublic,
} from '../../../fixtures/network/url/common-public.ts';
import { urlCommonPublic } from './common-public.ts';

describe('urlCommonPublic', () => {
  it.each(Object.entries(validUrlCommonPublic))('%s: %s', (_, value) => {
    expect(urlCommonPublic.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlCommonPublic))('%s: %s', (_, value) => {
    expect(urlCommonPublic.test(value)).toBe(false);
  });
});
