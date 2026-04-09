import { describe, expect, it } from 'vitest';
import {
  invalidUrlNoCredentials,
  validUrlNoCredentials,
} from '../../../fixtures/network/url/no-credentials.ts';
import { urlNoCredentials } from './no-credentials.ts';

describe('urlNoCredentials', () => {
  it.each(Object.entries(validUrlNoCredentials))('%s: %s', (_, value) => {
    expect(urlNoCredentials.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlNoCredentials))('%s: %s', (_, value) => {
    expect(urlNoCredentials.test(value)).toBe(false);
  });
});
