/**
 * Matches a Brazilian PIX random key in UUID v4 lowercase format
 * xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '123e4567-e89b-12d3-a456-426614174000'
 * @example ❌ '123E4567-E89B-12D3-A456-426614174000'
 */
export const pixRandomKey = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/;
