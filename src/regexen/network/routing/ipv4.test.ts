import { describe, expect, it } from 'vitest';
import { invalidIpv4, validIpv4 } from '../../../fixtures/network/routing/ipv4.ts';
import { ipv4 } from './ipv4.ts';

describe('ipv4', () => {
  it.each(Object.entries(validIpv4))('%s: %s', (_, value) => {
    expect(ipv4.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIpv4))('%s: %s', (_, value) => {
    expect(ipv4.test(value)).toBe(false);
  });
});
