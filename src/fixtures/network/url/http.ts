/** Valid HTTP URLs */
export const validUrlHttp = {
  /** Simple */
  simple: 'http://example.com',
  /** All components */
  allComponents: 'http://user:pass@example.com:8080/path?q=1#frag',
  /** With path */
  withPath: 'http://example.com/path/to/page',
};

/** Invalid HTTP URLs */
export const invalidUrlHttp = {
  /** HTTPS scheme */
  https: 'https://example.com',
  /** FTP scheme */
  ftp: 'ftp://files.example.com',
  /** Missing scheme */
  noScheme: 'example.com',
};
