import { describe, expect, it } from 'vitest';
import { invalidHexColor, validHexColor } from '../../../fixtures/web/styles/hex-color.ts';
import { hexColor } from './hex-color.ts';

describe('hexColor', () => {
  it.each(Object.entries(validHexColor))('%s: %s', (_, value) => {
    expect(hexColor.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidHexColor))('%s: %s', (_, value) => {
    expect(hexColor.test(value)).toBe(false);
  });
});
