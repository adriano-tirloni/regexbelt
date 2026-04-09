import { describe, expect, it } from 'vitest';
import { invalidUrlNoPort, validUrlNoPort } from '../../../fixtures/network/url/no-port.ts';
import { urlNoPort } from './no-port.ts';

describe('urlNoPort', () => {
  it.each(Object.entries(validUrlNoPort))('%s: %s', (_, value) => {
    expect(urlNoPort.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidUrlNoPort))('%s: %s', (_, value) => {
    expect(urlNoPort.test(value)).toBe(false);
  });
});
