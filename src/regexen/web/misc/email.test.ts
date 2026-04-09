import { describe, expect, it } from 'vitest';
import { invalidEmail, validEmail } from '../../../fixtures/web/misc/email.ts';
import { email } from './email.ts';

describe('email', () => {
  it.each(Object.entries(validEmail))('%s: %s', (_, value) => {
    expect(email.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidEmail))('%s: %s', (_, value) => {
    expect(email.test(value)).toBe(false);
  });
});
