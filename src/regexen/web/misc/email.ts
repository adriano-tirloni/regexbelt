/**
 * Matches a basic email address (local part @ domain)
 *
 * Verifies the presence of @ with non-empty local and domain parts.
 * For strict RFC 5322 validation, use a dedicated email validation library.
 *
 * ___Enforces beginning and end of string___
 * @example ✅ 'user@example.com'
 * @example ✅ 'name+tag@sub.domain.org'
 * @example ❌ '@example.com'
 * @example ❌ 'user@'
 * @example ❌ 'plaintext'
 */
export const email = /^.+@.+\..+$/;
