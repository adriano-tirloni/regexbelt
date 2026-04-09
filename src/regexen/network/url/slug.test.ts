import { describe, expect, it } from 'vitest';
import { invalidUrlSlug, validUrlSlug } from '../../../fixtures/network/url/slug.ts';
import { urlSlug } from './slug.ts';

describe('urlSlug', () => {
  it.each(Object.entries(validUrlSlug))('%s: %s', (_, value) => {
    expect(urlSlug.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlSlug))('%s: %s', (_, value) => {
    expect(urlSlug.test(value)).toBe(false);
  });
});
