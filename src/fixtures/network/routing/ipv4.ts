/** Valid IPv4 addresses */
export const validIpv4 = {
  /** Loopback */
  loopback: '127.0.0.1',
  /** All zeros */
  allZeros: '0.0.0.0',
  /** Broadcast */
  broadcast: '255.255.255.255',
  /** Private class A */
  privateClassA: '10.0.0.1',
  /** Private class C */
  privateClassC: '192.168.1.1',
  /** Single digit octets */
  singleDigit: '1.2.3.4',
  /** Mixed sizes */
  mixedSizes: '192.0.2.100',
};

/** Invalid IPv4 addresses */
export const invalidIpv4 = {
  /** Octet over 255 */
  octetOver255: '256.0.0.1',
  /** Missing octet */
  missingOctet: '192.168.1',
  /** Extra octet */
  extraOctet: '192.168.1.1.1',
  /** Alphabetic */
  alphabetic: 'abc.def.ghi.jkl',
  /** Leading zeros (ambiguous) */
  leadingZeros: '192.168.01.1',
  /** Empty */
  empty: '',
  /** IPv6 */
  ipv6: '::1',
};
