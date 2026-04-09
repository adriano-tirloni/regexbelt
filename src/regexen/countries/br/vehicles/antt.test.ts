import { describe, expect, it } from 'vitest';
import { invalidAntt, validAntt } from '../../../../fixtures/countries/br/vehicles/antt.ts';
import { antt } from './antt.ts';

describe('antt', () => {
  it.each(Object.entries(validAntt))('%s: %s', (_, value) => {
    expect(antt.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidAntt))('%s: %s', (_, value) => {
    expect(antt.test(value)).toBe(false);
  });
});
