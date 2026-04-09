import { describe, expect, it } from 'vitest';
import { invalidIpv6, validIpv6 } from '../../../fixtures/network/routing/ipv6.ts';
import { ipv6 } from './ipv6.ts';

describe('ipv6', () => {
  it.each(Object.entries(validIpv6))('%s: %s', (_, value) => {
    expect(ipv6.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIpv6))('%s: %s', (_, value) => {
    expect(ipv6.test(value)).toBe(false);
  });
});
