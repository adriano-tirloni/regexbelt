/**
 * Matches a valid IPv4 address (four octets 0-255 separated by dots)
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '192.168.1.1'
 * @example ✅ '0.0.0.0'
 * @example ✅ '255.255.255.255'
 * @example ❌ '256.0.0.1'
 * @example ❌ '192.168.1'
 */
export const ipv4 =
  /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;
