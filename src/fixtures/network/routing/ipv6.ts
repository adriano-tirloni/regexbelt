/** Valid IPv6 addresses */
export const validIpv6 = {
  /** Full address */
  full: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  /** Loopback */
  loopback: '::1',
  /** All zeros compressed */
  allZeros: '::',
  /** Link-local */
  linkLocal: 'fe80::1',
  /** Partial compression */
  partialCompression: '2001:db8::1',
  /** Embedded IPv4 */
  embeddedIpv4: '::ffff:192.168.1.1',
  /** Mixed case hex */
  mixedCase: '2001:0DB8:85A3::8A2E:0370:7334',
  /** One group compressed */
  oneGroupCompressed: '2001:db8:85a3::8a2e:370:7334',
};

/** Invalid IPv6 addresses */
export const invalidIpv6 = {
  /** Double compression */
  doubleCompression: '2001:db8::85a3::7334',
  /** IPv4 address */
  ipv4: '192.168.1.1',
  /** Too many groups */
  tooManyGroups: '2001:0db8:85a3:0000:0000:8a2e:0370:7334:extra',
  /** Invalid hex character */
  invalidHex: '2001:0db8:85a3:0000:0000:8a2e:0370:ghij',
  /** Empty */
  empty: '',
  /** Single group (not valid) */
  singleGroup: '2001',
};
