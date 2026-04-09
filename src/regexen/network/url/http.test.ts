import { describe, expect, it } from 'vitest';
import { invalidUrlHttp, validUrlHttp } from '../../../fixtures/network/url/http.ts';
import { urlHttp } from './http.ts';

describe('urlHttp', () => {
  it.each(Object.entries(validUrlHttp))('%s: %s', (_, value) => {
    expect(urlHttp.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlHttp))('%s: %s', (_, value) => {
    expect(urlHttp.test(value)).toBe(false);
  });
});
