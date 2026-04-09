import { describe, expect, it } from 'vitest';
import {
  invalidBirthMarriageCertificate,
  validBirthMarriageCertificate,
} from '../../../../fixtures/countries/br/documents/birth-marriage-certificate.ts';
import { birthMarriageCertificate } from './birth-marriage-certificate.ts';

describe('birthMarriageCertificate', () => {
  it.each(Object.entries(validBirthMarriageCertificate))('%s: %s', (_, value) => {
    expect(birthMarriageCertificate.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBirthMarriageCertificate))('%s: %s', (_, value) => {
    expect(birthMarriageCertificate.test(value)).toBe(false);
  });
});
