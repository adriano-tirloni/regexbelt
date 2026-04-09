import { describe, expect, it } from 'vitest';
import {
  invalidCorreiosTracking,
  validCorreiosTracking,
} from '../../../../fixtures/countries/br/contact/correios-tracking.ts';
import { correiosTracking } from './correios-tracking.ts';

describe('correiosTracking', () => {
  it.each(Object.entries(validCorreiosTracking))('%s: %s', (_, value) => {
    expect(correiosTracking.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCorreiosTracking))('%s: %s', (_, value) => {
    expect(correiosTracking.test(value)).toBe(false);
  });
});
