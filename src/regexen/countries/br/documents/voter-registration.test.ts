import { describe, expect, it } from 'vitest';
import {
  invalidVoterRegistrationFormatted,
  invalidVoterRegistrationStripped,
  validVoterRegistrationFormatted,
  validVoterRegistrationStripped,
} from '../../../../fixtures/countries/br/documents/voter-registration.ts';
import { voterRegistrationFormatted, voterRegistrationStripped } from './voter-registration.ts';

describe('voterRegistrationFormatted', () => {
  it.each(Object.entries(validVoterRegistrationFormatted))('%s: %s', (_, value) => {
    expect(voterRegistrationFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidVoterRegistrationFormatted))('%s: %s', (_, value) => {
    expect(voterRegistrationFormatted.test(value)).toBe(false);
  });
});

describe('voterRegistrationStripped', () => {
  it.each(Object.entries(validVoterRegistrationStripped))('%s: %s', (_, value) => {
    expect(voterRegistrationStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidVoterRegistrationStripped))('%s: %s', (_, value) => {
    expect(voterRegistrationStripped.test(value)).toBe(false);
  });
});
