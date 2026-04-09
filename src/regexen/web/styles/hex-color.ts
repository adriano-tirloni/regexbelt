/**
 * Matches an RGB hex color value with optional # prefix
 *
 * Supports both 3-digit and 6-digit hex notation
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '#ff0000'
 * @example ✅ '#FFF'
 * @example ✅ 'aabbcc'
 * @example ❌ '#ff00'
 * @example ❌ '#gggggg'
 */
export const hexColor = /^#?(?:[a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
