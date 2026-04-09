import { describe, expect, it } from 'vitest';
import {
  invalidIsbn10,
  invalidIsbn13,
  validIsbn10,
  validIsbn13,
} from '../../../../fixtures/countries/br/codes/isbn.ts';
import { isbn10, isbn13 } from './isbn.ts';

describe('isbn13', () => {
  it.each(Object.entries(validIsbn13))('%s: %s', (_, value) => {
    expect(isbn13.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIsbn13))('%s: %s', (_, value) => {
    expect(isbn13.test(value)).toBe(false);
  });
});

describe('isbn10', () => {
  it.each(Object.entries(validIsbn10))('%s: %s', (_, value) => {
    expect(isbn10.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIsbn10))('%s: %s', (_, value) => {
    expect(isbn10.test(value)).toBe(false);
  });
});
