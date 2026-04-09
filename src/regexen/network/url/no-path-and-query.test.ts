import { describe, expect, it } from 'vitest';
import {
  invalidUrlNoPathAndQuery,
  validUrlNoPathAndQuery,
} from '../../../fixtures/network/url/no-path-and-query.ts';
import { urlNoPathAndQuery } from './no-path-and-query.ts';

describe('urlNoPathAndQuery', () => {
  it.each(Object.entries(validUrlNoPathAndQuery))('%s: %s', (_, value) => {
    expect(urlNoPathAndQuery.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlNoPathAndQuery))('%s: %s', (_, value) => {
    expect(urlNoPathAndQuery.test(value)).toBe(false);
  });
});
