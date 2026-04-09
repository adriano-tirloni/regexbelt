import { describe, expect, it } from 'vitest';
import {
  invalidProfessionalRegistration,
  validProfessionalRegistration,
} from '../../../../fixtures/countries/br/codes/professional-registration.ts';
import { professionalRegistration } from './professional-registration.ts';

describe('professionalRegistration', () => {
  it.each(Object.entries(validProfessionalRegistration))('%s: %s', (_, value) => {
    expect(professionalRegistration.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidProfessionalRegistration))('%s: %s', (_, value) => {
    expect(professionalRegistration.test(value)).toBe(false);
  });
});
