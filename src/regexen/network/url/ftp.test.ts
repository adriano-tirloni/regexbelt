import { describe, expect, it } from 'vitest';
import { invalidUrlFtp, validUrlFtp } from '../../../fixtures/network/url/ftp.ts';
import { urlFtp } from './ftp.ts';

describe('urlFtp', () => {
  it.each(Object.entries(validUrlFtp))('%s: %s', (_, value) => {
    expect(urlFtp.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlFtp))('%s: %s', (_, value) => {
    expect(urlFtp.test(value)).toBe(false);
  });
});
